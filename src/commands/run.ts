import { Command, Flags } from "@oclif/core";
import { AxiosError } from "axios";
import { Collection, createPostmanClient, Environment } from "../postman/collections.client";
const newman = require('newman'); // require newman in your project

export default class World extends Command {
  static description = 'Execute postman cloud collection via newman'

  static examples = [
    `$ oex newmannium run -c test.postman_collection.json
`,
  ]

  static flags = {
    help: Flags.help({ char: 'h' }),
    collection: Flags.string({
      char: 'c', description: 'name of collection in postman cloud to run', required: true
    }),
    environment: Flags.string({
      char: 'e', description: 'name of environment to use with collection', required: false
    }),
  }

  static args = []

  async run(): Promise<void> {
    const { flags } = await this.parse(World)
    const collectionName = flags.collection;

    const apiKey: string | undefined = process.env.POSTMAN_API_KEY

    if (!apiKey) {
      this.log('POSTMAN_API_KEY not set. You can generate one here: https://go.postman.co/settings/me/api-keys')
      return
    }

    try {
      const postmanClient = createPostmanClient(apiKey);

      const collections: Collection[] = await postmanClient.getCollections();
      const collection: Collection | undefined = collections.find(collection => collection.name === collectionName)

      let environmentToUse: Environment | undefined = undefined;

      if (flags.environment) {
        const environments: Environment[] = await postmanClient.getEnvironments()
        const environment: Environment | undefined = environments.find(environment => environment.name === flags.environment)
        if (!environment) {
          this.log(`Environment ${flags.environment} does not exist`);
          return;
        }

        environmentToUse = environment;
      }

      if (collection) {

        await executeCollection(collection.id, apiKey, environmentToUse);
      } else {
        this.log(`Connection ${flags.collection} not found!`)
      }

    }
    catch (error) {
      const err = error as AxiosError

      if (err.response) {
        if (err.response.status === 401) {
          this.log('POSTMAN_API_KEY is invalid, pleasure ensure this value is set with a valid Postman API Key')
          return
        }
      }
    }

    this.log('There was an error executing the newmannium script');
  }
}

function executeCollection(collectionId: string, apiKey: string, environment?: Environment): Promise<void> {

  return new Promise(function (resolve, reject) {
    const url = `https://api.getpostman.com/collections/${collectionId}?apikey=${apiKey}`;

    const newmanParams: { collection: string, reporters: string, environment?: string } = {
      collection: url,
      reporters: 'cli'
    };

    if (environment) {

      const envUrl = `https://api.getpostman.com/environments/${environment.id}?apikey=${apiKey}`;
      newmanParams['environment'] = envUrl
    }

    newman.run(newmanParams, function (err: Error, summary: any) {

      if (err) {
        return reject(err)
      }
      if (summary.run.failures.length) {
        process.exit(1);
      }

      return resolve()
    });
  })

}

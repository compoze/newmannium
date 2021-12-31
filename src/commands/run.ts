import { Command, Flags } from "@oclif/core";
import { Collection, createPostmanClient } from "../postman/collections.client";
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
  }

  static args = []

  async run(): Promise<void> {
    const { flags } = await this.parse(World)
    const collectionName = flags.collection;

    const apiKey: string | undefined = process.env.POSTMAN_API_KEY

    if (!apiKey) {
      this.log('POSTMAN_API_KEY not set. You can generate one here: https://lively-eclipse-481148.postman.co/settings/me/api-keys?')
      return
    }

    const postmanClient = createPostmanClient(apiKey);

    const collections: Collection[] = await postmanClient.getCollections();

    const collection: Collection | undefined = collections.find(collection => collection.name === collectionName)

    if (collection) {
      
      await executeCollection(collection.id, apiKey);
    } else {
      this.log(`Connection ${flags.collection} not found!`)
    }

  }
}

function executeCollection(collectionId: string, apiKey: string): Promise<void> {

  return new Promise(function (resolve, reject) {
    const url = `https://api.getpostman.com/collections/${collectionId}?apikey=${apiKey}`;
    newman.run({
      collection: url,
      reporters: 'cli'
    }, function (err: Error) {

      if (err) { return reject(err) }

      return resolve()
    });
  })

}

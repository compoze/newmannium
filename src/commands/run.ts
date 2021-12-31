import { Command, Flags } from "@oclif/core";
import { Collection, postmanClient } from "../postman/collections.client";

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

    const collections: Collection[] = await postmanClient.getCollections();

    const collection: Collection | undefined = collections.find(collection => collection.name === collectionName)

    if (collection) {
      await newman.run({
        collection: collection,
        reporters: 'cli'
      });
      this.log('successfully completed postman')
    } else {
      this.log(`Connection ${flags.collection} not found!`)
    }

  }
}

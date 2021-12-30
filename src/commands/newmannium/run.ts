import { Command, Flags } from "@oclif/core";

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
      char: 'c', description: 'postman collection path', required: true
    }),
  }

  static args = []

  async run(): Promise<void> {
    const { flags } = await this.parse(World)

    await newman.run({
      collection: flags.collection,
      reporters: 'cli'
    });
    this.log('successfully completed postman')
  }
}

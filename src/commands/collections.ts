import { Command, Flags } from "@oclif/core";
import { postmanClient } from "../postman/collections.client";

export default class Collections extends Command {
    static description = 'List all collections user has access to'

    static examples = [
        `$ oex newmannium collections
  `,
    ]

    static flags = {
        help: Flags.help({ char: 'h' }),
    }

    static args = []

    async run(): Promise<void> {
        const collections = await postmanClient.getCollections();

        const collectsString = collections.map(collection => `${collection.name}`).join(' | ')
        this.log(`| ${collectsString} |`)
    }
}
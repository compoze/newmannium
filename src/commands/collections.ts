import { Command, Flags } from "@oclif/core";
import { createPostmanClient } from "../postman/collections.client";

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
        const apiKey: string | undefined = process.env.POSTMAN_API_KEY

        if (!apiKey) {
            this.log('POSTMAN_API_KEY not set. You can generate one here: https://lively-eclipse-481148.postman.co/settings/me/api-keys?')
            return
        }

        const postmanClient = createPostmanClient(apiKey);
        const collections = await postmanClient.getCollections();

        const collectsString = collections.map(collection => `${collection.name}`).join(' | ')
        this.log(`| ${collectsString} |`)
    }
}
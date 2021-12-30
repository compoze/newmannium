import axios from "axios";

interface Collection {
    id: string;
    name: string;
    owner: string;
    createdAt: Date;
    updatedAt: Date;
    uid: string;
    isPublic: boolean;
}

interface GetAllCollectionsResponse {
    collections: Collection[];
}

const BASE_URI = "https://api.getpostman.com"
class PostmanClient {

    private readonly _apiKey: string;

    constructor() {
        this._apiKey = process.env.POSTMAN_API_KEY!
    }

    getCollections = async (): Promise<Collection[]> => {
        const result = await axios.get<GetAllCollectionsResponse>(`${BASE_URI}/collections`, {
            headers: {
                "x-api-key": this._apiKey
            }
        });
        return result.data.collections
    }

}

const createPostmanClient = (): PostmanClient => {
    return new PostmanClient();
}

const postmanClient = createPostmanClient();

export { PostmanClient, postmanClient }
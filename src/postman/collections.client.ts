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

interface Environment {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    owner: string;
    uid: string;
    isPublic: boolean;
}

interface GetEnvironmentsResponse {
    environments: Environment[];
}

const BASE_URI = "https://api.getpostman.com"
class PostmanClient {

    private readonly _apiKey: string;

    constructor(apiKey: string) {
        this._apiKey = apiKey;
    }

    getCollections = async (): Promise<Collection[]> => {
        const result = await axios.get<GetAllCollectionsResponse>(`${BASE_URI}/collections`, {
            headers: {
                "x-api-key": this._apiKey
            }
        });
        return result.data.collections
    }

    getCollection = async (id: string): Promise<any> => {
        const result = await axios.get<GetAllCollectionsResponse>(`${BASE_URI}/collections/${id}`, {
            headers: {
                "x-api-key": this._apiKey
            }
        });

        return result.data
    }

    getEnvironments = async (): Promise<Environment[]> => {
        const result = await axios.get<GetEnvironmentsResponse>(`${BASE_URI}/environments`, {
            headers: {
                "x-api-key": this._apiKey
            }
        });

        return result.data.environments
    }

}

const createPostmanClient = (apiKey: string): PostmanClient => {
    return new PostmanClient(apiKey);
}

export { PostmanClient, createPostmanClient, Collection, Environment }
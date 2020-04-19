export class ApiManager {

    public static getInstance(): ApiManager {
        if (!ApiManager.myInstance) {
            ApiManager.myInstance = new ApiManager();
        }

        return this.myInstance;
    }
    private static myInstance: ApiManager;
    private baseUrl: string = "https://localhost:44354";

    public async get(url: string): Promise<Response> {
        return await fetch(`${this.baseUrl}/${url}`,
            {
                headers: {
                    "Content-Type": "application/json",
                }, method: "get",
            });
    }

    public async post(url: string, body: string): Promise<Response> {
        return await fetch(`${this.baseUrl}/${url}`, {
            headers: {
                "Content-Type": "application/json",
            }, method: "post",

            body,
        });
    }
}

export default ApiManager;

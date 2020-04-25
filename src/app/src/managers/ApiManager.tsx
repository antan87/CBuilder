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
                method: "GET",
                headers: {
                    "Access-Control-Allow-Origin": "https://localhost:44354",
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                }
            });
    }

    public async post(url: string, body: string): Promise<Response> {
        return await fetch(`${this.baseUrl}/${url}`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body,
        });
    }
}

export default ApiManager;

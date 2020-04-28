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
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "https://localhost:44354",
                    "Content-Type": "application/json",
                },
                method: "GET",
            });
    }

    public async post(url: string, body: string): Promise<Response> {
        return await fetch(`${this.baseUrl}/${url}`, {
            body,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "POST",
        });
    }
}

export default ApiManager;

import {GoogleProfile, GoogleProviderSettings} from "./@types/Google";
import axios from "axios";

class GitHubProvider {

    public settings: GoogleProviderSettings;
    
    constructor(settings: GoogleProviderSettings) {
        this.settings = settings;
    }

    getAuthUri(): string {
        return `https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=${this.settings.clientId}&redirect_uri=${this.settings.redirectUri}&scope=${this.settings.scopes.join('%20')}`;
    }

    async getAccessToken(code: string) {
        try {
            const response = await axios.post("https://oauth2.googleapis.com/token", {
                    grant_type: "authorization_code",
                    client_id: this.settings.clientId,
                    client_secret: this.settings.clientSecret,
                    redirect_uri: this.settings.redirectUri,
                    code
            });

            return response.data.access_token;
        } catch(e) {
            throw new Error("Failed to get access token");
        }
    }

    async getProfile(accessToken: string): Promise<GoogleProfile> {
        if(!this.settings.scopes.includes("profile")) {
            throw new Error("'user' scope is required to get user profile");
        }

        try {
            const response = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${accessToken}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });

            return {
                id: response.data.id,
                email: response.data.email,
                verified_email: response.data.verified_email,
                name: response.data.name,
                given_name: response.data.given_name,
                family_name: response.data.family_name,
                picture: response.data.picture
            };
        } catch(e) {
            throw new Error("Failed to get profile");
        }
    }
}

export default GitHubProvider;
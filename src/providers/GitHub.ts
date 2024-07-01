import {GitHubEmail, GitHubProfile, GitHubProviderSettings} from "./@types/GitHub";
import axios from "axios";

class GitHubProvider {

    public settings: GitHubProviderSettings;
    
    constructor(settings: GitHubProviderSettings) {
        this.settings = settings;
    }

    getAuthUri(): string {
        let uri = `https://github.com/login/oauth/authorize?client_id=${this.settings.clientId}&redirect_uri=${this.settings.redirectUri}&scope=${this.settings.scopes.join('%20')}&allow_signup=${this.settings.allowSignup ? "true" : "false"}`;
        if(this.settings.login) uri += `&login=${this.settings.login}`;
        return uri;
    }

    async getAccessToken(code: string) {
        const response = await axios.post("https://github.com/login/oauth/access_token", {
                client_id: this.settings.clientId,
                client_secret: this.settings.clientSecret,
                redirect_uri: this.settings.redirectUri,
                code
        }, {
            headers: {
                Accept: 'application/json'
            }
        });

        return response.data.access_token;
    }

    async getProfile(accessToken: string): Promise<GitHubProfile> {
        if(!this.settings.scopes.includes("user")) {
            throw new Error("'user' scope is required to get user profile");
        }

        try {
            const response = await axios.get("https://api.github.com/user", {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
    
            return {
                login: response.data.login,
                id: response.data.id,
                avatar_url: response.data.avatar_url,
                gravatar_id: response.data.gravatar_id,
                name: response.data.name,
                company: response.data.company,
                blog: response.data.blog,
                location: response.data.location,
                email: response.data.email,
                hireable: response.data.hireable,
                bio: response.data.bio,
                twitter_username: response.data.twitter_username
            };
        } catch(e) {
            throw new Error("Failed to get profile");
        }
    }

    async getEmails(accessToken: string): Promise<GitHubEmail[]> {
        
        if(!this.settings.scopes.includes("email")) {
            throw new Error("'email' scope is required to get user emails");
        }

        try {
            const response = await axios.get("https://api.github.com/user/emails", {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
        
            return response.data.map((email: any) => {
                return {
                    email: email.email,
                    primary: email.primary,
                    verified: email.verified,
                    visibility: email.visibility
                };
            });
        } catch(e) {
            throw new Error("Failed to get emails");
        }
    }

    async getPrimaryEmail(accessToken: string): Promise<GitHubEmail> {

        if(!this.settings.scopes.includes("email")) {
            throw new Error("'email' scope is required to get user primary email");
        }

        try {
            const response = await axios.get("https://api.github.com/user/emails", {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
    
            const email = response.data.find((email: any) => email.primary);
    
            return {
                email: email.email,
                primary: email.primary,
                verified: email.verified,
                visibility: email.visibility
            };
        } catch(e) {
            throw new Error("Failed to get primary email");
        }
    }
}

export default GitHubProvider;
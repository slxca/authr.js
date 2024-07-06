import {TwitchProfile, TwitchProviderSettings} from "./@types/Twitch";
import axios from "axios";

export default class TwitchProvider {

    public settings: TwitchProviderSettings;
    
    constructor(settings: TwitchProviderSettings) {
        this.settings = settings;
    }

    /**
     * Returns the authorization URI for Twitch OAuth2.
     * 
     * @returns The authorization URI.
     */
    getAuthUri(): string {
        return `https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${this.settings.clientId}&redirect_uri=${this.settings.redirectUri}&scope=${this.settings.scopes.join('%20')}`;
    }

    /**
     * Retrieves the Twitch profile information using the provided access token.
     * @param accessToken - The access token for authentication.
     * @returns A promise that resolves to the Twitch profile information.
     * @throws An error if failed to get the profile.
     */
    async getProfile(accessToken: string): Promise<TwitchProfile> {
    
        try {
            const response = await axios.get("https://api.twitch.tv/helix/users", {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Client-Id": this.settings.clientId,
                }
            });
    
            return {
                id: response.data.data.id,
                login: response.data.data.login,
                display_name: response.data.data.display_name,
                type: response.data.data.type,
                broadcaster_type: response.data.data.broadcaster_type,
                description: response.data.data.description,
                profile_image_url: response.data.data.profile_image_url,
                offline_image_url: response.data.data.offline_image_url,
                view_count: response.data.data.view_count,
                email: response.data.data.email,
                created_at: response.data.data.created_at
            };
        } catch(e) {
            throw new Error("Failed to get profile");
        }
    }
}
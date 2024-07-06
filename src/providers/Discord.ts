import {DiscordProfile, DiscordProviderSettings} from "./@types/Discord";
import axios from "axios";

export default class DiscordProvider {

    public settings: DiscordProviderSettings;
    
    constructor(settings: DiscordProviderSettings) {
        this.settings = settings;
    }

    /**
     * Returns the authorization URI for Discord OAuth2.
     * 
     * @returns The authorization URI.
     */
    getAuthUri(): string {
        return `https://discord.com/oauth2/authorize?response_type=code&client_id=${this.settings.clientId}&redirect_uri=${this.settings.redirectUri}&scope=${this.settings.scopes.join('%20')}`;
    }

    /**
     * Retrieves an access token from Discord API using the provided authorization code.
     * @param code - The authorization code obtained from the user.
     * @returns The access token.
     */
    async getAccessToken(code: string) {
        const response = await axios.post("https://discord.com/api/oauth2/token", {
                client_id: this.settings.clientId,
                client_secret: this.settings.clientSecret,
                grant_type: 'authorization_code',
                redirect_uri: this.settings.redirectUri,
                code: code,
                scope: this.settings.scopes.join(' ')
        }, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });

        return response.data.access_token;
    }

    /**
     * Retrieves the Discord profile information using the provided access token.
     * @param accessToken - The access token for authentication.
     * @returns A promise that resolves to the Discord profile information.
     * @throws An error if failed to get the profile.
     */
    async getProfile(accessToken: string): Promise<DiscordProfile> {
    
        try {
            const response = await axios.get("https://discord.com/api/users/@me", {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
    
            return {
                id: response.data.id,
                username: response.data.username,
                avatar: response.data.avatar,
                discriminator: response.data.discriminator,
                public_flags: response.data.public_flags,
                flags: response.data.flags,
                banner: response.data.banner,
                accent_color: response.data.accent_color,
                global_name: response.data.global_name,
                avatar_decoration_data: response.data.avatar_decoration_data,
                banner_color: response.data.banner_color,
                clan: response.data.clan,
                mfa_enabled: response.data.mfa_enabled,
                locale: response.data.locale,
                email: response.data.email,
                premium_type: response.data.premium_type
            };
        } catch(e) {
            throw new Error("Failed to get profile");
        }
    }
}
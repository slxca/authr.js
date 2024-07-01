export type DiscordProviderSettings = {
    clientId: string;
    clientSecret: string;
    redirectUri: string;
    scopes: string[];
}

export type DiscordProfile = {
    id: string;
    username: string;
    avatar: string;
    discriminator: string;
    public_flags: number;
    flags: number;
    banner: string;
    accent_color: number;
    global_name: string;
    avatar_decoration_data: string;
    banner_color: string;
    clan: string;
    mfa_enabled: boolean;
    locale: string;
    email: string;
    premium_type: number;
}
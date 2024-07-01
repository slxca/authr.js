export type GitHubProviderSettings = {
    clientId: string;
    clientSecret: string;
    redirectUri: string;
    scopes: string[];
    login?: string;
    allowSignup?: boolean;
}

export type GitHubProfile = {
    login: string;
    id: number;
    avatar_url: string;
    gravatar_id: string;
    name: string;
    company: string;
    blog: string;
    location: string;
    email: string;
    hireable: boolean;
    bio: string;
    twitter_username: string;
}

export type GitHubEmail = {
    email: string;
    primary: boolean;
    verified: boolean;
    visibility: string;
}
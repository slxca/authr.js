export type GoogleProviderSettings = {
    clientId: string;
    clientSecret: string;
    redirectUri: string;
    scopes: string[];
}

export type GoogleProfile = {
    id: number;
    email: string;
    verified_email: boolean;
    name: string;
    given_name: string;
    family_name: string;
    picture: string;
}
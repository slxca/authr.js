export type DiscordProviderSettings = {
    clientId: string;
    clientSecret: string;
    redirectUri: string;
    scopes: DiscordScopes[];
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

export enum DiscordScopes {

    /** allows your app to fetch data from a user's "Now Playing/Recently Played" list — not currently available for apps */
    ActivitiesRead = 'activities.read',

    /** allows your app to update a user's activity - not currently available for apps (NOT REQUIRED FOR GAMESDK ACTIVITY MANAGER) */
    ActivitiesWrite = 'activities.write',

    /** allows your app to upload/update builds for a user's applications - requires Discord approval */
    ApplicationsBuildsRead = 'applications.builds.read',

    /** allows your app to upload/update builds for a user's applications - requires Discord approval */
    ApplicationsBuildsUpload = 'applications.builds.upload',

    /** allows your app to add commands to a guild - included by default with the bot scope */
    ApplicationsCommands = 'applications.commands',

    /** allows your app to update its commands using a Bearer token - client credentials grant only */
    ApplicationsCommandsUpdate = 'applications.commands.update',

    /** allows your app to update permissions for its commands in a guild a user has permissions to */
    ApplicationsCommandsPermissionsUpdate = 'applications.commands.permissions.update',

    /** allows your app to read entitlements for a user's applications */
    ApplicationsEntitlements = 'applications.entitlements',

    /** allows your app to read and update store data (SKUs, store listings, achievements, etc.) for a user's applications */
    ApplicationsStoreUpdate = 'applications.store.update',

    /** for oauth2 bots, this puts the bot in the user's selected guild by default */
    Bot = 'bot',

    /** allows /users/@me/connections to return linked third-party accounts */
    Connections = 'connections',

    /** allows your app to see information about the user's DMs and group DMs - requires Discord approval */
    DmChannelsRead = 'dm.channels.read',

    /** enables /users/@me to return an email */
    Email = 'email',

    /** allows your app to join users to a group dm */
    GdmJoin = 'gdm.join',

    /** allows /users/@me/guilds to return basic information about all of a user's guilds */
    Guilds = 'guilds',

    /** allows /guilds/{guild.id}/members/{user.id} to be used for joining users to a guild */
    GuildsJoin = 'guilds.join',

    /** allows /users/@me/guilds/{guild.id}/member to return a user's member information in a guild */
    GuildsJoin = 'guilds.join',

    /** allows /users/@me without email */
    Identify = 'identify',

    /** for local rpc server api access, this allows you to read messages from all client channels (otherwise restricted to channels/guilds your app creates) */
    MessagesRead = 'messages.read',
    
    /** allows your app to know a user's friends and implicit relationships - requires Discord approval */
    RelationshipsRead = 'relationships.read',

    /** allows your app to update a user's connection and metadata for the app */
    RoleConnectionsWrite = 'role_connections.write',

    /** for local rpc server access, this allows you to control a user's local Discord client - requires Discord approval */
    Rpc = 'rpc',

    /** for local rpc server access, this allows you to update a user's activity - requires Discord approval */
    RpcActivitiesWrite = 'rpc.activities.write',

    /** for local rpc server access, this allows you to receive notifications pushed out to the user - requires Discord approval */
    RpcNotificationsRead = 'rpc.notifications.read',

    /** for local rpc server access, this allows you to read a user's voice settings and listen for voice events - requires Discord approval */
    RpcVoiceRead = 'rpc.voice.read',

    /** for local rpc server access, this allows you to update a user's voice settings - requires Discord approval */
    RpcVoiceWrite = 'rpc.voice.write',

    /** allows your app to connect to voice on user's behalf and see all the voice members - requires Discord approval */
    Voice = 'voice',

    /** this generates a webhook that is returned in the oauth token response for authorization code grants */
    WebhookIncoming = 'webhook.incoming',

}
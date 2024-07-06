export type TwitchProviderSettings = {
    clientId: string;
    clientSecret: string;
    forceVerify?: boolean;
    redirectUri: string;
    scopes: TwitchScopes[] | string[];
}

export type TwitchProfile = {
    id: string;
    login: string;
    display_name: string;
    type: string;
    broadcaster_type: string;
    description: string;
    profile_image_url: string;
    offline_image_url: string;
    view_count: number;
    email: string;
    created_at: string;
}

/**
 * Enum representing the different scopes available for Twitch API access.
 * @see https://dev.twitch.tv/docs/authentication/scopes/
 */
export enum TwitchScopes {

    /** View analytics data for the Twitch Extensions owned by the authenticated account. */
    AnalyticsReadExtensions = "analytics:read:extensions",

    /** View analytics data for the games owned by the authenticated account. */
    AnalyticsReadGames = "analytics:read:games",

    /** View Bits information for the channel. */
    BitsRead = "bits:read",

    /** Manage ads schedule on a channel. */
    ChannelManageAds = "channel:manage:ads",

    /** Read the ads schedule and details on your channel. */
    ChannelReadAds = "channel:read:ads",

    /** Manage a channel’s broadcast configuration, including updating channel configuration and managing stream markers and stream tags. */
    ChannelManageBroadcast = "channel:manage:broadcast",

    /** Read charity campaign details and user donations on your channel. */
    ChannelReadCharity = "channel:read:charity",

    /** Run commercials on a channel. */
    ChannelEditCommercial = "channel:edit:commercial",

    /** View a list of users with the editor role for a channel. */
    ChannelReadEditors = "channel:read:editors",

    /** Manage a channel’s Extension configuration, including activating Extensions. */
    ChannelManageExtensions = "channel:manage:extensions",

    /** View Creator Goals for a channel. */
    ChannelReadGoals = "channel:read:goals",

    /** Read Guest Star details for your channel. */
    ChannelReadGuestStar = "channel:read:guest_star",

    /** Manage Guest Star for your channel. */
    ChannelManageGuestStar = "channel:manage:guest_star",

    /** View Hype Train information for a channel. */
    ChannelReadHypeTrain = "channel:read:hype_train",

    /** Add or remove the moderator role from users in your channel. */
    ChannelManageModerators = "channel:manage:moderators",

    /** View a channel’s polls. */
    ChannelReadPolls = "channel:read:polls",

    /** Manage a channel’s polls. */
    ChannelManagePolls = "channel:manage:polls",

    /** View a channel’s Channel Points Predictions. */
    ChannelReadPredictions = "channel:read:predictions",

    /** Manage of channel’s Channel Points Predictions */
    ChannelManagePredictions = "channel:manage:predictions",

    /** Manage a channel raiding another channel. */
    ChannelManageRaids = "channel:manage:raids",

    /** View Channel Points custom rewards and their redemptions on a channel. */
    ChannelReadRedemptions = "channel:read:redemptions",

    /** Manage Channel Points custom rewards and their redemptions on a channel. */
    ChannelManageRedemptions = "channel:manage:redemptions",

    /** Manage a channel’s stream schedule. */
    ChannelManageSchedule = "channel:manage:schedule",

    /** View an authorized user’s stream key. */
    ChannelReadStreamKey = "channel:read:stream_key",

    /** View a list of all subscribers to a channel and check if a user is subscribed to a channel. */
    ChannelReadSubscriptions = "channel:read:subscriptions",

    /** Manage a channel’s videos, including deleting videos. */
    ChannelManageVideos = "channel:manage:videos",

    /** Read the list of VIPs in your channel. */
    ChannelReadVips = "channel:read:vips",

    /** Add or remove the VIP role from users in your channel. */
    ChannelManageVips = "channel:manage:vips",

    /** Manage Clips for a channel. */
    ClipsEdit = "clips:edit",

    /** View a channel’s moderation data including Moderators, Bans, Timeouts, and Automod settings. */
    ModerationRead = "moderation:read",

    /** Send announcements in channels where you have the moderator role. */
    ModeratorManageAnnoucements = "moderator:manage:announcements",

    /** Manage messages held for review by AutoMod in channels where you are a moderator. */
    ModeratorManageAutoMod = "moderator:manage:automod",

    /** View a broadcaster’s AutoMod settings. */
    ModeratorReadAutoMod = "moderator:read:automod",

    /** Manage a broadcaster’s AutoMod settings. */
    ModeratorManageAutoMod = "moderator:manage:automod",

    /** Ban and unban users. */
    ModeratorManageBannedUsers = "moderator:manage:banned_users",

    /** View a broadcaster’s list of blocked terms. */
    ModeratorReadBlockedTerms = "modeator:read:blocked_terms",

    /** Manage a broadcaster’s list of blocked terms. */
    ModeratorManageBlockedTerms = "moderator:manage:blocked_terms",

    /** Delete chat messages in channels where you have the moderator role */
    ModeratorManageChatMessages = "moderator:manage:chat_messages",

    /** View a broadcaster’s chat room settings. */
    ModeratorReadChatSettings = "moderator:read:chat_settings",

    /** Manage a broadcaster’s chat room settings. */
    ModeratorManageChatSettings = "moderator:manage:chat_settings",

    /** View the chatters in a broadcaster’s chat room. */
    ModeratorReadChatters = "moderator:read:chatters",

    /** Read the followers of a broadcaster. */
    ModeratorReadFollows = "moderator:read:follows",

    /** Read Guest Star details for channels where you are a Guest Star moderator. */
    ModeratorReadGuestStar = "moderator:read:guest_star",

    /** Manage Guest Star for channels where you are a Guest Star moderator. */
    ModeratorManageGuestStar = "moderator:manage:guest_star",

    /** View a broadcaster’s Shield Mode status. */
    ModeratorReadShieldMode = "moderator:read:shield_mode",

    /** Manage a broadcaster’s Shield Mode status. */
    ModeratorManageShieldMode = "moderator:manage:shield_mode",

    /** View a broadcaster’s shoutouts. */
    ModeratorReadShoutouts = "moderator:read:shoutouts",

    /** Manage a broadcaster’s shoutouts. */
    ModeratorManageShoutouts = "moderator:manage:shoutouts",

    /** View a broadcaster’s unban requests. */
    ModeratorReadUnbanRequests = "moderator:read:unban_requests",

    /** Manage a broadcaster’s unban requests. */
    ModeratorManageUnbanRequests = "moderator:manage:unban_requests",

    /** Manage a user object. */
    UserEdit = "user:edit",

    /** @deprecated Was previously used for “Create User Follows” and “Delete User Follows. */
    UserEditFollows = "user:edit:follows",

    /** View the block list of a user. */
    UserReadBlockList = "user:read:blocked_users",

    /** Manage the block list of a user. */
    UserManageBlockList = "user:manage:blocked_users",

    /** View a user’s broadcasting configuration, including Extension configurations. */
    UserReadBroadcast = "user:read:broadcast",

    /** Update the color used for the user’s name in chat. */
    UserManageChatColor = "user:manage:chat_color",

    /** View a user’s email address. */
    UserReadEmail = "user:read:email",

    /** View emotes available to a user */
    UserReadEmotes = "user:read:emotes",

    /** View the list of channels a user follows. */
    UserReadFollows = "user:read:follows",

    /** Read the list of channels you have moderator privileges in. */
    UserReadModeratedChannels = "user:read:moderated_channels",

    /** View if an authorized user is subscribed to specific channels. */
    UserReadSubscriptions = "user:read:subscriptions",

    /** Read whispers that you send and receive, and send whispers on your behalf. */
    UserReadWhispers = "user:read:whispers"
}
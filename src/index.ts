import DiscordProvider from "./providers/Discord";
import GitHubProvider from "./providers/GitHub";
import GoogleProvider from "./providers/Google";
import TwitchProvider from "./providers/Twitch";    

import { DiscordScopes } from "./providers/@types/Discord";
import { GitHubScopes } from "./providers/@types/GitHub";
import { TwitchScopes } from "./providers/@types/Twitch";

export { 
    DiscordProvider, 
    GitHubProvider, 
    GoogleProvider, 
    TwitchProvider, 
    
    DiscordScopes,
    GitHubScopes, 
    TwitchScopes 
};
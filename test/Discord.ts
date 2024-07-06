import { DiscordProvider } from "../src";
import { DiscordScopes } from "../src/providers/@types/Discord";

const enum = DiscordScopes.RpcVoiceRead;

const discordProvider = new DiscordProvider({
    token: "YOUR_DISCORD

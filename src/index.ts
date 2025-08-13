import { Client, Events } from "discord.js";
import { deployCommands } from "./deploy-commands";
import { commands } from "./commands";
import { config } from "./config";

const client = new Client({
    intents: ["DirectMessages", "GuildMessages", "Guilds"],
});

client.once(Events.ClientReady, () => {
    console.log("MCSMPStatsBot is now ready!")
});

client.on(Events.GuildCreate, async (guild) => {
    await deployCommands({guildId: guild.id});
});

client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isCommand) {
        return;
    }

    const {commandName} = interaction;

    if (commands[commandName as keyof typeof commands]) {
        commands[commandName as keyof typeof commands].execute(interaction);
    }
});

client.login(config.DISCORD_TOKEN)
import { CommandInteraction, SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("ping")
  .setDescription("a test command.");

export async function execute(interaction: CommandInteraction) {
  const ping: number = Date.now() - interaction.createdTimestamp;
  return interaction.reply(`Pong! Latency: ${ping}`);
}

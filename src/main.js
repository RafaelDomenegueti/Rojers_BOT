import 'reflect-metadata';
import 'express-async-errors';
import { DISCORD_TOKEN } from "./utils/constraints.js";
import { router } from "./app.js";
import discord from "discord.js";

const bot = new discord.Client();

// Auth
bot.login(DISCORD_TOKEN);

// Listeners
bot.on("ready", () => {
  console.log("Estou On-line");
});

bot.on("message", async (msg) => {
  try {
    // Receive message
    await router(msg);
  } catch (error) {
    console.log(error);
  }
});

export default bot;

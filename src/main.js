import { router } from "./app.js";
import discord from "discord.js";

const bot = new discord.Client();

// Auth
bot.login("ODIxNTA4MTk1MDkxNzQyNzQw.YFEvIA.BDNZz2zrg0QBkZ9KV8SVALezW_4");

// Listeners
bot.on("ready", () => {
  console.log("Estou On-line");
});

bot.on("message", async (msg) => {
  // Receive message
  await router(msg);
});

export default bot;
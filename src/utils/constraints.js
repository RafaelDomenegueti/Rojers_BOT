import discord from "discord.js";
import * as dotenv from "dotenv";
dotenv.config();

// ENV
export const DISCORD_TOKEN = process.env.DISCORD_TOKEN;

// Discord Images
export const katiauImage = new discord.MessageAttachment(
  "./src/assets/images/katiau.png"
);
export const rojersImage = new discord.MessageAttachment(
  "./src/assets/images/rojers.png"
);
export const ugaImage = new discord.MessageAttachment(
  "./src/assets/images/uga.jpg"
);
export const veetorImage = new discord.MessageAttachment(
  "./src/assets/images/veetor.gif"
);
export const cuteImage = new discord.MessageAttachment(
  "./src/assets/images/cute.gif"
);
export const sasaImage = new discord.MessageAttachment(
  "./src/assets/images/sasa.jpg"
);
export const julhoImage = new discord.MessageAttachment(
  "./src/assets/images/julho.png"
);

export const languages = [
  "ar",
  "bg",
  "ca",
  "cs",
  "da",
  "de",
  "el",
  "en",
  "eo",
  "es",
  "et",
  "fa",
  "fi",
  "fr",
  "ga",
  "he",
  "hi",
  "hu",
  "id",
  "is",
  "it",
  "ja",
  "ko",
  "la",
  "ml",
  "ms",
  "nl",
  "no",
  "pl",
  "pt",
  "rm",
  "ro",
  "ru",
  "sk",
  "sl",
  "sr",
  "sv",
  "th",
  "tl",
  "tr",
  "uk",
  "uz",
  "vi",
  "zh",
];

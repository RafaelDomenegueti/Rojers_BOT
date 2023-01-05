import { rojersImage } from "../utils/constraints.js";

const commandRojers = async (msg) => {
  if (msg.getChannel()) {
    await msg.sendMessage(rojersImage);

    await msg.playAudio("./src/assets/audios/rojers.mp3", () => {
      msg.leave();
    });
  } else {
    await msg.replayMessage("FIIAUUMMMMM");
    await msg.sendMessage(rojersImage);
  }
};

const commandExplodeRojers = async (msg) => {
  if (msg.getChannel()) {
    await msg.sendMessage(rojersImage);

    await msg.playAudio("./src/assets/audios/explodeRojers.mp3", () => {
      msg.leave();
    });
  } else {
    msg.replayMessage("FIIAUUMMMMM");
    msg.sendMessage(rojersImage);
  }
};

export { commandRojers, commandExplodeRojers };

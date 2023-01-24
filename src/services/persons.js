import {
  cuteImage,
  julhoImage,
  katiauImage,
  sasaImage,
  ugaImage,
  veetorImage,
} from "../utils/constraints.js";
import ytdl from "ytdl-core";

const commandAe = async (msg) => {
  if (msg.getChannel()) {
    await msg.sendMessage(veetorImage);
    await msg.playAudio("./src/assets/audios/ae.mp3", () => {
      msg.leave();
    });
  } else {
    await msg.replyMessage("AH ÉÉÉÉÉÉÉÉÉ");
    await msg.sendMessage(veetorImage);
  }
};

const commandUga = async (msg) => {
  if (msg.getChannel()) {
    await msg.sendMessage(ugaImage);
    await msg.playAudio("./src/assets/audios/uga.mp3", () => {
      msg.leave();
    });
  } else {
    await msg.replyMessage("UGA");
    await msg.sendMessage(ugaImage);
  }
};

const commandCute = async (msg) => {
  if (msg.getChannel()) {
    await msg.sendMessage(cuteImage);
    await msg.playAudio(
      ytdl("https://www.youtube.com/watch?v=YI6IEprLHmM", {
        filter: "audioonly",
      }),
      () => {
        msg.leave();
      }
    );
  } else {
    await msg.replyMessage("É TÃO FOFINHO");
    await msg.sendMessage(cuteImage);
  }
};

const commandKatiau = (msg) => {
  msg.sendMessage(katiauImage);
  msg.sendMessage("KATIAU");
};

const commandSasa = async (msg) => {
  if (msg.getChannel()) {
    await msg.sendMessage(sasaImage);
    await msg.playAudio("./src/assets/audios/sasa.mp3", () => {
      msg.leave();
    });
  } else {
    await msg.sendMessage(sasaImage);
  }
};

const commandJulho = (msg) => {
  msg.sendMessage(julhoImage);
};

const commandJJ = async (msg) => {
  if (msg.getChannel()) {
    await msg.playAudio("./src/assets/audios/jimmie.mp3", () => {
      msg.leave();
    });
  }
};

const commandThrowYourself = async (msg) => {
  if (msg.getChannel()) {
    await msg.playAudio("./src/assets/audios/seJogar.mp3", () => {
      msg.leave();
    });
  }
};

export {
  commandAe,
  commandCute,
  commandJJ,
  commandJulho,
  commandKatiau,
  commandSasa,
  commandUga,
  commandThrowYourself,
};

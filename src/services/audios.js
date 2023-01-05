import ytdl from "ytdl-core";
import gTTS from "gtts";
import axios from "axios";
import { languages } from "../utils/constraints.js";

const commandRunPlayer = async (msg) => {
  let message = msg.getContent().replace("!r.p ", "");

  if (message.startsWith("http")) {
    try {
      if (msg.getChannel()) {
        await msg.playAudio(ytdl(message, { filter: "audioonly" }), () => {
          msg.leave();
        });
      } else {
        await msg.replayMessage("Sei falar isso não");
      }
    } catch (err) {
      await msg.replayMessage("Sei falar isso não");
    }
  } else {
    // Generate speech
    const gtts = new gTTS(message, "pt-br");
    gtts.save("./src/cache/" + msg.getGuildId() + ".mp3", function (err) {
      if (err) {
        throw new Error(err);
      }
    });

    if (msg.getChannel()) {
      await msg.playAudio("./src/cache/" + msg.getGuildId() + ".mp3", () => {
        msg.leave();
      });
    } else {
      await msg.replayMessage(message);
    }
  }
};

const commandRunChat = async (msg) => {
  let mensagem = msg.getContent().replace("!r.f ", "");

  const response = await axios.get(
    "https://api.simsimi.net/v2/?text=" + mensagem + "&lc=pt"
  );
  msg.replayMessage(response.data.success);
};

const commandRunPlayerLanguage = async (msg) => {
  let message = msg.getContent().replace("!r.p.", "");
  let lingua = message.charAt(0) + message.charAt(1);
  message = message.replace(lingua + " ", "");

  let gtts;
  if (languages.indexOf(lingua) > 0) {
    gtts = new gTTS(message, lingua);
  } else {
    gtts = new gTTS(message, "pt-br");
  }

  gtts.save("./src/cache/" + msg.getGuildId() + ".mp3", function (err) {
    if (err) {
      throw new Error(err);
    }
  });

  if (msg.getChannel()) {
    await msg.playAudio("./src/cache/" + msg.getGuildId() + ".mp3", () => {
      msg.leave();
    });
  } else {
    msg.replayMessage(message);
  }
};

const commandRunStop = async (msg) => {
  if (msg.getChannel()) {
    await msg.leave();
  }
};

export {
  commandRunChat,
  commandRunPlayer,
  commandRunPlayerLanguage,
  commandRunStop,
};

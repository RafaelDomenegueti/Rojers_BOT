import { messageIsEqual, messageStartWith } from "./utils/routeMessage.js";
import { commandRojers, commandExplodeRojers } from "./services/rojers.js";
import {
  commandAe,
  commandCute,
  commandJJ,
  commandJulho,
  commandKatiau,
  commandSasa,
  commandThrowYourself,
  commandUga,
} from "./services/persons.js";
import {
  commandRunChat,
  commandRunPlayer,
  commandRunPlayerLanguage,
  commandRunStop,
} from "./services/audios.js";
import {
  commandCalc,
  commandGay,
  commandList,
  commandPiu,
  commandRevert,
} from "./services/chat.js";

export const router = async (msg) => {
  // Rojers
  await messageIsEqual(msg, "!rojers", commandRojers);
  await messageIsEqual(msg, "!rojers_estourado", commandExplodeRojers);

  // Persons
  await messageIsEqual(msg, "!ae", commandAe);
  await messageIsEqual(msg, "!uga", commandUga);
  await messageIsEqual(msg, "!fofinho", commandCute);
  await messageIsEqual(msg, "!katiau", commandKatiau);
  await messageIsEqual(msg, "!piu", commandPiu);
  await messageIsEqual(msg, "!sasa", commandSasa);
  await messageIsEqual(msg, "!julho", commandJulho);
  await messageIsEqual(msg, "!JJ", commandJJ);
  await messageIsEqual(msg, "!se_jogar", commandThrowYourself);

  // Audios
  await messageStartWith(msg, "!r.p ", commandRunPlayer);
  await messageStartWith(msg, "!r.f ", commandRunChat);
  await messageStartWith(msg, "!r.p.", commandRunPlayerLanguage);
  await messageIsEqual(msg, "!r.stop", commandRunStop);

  // Chat
  await messageStartWith(msg, "!calc ", commandCalc);
  await messageStartWith(msg, "!revert ", commandRevert);
  await messageIsEqual(msg, "!comandos", commandList);
  await messageStartWith(msg, "!gay ", commandGay);
};

import axios from "axios";
import scalc from "scalc";

const commandCalc = (msg) => {
  let message = msg.getContent().replace("!calc ", "");

  try {
    msg.sendMessage(message + " = " + scalc(message));
  } catch (a) {
    msg.sendMessage("Sei não po");
  }
};

const commandPiu = async (msg) => {
  const response = await axios.get(
    "http://teles-jokes.azurewebsites.net/api/GetJoke?code=7skvGJHPnh6jOiZhwNKV0dL0awj9qTorLElJq596sKVHmrmgFJ6u4w=="
  );

  msg.sendMessage(response.data.joke.replace("||", "\n"));
};

const commandRevert = (msg) => {
  let message = msg.getContent().replace("!revert ", "");
  message = message.split("").reverse().join("");
  msg.sendMessage(message);
};

const commandList = (msg) => {
  msg.sendMessage(
    "!rojers \n!ae \n!r.p (texto) \n!uga \n!fofinho \n!katiau \n!sasa \n!julho \n!calc (conta) \n!revert (texto para reverter)"
  );
};

const commandGay = (msg) => {
  let gay = Math.floor(Math.random() * 1000000);
  msg.sendMessage(gay + "%");
};

export { commandCalc, commandGay, commandList, commandRevert, commandPiu };

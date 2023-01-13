class MessageOptions {
  constructor(message) {
    this.message = message;
  }

  getContent() {
    return this.message.content;
  }

  getChannel() {
    return this.message.member.voice && this.message.member.voice.channel;
  }

  getGuildId() {
    return this.message.channel && this.message.channel.guild.id;
  }

  async playAudio(audio, callback) {
    this.message.member.voice.channel
      .join()
      .then((connection) => {
        const DJ = connection.play(audio);
        DJ.on("finish", () => {
          if (connection == false) {
            return 0;
          } else {
            callback();
          }
        });
      })
      .catch(console.error);
  }

  async sendMessage(message) {
    await this.message.reply(message);
  }

  async replayMessage(message) {
    await this.message.channel.send(message);
  }

  async leave() {
    await this.message.member.voice.channel.leave();
  }
}

const messageStartWith = async (message, param, callback) => {
  if (message.content.startsWith(param)) {
    await callback(new MessageOptions(message));
  }
};

const messageIsEqual = async (message, param, callback) => {
  if (message.content == param) {
    await callback(new MessageOptions(message));
  }
};

export { messageStartWith, messageIsEqual };

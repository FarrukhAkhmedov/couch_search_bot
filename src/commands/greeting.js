const Command = require("./command");

class Greeting extends Command {

  register() {
    const bot = this.getBot(); 

    bot.onText(/\/start/, async (message) => {
      const chatId = message.chat.id;
      
      await bot.sendSticker(chatId, 'https://tlgrm.eu/_/stickers/c9d/acb/c9dacb4d-3de5-4a15-8ff3-0fde05d63d0f/8.webp');
      return bot.sendMessage(chatId, "Этот бот поможет найти место для ночевки!");
    });


  }
}

module.exports = Greeting;

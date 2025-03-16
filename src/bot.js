const TelegramApi = require('node-telegram-bot-api');
require('dotenv').config();
const Greeting = require('./commands/greeting');
const Command = require('./commands/command');

class Bot {
  constructor() {
    this.token = process.env.TOKEN;
    this.bot = new TelegramApi(this.token, { polling: true });

    new Command(this.bot); 
  }

  start() {
    const greeting = new Greeting(); 
    greeting.register();
  }
}

module.exports = Bot;

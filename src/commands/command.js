class Command {
    static bot = null
  
    constructor(bot) {
      if (!Command.bot) {
        Command.bot = bot
      }
    }
  
    getBot() {
      return Command.bot; 
    }
  }
  
  module.exports = Command;
  
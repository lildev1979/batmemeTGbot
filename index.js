const { Telegraf } = require('telegraf');
require('dotenv').config(); //initialize dotenv
const bot = new Telegraf(process.env.CLIENT_TOKEN);
const chatID = -1001590269527;
const MemeArray = [
    "100percent",
    "brb",
    "diamondhandedlegends01",
    "fixeveryprob",
    "housecovered",
    "huntyou",
    "iloveit",
    "jamesywenmoon",
    "ngmi",
    "swigscarling"
    ];

    function getRandomInt() {
        return Math.floor(Math.random() * MemeArray.length);
      }

bot.command('start', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'Hi There BatmanMeme_Bot here. use command batmeme for a meme', {
    })
})

bot.command('batmeme', ctx => {
    console.log(ctx)
    var filenm =  `${MemeArray[getRandomInt()]}.jpg`

    bot.telegram.sendPhoto(ctx.chat.id, {source: `./memes/${filenm}`}, {
    })
})

bot.catch(err => console.log(err));
bot.start(ctx => ctx.reply("Started"));

bot.launch();
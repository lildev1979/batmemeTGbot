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
const GifArray = [
    "Happy",
    "Hungry",
    "Playful",
    "Sleepy",
    "Sad"
    ];
function getRandomInt() {
    return Math.floor(Math.random() * MemeArray.length);
    }

bot.command('start', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'Hi There BatmanMeme_Bot here. use command batmeme for a meme', {
    })
})
function getRandomState() {
    return Math.floor(Math.random() * GifArray.length);
  }

bot.command('batmeme', ctx => {
    console.log(ctx.update.message.text);
    var arr1 = ctx.update.message.text.split(' ');
    var num = parseInt(arr1[1])
    var number = 0;
    if(isNaN(num) || num > (MemeArray.length -1)){
        number = getRandomInt();
    }else{
        number = num;
    }
   
    var filenm =  `${MemeArray[number]}.jpg`

    bot.telegram.sendPhoto(ctx.chat.id, {source: `./memes/${filenm}`}, {
    })
})


bot.command('megababy', ctx => {
    console.log(ctx.update.message.text);
    var arr1 = ctx.update.message.text.split(' ');
    var num = parseInt(arr1[1])
    var number = 0;
    if(isNaN(num) || num > (GifArray.length -1)){
        number = getRandomState();
    }else{
        number = num;
    }
   
    var filenm =  `${GifArray[number]}.gif`

    bot.telegram.sendAnimation(ctx.chat.id, {source: `./gifs/${filenm}`}, {
    })
})

bot.catch(err => console.log(err));
bot.start(ctx => ctx.reply("Started"));

bot.launch();
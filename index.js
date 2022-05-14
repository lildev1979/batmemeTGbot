import * as Telegraf from 'telegraf';
require('dotenv').config(); //initialize dotenv
const bot = new Telegraf(process.env.CLIENT_TOKEN);
const chatID = 
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
    console.log(ctx.chat.id)
    var filenm =  `${MemeArray[getRandomInt()]}.jpg`

    bot.telegram.sendPhoto(ctx.chat.id, {source: `./memes/${filenm}`}, {
    })
})
/*
setInterval( async () => {
    var price = 0;
    try{
        price  = await getPrice();
        await client.user.setPresence({
            status: "idle",  //You can show online, idle....
            activities: [{
                name: `$${parseFloat(price).toFixed(2)}/Million`,  //The message shown
                type: "PLAYING" //PLAYING: WATCHING: LISTENING: STREAMING:
            }]
        });
    }catch(error){
        console.log("error caught: " + error);
    }
    
    
    //console.log(price)
}, 10000); 
*/
bot.catch(err => console.log(err));
bot.start(ctx => ctx.reply("Started"));

bot.launch();
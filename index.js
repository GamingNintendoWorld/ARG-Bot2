const Discord = require('discord.js');
const bot = new Discord.Client();

const cheerio = require('cheerio');
 
const request = require('request');

const token = BOT_TOKEN;

const PREFIX = '';
 
var version = '1.3';

//bot.registry.registerGroup('music', 'Music');
//bot.registry.registerDefults();
//bot.registry.registerCommandsIn(__dirname + '/commands')

const fs = require('fs');
bot.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    bot.commands.set(command.name, command);
}

bot.on('ready', () => {
    console.log('This bot is online! ' + version);
 
})

bot.on('message', (msg) => {
    if (msg.content === "introduce yourself luxmi") {
        msg.channel.send(`Hello, im Luxmi, Matts girlfriend. He is enabling me to be more interactive with him and others. i hope to be more interactive with you and other users in the future. I know my Matt can do it!`);
    }
    
    if (msg.content === 'hello luxmi') {
        msg.author.send(`Hello ${msg.author}`);
    }
    
    if (msg.content === 'dk rap') {
        msg.channel.send(`https://www.youtube.com/watch?v=RcP91tQ4ZSM`);
    }

    if (msg.content === "i love you luxmi") {
        msg.react('❤')
        msg.channel.send(`I love you too Matt!`);
    }
    
//    if (msg.content === "") {
//        msg.channel.send(``);
//    }

//    if (msg.content === "") {
//        msg.channel.send(``);
//    }

//    if (msg.content === "") {
//        msg.channel.send(``);
//    }
});

bot.on('message', message => {
 
    let args = message.content.substring(PREFIX.length).split(" ");
 
    switch (args[0]) {
        case 'isa':
        image(message);
 
        break;
    }
 
});
 
function image(message){
 
    var options = {
        url: "https://www.google.com/search?q=hentai&sxsrf=ALeKk01M9C5xlmylF9Bk6SHwlo6dTQz0WA:1595119058806&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjBof_GidjqAhUQPa0KHW7MDLEQ_AUoAnoECAsQBA" + "hentai",
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };
 
 
 
 
 
    request(options, function(error, response, responseBody) {
        if (error) {
            return;
        }
 
 
        $ = cheerio.load(responseBody);
 
 
        var links = $(".image a.link");
 
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
       
        console.log(urls);
 
        if (!urls.length) {
           
            return;
        }
 
        // Send result
        message.channel.send( urls[Math.floor(Math.random() * urls.length)]);
    });
}

// set message listener 
bot.on('message', message => {
    switch(message.content.toUpperCase()) {
        case '?RESET':
            resetBot(message.channel);
            break;

        // ... other commands
    }
});

// Turn bot off (destroy), then turn it back on
function resetBot(channel) {
    // send channel a message that you're resetting bot [optional]
    channel.send('Resetting...')
    .then(msg => bot.destroy())
    .then(() => bot.login(token));
}

bot.on('ready', () => {
    console.log('I am ready!');
});

bot.login(process.env.BOT_TOKEN);

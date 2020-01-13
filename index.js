const {Client, Attachment} = require('discord.js');
const bot = new Client();

const token = 'NjY2MTEzODcxODgyNDg1ODEx.XhvzZA.8LIEU_102an6UfLfGtAyh7IgLK0';

const PREFIX = '!';

bot.on('ready', () =>{
    console.log('This Bot is online!');
})

bot.on('message', message=>{
    
    let args = message.content.substring(PREFIX.lenght).split("!");

    switch(args[0]){
        case 'hyln64':
            message.channel.sendMessage('kwwsv://gulyh.jrrjoh.frp/iloh/g/19rxOV8ttbPxXwZqduELBuNCH-bsfQLFP/ylhz?xvs=gulyhvgn');
        break;
    }
})

bot.on('message', message=>{
    
    let args = message.content.substring(PREFIX.lenght).split("!");

    switch(args[0]){
        case '?':
            message.channel.sendMessage('kcab srettel eerhT');
        break;
    }
})

bot.on('message', message=>{
    
    let args = message.content.substring(PREFIX.lenght).split("!");

    switch(args[0]){
        case '':
            message.channel.sendMessage('');
        break;
    }
})

bot.login(token);

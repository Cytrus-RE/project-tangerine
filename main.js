const Discord = require('discord.js');

const client = new Discord.Client();


client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret stored in Heroku
 

client.on('ready', () => {

    console.log('Tangerine has started!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.channel.send('pong');

       }
    if (message.content === 'crash') {

       proces.exit();

    }

});

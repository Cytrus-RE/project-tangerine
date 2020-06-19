const Discord = require('discord.js');

const client = new Discord.Client();


client.login(process.env.BOT_TOKEN); // BOT_TOKEN is the client secret stored in Heroku/your .env file if hosting locally


client.on('ready', () => {

    console.log('Project Tangerine has started!');

});

 

client.on('message', message => {

    if (message.content === "tangerine ping") {

        message.channel.send("Pong!");

    }
    if (message.content === "tangerine about") {

        message.channel.send("**Project Tangerine** is a rewrite of Cytrus-RE, currently in development.");

    }
    if (message.content === "tangerine crash") {
    	message.channel.send("Bye...");
        process.exit();

    }

});

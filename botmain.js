const Discord = require('discord.js');

const client = new Discord.Client();


client.login(process.env.BOT_TOKEN); // BOT_TOKEN is the client token stored in Heroku/your environment variables if hosting locally.
/* 
    If you're hosting the bot locally, it is recommended to replace the above line with
    your token from the Discord dev portal like so: client.login('your-token'), where 
    your-token is the token found in the app's bot section in the Discord dev page.
    You should leave the quotes in.
*/


client.on('ready', () => {

    console.log('Project Tangerine has started!');

});

 

client.on('message', message => {


<<<<<<< HEAD
        message.channel.send("Pong!");

    }
    if (message.content === "tangerine about") {

        message.channel.send("**Project Tangerine** is a rewrite of Cytrus-RE, currently in development.");

    }
    if (message.content === "tangerine pull") {
        try {
            exec("git pull https://github.com/Cytrus-RE/project-tangerine");
            message.reply("I've pulled changes, please restart the bot")
        } catch (err) {
            console.log(err).catch();
        }
    }
=======

>>>>>>> ce0cbda1ee3580b93bb5e291f8ae58261a47609a
});

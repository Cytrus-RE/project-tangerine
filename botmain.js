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

		if(message.content === 'ping') {
			message.channel.send('no');
		}
});

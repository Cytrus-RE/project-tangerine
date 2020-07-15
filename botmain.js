const Discord = require('discord.js');


const client = new Discord.Client({
    disableEveryone: true, // I'm fairly certain we don't want to ping everyone in a server.
    disabledEvents: ['TYPING_START'] // This disables the "is typing..." text under the messagebox in the Discord client
});


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

client.on('message', message => {
    try{
        if(message.content === 'say') {
            let args = message.content.substring(PREFIX.length).split(" ");
            const sayMessage = args.join(" ");
            message.channel.send(sayMessage);
            // Thank you StackOverflow guy
        }
    } catch(error) {    
        message.channel.send(client.errors.genericError + error).catch();
        console.log(error)
    }


});

client.on('message', message => {
    var exec = require('child_process').exec, child;
    if(message.content === 'pullchanges') {
        await exec('git pull origin master')
        // I'm confident that this will work. If it doesn't, well, I don't care, I'm not spending 10 hours getting git pulling to work
        message.channel.send('Changes were pulled. Rebooting!')
        await exec('node botmain.js')
        setTimeout(5)
        process.exit();
    }
});
/**
 * A ping pong bot, whenever you send "ping", it replies "pong".
 */

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();






console.log("Ready To Boot");

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log("Logged In!")
  
  
});

// Create an event listener for messages
client.on('message', message => {

 

  // get role by name
  

  
  // If the message is "ping"
  if (message.content === 'SPEED') {
    // Send "pong" to the same channel
    message.channel.send('hello!');
  }

  if(message.content === '>role')
  {
    

    
  }

  
  if(message.content === 'Fuck You SPEED')
  {
     // Easy way to get member object though mentions.
       message.channel.send('Fuck You')
  }

  if(message.content === 'Fortnite')
  {
     // Easy way to get member object though mentions.
       message.channel.send('stoopid')
       message.channel.send('https://bit.ly/IqT6zt')
   }

   if(message.content === '>help')
   {
   	 message.channel.send({embed: {
     color: 8359053 ,
     author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
      },
      title: "Commands Are Here, MEE6 is stupid",
      
      url: "https://pastebin.com/raw/1LvwFZBX",
     }});
   }

   if(message.content === 'my dick')
   {
      message.channel.send('is nanotech you like it?')
   }

  

});



   
// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login('NjI4NjY3NjQ1NTUzODAzMjc4.XadlMQ.C3k1TeG8glbq1Wb_QqXsc87GcTk');
  

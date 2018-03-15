const Discord = require('discord.js');
const token = process.argv[2];
const client = new Discord.Client();

client.on('message', message => {
  if (message.content.startsWith('here come dat boi')) {
    message.channel.send('o shit waddup!');
  }
});

client.on('ready', () => {
   console.log('I am ready!'); 
});

client.login(token);
const Discord = require('discord.js')
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
})

client.on('messageReactionAdd', (messageReaction, user) => {
    if (user.bot) return;
    const {message, emoji} = messageReaction;
    if (emoji.name === "📌"){
        console.log(`[${new Date()}] User: '${user.username}' Requested to pin a message in ${message.guild.name}`);
        message.pin();
    }
});

client.login(process.env.TOKEN);

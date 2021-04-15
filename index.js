const Discord = require('discord.js')
const client = new Discord.Client();

const prefix = '!'

const start_date = new Date()

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
})

client.on('messageReactionAdd', (messageReaction, user) => {
    if (user.bot) return;
    const {message, emoji} = messageReaction;
    if (emoji.name === "📌") {
        console.log(`[${new Date()}] User: '${user.username}' Requested to pin a message in ${message.guild.name}`);
        message.pin();
    }
});

client.on('message', (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'uptime') {
        let date_now = new Date()
        message.channel.send(`I'm up since ${start_date} => ${(date_now - start_date)/1000}s uptime`)
    }
})

client.login(process.env.TOKEN);

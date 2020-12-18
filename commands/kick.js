module.exports = message => {
    const target = message.mentions.members.first()

    if( !message.member.hasPermission("KICK_MEMBERS") ) {
        return message.reply(`**${message.author.username}**, You do not have enough permission to use this command`)
    }

    if( !message.guild.me.hasPermission("KICK_MEMBERS") ) {
        return message.channel.send(`**${message.author.username}**, I do not have enough permission to use this command`)
    }
    
    if ( typeof target !== 'undefined') {
        if(target.id === message.author.id ) {
        return message.channel.send(`**${message.author.username}**, You can not kick yourself`)
        }
    }
    
    if (!target) {
        return message.reply(`Who are you trying to kick? You must mention a user.`);
    }

    if (!target.kickable) {
        return message.reply(`I can't kick **${target.user.username}**. Sorry!`)
            .then( () => message.react('😢') )
            .catch(console.error);
    }

    return target
        .kick()
        .then(() => message.reply(`**${target.user.username}** was kicked.`))
        .catch(error => message.reply(`Sorry, an error occured.`))
}
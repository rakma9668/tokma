module.exports = (Discord,message) => {

    var fields = [
        //{ name: 'Create account', value: '```!register```', inline: true }, 
        { name: 'Download', value: '```!download```', inline: true },
        { name: 'Server status', value: '```!status```', inline: true }, 
        { name: '\u200B', value: '\u200B' }, 
        { name: 'HT Shop', value: '```!tavern```', inline: true }, 
        { name: 'Roll 1 to 100', value: '```!roll```', inline: true },
        // { name: 'Fortune teller', value: '```!fortune```', inline: true },   
    ]

    // if user has permissions
    if( !message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS']) ) {
        fields.push({ name: '\u200B', value: '\u200B' })
        fields.push({ name: 'Kick a user', value: '```!kick @user```', inline: true })
        fields.push({ name: 'Ban a user', value: '```!ban @user```', inline: true  })
    }

	var embed = new Discord.MessageEmbed()
		.setColor('ff0000') // (0x00AE86)
		.setTitle(`Available commands`)
        .setAuthor('Dragon Legend','https://img.pngio.com/download-phoenix-transparent-free-transparent-png-images-icons-phoenix-icon-png-570_627.png')
		//.setDescription(`Desc`)
        .setThumbnail('https://img.pngio.com/download-phoenix-transparent-free-transparent-png-images-icons-phoenix-icon-png-570_627.png')
        .addFields(fields)
        .setTimestamp()
        .setFooter('Rakma#9668', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette2.wikia.nocookie.net%2Fshipping%2Fimages%2F6%2F66%2FPixel_heart_icon.png%2Frevision%2Flatest%3Fcb%3D20151011174450&f=1&nofb=1')
    
    return message.channel.send(embed);
}
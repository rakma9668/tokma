module.exports = (Discord,message) => {
    var embed = new Discord.MessageEmbed()
        .setColor('ff0000') // (0x00AE86)
        .setTitle(`Download Game Client`)
        .setAuthor(process.env.NAME,process.env.LOGO)
        // .setThumbnail(process.env.LOGO)
        .addFields(
            { name: 'Mega.nz', value: '```https://mega.nz/#!WP5U2K5Z!coTqZdhtShRHe3ogDPyvmF4wcnLcDMyWo6oQyZL3Y```' },    
            { name: 'Dropbox', value: '```https://www.dropbox.com/s/d2t1ojfirjqasp1/Setup.DragonLegend.exe?dl=0```' },   
            { name: 'MD5 Checksum', value: '```84d21b1bf8cf7779657fd479fc147a50```' },     
        )
        // .attachFiles(['./assets/Server.ini'])
        .setTimestamp()
        .setFooter('Rakma#9668', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette2.wikia.nocookie.net%2Fshipping%2Fimages%2F6%2F66%2FPixel_heart_icon.png%2Frevision%2Flatest%3Fcb%3D20151011174450&f=1&nofb=1')
    
    return message.channel.send(embed);
}
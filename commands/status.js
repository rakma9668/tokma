module.exports = (fs,Discord, message) => {

	let file = "./server.json";
	var fields = []

	fs.access(file, fs.F_OK, (err) => {
		var obj = JSON.parse( fs.readFileSync(file, 'utf8') );
		console.log(obj.length )
		if (err || obj.length === 1) {
			console.error(err)
			return message.reply('Server down for maintenance');
		}

		for(var attributename in obj){
			var session = obj[attributename];
			var pOnline = 0;

			if (typeof session.totalplayers === "undefined") {
				pOnline = 0;
			}else{
				pOnline = session.totalplayers;
			}

		    fields.push({ name: session.name, value: '```'+ pOnline + '/' + session.maxplayers +'```', inline: false })
		}

		if (fields === undefined || fields.length == 0) {
		    return message.reply('Server down for maintenance');
		}else{
			var embed = new Discord.MessageEmbed()
        	.setColor('ff0000') // (0x00AE86)
        	.setTitle(`Server status`)
        	.setAuthor('Dragon Legend',process.env.LOGO)
        	.setThumbnail(process.env.LOGO)
        	.addFields( fields )
        	.setTimestamp()
        	.setFooter('Rakma#9668', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette2.wikia.nocookie.net%2Fshipping%2Fimages%2F6%2F66%2FPixel_heart_icon.png%2Frevision%2Flatest%3Fcb%3D20151011174450&f=1&nofb=1')
			return message.channel.send(embed);
		}
		
		
    	
	})

}
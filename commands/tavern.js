module.exports = (fs,prefix,Discord,message) => {

	const args 		= message.content.slice(prefix.length).split(' ');
	const command 	= args.shift().toLowerCase();
	let file 		= "./tavern.json";
	let fields 		= []
	// remove command from arg list
	delete args[command];

	if ( !args.length ) {
		return message.reply("You didn't provide a category. Use `Book` `Costume` `Etc.` `Medicine` `Pet` `Premium` `Talisman`");
	}

	// set category
	let cat = args[0];

	fs.access(file, fs.F_OK, (err) => {
		var obj = JSON.parse( fs.readFileSync(file, 'utf8') );

		if (err || obj.length === 1) {
			console.error(err)
			return message.reply('Server down for maintenance');
		}

		// check if category found
		if (cat in obj){

			obj = obj[cat];
			var i = 0;
			for(var atrName in obj){
				var item = obj[atrName];
			    fields.push({ name: item.name, value: '```nCash: '+ item.ncash + ' QTY:' + item.quantity +'```', inline: true })
			    i++
			    // add new row after 2 items
			    if ( i == 2) { fields.push({ name: '\u200B', value: '\u200B' }); i = 0; }
			}
			
			var embed = new Discord.MessageEmbed()
	        	.setColor('ff0000') // (0x00AE86)
	        	.setTitle(`HT: ` + cat)
	        	.setAuthor('Dragon Legend',process.env.LOGO)
	        	// .setThumbnail(process.env.LOGO)
	        	.addFields( fields )
	        	.setTimestamp()
	        	.setFooter('Rakma#9668', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette2.wikia.nocookie.net%2Fshipping%2Fimages%2F6%2F66%2FPixel_heart_icon.png%2Frevision%2Flatest%3Fcb%3D20151011174450&f=1&nofb=1')
	    
	    	return message.channel.send(embed);


		}else{
			return message.reply("Category not found");
		}
	})

}
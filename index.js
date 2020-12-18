// Files system
const fs = require('fs')

// Env Var Loader
require('dotenv').config()

// Discord API
const Discord = require('discord.js')
const client = new Discord.Client()

Promise.resolve()
	.then(() => {fs.readdir('./events/', (err, files) => {
			return files.forEach(file => {
			    const eventHandler = require(`./events/${file}`)
			    const eventName = file.split('.')[0]
			    client.on(eventName, (...args) => eventHandler(fs,client,Discord, ...args))
			})
		})}
	)
	.then(() =>
		client.login(process.env.BOT_TOKEN)
	)
	.then(() =>
	client.on("ready", () =>{
	    client.user.setActivity('!commands', { type: 'WATCHING' });
	})
)
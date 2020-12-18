module.exports = (fs, client) => {
	const colog = require('colog');
	const utils = require("../functions/general")
	// Bot Online
	colog.log( utils.getDateTime() + ' ' + colog.color('Client ' + client.user.tag + ' online', 'green') )
	// Run cron tasks
	utils.cronTasks(fs,colog)
}
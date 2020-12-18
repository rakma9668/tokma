var cron = require('node-cron');
const rq = require('superagent');
const path = require('path');
	
const getDateTime = () => {
	var date = new Date();
    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;
    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;
    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;
    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;
    return year + ":" + month + ":" + day + " " + hour + ":" + min + ":" + sec;
};

const cronTasks = (fs,colog) => {
	// Cronjob - Get server status
	cron.schedule('* * * * *', () => {
		var file = "./server.json"
		rq.get( process.env.SERVER_IP + '/servers' )
		.set({ 'authorization' : process.env.SERVER_TOKEN })
		.end((err, res) => {
			if (err) { fs.unlinkSync(file); return console.log(err); }
			var data = JSON.stringify( res.body )
			fs.writeFileSync( file, data )
		});
		console.log( path.join(__dirname, '..', 'server.json') );
	});

	// Cronjob - Get tavern items
	cron.schedule('0,5 * * * *', () => {
		var file = "./tavern.json"
		rq.get( process.env.SERVER_IP + '/tavern' )
		.set({ 'authorization' : process.env.SERVER_TOKEN })
		.end((err, res) => {
			if (err) { fs.unlinkSync(file); return console.log(err); }
			var data = JSON.stringify( res.body )
			fs.writeFileSync( file, data )
		});
	});
}

module.exports = { getDateTime, cronTasks };
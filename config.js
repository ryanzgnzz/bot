const fs = require('fs')
const chalk = require('chalk')
const setting = JSON.parse(fs.readFileSync('./settings.json'))

// Website Api
global.APIs = {
	alfa: 'https://api-alphabot.herokuapp.com',
	zeks: 'https://zeks.me',
}

// Free apikey
global.APIKeys = {
	'https://api-alphabot.herokuapp.com': 'Alphabot',
	'https://zeks.me': 'uc5X0iFpZx9rmFT1QzF3hXIOiU5',
}

global.owner = ['62887435047326','918156874290']
global.packname = setting.botname
global.author = setting.ownername
global.swelcome = '*Welcome @tag* \n\n📛 : _@user_\n💌 : _@bio_\n🔢 : _@number_\n👥 : @subject\n🏅: _@member Members_\n⏰ : _@time Server time_\n\n```Hope you like it and don\'t forget to read the group description```'
global.sleave = '◪ Goodbye @tag\n◪ Leave from group:\n@subject\n\n│\n└─ ❏ Nomor: @number\nGoodBye~~'
global.spromote = '*P R O M O T E  D E T E C T E D*\n```Nomor :``` @number\n```User :``` @tag\n```Group :``` @subject\n_Selamat jabatan kamu naik_'
global.sdemote = '*D E M O T E  D E T E C T E D*\n```Nomor :``` @number\n```User :``` @tag\n```Group :``` @subject\n_Kasian kena demote_'
global.alphaVersion = [2, 2143, 3]
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright("Update 'config.js'"))
	delete require.cache[file]
	require(file)
})

export const options = {

	'name': 'DaJiaoShou',
	'brand': '大教授',

	'less': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'jade',
	
	'emails': 'templates/emails',
	'mandrill api key': 'IUseNodemailer',

	'cloudinary config': 'cloudinary://543272281319137:JM7AOfRAKZtyV2-1AR6CUcz8CWU@dr8whvhyx',

	'logger': 'combined',
	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
	'cookie secret': '&#34;fF-ELbvoJ|P6:$&lt;;3c-Cen8OJJy[W1&amp;i@O.M)-%&lt;&gt;QTiTvC93&lt;n;R@!vD@A6N=7',
}

export const smtpOptions = {
	    host: 'smtp.126.com',
	    port: 25,
	    auth: {
	        user: 'dajiaoshou@126.cn',
	        pass: 'dajiaoshou;coming'
	    }
}

export const locals = {
	env: process.NODE_ENV,
}

export const nav = {
	'系统管理': ['users']
}

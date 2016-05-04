require('babel-core/register')

var keystone = require('keystone');
var config = require('./config');
var smtpTransport = require('nodemailer-smtp-transport');

keystone.init(config.options);
keystone.import('models');
keystone.set('locals', config.locals);
keystone.set('routes', require('./routes'));
keystone.set('nav', config.nav);
keystone.set('email nodemailer', smtpTransport(config.smtpOptions));

keystone.set('email locals', {
	utils: keystone.utils,
	host: (function() {
		if (keystone.get('env') === 'staging') return 'http://dajiaoshou.com';
		if (keystone.get('env') === 'production') return 'http://dajiaoshou.com';
		return (keystone.get('host') || 'http://localhost:') + (keystone.get('port') || '3000');
	})()
})

keystone.start();

var keystone = require('keystone') 
var importRoutes = keystone.importer(__dirname)
var middleware = require('./middleware')

// Common Middleware
keystone.pre('routes', middleware.initErrorHandlers);
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Handle 404 errors
keystone.set('404', function(req, res, next) {
	res.notfound();
});

// Handle other errors
keystone.set('500', function(err, req, res, next) {
	var title, message;
	if (err instanceof Error) {		
		message = err.message;
		err = err.stack;
		console.log(err)
	}
	res.err(err, title, message);
});

// Load Routes
var routes = {
    views: importRoutes('./views'),
    services: importRoutes('./services')
}

// Setup Route Bindings
exports = module.exports = function(app) {
	
	app.all('/api*', keystone.middleware.api)

	app.get('/*', routes.views.home)
}

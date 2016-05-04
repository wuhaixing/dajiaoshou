var keystone = require('keystone');
var transform = require('model-transform');
var Types = keystone.Field.Types;

var Config = new keystone.List('Config', {
	label: '网站配置'
});

Config.add({
	state: { type: Types.Select, label:'状态',options: 'coming, maintained, normal', default: 'coming', index: true }
});

transform.toJSON(Config);
Config.defaultColumns = 'state';
Config.register();

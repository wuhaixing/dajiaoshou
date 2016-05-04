var keystone = require('keystone')
var transform = require('model-transform')
var Types = keystone.Field.Types

var User = new keystone.List('User',{
	autokey: { from: 'name', path: 'key', unique: true },
	label:'用户'
})

var deps = {
	author: {'isAuthor' : true }
};

User.add({
	name: { type: Types.Name, label: '姓名',required: true, index: true },
	email: { type: Types.Email, label: '电子邮件',initial: true, required: true, index: true, unique: true },
	mobile: { type: String, label: '手机',initial: true, required: true, index: true, unique: true },
	photo: { type: Types.LocalFile,
		label:'照片',
		dest: 'public/images/users',
		prefix: '/images/users/',
		allowedTypes:['image/jpeg','image/png'],
		note: '400*400的png图片'
	},
	biography: {
		brief: { type: Types.Html, label:'个人简介',wysiwyg: true, height: 150 },
		extended: { type: Types.Html,label:'详细介绍', wysiwyg: true, height: 400 },
	},
	password: { type: Types.Password, label: '密码',initial: true },
	resetPasswordKey: { type: String, hidden: true },
	verifyEmailKey: { type: String, hidden: true },
}, '权限', {
	isAdmin: { type: Boolean, label: '访问后台', index: true },
	isAuthor: { type: Boolean, label: '发表文章', index: true },
	isVerified: { type: Boolean, label: '经过验证的邮箱地址' }
})

// Provide access to Keystone
User.schema.virtual('canAccessKeystone').get(function() {
	return this.isAdmin;
})
User.schema.virtual('canAccessBlog').get(function() {
	return this.isAdmin || this.isAuthor;
})

User.schema.methods.verifyEmail = function(callback) {
	
	var user = this;
	
	user.verifyEmailKey = keystone.utils.randomString([16,24]);
	
	user.save(function(err) {
		
		if (err) return callback(err);
		
		new keystone.Email('verify-email').send({
			user: user,
			link: `/verify-email/${user.verifyEmailKey}`,
			subject: '激活会员账号',
			to: user.email,
			from: {
				name: '大教授',
				email: 'dajiaoshou@126.cn'
			}
		}, callback);
		
	});
	
}

User.schema.methods.resetPassword = function(callback) {
	
	var user = this;
	
	user.resetPasswordKey = keystone.utils.randomString([16,24]);
	
	user.save(function(err) {
		
		if (err) return callback(err);
		
		new keystone.Email('forgotten-password').send({
			user: user,
			link: `/reset-password/${user.resetPasswordKey}`,
			subject: '重置会员账号密码',
			to: user.email,
			from: {
				name: '大教授',
				email: 'dajiaoshou@126.cn'
			}
		}, callback);
		
	});
	
}

transform.toJSON(User,function(rtn) {
	if(this.photo && this.photo.filename) {
		rtn.photo.href = '/images/users/' + this.photo.filename
	}
	if(this.name.first && this.name.last) {
		rtn.fullName = this.name.first + ' ' + this.name.last
	}
});
User.defaultColumns = 'name, email, mobile, isAdmin'
User.register()

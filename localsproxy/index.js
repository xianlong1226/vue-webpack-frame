var target = "http://127.0.0.1:3000";

var proxy = {
	'/test': {
		target: target,
		changeOrigin: true,
		secure: false,
		headers: {
			// Cookie: true
		}
	}
}

function bypass(req, res, proxyOptions) {
	var colors = require('colors');
	//打印代理请求日志
	var proxylog = function (from, to, method) {
		console.log('[proxy] ' + colors.cyan.underline(from) + ' -> ' + colors.yellow.underline(to) + ' -> ' + colors.red.underline(method))
	}
	//打印普通日志
	var normallog = function(message){
		console.log('[log]' + colors.green(message));
	}

	console.log('========匹配到的url proxy配置=======');
	normallog(JSON.stringify(proxyOptions));
	console.log('========当前请求的url=======');
	normallog(req.url);

	//当前请求的url
	var url = req.url;
	//路由规则
	var ruleConfig = require('./rules.js')
	delete require.cache[require.resolve('./rules.js')]
	//从路由规则中查找匹配当前url的
	var matched = ruleConfig.rules.find(function (config) {
		if (config.url instanceof RegExp) {
			if (config.url.test(url)) {
				return true;
			}
		} else if (config.url === url.substring(0, url.indexOf('?'))) {
			return true;
		}

		return false;
	});
	console.log('========当前请求的url符合的rules=======');
	normallog(JSON.stringify(matched));

	//如果查找到符合的规则
	if (matched) {
		if (matched.local) {
			var localFilePath = 'localsproxy/data/' + req.url.replace(/\//g, '.').substring(1) + '.json';
			normallog('proxy rules 设置为直接返回本地文件 ' + localFilePath);
			return localFilePath;
		}

		normallog('proxy rules 设置为直接走代理请求');
		proxylog(req.url, proxyOptions.target + req.url, req.method);
		return false;
	}
}

Object.keys(proxy).forEach(function (key) {
	proxy[key].bypass = bypass;
});

module.exports = proxy;
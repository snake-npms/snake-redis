const redis = require('redis');
const {promisify} = require('util')

class Redis {
	static createClient (options) {
		let redisCli = redis.createClient(options)
		// proxy
		return new Proxy(redisCli, {
			get (target, prop) {
				if(target[prop]) {
					return promisify(target[prop]).bind(target);
				}
				return target[prop]
			}
		})
	}
}

module.exports = Redis

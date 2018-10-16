let redis = require('../index').createClient()
const assert = require('assert')
describe("test base", function () {
	it("base, should success", async () => {
		await redis.set('hello', 'world')
		let value = await redis.get('hello')
		assert( value === 'world', 'set fail')
	})
})

describe("test setnx", function () {
	it("setnx, should success", async () => {
		await redis.del('setnx')
		let value = await redis.setnx('setnx', 'world')
		assert( value === 1, 'set fail')
		value = await redis.setnx('setnx', 'world')
		assert( value === 0, 'set fail')
	})
})
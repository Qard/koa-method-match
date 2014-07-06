var methods = require('methods')

module.exports = method

function method (method, fn) {
	return function* (next) {
		if (this.method.toLowerCase() === method.toLowerCase()) {
			yield* fn.call(this, next)
		} else {
			yield* next
		}
	}
}

methods.forEach(function (name) {
	method[name] = function (fn) {
		return method(name, fn)
	}
})

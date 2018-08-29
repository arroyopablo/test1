const isPrime = require('prime-number')
const arrayGenerator = require('array-generator')

var doSomething = function(n){
	var a = [];
	if(isPrime(n)) {
		a = arrayGenerator(n, 0, n);	
	}
	return a;
}

module.exports = doSomething;

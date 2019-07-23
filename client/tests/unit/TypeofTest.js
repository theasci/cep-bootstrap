const assert = require('chai').assert;

describe('typeof', function() {
	it('null is object', function(){
		assert.strictEqual(typeof(null), 'object');
	});
	it('undefined is undefined', function(){
		assert.strictEqual(typeof(undefined), 'undefined');
	});	
	it('0 is number', function(){
		assert.strictEqual(typeof(0), 'number');
	});	
	it('1 is number', function(){
		assert.strictEqual(typeof(1), 'number');
	});	
	it('NaN is number', function(){
		assert.strictEqual(typeof(NaN), 'number');
	});	
	it('Infinity is number', function(){
		assert.strictEqual(typeof(Infinity), 'number');
	});
	it('false is boolean', function(){
		assert.strictEqual(typeof(false), 'boolean');
	});
	it('true is boolean', function(){
		assert.strictEqual(typeof(true), 'boolean');
	});
	it('empty string is string', function(){
		assert.strictEqual(typeof(''), 'string');
	});
	it('non empty string is string', function(){
		assert.strictEqual(typeof('0'), 'string');
	});
	it('{} is object', function(){
		assert.strictEqual(typeof({}), 'object');
	});
	it('[] is object', function(){
		assert.isTrue(Array.isArray([]));
		assert.strictEqual(typeof([]), 'object');
	});
	it('function is function', function(){
		assert.strictEqual(typeof(function() {}), 'function');
	});
	it('void(0) is undefined', function(){
		assert.strictEqual(typeof(void(0)), 'undefined');
	});
});

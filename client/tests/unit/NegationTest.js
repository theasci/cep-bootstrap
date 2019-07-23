const assert = require('chai').assert;

describe('negation (!) is true for', function() {
	it('null', function(){
		assert.isTrue(!null);
	});
	it('undefined', function(){
		assert.isTrue(!undefined);
	});	
	it('0', function(){
		assert.isTrue(!0, true);
	});
	it('NaN', function(){
		assert.isTrue(!NaN);
	});
	it('false', function(){
		assert.isTrue(!false);
	});
	it('empty string', function(){
		assert.isTrue(!'');
	});
});

describe('negation (!) is false for', function() {
	it('Infinity', function(){
		assert.isFalse(!Infinity);
	});
	it('true', function(){
		assert.isFalse(!true);
	});
	it('nonempty string', function(){
		assert.isFalse(!'0');
	});

});


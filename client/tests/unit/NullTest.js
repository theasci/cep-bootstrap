const assert = require('chai').assert;

describe('null has equality (==) to', function() {
	it('null', function(){
		assert.isTrue(null == null);
	});
	it('undefined', function(){
		assert.isTrue(null == undefined);
	});
});

describe('null has inequality (!=) to', function() {
	it('0', function(){
		assert.isTrue(null != 0);
	});
	it('NaN', function(){
		assert.isTrue(null != NaN);
	});
	it('false', function(){
		assert.isTrue(null != false);
	});
	it('empty string', function(){
		assert.isTrue(null != '');
	});
});

describe('null has strict equality (===) to', function() {
	it('strictly equal to null', function(){
		assert.isTrue(null === null);
	});
});

describe('null has strict inequality (!==) to', function() {
	it('undefined', function(){
		assert.isTrue(null !== undefined);
	});	
	it('0', function(){
		assert.isTrue(null !== 0);
	});
	it('NaN', function(){
		assert.isTrue(null !== NaN);
	});
	it('false', function(){
		assert.isTrue(null !== false);
	});
	it('empty string', function(){
		assert.isTrue(null !== '');
	});
});

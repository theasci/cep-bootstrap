const assert = require('chai').assert;

describe('undefined has equality (==) to', function() {
	it('null', function(){
		assert.isTrue(undefined == null);
	});
	it('undefined', function(){
		assert.isTrue(undefined == undefined);
	});	
});

describe('undefined has inequality (!=) to', function() {
	it('0', function(){
		assert.isTrue(undefined != 0);
	});
	it('NaN', function(){
		assert.isTrue(undefined != NaN);
	});
	it('false', function(){
		assert.isTrue(undefined != false);
	});
	it('empty string', function(){
		assert.isTrue(undefined != '');
	});
});

describe('undefined has strict equality (===) to', function() {
	it('undefined', function(){
		assert.isTrue(undefined === undefined);
	});	
});

describe('undefined has strict inequality (!==) to', function() {
	it('null', function(){
		assert.isTrue(undefined !== null);
	});
	it('0', function(){
		assert.isTrue(undefined !== 0);
	});
	it('NaN', function(){
		assert.isTrue(undefined !== NaN);
	});
	it('false', function(){
		assert.isTrue(undefined !== false);
	});
	it('empty string', function(){
		assert.isTrue(undefined !== '');
	});
});

const assert = require('chai').assert;

function throwError(message) {
	throw new Error(message);
}

describe('ternary (?) is truthy on', function() {
	it('true', function(){
		true ? assert(true) : throwError('true is falsey');
	});
	it('nonempty string', function(){
		'0' ? assert(true) : throwError('nonempty string is falsey');
	});
	it('Infinity is truthy', function(){
		Infinity ? assert(true) : throwError('Infinity is falsey');
	});
});

describe('ternary (?) is falsey on', function() {
	it('null', function(){
		null ? throwError('null is truthy') : assert(true);
	});
	it('undefined', function(){
		undefined ? throwError('undefined is truthy') : assert(true);
	});	
	it('0', function(){
		0 ? throwError('0 is truthy') : assert(true);
	});
	it('NaN', function(){
		NaN ? throwError('NaN is truthy') : assert(true);
	});
	it('false', function(){
		false ? throwError('false is truthy') : assert(true);
	});
	it('empty string', function(){
		'' ? throwError('empty string is truthy') : assert(true);
	});
});

describe('if conditional is truthy on', function() {
	it('true', function(){
		if(true) { assert(true); }
		else { throwError('true is falsey'); }
	});
	it('nonempty string', function(){
		if('0') { assert(true); }
		else { throwError('nonempty string is falsey'); }
	});
	it('Infinity', function(){
		if(Infinity) { assert(true); }
		else { throwError('Infinity is falsey'); }
	});
});

describe('if conditional is falsey on', function() {
	it('null', function(){
		if(null) { throwError('null is truthy'); }
		else { assert(true); }
	});
	it('undefined', function(){
		if(undefined) { throwError('undefined is truthy'); }
		else { assert(true); }
	});	
	it('0', function(){
		if(0) { throwError('0 is truthy'); }
		else { assert(true); }
	});
	it('NaN', function(){
		if(NaN) { throwError('NaN is truthy'); }
		else { assert(true); }
	});
	it('false', function(){
		if(false) { throwError('false is truthy'); }
		else { assert(true); }
	});
	it('empty string', function(){
		if('') { throwError('empty string is truthy'); }
		else { assert(true); }
	});
});

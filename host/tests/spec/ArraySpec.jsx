//@include '../../lib/polyfill/Array.js'

describe('Array', function() {
	describe('#indexOf()', function() {
		it('should return -1 when the value is not present', function() {
			expect([1,2,3].indexOf(4)).toEqual(-1);
		});
		it('should return 0 when the value is first', function() {
			expect([4,5,6].indexOf(4), 0);
		});
	});
});

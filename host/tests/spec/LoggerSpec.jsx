describe('Logger', function () {
	it('has a 6 levels', function () {
		expect(levels.length).toEqual(6);
	});
	it('has a severity level', function () {
		expect(severity).toEqual('DEBUG');
	});
});

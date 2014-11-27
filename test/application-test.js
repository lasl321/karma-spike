(function () {
    describe('application', function () {
        it('should do something', function () {
            expect(true).toBe(true);

            expect(window.foo('Luis')).toBeDefined();

            expect(false).toBeFalsy();
            expect(false).toBeFalsy();
        });
    });
} ());


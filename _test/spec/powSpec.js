describe("pow(num, exp) function testring ", function() {
    describe("Normal case", function() {

        it("Zero exp", function() {
            expect(pow(256, 0)).toEqual(1);
        });

        it("Positive int num and exp", function() {
            expect(pow(9, 3)).toEqual(9 * 9 * 9);
        });

        it("Negative int num", function() {
            expect(pow(-9, 3)).toEqual(-9 * 9 * 9);
        });

        it("Negative int exp", function() {
            expect(pow(9, -2)).toEqual(1 / (9 * 9));
        });

        it("Positive float num", function() {
            expect(pow(1.1, 3)).toEqual(1.1 * 1.1 * 1.1);
        });
    });

    describe("Exception handling", function() {
        it("Float exponent", function() {
            expect(pow(123, 1.1)).toEqual(undefined);
        });

        it("NaN or null parameters", function() {
            expect(pow(null, 'hello')).toBeNaN();
        });

        it("Zero to Negative exp", function() {
            expect(pow(0, -20)).toEqual(Infinity);
        });
    });
});

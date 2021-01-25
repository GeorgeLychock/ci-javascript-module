describe("FizzBuzz", function() {
    describe("Entry Tests", function() {

        it("should return error that entry is not a valid number", function() {
            expect(fizzBuzz(-2)).toBe("Sorry. you must supply a valid number!");
        });
        it("should return FizzBuzz if entry is divisible by 3 and 5", function() {
            expect(fizzBuzz(15)).toBe("FizzBuzz");
        });
        it("should return Fizz if entry is divisible by 3", function() {
            expect(fizzBuzz(27)).toBe("Fizz");
        });
        it("should return Fizz if entry is divisible by 5", function() {
            expect(fizzBuzz(25)).toBe("Buzz");
        });
        it("should return Entry if entry is not divisible by 3 or 5", function() {
            expect(fizzBuzz(29)).toBeDefined();
        });

    });
});
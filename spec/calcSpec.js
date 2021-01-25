describe("DrinkAbout", function() {
    describe("Age tests", function() {

        it("should return error that age is not a valid age", function() {
            expect(whatCanIDrink(-2)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });

        it("should return Drink Toddy if age is 1 or more and less than 14", function() {
            expect(whatCanIDrink(7)).toBe("Drink Toddy");
        });

        it("should return Drink Coke if age is 14 or higher and less than 18", function() {
            expect(whatCanIDrink(15)).toBe("Drink Coke");
        });

        it("should return Drink Beer if age is 18 or higher and less than 21", function() {
            expect(whatCanIDrink(19)).toBe("Drink Beer");
        });

        it("should return Drink Whisky if age is 21 or higher and less than 130", function() {
            expect(whatCanIDrink(35)).toBe("Drink Whisky");
        });

        it("should return error that age is not a valid age", function() {
            expect(whatCanIDrink(137)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });

    });
});
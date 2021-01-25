describe("DrinkAbout", function() {
    describe("Age tests", function() {

        it("should return error that age is not a valid age", function() {
            expect(whatCanIDrink(-2)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });

        it("should return Drink Toddy if age is more than 1 and less than 14", function() {
            expect(whatCanIDrink(13)).toBe("Drink Toddy");
        });

    });
});
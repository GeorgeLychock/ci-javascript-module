describe("Calculator", function() {
    describe("Addition tests", function() {

        it("should return 42", function() {
            expect(addition(20, 22)).toBe(42);
        });

        it("should return an error if we don't supply two numbers", function() {
            spyOn(window, "alert");
            addition("Hitchhikers", "Guide");
            expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    });
});
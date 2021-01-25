
function fizzBuzz(entry) {
    if (typeof (entry) == "number" && (entry < 0)) {
        return ("Sorry. you must supply a valid number!");
    } else if (entry % 3 === 0 && entry % 5 === 0) {
        return "FizzBuzz";
    } else if (entry % 3 === 0) {
        return "Fizz";
    } else if (entry % 5 === 0) {
        return "Buzz";
    } else {
        return entry;
    }
}



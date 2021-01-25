function whatCanIDrink(age) {
    if (typeof (age) == "number" && (age <= 0)) {
        return ("Sorry. I can’t tell what drink because that age is incorrect!");
    } else if (typeof (age) == "number" && (age < 14)) {
        return ("Drink Toddy");
    } else if (typeof (age) == "number" && (age < 18) && (age >= 14)) {
        return ("Drink Coke");
    } else if (typeof (age) == "number" && (age < 21) && (age >= 18)) {
        return ("Drink Beer");
    } else if (typeof (age) == "number" && (age < 130) && (age >= 21)) {
        return ("Drink Whisky");
    } else {
        return ("Sorry. I can’t tell what drink because that age is incorrect!");
    }
}



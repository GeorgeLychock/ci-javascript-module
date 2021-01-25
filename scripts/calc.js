function whatCanIDrink(age) {
    if (typeof(age) == "number" && (age < 0)) {
        return ("Sorry. I can’t tell what drink because that age is incorrect!");
    } else if (typeof(age) == "number" && (age < 14)) {
        return ("Drink Toddy");
    } 
 }



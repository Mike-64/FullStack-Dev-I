function hasFriday13(month, year) {
    const date = new Date(year, month - 1, 13);
    if (date.getDay() == 5) {
        console.log("It's Friday the 13th!");
    } else {
        console.log("Crystal lake");
    }
}
hasFriday13(3, 2020);
hasFriday13(10, 2016);
hasFriday13(4, 1995);

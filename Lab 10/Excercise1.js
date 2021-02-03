function halloween(date) {
    if (date.getMonth() == 9 && date.getDate() == 31) {
        console.log("Happy Halloween!");
    } else {
        console.log("Just another day");
    }
}

halloween(new Date("2013/10/31"));
halloween(new Date("2020/09/31"));
halloween(new Date("1991/10/31"));

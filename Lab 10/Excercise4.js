const findCase = function (text = "sdfd") {
    if (text == text.toLowerCase()) {
        console.log("lower");
    } else if (text == text.toUpperCase()) {
        console.log("upper");
    } else {
        console.log("mixed");
    }
};

findCase("sdfsdf");
findCase("SHOUT!");
findCase("SDfnsj");

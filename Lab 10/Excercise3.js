const starWarsRelations = function (name) {
    switch (name.toLowerCase()) {
        case "anakin":
            console.log("Luke I'm Your father");
            break;
        case "darth vader":
            console.log("Luke I'm Your father");
            break;
        case "leia organa":
            console.log("Luke I'm Your sister");
            break;
        case "padme amidala":
            console.log("Luke I'm Your mother");
            break;
        case "luke":
            console.log("Luke I'm You");
            break;
        default:
            console.log("May the force be with you! ");
            break;
    }
};

starWarsRelations("Leia Organa");
starWarsRelations("anakin");
starWarsRelations("padme amidala");
starWarsRelations("Luke");

var orderItem;
orderItem = window.prompt("Would you like Coffee,Tea or Water?");

switch (orderItem.toLowerCase()) {
    case "coffee":
        console.log("The order item is coffee.");
        console.log("Total is $2.50");
        break;
    case "tea":
        console.log("The order item is tea.");
        console.log("Total is $1.50");
        break;
    case "water":
        console.log("The order item is water.");
        console.log("Total is $3.50");
        break;
    default:
        console.log("The", orderItem, "is currently unavailable");
}

function DisplayMessage(message) {
    if (message == null) {
        console.log("message is null");
    } else if (message == "") {
        console.log("message is empty");
    } else {
        console.log(message);
    }
}

DisplayMessage("Hey !!");
DisplayMessage("There is a text");
DisplayMessage("");
DisplayMessage();

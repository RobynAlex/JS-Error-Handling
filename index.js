"use script";


class InvalidNumberError extends Error {
    name = "InvalidNumberError";

    constructor(message, reason) {
        super.message;

        this.reason = reason;
    }
}

function getUserInput() {
    let input = parseInt(prompt("Provide an even number:"));

    try {
        if (isNaN(input) || input % 2 == 1) {
            let reason;
            if (isNaN(input)) {
                reason = "Number cannot be converted, type it in number format."
            } else {
                reason = "Number is odd.";
            }
            throw new InvalidNumberError("You didn't provide an even number.");
        } else {
            alert("You passed the test, Good Work!");
        }
    } catch (error) {
        if (error.name == "InvalidNumberError") {
            alert(error.reason);
            getUserInput();
        } else {
            alert("Internal Error. Try Again Later.");
        }
    }
}


getUserInput(4);
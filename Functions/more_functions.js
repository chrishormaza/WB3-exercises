"use strict";

function displayMailingLabel(name, address, city, state, zip){
    console.log(name);
    console.log(address);
    console.log(`${city}, ${state} ${zip}`);

}

function addNumbers(num1, num2){
    let result = num1 + num2;
    let message = `${num1} + ${num2} = ${result}`

    console.log(message);
}

function displayReceipt(totalDue, amountPaid){
    console.log("Total Due: " + totalDue);
    console.log("Amount Paid " + amountPaid);

    let changeDue = amountPaid - totalDue;

    console.log("Change Due: " + changeDue.toFixed(2));
}

displayMailingLabel("Bob", "123", "east village", "NeY", "11104");
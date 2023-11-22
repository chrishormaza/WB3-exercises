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
    let changeDue = amountPaid - totalDue;

    if (amountPaid < totalDue){
        let amountShort = totalDue - amountPaid;
        console.log("You still owe $" + amountShort.toFixed(2) + ".");
    }
    else{
        console.log("Total Due: " + totalDue);
        console.log("Amount Paid " + amountPaid);
        console.log("Change Due: " + changeDue.toFixed(2));
    }
}

displayMailingLabel("Bob", "123", "east village", "NeY", "11104");

addNumbers(28, 69);

displayReceipt(98.98, 100);
displayReceipt(50, 50);
displayReceipt(100, 98.99);
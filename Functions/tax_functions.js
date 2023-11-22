"use strict";

function getSocSecTax(grossPay) {
    const taxRate = 0.062;
    let getSocSecTax = grossPay * taxRate;

    return getSocSecTax.toFixed(2);
}

function getMedicareTax(grossPay) {
    const medicareTaxRate = 0.0145;
    const medicareTax = grossPay * medicareTaxRate;

    return medicareTax.toFixed(2);
}

function getFederalTax(grossPay, code) {
    let taxRate; 
                   
    if (code == 0) {             
        taxRate = 0.23;
    }
    else if (code == 1) {        
        taxRate = 0.21;
    }
    else if (code == 2) {
        taxRate = 0.195;
    }
    else if (code == 3) {
        taxRate = 0.185;
    }

    else if (code >= 4) {        
        taxRate = 0.18 - ((code - 4) * 0.005)
    }
    let result = taxRate * grossPay;
    return result.toFixed(2);
}

console.log("Person 1 social security tax: $" + getSocSecTax(750));
console.log("Person 2 social security tax: $" + getSocSecTax(1550));
console.log("Person 3 social security tax: $" + getSocSecTax(1100));

console.log("Person 1 medicare tax: $" + getMedicareTax(750));
console.log("Person 2 medicare tax: $" + getMedicareTax(1550));
console.log("Person 3 medicare tax: $" + getMedicareTax(1100));

console.log("Person 1 federal tax rate: $" + getFederalTax(750, 0));
console.log("Person 2 federal tax rate: $" + getFederalTax(1550, 2));
console.log("Person 3 federal tax rate: $" + getFederalTax(1100, 6));
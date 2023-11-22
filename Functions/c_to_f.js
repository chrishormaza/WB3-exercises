"use strict";

function convertCtoF(celcius){
    let currentTemp = celcius;
    let fahrenheitTemp = 9 / 5 * (currentTemp) + 32;

    console.log(fahrenheitTemp);
}

convertCtoF(100);
convertCtoF(45);
convertCtoF(19);
convertCtoF(0);
convertCtoF(-7);
convertCtoF(-40);
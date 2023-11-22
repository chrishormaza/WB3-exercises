"use strict";

function convertFtoC(fahrenheit){
    let currentTemp = fahrenheit;
    let celciusTemp = (currentTemp - 32) * 5 / 9;

    console.log(celciusTemp);
}

convertFtoC(212);
convertFtoC(90);
convertFtoC(72);
convertFtoC(32);
convertFtoC(0);
convertFtoC(-40);
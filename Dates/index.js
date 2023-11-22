"use strict";

const getDateBtn = document.getElementById("getDateBtn");
const dateInputValue = document.getElementById("dateInputValue");
const dateMessage = document.getElementById("dateMessage");

window.onload = init;

function init() {
    getDateBtn.onclick = getDateBtnClicked;
}

function getDateBtnClicked() {
let userEnteredThisDate = dateInputValue.value;
let userDate = new Date(userEnteredThisDate);

dateMessage.innerHTML = (userDate.toString());
}

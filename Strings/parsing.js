"use strict";

function parseAndDisplayName(fullName) {
    let spaceIndex = fullName.indexOf(" ");
    let firstName = fullName.slice(0, spaceIndex);
    let lastName = fullName.slice(spaceIndex + 1);

    console.log(`Name: ${fullName}`);
    console.log(`First name: ${firstName}`);
    console.log(`Last name: ${lastName}`);
}

parseAndDisplayName("Christian Hormaza");
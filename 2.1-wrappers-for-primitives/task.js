"use strict";

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    let sum = amount - contribution;
    percent = percent/100;
    let now = new Date();
    let n = (date.getFullYear() - now.getFullYear())*12 + (date.getMonth() - now.getMonth());

    let totalAmount = sum*((percent/12) + (percent/12)/Math.pow((1+(percent/12)),n)-1);
    return totalAmount;
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    if (name.length > 0) {
        console.log(`Привет, меня зовут ${name}`)
    } else {
        console.log(`Привет, меня зовут Аноним`);
    }
    //return greeting;
}
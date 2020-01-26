"use strict";

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c) {
    let d = b*b - 4*a*c;
    let x = [];

    if (d > 0) {
        x = [-b + Math.sqrt(d)/2*a, -b - Math.sqrt(d)/2*a]
    } else if (d == 0) {
        x = [-b/2*a]
    } else {
        x = ["нет корней"]
    }
    return x;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    let sum = 0;
    if (marks.length > 5) {
        marks.splice(5);
    }
    for (let i = 0; i < marks.length; i++) {
       sum += marks[i];
    }
    marks = sum/marks.length;

    return marks;

}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    let day = new Date;
    let year = day.getFullYear();
    const yearDrink = dateOfBirthday.getFullYear();
    if (year - yearDrink > 18) {
        console.log(`Не желаете ли олд-фэшн  ${name}`);
    } else {
        console.log(`Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`);
    }

}
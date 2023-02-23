let body = document.querySelector("body");
let divContainer = document.createElement("div");
let number1 = document.createElement("div");
let number2 = document.createElement("div");
let number3 = document.createElement("div");
let number4 = document.createElement("div");
let number5 = document.createElement("div");
let number6 = document.createElement("div");
let number7 = document.createElement("div");
let divButton = document.createElement("div");
let numberP1 = document.createElement("p");
let numberP2 = document.createElement("p");
let numberP3 = document.createElement("p");
let numberP4 = document.createElement("p");
let numberP5 = document.createElement("p");
let numberP6 = document.createElement("p");
let numberP7 = document.createElement("p");
let buttonClick = document.createElement("button");
divContainer.className = "container";
body.append(divContainer);
body.append(divButton);
divButton.append(buttonClick)
number1.append(numberP1);
number2.append(numberP2);
number3.append(numberP3);
number4.append(numberP4);
number5.append(numberP5);
number6.append(numberP6);
number7.append(numberP7);
number1.className = "number";
number2.className = "number";
number3.className = "number";
number4.className = "number";
number5.className = "number";
number6.className = "number";
number7.className = "number";
divContainer.append(number1, number2, number3, number4, number5, number6, number7)
numberP6.innerText = "+";
buttonClick.innerText = "Oyuna başla";

buttonClick.addEventListener("click", () => {
    for (var i = 0; i < 10; i++) {
        setTimeout(() => {
            numberP1.innerText = Math.floor(Math.random() * 10);
        }, i * 50)
    }
    for (var i = 0; i < 20; i++) {
        setTimeout(() => {
            numberP2.innerText = Math.floor(Math.random() * 10);
        }, i * 50)
    }
    for (var i = 0; i < 30; i++) {
        setTimeout(() => {
            numberP3.innerText = Math.floor(Math.random() * 10);
        }, i * 50)
    }
    for (var i = 0; i < 45; i++) {
        setTimeout(() => {
            numberP4.innerText = Math.floor(Math.random() * 10);
        }, i * 50)
    }
    for (var i = 0; i < 60; i++) {
        setTimeout(() => {
            numberP5.innerText = Math.floor(Math.random() * 10);
        }, i * 50)
    }
    for (var i = 0; i < 80; i++) {
        setTimeout(() => {
            numberP7.innerText = Math.floor(Math.random() * 10);
        }, i * 50)
    }

})

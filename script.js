console.log("Hello, World!");
const Name = "Jose Charls M. Busico"; 
console.log("Name is: " + Name); 

let Age = 20; 
console.log("Age is: " + Age); 
const phoneNumber = "09166138837";
console.log("Number is: " + phoneNumber);
let Address = "Victorias City, Philippines"; 
console.log("Address is: " + Address); 

function greet(name) {
    return `Good morning, ${name}`;
}
    console.log(greet("charls"));

function mdas(firstNumber, secondNumber) {
    console.log(`
${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}
${firstNumber} / ${secondNumber} = ${(firstNumber / secondNumber).toFixed(4)}
${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}
${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
}

mdas(10, 2);

const heading = document.querySelector("h1")
console.log(heading);


const contactHeading = document.querySelector("#contact h2");
console.log(contactHeading);


const servicesHeading = document.querySelector("#services h2");
console.log(servicesHeading);

const projectHeading = document.querySelector("#projects h2");
console.log(projectHeading);




//Text Context
heading.textContent = "My portfolio";
contactHeading.textContent = "Let's Connect!";
projectHeading.textContent = "My Projects";

heading.addEventListener("click", function () {
    heading.style.color = "red";
});

const toggleButton = document.querySelector('#switch');
const body = document.querySelector('body');
let isOff = false;

toggleButton.addEventListener("click", function () {
    isOff = !isOff;

    if (isOff) {
        body.style.setProperty("background-color", "black", "important");
        body.style.setProperty("color", "white", "important");
    } else {
        body.style.setProperty("background-color", "#f4f7f4", "important");
        body.style.removeProperty("color");


    }
});

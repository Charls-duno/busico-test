console.log("Hello, World!");
const Name = "Jose Charls M. Busico"; 
console.log("Name is: " + Name); 

let Age = 20; 
console.log("Age is: " + Age); 
let Number = 09166138837; 
console.log("Number is: " + Number); 
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



const heading = document.querySelector("h1");
console.log(heading);

const contact = document.querySelector("#contact h2");
console.log(contact);
const services = document.querySelector("#services h2");
console.log(services);

heading.textContent = "My portfolio";
contact.textContent = "Let's Connect!";
services.textContent = "My Projects";
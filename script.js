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

const heading = document.querySelector("h1")
console.log(heading);

const contactHeading = document.querySelector("#contact h2");
console.log(contactHeading);

const serviceHeading = document.querySelector("#services h2");
console.log(serviceHeading);

const projectHeading = document.querySelector("#projects h2");
console.log(projectHeading);

//Text Context

heading.textContent = "My portfolio";
contactHeading.textContent = "Let's Connect!";
serviceHeading.textContent = "My Services";
projectHeading.textContent = "My Projects";

//.style
heading.style.color = "purple";
heading.style.backgroundColor = "yellow";
contactHeading.style.color = "purple";
serviceHeading.style.color = "purple";
projectHeading.style.color = "purple";

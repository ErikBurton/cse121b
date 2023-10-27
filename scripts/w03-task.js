/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */

/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

// Event handler for "Add Numbers" button
function addNumbers() {
    // Get values from input fields
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    // Calculate the sum using 'add' function and displays it in the input field
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

// Add a click event listener to "Add Numbers" button
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function subtract(number1, number2) {
    return number1 - number2;
}

// Event handler for "Subtract Numbers" button
function subtractNumbers() {
    // Get values from input fields
    let subtract1 = Number(document.querySelector('#subtract1').value);
    let subtract2 = Number(document.querySelector('#subtract2').value);

     // Calculate the sum using 'subtract' function and displays it in the input field
    document.querySelector('#difference').value = subtract(subtract1, subtract2);
}

 // Add a click event listener to the "Subtract Numbers" button
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => {
    return number1 * number2;}

// Event handler for the "Multiply Numbers" button
const multiplyNumbers = () => {
    // Get the values from input fields
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    
    // Calculate the product using the "multiply" function and display it in an input field
    document.querySelector('#product').value = multiply(factor1, factor2);
}
// Add a click event listener to the "Multiply Numbers" button
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => {
    return number1 / number2;
}

// Event handler for the "Divide Numbers" button
const divideNumbers = () => {
    // Get the values from input fields
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);

    // Calculate the quotient using the "divide" function and display it with two decimal places
    let quotient = divide(dividend, divisor).toFixed(2);
    document.querySelector('#quotient').value = quotient
}

// Add a click event listener to the "Divide Numbers" button
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);


/* Decision Structure */
// Get references to HTML elements
const subtotalInput = document.getElementById('subtotal');
const memberShipCheckbox = document.getElementById('member');
const calculateTotalButton = document.getElementById('getTotal');
const totalSpan = document.getElementById('total');

// Add a click event listener to the "Get Total Due" button
calculateTotalButton.addEventListener('click', () => {

    // Get the subtotal value entered by the user
    const subtotal = parseFloat(subtotalInput.value);

    // Check if the membership checkbox is checked
    const isMembershipChecked = memberShipCheckbox.checked;
    // Apply a 15% discount if the checkbox is checked
    const discount = isMembershipChecked ? 0.15 : 0;

    // Calculate the total due and display it with two decimal places
    const totalDue = subtotal - subtotal * discount;
    totalSpan.textContent = totalDue.toFixed(2);


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const sourceArray = [];
for (let i = 1; i <= 13; i++)
{
    sourceArray.push(i);
}

const arrayElement = document.getElementById('array');
arrayElement.textContent = sourceArray.join(', ');

/* Output Odds Only Array */
const oddNumbers = sourceArray.filter(function (number) {
    return number % 2 !== 0;
});
const oddElement = document.getElementById('odds');
oddElement.textContent = oddNumbers.join(', ');

/* Output Evens Only Array */
const evenNumbers = sourceArray.filter(function (number) {
    return number % 2 === 0;
});
const evenElement = document.getElementById('evens');
evenElement.textContent = evenNumbers.join(', ');

/* Output Sum of Org. Array */
const sumOfArray = sourceArray.reduce(function (acc, curr) {
    return acc + curr;
}, 0);
const sumElement = document.getElementById('sumOfArray');
sumElement.textContent = sumOfArray;

/* Output Multiplied by 2 Array */
const multipliedArray = sourceArray.map(function (number) {
    return number * 2;
});
const multipliedElement = document.getElementById('multiplied');
multipliedElement.textContent = multipliedArray.join(', ');

/* Output Sum of Multiplied by 2 Array */
const sumOfMultiplied = multipliedArray.reduce(function (acc, curr) {
    return acc + curr;
}, 0);
const sumOfMultipliedElement = document.getElementById('sumOfMultiplied');
sumOfMultipliedElement.textContent = sumOfMultiplied;
});


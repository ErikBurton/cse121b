/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Erik Burton';
let currentYear = new Date().getFullYear();
const profilePicture = 'images/erikb_profile.jpeg';


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');

const imageElement = document.querySelector('img');


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);


/* Step 5 - Array */
// An array of favorite foods.
const favoriteFoods = ['Steak ,', ' Shrimp,', ' Burritos,', ' Spaghetti,', ' Sushi'];

// Loop and display original array.
for (let i = 0; i < favoriteFoods.length; i++) {
    foodElement.innerHTML += `${favoriteFoods[i]}`;
}
foodElement.innerHTML += '<br>';

// Add new favorite item. 
favoriteFoods.push(', Tacos');
// Display updated array.
for (let i = 0; i < favoriteFoods.length; i++) {
    foodElement.innerHTML += `${favoriteFoods[i]}`;
}
foodElement.innerHTML += '<br>';

// Remove first item.
favoriteFoods.shift();

// Display array with item removed.
for (let i = 0; i < favoriteFoods.length; i++) {
    foodElement.innerHTML += `${favoriteFoods[i]}`;
}
foodElement.innerHTML += '<br>';

// Remove last item.
favoriteFoods.pop();

// Display final array.
for (let i = 0; i < favoriteFoods.length; i++) {
    foodElement.innerHTML += `${favoriteFoods[i]}`;
}
foodElement.innerHTML += '<br>';







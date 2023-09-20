/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Erik Burton';
let currentYear = new Date().getFullYear();
const profilePicture = 'images/erikb_profile.jpeg';


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
var imageElement = document.querySelector('#profilePicture');


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);


/* Step 5 - Array */
var favoriteFoods = ['Sushi', 'Steak', 'Salmon', 'Salad', 'Yellow Curry', 'Burritos'];
var newFavoriteFood = 'Tacos';
favoriteFoods.push(newFavoriteFood);
document.getElementById('food').textContent = favoriteFoods.join('<br>');
favoriteFoods.shift();
document.getElementById('food').textContent = favoriteFoods.join('<br>');
favoriteFoods.pop();
document.getElementById('food').textContent = favoriteFoods.join('<br>');






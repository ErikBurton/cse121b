/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Erik Burton",
    photo: 'images/erikb_profile.jpeg',
    favoriteFoods: [
        'Steak',
        'Shrimp',
        'Burritos',
        'Spaghetti',
        'Sushi'
        ],
    hobbies: [
        'Drums',
        'Muscle Cars',
        'Programming'
    ],

    placesLived: [
        
    ]

};



/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: 'Colton, California',
        length: '40 years',
    },
    {
        place: 'St. George, Utah',
        length: '4 years',
    },
    {
        place: 'St. Augustine, Florida',
        length: '4 years'
    },

);


/* DOM Manipulation - Output */


/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
let photoElement = document.querySelector("#photo");
photoElement.src = myProfile.photo;
photoElement.alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});


/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});



/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;

    let dd = document.createElement("dd");
    dd.textContent = place.length;

    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
});




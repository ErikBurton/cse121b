/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.getElementById('');

const templelist = [];


/* async displayTemples Function */

const displayTemples = async (temples) => {
    templesElement.innerHTML = ''; // Clear exisiting content

    temples.forEach((temple) => {
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        h3.textContent = temple.templeName;

        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.location;

        article.appendChild(h3);
        article.appendChild(img);

        templesElement.appendChild(article);
    });
};




/* async getTemples Function using fetch()*/

const getTemples = async () => {
    try {
        const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
        const data = await response.json();
        templelist = data;
        displayTemples(templelist);
    }   catch (error) {
        console.error('Error fetching temple data:', error);
    }
};


/* reset Function */

const reset = () => {
    templesElement.innerHTML = '';
};


/* sortBy Function */



getTemples();

/* Event Listener */

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


/* reset Function */


/* sortBy Function */



getTemples();

/* Event Listener */

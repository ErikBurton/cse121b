/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.getElementById('temples');

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

const sortBy = (temples) => {
    reset();
    const filter = document.getElementById('sortBy').value;

    switch (filter) {
        case 'utah':
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        case 'notutah':
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        case 'older':
            displayTemples(temples.filter(temple => new Date(temeple.dedicatedDate) < new Date(1950, 0, 1)));
            break;
            default:
                displayTemples(temples);
    }
};


/* Event Listener */

const sortByElement = document.querySelector('#sortBy').addEventListener('change', () => {
    sortBy(templelist);
});

getTemples();

console.log(templelist);

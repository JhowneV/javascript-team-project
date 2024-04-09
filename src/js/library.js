//FT 13
// Function to handle logo click event
        function handleLogoClick() {
            // Hide the logo
            document.getElementById('film').style.display = 'none';
            // Show the main page
            document.getElementById('filmtitle').style.display = 'block';
        }

        // Add click event listener to the logo
document.getElementById('film').addEventListener('click', handleLogoClick);

//FT14
const watchedFilms = document.getElementById()

const fetch = require();

const url = 'https://api.themoviedb.org/3/movie/movie_id/watch/providers';
const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));

// Function to render watched films
function showWatchedFilms() {
    const listContainer = document.getElementById('watched-films-list');
    
    // Clear previous content
    listContainer.innerHTML = '';

    // Check if there are watched films
    if (watchedFilms.length === 0) {
        listContainer.innerHTML = '<p>No watched films to show.</p>';
        return;
    }

    // Create a list element to hold the film titles
    const list = document.createElement('ul');
    
    watchedFilms.forEach(film => {
        const listItem = document.createElement('li');
        listItem.textContent = `${film.title} (${film.year})`;
        list.appendChild(listItem);
    });
    
    // Append the list to the container
    listContainer.appendChild(list);
}

// Set up the event listener for the watch button
document.getElementById('watch-button').addEventListener('click', showWatchedFilms);

        
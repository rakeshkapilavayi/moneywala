// Import content modules
import { loadHome } from './home.js';
import { loadAbout } from './about.js';

// DOM Elements
const contentDiv = document.getElementById('content');
const homeLink = document.getElementById('home-link');
const aboutLink = document.getElementById('about-link');

// Event Listeners
homeLink.addEventListener('click', () => {
    contentDiv.innerHTML = loadHome();
});

aboutLink.addEventListener('click', () => {
    contentDiv.innerHTML = loadAbout();
});

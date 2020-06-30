// Global variables
let url = window.location.href.toString();

// Function definitions
let showNavLocation = function (url) {

  if (url.includes('index')) {
    document.getElementById('home').classList.toggle('nav-locator');
  }

  else if (url.includes('projects')) {
    document.getElementById('projects').classList.toggle('nav-locator');
  }

  else if (url.includes('about')) {
    document.getElementById('about').classList.toggle('nav-locator');
  }
}

let placeFooter = function(url) {
  if (url.includes('index')) {
    document.getElementById('footer').classList.toggle('short-page-footer');
  }
}



// Indicate location by changing color of 1st level nav link
showNavLocation(url);

// Position footer on short pages
// placeFooter(url);

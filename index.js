window.scrollTo(0, 0);

window.addEventListener('scroll', function() {
    var field = document.getElementById('mouseField');
    if (window.scrollY > 0) {
        field.classList.add('hidden');
    } else {
        field.classList.remove('hidden');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    if (!window.location.hash) {
        window.scrollTo(0, 0);
    }

    var mouse = document.querySelector('.mouse');
    var nextSection = document.getElementById('about-navigator');

    mouse.addEventListener('click', function() {
        nextSection.scrollIntoView({ behavior: 'smooth' });
    });
});

const textDisplay = document.getElementById('text-target');
const phrases = ['Desarrollador Android', 'Técnico en sistemas', 'UI/UX Designer'];
let i = 0;
let j = 0; 
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function loop () {
  isEnd = false;
  textDisplay.innerHTML = currentPhrase.join('');

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
      textDisplay.innerHTML = currentPhrase.join('');
    }

    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j]);
      j--;
      textDisplay.innerHTML = currentPhrase.join('');
    }

    if (j === phrases[i].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;
      if (i === phrases.length) {
        i = 0;
      }
    }
  }
  setTimeout(loop, 120);
}


loop();

const navBar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
  navBar.classList.toggle('navbar-open');
  hamburger.classList.toggle('hamburger-open');
});

// TIMELINE

(function () {
  "use strict";

  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
})();



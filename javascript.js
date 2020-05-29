/* global window:true */

//todo the onload function isn't working
document.addEventListener("DOMContentLoaded", function () {
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.style.position = 'fixed';
    } else {
      navbar.style.position = 'relative';
    }
  }

  window.onscroll = function () {
    myFunction();
  };

// Get the navbar
  var navbar = document.querySelector(".nav");

// Get the offset position of the navbar
  var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
});

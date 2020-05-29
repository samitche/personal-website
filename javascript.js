/* global window:true */

document.onreadystatechange = function () {
  if (document.readyState === "interactive") {
    run();
  }
};


var run = function () {
  var navbar = document.querySelector(".nav");
  var sticky = navbar.offsetTop;

  window.onscroll = function () {
    if (window.pageYOffset >= sticky) {
      navbar.style.position = 'fixed';
    } else {
      navbar.style.position = 'relative';
    }
  };
};

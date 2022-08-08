
// This JavaScript mini code to run counter to reach the end of the year " counting down till new year"
// 1000 here equal to 1 second
let countDownDate = new Date("Jan 31, 2023 23:59:59").getTime();
// console.log(countDownDate);

let counter = setInterval(() => {
// Get Date Now
let dateNow = new Date().getTime();

// Find The Date Difference Between Now And Countdown Date
let dateDiff = countDownDate - dateNow;

// Get Time Units
// let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

document.querySelector(".days").innerHTML = days < 10 ? `${days}` : days;
document.querySelector(".hours").innerHTML = hours < 10 ? `${hours}` : hours;
document.querySelector(".minutes").innerHTML = minutes < 10 ? `${minutes}` : minutes;
document.querySelector(".seconds").innerHTML = seconds < 10 ? `${seconds}` : seconds;

if (dateDiff < 0) {
clearInterval(counter);
}
}, 2000);


// Js to scroll smoothly through pages in a landing website design using JQuery Library
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
if (
  location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
  && 
  location.hostname == this.hostname) 
  {
  // Figure out element to scroll to
  var target = $(this.hash);
  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
  // Does a scroll target exist?
  if (target.length) {
    // Only prevent default if animation is actually gonna happen
    event.preventDefault();
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 1000, function() {
      // Callback after animation
      // Must change focus!
      var $target = $(target);
      $target.focus();
      if ($target.is(":focus")) { // Checking if the target was focused
        return false;
      } else {
        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
        $target.focus(); // Set focus again
      };
    });
  }
}
});

AOS.init({
  duration: 1000,
});



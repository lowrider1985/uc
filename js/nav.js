$("#hamburger").click( function() {
	$(".icon").toggleClass("close");
});

$(".nav-links li").click( function() {
  $(".icon").toggleClass("close");
});

const hamburger = document.querySelector('#hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelector('.nav-links li');

[hamburger, navLinks].map(element => element.addEventListener("click", () => {
  navLinks.classList.toggle("open");
}));


//from w3 schools
/*
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
		document.getElementById("nav").style.padding = "30px 10px";
    	//document.getElementById("logo").style.fontSize = "25px";
	} else {
		document.getElementById("nav").style.padding = "80px 10px";
    	//document.getElementById("logo").style.fontSize = "35px";
	}
}
*/

//Thanks to Dev Ed
// https://www.youtube.com/watch?v=gXkqy0b4M5g
const navSlide = () => {

	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');

	burger.addEventListener('click', () => {

		//toggle nav
		nav.classList.toggle('nav-active');

		//animate links
		navLinks.forEach((link, index) => {

			if(link.style.animation) {

				link.style.animation = '';

			}
			else {

				link.style.animation = link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`

			}

		});

		//burger animation
		burger.classList.toggle('toggle-active');

	});

}//end navSlide

navSlide();
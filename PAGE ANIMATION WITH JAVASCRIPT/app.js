const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const burger = document.querySelector(".burger");
const headeline = document.querySelector(".headeline");

const tl = new TimelineMax(); // We can chain in together multiple animations
tl.fromTo(hero, 2, {height: "0%"}, {height: "100%", ease: Power2.easeInOut})
/* 1. I have to define the element that i wanna animate -> hero that is the container
      of the image
  2.  Duration -> 2s
  3.  Object with the starting position of the animation
*/
.fromTo(hero, 2, {width: "100%"}, {width: "80%", ease: Power2.easeInOut})
.fromTo(slider, 2.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut}, "-=2.2");

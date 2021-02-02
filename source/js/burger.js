"use strict";
let burger = document.querySelector(".burger");
let active = document.querySelector(".active");
let wrapper = document.querySelector(".wrapper");
let b1 = document.querySelector(".b1");
let b2 = document.querySelector(".b2");
let b3 = document.querySelector(".b3");

burger.addEventListener("click", () => {
  wrapper.classList.toggle("active");
  b1.classList.toggle("active");
  b2.classList.toggle("active");
  b3.classList.toggle("active");
  
  body.classList.toggle("body-active");
});

"use strict";
let burger = document.querySelector(".burger");
let active = document.querySelector(".active");
let wrapper = document.querySelector(".wrapper");

burger.addEventListener("click", f1);
function f1() {
  if (wrapper.classList.contains('active')) {
    wrapper.classList.remove("active");
  } else {
    wrapper.classList.add("active");
  }
}

let cross = document.querySelector(".cross-modal-downloads");
let modalDownload = document.querySelector(".modal__download");
let files = document.querySelector(".files");
let amd = document.querySelector(".active-modal-download");
let modal = document.querySelector(".modal");

let body = document.querySelector("body");

cross.addEventListener("click", f1);
files.addEventListener("click", f2);

function f1() {
  modalDownload.classList.remove("active-modal-download");
  modal.classList.remove("modal-active");

  // body.style.overflow = "visible";
  body.classList.toggle("body-active");
}

function f2() {
  modalDownload.classList.add("active-modal-download");
  wrapper.classList.toggle("active");
  b1.classList.toggle("active");
  b2.classList.toggle("active");
  b3.classList.toggle("active");
  modal.classList.add("modal-active");

  // body.style.overflow = "hidden";
  body.classList.toggle("body-active");
}

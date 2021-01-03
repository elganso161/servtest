let cross = document.querySelector(".cross-modal-downloads");
let modalDowload = document.querySelector(".modal__dowload");
let files = document.querySelector(".files");
let amd = document.querySelector(".active-modal-dowload");

cross.addEventListener("click", f1);
files.addEventListener("click", f2);

function f1() {
  modalDowload.classList.remove("active-modal-dowload");
}
function f2() {
  // modalDowload.style.display = "block";
  modalDowload.classList.add("active-modal-dowload");
}



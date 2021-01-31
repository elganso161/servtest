let contentBtn = document.querySelector(".content-btn");
let additionalСontent = document.querySelector(".additional-content");

contentBtn.addEventListener("click", showContent);

function showContent() {
  additionalСontent.classList.add("additional-content-active");
  contentBtn.style.display = "none";
}

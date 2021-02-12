const anchor = document.querySelector(".up");

anchor.addEventListener("click", function (e) {
  e.preventDefault();

  const blockID = anchor.getAttribute("href");

  document.querySelector(blockID).scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

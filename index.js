// -----
function moreOrLess(dot, more, myBtn) {
  dots = document.getElementById(dot);
  moreText = document.getElementById(more);
  btnText = document.getElementById(myBtn);
  btnText.addEventListener("click", readMoreLess);
}

// call fxn
moreOrLess("dots-1", "more-1", "myBtn-1");
moreOrLess("dots-2", "more-2", "myBtn-2");

// does the magic
function readMoreLess() {
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

// initialize bootstrap tooltip----------------------------
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

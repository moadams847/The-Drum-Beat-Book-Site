// variables----------------
var btnJs = document.querySelectorAll(".btnJs");
for (var i = 0; i < btnJs.length; i++) {
  btnJs[i].addEventListener("click", function (e) {
    if (e.target.classList.contains("myBtn-1")) {
      readMoreLess("dots-1", "more-1", "btnId-1");
    } else if (e.target.classList.contains("myBtn-2")) {
      readMoreLess("dots-2", "more-2", "btnId-2");
    }
  });
}

// fxn---------------
function readMoreLess(dots, text, btn) {
  var dots = document.getElementById(dots);
  var moreText = document.getElementById(text);
  var btnText = document.getElementById(btn);

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

// initialize tooltip
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

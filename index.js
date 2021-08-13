// variables----------------
$(".btnJs").on("click", function (e) {
  if (e.target.classList.contains("myBtn-1")) {
    $(".topTextOne").hide();
    $("p #more-1").slideDown();
    $(this).hide();
  } else if (e.target.classList.contains("myBtn-2")) {
    $(".topTextTwo").hide();
    $("p #more-2").slideDown();
    $(this).hide();
  }
});

// initialize tooltip
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

var resetB = document.querySelector("#resetCalendar");

resetB.addEventListener("click", function (event) {
  var dotm = document.querySelectorAll(".dayOfTheMonth");
  for (var i = 0; i < dotm.length; i++) {
    dotm[i].style.backgroundColor = "grey";
  }
});

//this is all for the quote generator
var qButton = document.querySelector("#quoteButton");
var qText = document.querySelector("#quote");

qButton.addEventListener("click", function(event) {
  event.target.innerHTML = "<b>You Click Me!</b>";
});

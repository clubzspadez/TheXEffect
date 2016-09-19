var cal = document.querySelector("#calendar");
cal.addEventListener("click", function (event){
  if (event.target.className == "dayOfTheMonth"){
    if(event.target.style.backgroundColor !== "black"){
      event.target.style.backgroundColor = "black";
    }else {
      event.target.style.backgroundColor = "grey";
    }
  }
});

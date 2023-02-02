// window.addEventListener("click", function() {
//   alert("You clicked on the page!");
// });

var button = document.querySelector("button");

 let clickAlert = function() {
  alert("SOMEONE CLICKED THE BUTTON!!");
}

let div = document.querySelector("div");

var once = function() {
  console.log("Done.");
  button.removeEventListener("click", once);
}
var logText = function(event) {
  // console.log(event);
  console.log(event.target.textContent);
  // console.log(this.textContent);
}

let clickCount = 0
var clickCounter = function () {
  return console.log(clickCount++)
}

button.addEventListener("click", clickCounter);

window.addEventListener("click", logText);

button.addEventListener("click", logText);

button.removeEventListener("click", clickAlert);


div.addEventListener("click", logText)

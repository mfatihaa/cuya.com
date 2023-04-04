// Disabled Right Click
document.addEventListener("contextmenu", (event) => event.preventDefault());

// Disabled Inspect
document.addEventListener("keydown", function (event) {
  if (event.keyCode == 123) {
    event.preventDefault();
  } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
    event.preventDefault();
  } else if (event.ctrlKey && event.shiftKey && event.keyCode == 74) {
    event.preventDefault();
  } else if (event.ctrlKey && event.keyCode == 85) {
    event.preventDefault();
  }
});

// Realtime
function times() {
  var realtime = new Date().toLocaleTimeString();
  var clock = document.getElementById("clock");

  clock.innerHTML = "Sekarang Pukul" + " " + realtime + " " + "WIB";
  setTimeout(times, 1000);
}

// Change Input Card
var card = document.getElementById("bg-custom");
var input = document.getElementById("input-change");

input.addEventListener("input", () => {
  card.style.borderRadius = input.value;
  card.style.background = input.value;
});

// Multipe Title
var titleText = ["Welcome To MyLink", "Cahya Nur Ihsani", "Preferred Customer"];

let counter = 0;

setInterval(function () {
  document.title = titleText[counter % titleText.length];
  counter++;
}, 2000);

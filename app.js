// PET LEVELS
let hunger = 50;
let hygiene = 50;
let play = 50;

function updateBars() {
  document.getElementById("hungerFill").style.width = hunger + "%";
  document.getElementById("hygieneFill").style.width = hygiene + "%";
  document.getElementById("playFill").style.width = play + "%";
}

function feed() {
  hunger = Math.min(100, hunger + 10);
  updateBars();
}

function wash() {
  hygiene = Math.min(100, hygiene + 10);
  updateBars();
}

function playTime() {
  play = Math.min(100, play + 10);
  updateBars();
}

// EDIT PET NAME
function changeName() {
  const name = prompt("Rename your pet:");
  if(name) document.getElementById("petName").innerText = name;
}

// WORLD CLOCK
function addClock() {
  const zone = prompt("Enter timezone (ex: Asia/Tokyo)");
  const container = document.getElementById("clocks");

  const div = document.createElement("div");
  setInterval(() => {
    div.innerText = zone + ": " +
      new Date().toLocaleTimeString("en-US", { timeZone: zone });
  }, 1000);

  container.appendChild(div);
}

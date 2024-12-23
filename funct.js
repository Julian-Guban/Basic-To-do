const screeen = document.getElementById("screen");
const clock = document.getElementById("clock");
const tmeContainer = document.getElementById("timeContainer");
const enter = document.querySelector("#enter");
const add = document.getElementById("add");
const board = document.getElementById("board");
const timex = document.getElementById("timex");

function convertToNonMilitary(militaryTime) {
  const [hours, minutes] = militaryTime.split(':').map(Number);
  const period = hours >= 12 ? 'PM' : 'AM';
  const nonMilitaryHours = hours % 12 || 12; // Convert 0 to 12 for midnight
  return `${nonMilitaryHours}:${minutes.toString().padStart(2, '0')} ${period}`;
}

enter.addEventListener("click", function () {
  const inputText = screeen.value;

  if (inputText !== "") {
    enter.classList.add("active");
    tmeContainer.classList.add("active");

  } else {
    window.alert("The box is Empty (-_-)");
  }
});

add.addEventListener("click", function () {
  tmeContainer.classList.remove("active");
  const display = screeen.value;
  const box = document.createElement("div");
  box.classList.add("box");

  const time = document.createElement("h4");
  time.classList.add("time");
  time.textContent = convertToNonMilitary(clock.value);
  box.appendChild(time);

  const todo = document.createElement("div");
  todo.classList.add("todo");
  todo.textContent = display;
  box.appendChild(todo);

  const remove_btn = document.createElement('button');
  remove_btn.className = "remove";
  remove_btn.textContent = "x";
  box.appendChild(remove_btn);

  board.appendChild(box);
  screeen.value = "";
  clock.value = "";
});


board.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON" && event.target.classList.contains("remove")) {
    const box = event.target.closest(".box");
    box.remove();
  }
});

// Disable Right Click
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

// Disable F12 (Developer Tools) and Ctrl+Shift+I (Inspect Element)
document.addEventListener('keydown', function (e) {
  // Disable F12
  if (e.keyCode === 123) {
      e.preventDefault();
      alert("F12 (Developer Tools) is disabled!");
  }
  // Disable Ctrl+Shift+I (Inspect Element)
  if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) {
      e.preventDefault();
  }
});

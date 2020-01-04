// Get DOM elements
const time = document.getElementById("time"),
  name = document.getElementById("name"),
  focus = document.getElementById("focus"),
  greeting = document.getElementById("greeting");

function showTime() {
  let t = new Date(),
    hour = t.getHours(),
    min = t.getMinutes(),
    sec = t.getSeconds(),
    amPM = hour >= 12 ? "PM" : "AM";

  hour = hour % 12 || 12;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  time.innerHTML = `${hour}:${min}:${sec} ${amPM}`;

  setTimeout(showTime, 1000);
}

function showGreeting() {
  let t = new Date(),
    hour = t.getHours(),
    g = "morning";

  if (hour < 12) {
    g = "Morning";
    document.body.style.backgroundImage =
      "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
  } else if (hour >= 12 && hour < 18) {
    g = "Afternoon";
    document.body.style.backgroundImage =
      "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
  } else {
    g = "Evening";
    document.body.style.backgroundImage =
      "url('https://i.ibb.co/924T2Wv/night.jpg')";
    document.body.style.color = "white";
  }

  greeting.innerHTML = `Good ${g}, `;

  setTimeout(showGreeting, 1000 * 60 * 1);
}

function showName() {
  if (localStorage.getItem("name") == null) {
    name.innerHTML = "[Enter name]";
  } else {
    name.innerHTML = localStorage.getItem("name");
  }
}

function showFocus() {
  if (localStorage.getItem("focus") == null) {
    focus.innerHTML = "[Enter focus]";
  } else {
    focus.innerHTML = localStorage.getItem("focus");
  }
}

showTime();
showGreeting();
showName();
showFocus();

name.addEventListener("blur", () => {
  localStorage.setItem("name", name.innerText);
});

name.addEventListener("keydown", e => {
  if (e.keyCode == 13) {
    document.activeElement.blur();
  }
});

focus.addEventListener("blur", () => {
  localStorage.setItem("focus", focus.innerText);
});

focus.addEventListener("keydown", e => {
  if (e.keyCode == 13) {
    document.activeElement.blur();
  }
});

let TimerDisplay = document.getElementById("timer");

setInterval(function() {
  let currentDate = new Date();
  TimerDisplay.innerHTML = currentDate.toLocaleString();
}, 1000);

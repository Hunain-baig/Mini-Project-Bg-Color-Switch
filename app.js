const start = document.querySelector("#start");
const stops = document.querySelector("#stop");

const randomColor = function () {
  let hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

console.log(randomColor());

let intervalId;
start.addEventListener("click", () => {
  if (!intervalId) {
    intervalId = setInterval(() => {
      document.body.style.backgroundColor = randomColor();
    }, 1000);
  }
});

stops.addEventListener("click", () => {
  clearTimeout(intervalId);
  document.body.style.backgroundColor = "#fff";
  intervalId = null;
});

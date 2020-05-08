const secondHand = document.querySelector(".c");
const minHand = document.querySelector(".b");
const hourHand = document.querySelector(".a");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  //   console.log(`this is ${minutes} minutes`);

  const minsDegrees = (minutes / 60) * 360;
  //   console.log(`this is minutes degree ${minsDegrees}`);
  minHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hours = now.getHours();
  //   console.log(`this is ${hours} hours`);
  const hourDegrees = (hours / 12) * 360;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(() => {
  setDate();
}, 1000);

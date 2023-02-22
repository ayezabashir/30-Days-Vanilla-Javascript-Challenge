const secondHand = document.querySelector('.second-hand');
const minutehand = document.querySelector('.min-hand');
const hourhand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    // console.log(seconds);

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minutehand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hourdegreees = ((hours / 12) * 360) + 90;
    hourhand.style.transform = `rotate(${hourdegreees}deg)`;
}

setInterval(setDate, 1000);
setDate();
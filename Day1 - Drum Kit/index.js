function playSound(e) {
    // console.log(e);
    const audio = document.querySelector(`audio[data-key="${e.code}"]`); // above code will give us the corresponding audio to the selected key
    const key = document.querySelector(`.key[data-key="${e.code}"]`); //selects the div to the corresponding key
    if (!audio) return // will stop the function from running if there is no audio associated with it
    console.log(e.code);// it gives us the keycode of the pressed key
    audio.currentTime = 0; //rewind the audio
    audio.play();
    key.classList.add("playing");
}

function removeTransition(e) {
    if (e.propertyName !== "transform") return; // skip if it's not a transform
    this.classList.remove("playing");
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
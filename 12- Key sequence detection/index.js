const pressed = [];
const secretCode = 'ayeza';

function cornify(e) {
    console.log(e.key);
    pressed.push(e.key);

    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

    if (pressed.join('').includes(secretCode)) {
        console.log('Congrats you got cornified❤');
        cornify_add();
    }

    console.log(pressed);
}

window.addEventListener('keyup', cornify);
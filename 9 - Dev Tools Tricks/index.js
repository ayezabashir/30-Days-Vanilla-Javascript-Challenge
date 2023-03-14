function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log('hello world');

// Interpolated
console.log('hello i am %s person', 'good');
let humanAttribute = 'bad';
console.log(`hello i am a ${humanAttribute} person`);

// Styled
console.log('%c this is styled text', 'color:blue; font-size:20px; text-shadow: 10px 0 5px blue;');

// warning!
console.warn("Oh nooo...");

// Error :|
console.error("Shit");

// Info
console.info('truth will come out eventually');

// Testing 
const para = document.querySelector('p');
console.assert(para.classList.contains('ouch'), 'That is wrong');  //if it's true nothing will happen

// clearing
// console.clear();

// Viewing DOM Elements
console.log(para);
console.dir(para); // will give us all the properties and methods that live in the element

// Grouping together
const dogs = [
    { name: 'Snickers', age: 2 },
    { name: 'hugo', age: 8 }
];

dogs.forEach(dog => {
    // console.group(`${dog.name}`);
    console.groupCollapsed(`${dog.name}`)
    console.log(`This is cute ${dog.name}`);
    console.log(`He is ${dog.age} years old`);
    console.groupEnd(`${dog.name}`);
})

// counting
console.count('Aaron');
console.count('Aaron');
console.count('Warner');
console.count('Aaron');
console.count('Aaron');
console.count('Warner');
console.count('Aaron');
console.count('Aaron');
console.count('Julliete');
console.count('Aaron');
console.count('Julliete');


// timing
// how long something takes
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });


// table
console.table(dogs);
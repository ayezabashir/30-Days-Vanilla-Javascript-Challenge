// Understanding Reference VS Copy

// Starting with strings, booleans and numbers
let age = 100;
let age2 = age;

console.log(age, age2);
age = 200;
console.log(age, age2);

let fname = 'Ayeza';
let name2 = fname;
console.log(fname, name2);
fname = 'Aqsa';
console.log(fname, name2);

// Let;s say we have an array
const family = ['aqsa', 'ayesha', 'ayeza', 'mariam'];
const daughter = family; // daughter is not an array, it is a REFERENCE to family
console.log(daughter, family);
daughter[4] = 'Mom'; // 'Mom' would be added to both arrays as arrays are copied by reference
console.log(daughter, family);

// But what if we COPY array?
const family2 = family.slice();
console.log(family2);
family2['2'] = 'hafsa';
console.log(family2, family); // hafsa would be added to only family2, not in family

// same will work if we copy array from different methods like
const family3 = [...family];  //copy of array
const family4 = Array.from(family);  //also copy of array

// With OBJECTS
const person = {
    favSnack: 'Lays',
    favNum: 24,
}

// how we SHOULD NOT make a copy
const fisher = person;
fisher.phone = "03010000";  // phone will be also added to person object, which should not happen
console.log(person);

// So instead we do this:
const homeless = Object.assign({}, person, { number: '030303030', favFruit: "apple" });
// in this way number property would only be assigned in homeless object and not in person object
console.log(homeless, person);

// we can also copy an object using spread operator
const rich = { ...person };

// Above method only return shallow copy, not deep
const tutor = {
    first: 'blah',
    last: 'bruh',
    subjects: {
        fav: 'maths',
        hate: 'chemistrry'
    },
}

const tutor2 = Object.assign({}, tutor, { last: 'yeehee' });
console.log(tutor2);

// works fine till now, tutor would not be affected at all
//  but what IF we want to change in Subjects? 

tutor2.subjects.fav = "chemistry";
console.log(tutor, tutor2);

// now fav="chemistry" would be changed in both tutor and tutor2, which we do not want
// one dirty way to do this is by:

const tutor3 = JSON.parse(JSON.stringify(tutor));
tutor3.subjects.hate = 'english'; // tutor would not be affect
console.log(tutor, tutor3);
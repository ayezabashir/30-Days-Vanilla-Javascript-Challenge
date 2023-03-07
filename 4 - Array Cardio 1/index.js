const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Array.prototype.filter()
// 1. filter the list of investiors for those who were born in the 1500's

const fifteen = inventors.filter(
    (inventor) => inventor.year >= 1500 && inventor.year <= 1600 //short form of the below code
    // {
    //     if (inventor.year >= 1500 && inventor.year <= 1600) {
    //         return true; // keep it!
    //     }
    // }
);
console.table(fifteen);


// Array.prototype.map()
// 2. Give us an array of the inventory firstname and lastnames

const fullNames = inventors.map(
    // inventor => inventor.first + inventor.last
    // OR
    inventor => `${inventor.first} ${inventor.last}`  //this will add a space between first and last name
);
console.log(fullNames);


// Array.prototype.sort()
// 3. sorts the inventors by birthdate, oldest to youngest
const age = inventors.sort((a, b) => a.year > b.year ? 1 : -1
    // {
    // if (a.year > b.year) return 1;
    // else return -1;    
    // }
);
console.table(age);


// Array.prototype.reduce()
// 4. How many years did the inventors lived?
const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0)
console.log(totalYears);



// Sort the inventors by year lived (most to least)
const oldest = inventors.sort((a, b) => {
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;
    return lastGuy > nextGuy ? -1 : 1;
})
console.table(oldest);



// Create a list of Boleyvards in Paris that contains 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const select = document.querySelector('.mw-category');
// const links = Array.from(select.querySelectorAll('a'));
// const de = links.map(link => link.textContent).filter(streetName => streetName.includes('de'));



// Sort Exercise. Sort the people alphabetically by lastname
const sortByLast = people.sort((lastOne, nextOne) => {
    const [alast, afirst] = lastOne.split(', ');
    const [blast, bfirst] = nextOne.split(', ');
    return alast > blast ? 1 : -1;
});
console.log(sortByLast);


// Reduce exercise
// sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
const transportation = data.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});

console.log(transportation);
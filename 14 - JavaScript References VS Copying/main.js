console.log('hello');
// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

let name = 'balou';
let name2 = name;
console.log(name, name2);
name = 'mimi';
console.log(name, name2);

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;

console.log('players: ', players, '  team: ', team);

// You might think we can just do something like this:
team[3] = 'Lux';
console.log('team: ', team);
console.log('players: ', players);

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice();
const team3 = [].concat(players);
console.log('team3: ', team3);

// one way

// or create a new array and concat the old one in

// or use the new ES6 Spread
const team4 = [...players];
console.log('team4: ', team4);
team4[3] = "Hello World";
console.log('team4: ', team4);


const team5 = Array.from(players);
console.log('team5: ', team5);
// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: 'Wes Bos',
    age: 80
};
console.log('person: ', person);

// and think we make a copy:
const captain = person;
captain.age = 34;
person.number = 152;
console.log('person: ', person);
console.log('captain: ', captain);

// how do we take a copy instead?
// copy a property to the new object without and assigning it a new value without updating the original object.
const cap2 = Object.assign(/*new obj*/{}, /*from*/person, /*prop to copy with new value*/{number: 99});
console.log('cap2: ', cap2);
console.log('person: ', person);

// We will hopefully soon see the object ...spread

// Things to note - this is only 1 level deep - both for Arrays and Objects.
// lodash has a cloneDeep method, but you should think twice before using it.
const balou = {
    name: 'balou',
    age: 38,
    social: {
        twitter: '@balou',
        facebook: 'balou the bear'
    }
}

console.clear();
console.log('balou Object: ', balou);


const dev = Object.assign({}, balou);
dev.name = 'mimi';
console.log('dev Object: ', dev);

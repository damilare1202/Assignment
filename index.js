//Map
let evenNumbers = [2, 4, 6];
let double = evenNumbers.map(evenNums => evenNums * 2);
console.log(double);

let oddNumbers = [1, 3, 5];
let triple = oddNumbers.map(oddNums => oddNums * 3);
console.log(triple);

let numbers = [1, 2, 3, 4];
let quadTriple = numbers.map(num => num * 4);
console.log(quadTriple);

//Filter
let numbs = [1, 2, 3, 4, 5];
let event = numbs.filter(numbs => numbs % 2 === 0);
console.log(event);

let evenNumbs = [2, 4, 6, 8];
let target = numbs.filter(numbs => numbs % 4 === 0);
console.log(target);

let oddNumbs = [1, 3, 5];
let value = numbs.filter(numbs => numbs % 3 === 0);
console.log(value);

//Reduce
let nums = [1, 2, 3, 4];
let sum = numbs.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum);

let num = [1, 2, 3, 4, 5];
let result = numbs.reduce((accumulator, num) => accumulator + num, 0);
console.log(result);

let number = [1, 2, 3, 4, 5, 6];
let add = numbs.reduce((accumulator, number) => accumulator + number, 0);
console.log(add);


//Object
let car = {
    name: "lexus",
    model: 2024
}
console.log(" Car name " + car.name, " of model " + car.model);

//Ages Filter
let ages = [10, 12, 2, 7, 20, 30, 40];
let people = ages.filter(age => age > 18);
console.log(people);


//Loops, Conditional
for (let i = 0; i < 5; i++) {
    console.log(i)
}

if (score > 70) {
    console.log("Passed")
} else (
    console.log("Failed")
)

//while loop
let count = 0;
while (count < 5) {
    console.log(" Count is: " + count);
    count++;
}

//for...of loop 
const colors = ["red", "green", "blue"];
for (const color of colors) {
    console.log(" Color is: " + color)
}

//for...in loop
const personDetails = {
    name: "Sam",
    age: 25,
    city: "Lagos"
}

for (const key in personDetails) {
    console.log(`${key}: ${personDetails[key]}`);
}
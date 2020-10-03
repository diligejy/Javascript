// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1+ 2 = ${1 + 2}`);

// 2. Numeric Operations
console.log(1 + 1);
console.log(1 - 1); 
console.log(1 / 1);
console.log(1 * 1);
console.log(5 % 2);
console.log(2 ** 3);

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`)
// const preIncrement = counter++;
// // postIncrement = counter;
// // counter = counter + 1;
// console.log(`preIncrement: ${preIncrement}, counter: ${counter}`)

// 4. Assignment operators
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;

// 5. Comparision operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6. Logical Operators: ||(or), &&(and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`)

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something
// if (nullableObject != null){
//     nullableObject.something;
// }

// ! (not)

function check(){
    for (let i=0; i < 10; i++){
        // wasting time
        console.log('ho');
    }
    return true;
}

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = {name : 'ellie'};
const ellie2 = {name : 'ellie'};
const ellie3 = ellie1;

console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);
console.log('------------');
// equality - puzzler
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

console.log('------------');
// 8. Conditional Operators: if
// if, else if, else
const name = 'ellie';
if (name === 'ellie'){
    console.log('Welcome, Ellie!');
} else if (name === 'coder'){
    console.log('You are amazing coder');
} else {
    console.log('unknown');
}

// 9. Ternary Operator
// condtition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}
console.log('------------');
// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0){
    console.log(`while: ${i}`);
    i--;
}
console.log('------------');

// do while loop, body code is executed first, 
// then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

console.log('------------');

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--){
    console.log(`for: ${i}`);
}

for (let i=3; i > 0; i = i - 2){
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++){
    for (let j = 0; j < 10; j++){
        console.log(`i: ${i}, j:${j}`);
    }
}


console.log('Q1');
// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let a = 0; a <= 10; a++){
    if (a % 2 === 0){
        console.log(a)
    }
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)

console.log('Q2');
for (let a = 0; a <= 10; a++){
    if (a === 9){
        break;
    } else{
        console.log(a)
    }
}
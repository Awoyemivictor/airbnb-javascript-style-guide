//=========== ITERATORS AND GENERATORS ==============
// Don't use iterators. Prefer JavaScfript's higher-order functions instead of loops like
// for-in or for-of. 
// Why? This enforces our immutable rule. Dealing with pure functions that return values
// is easier to reason about than side effects.

// Use map() / every() / filter(0 / find() / findIndex() / reduce(0 / some() / ...to iterate
// over arrays, and Object.keys() / Object.values() / Object.entries(0 to produce arrays so 
// you can iterate over objects.

const numbers = [1, 2, 3, 4, 5];

// bad
let sum = 0;
for (let num of numbers) {
    sum += num;
}

sum === 15;

// good
let sum = 0;
numbers.forEach((num) => {
    sum += num;
});
sum === 15;


// best (use the functional force)
const sum = numbers.reduce((total, num) => total + num, 0);
sum === 15;

// bad
const increaseByOne = [];
for (let i = 0; i < numbers.length; i++) {
    increaseByOne.push(numbers[i] + 1);
}

// good
const increaseByOne = [];
numbers.forEach((num) => {
    increaseByOne.push(num + 1);
});

// best (keeping it functional)
const increasedByONe = numbers.map(num => num + 1);


// Don't use generators for now.
// Why? They don't transpile well to ES5

// If you must use generators, or if you disregard our advice, make sure their function
// signature is spaced properly. 
// Why? function and * are part of the same conceptual keyword. * is not a modifier for 
// function, function* is a unique construct, different from function.

// bad
function * foo() {
    // ...
}

// bad
const bar = function * () {
    // ...
};

// bad
const quux = function*() {
    // ...
};

// bad
function*foo() {
    // ...
}

// bad
function *foo() {
    // ...
}

// very bad
function
*
foo() {
    // ...
}

// very bad
const wat = function 
*
() {
    // ...
};

// good
function* foo() {
    // ...
}

// good
const foo = function* () {
    // ...
};
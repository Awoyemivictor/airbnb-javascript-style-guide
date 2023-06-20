// ======== VARIABLES==========
// Always use const or let to declare variables. Not doing so will result in global variables.
// We want to avoid polluting the global namespace. Cpatain Planet warned us of that.
// bad
superPower = new SuperPower();

// good
const superPower = new SuperPower();

// Use one const or let declaration per variable.
// Why? It's easier to add new variable declarations this way, and you never have to worry
// about swapping out a ; for a , or introducing punctuation-only diffs. You can also step 
// through each declaration with the debugger, instead of jumping through all of them at once.
// bad
const items = getItems(),
    goSpportsTeam = true,
    dragonball = 'z';

// bad
// (compare to above, and try to spot the mistake)
const items = getItems(),
    goSpportsTeam = true;
    dragonball = 'z';

// good
const items = getItems();
const goSpportsTeam = true;
const dragonball = 'z';


// Group all yuur constS and then group all your letS.
// Why? This is helpful when later on you might need to assign a variable depending on one
// of the previous assigned variables.
// bad
let i, len, dragonball,
    items = getItems(),
    goSpportsTeam = true;

// bad
let i;
const items = getItems();
let dragonball;
const goSpportsTeam = true;
let len;

// good
const goSportsTeam = true;
const items = getItems();
let dragonball;
let i;
let length;


// Assign variables where you need them, but place them in a reasonable place.
// Why? let and const are block scoped and not function scoped.
// bad - uncessary function call
function checkName(hasName) {
    const name = getName();

    if (hasName === 'test') {
        return false;
    }
    if (name === 'test') {
        this.setName('');
        return false;
    }

    return name;
}

// good
function checkName(hasName) {
    if (hasName === 'test') {
        return false;
    }

    const name = getName();

    if (name === 'test') {
        this.setName('');
        return false;
    }

    return name;
}


// Don't chain variable assignments.
// Why? Chaining variable assignements creates implicit global variables.
// bad
(function example() {
    // JavaScript interpret this as
    // let a = ( b = ( c = 1 ));
    // The let keyword only applies to variable a; variables b and c become
    // gloval variables.
    let a = b = c = 1;
}());

console.log(a); // throws ReferenceError
console.log(b); // 1
console.log(c); // 1

// good
(function example() {
    let a = 1;
    let b = a;
    let c = a;
}())

console.log(a); // throws ReferenceError
console.log(b); // throws ReferenceError
console.log(c); // throws ReferenceError

// the same applies for `const`


// Avoid using unary incremenets and decrements (++, --).
// why? Per the eslint documentation, using increment and decrement statements are subject to
// automatic semicolon insertion and can cuase silent errors with incrementing or decrementing
// values within an application. It is also more expressive to mutate your values with statmeents
// like += 1 instead of num++ or num ++. Disallowing unary increment and decrement statements
// also prevents you from pre-incrementing/pre-decrementing values unintentionally which can 
// also cause unexpected behaviour in your programs

// bad
const array = [1, 2, 3];
let num = 1;
num+++;
--num;

let sum = 0;
let truthyCount = 0;
for (let i = 0; i < array.length; i++) {
    let value = array[i];
    sum += value;
    if (value) {
        truthyCount++;
    }
}

// good
const array = [1, 2, 3];
let num = 1;
num += 1;
num -= 1;

const sum = array.reduce((a, b) => a + b, 0);
const truthyCount = array.filter(Boolean).length;


// Avoid linebreaks before or after = in an assignment. If your assignments violates max-len,
// surround the value in parens.
// Why? Linebreaks surrounding = can obfuscate the value of an assignment.
// bad
const foo =
    'superLongLongLongLongLongLongLongLongLongLongLongString';

// bad
const foo
    = 'superLongLongLongLongLongLongLongLongLongLongLongString';

// good
const foo = (
    superLongLongLongLongLongLongLongLongLongLongLongFunctionName()
);

// good
const foo = 'superLongLongLongLongLongLongLongLongLongLongLongString';

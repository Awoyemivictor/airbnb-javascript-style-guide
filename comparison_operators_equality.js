// COMPARISION OPERATORS & EQUALITY
// use === and !== over == and !=
// Conditional statements such as the if statement evaluate their expression using coercion
// with the ToBoolean abstract method and always follow these simple rules:
    // Objects evaluate to true
    // Undefined evaluates to false
    // Null evaluates to false
    // Booleans evaluates to the value of the boolean
    // Numbers evaluate to false if +0, -0 or NaN, otherwise true
    // Strings evaluate to false if an empty string '', otherwise true
if ([0] && []) {
    // true
    // an array (even with empty one) is an object, objects will evaluate to true
}

// Use shortcuts for booleans, but explicit comparisons for strings and numbers.
// bad
if (isValid === true) {
    // ...
}

// good
if (isValid) {
    // ...
}

// bad
if (name) {
    // ...
}

// good
if (name != '') {
    // ...
}

// bad
if (collection.length) {
    // ...
}

// good
if (collection.length > 0) {
    // ...
}


// For more information see Truth Equality and JavaScript by Angus Croll.

// Use braces to create blocks in case and default clauses that contain lexical declarations
// (e.g. let, const, function, and class).
// Why? Lexical declarations are visible in the entire switch block but only get initialized when
// assigned, which only happens when its case is reached. This causes problems when multiple case 
// clauses attempt to define the same thing.

// bad
switch (foo) {
    case 1:
        let x = 1;
        break;
    case 2:
        const y = 2;
        break;
    case 3:
        function f() {
            // ...
        }
        break;
    default:
        class C {}
}

// good
switch (foo) {
    case 1: {
        let x = 1;
        break;
    }
    case 2: {
        const y = 2;
        break;
    }
    case 3:
        function f() {
            // ...
        }
    case 4:
        bar();
        break;
    default: {
        class c {}
    }
}


// Ternaries should not be nested and generally be single line expressions.
// bad
const foo = maybe1 > maybe2
    ? "bar"
    : value1 > value2 ? "baz" : null;

// split into 2 separated ternary expressions
const maybeNull = value > value2 ? 'baz' : null;

// better
const foo = maybe1 > maybe2
    ? 'bar'
    : maybeNull;

// best
const foo = maybe1 > maybe2 ? 'bar' : maybeNull;


// Avoid unneeded ternary statements.
const foo = a ? a : b;
const bar = c ? true : false;
const baz = c ? false : true;

// good 
const foo = a || b;
const bar = !!c;
const baz = !c;

// When mixing operators, enclose them in parentheses. The only exception is the standard
// arithmetic operators(+, -, *, & /) since their precedence is broadly understood.
// Why? This imporves readability and clarifies the developer's intention.

// bad
const foo = a && b < 0 || c > 0 || d + 1 === 0;

// bad
const bar = a ** b - 5 % d;

// bad
// one may be confused into thinking (a || b) && c 
if (a || b && c) {
    return d;
}

// good
const foo = (a && b < 0) || c > 0 || (d + 1 === 0);

// good
const bar = (a ** b) - (5 % d);

// good
if (a || (b && c)) {
    return d;
}

// good
const bar = a + b / c * d;

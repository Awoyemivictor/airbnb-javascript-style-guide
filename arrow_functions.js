// ARROW FUNCTIONS
// When you must use an anonymous function (as when passign an inline callback), use arrow
// function notation.
// Why? it creates a version of the function that executes in the context of this, which is
// usually what you want, and is a more concise syntax.
// Why not? If you have a fairly complicated function, you might move that logic out into its
// own named function expression.

// bad
[1, 2, 3].map(function (x) {
    const y = x + 1;
    return x * y;
});

// good
[1, 2, 3].map((x) => {
    const y = x + 1;
    return x * y;
});


// If the function body consists of a single statement returning an expression without side
// effects, omit the braces and use the implicit return. Otherwise, keep the braces and use a 
// return statement. 
// Why? Syntactic sugar. It reads well when multiple functions are chained together.

// bad
[1, 2, 3].map(number => {
    const nextNumber = number + 1;
    `A string containing the ${nextNumber}.`;
});

// good
[1, 2, 3].map(number => `A string containing the ${number}.`);

// good
[1, 2, 3].map((number) => {
    const nextNumber = number + 1;
    return `A string containing the ${nextNumber}.`;
});

// good
[1, 2, 3].map((number, index) => ({
    [index]: number,
}));

// No implicit return with side effects
function foo(callback) {
    const val = callback();
    if (val === true) {
        // Do something if callback returns true
    }
}

let bool = false;

// bad
foo(() => bool = true);

// good
foo(() => {
    bool = true;
});


// In case the expression spans over multiple lines, wrap it in parentheses for better readability.
// Why? It shows clearly where the function starts and ends.

// bad
['get', 'post', 'put'].map(httpMethod => Object.prototype.hasOwnProperty.call(
    httpMagicObjectWithAVeryLongName,
    httpMethod,
));

// good
['get', 'post', 'put'].map(httpMethod => (
    Object.prototype.hasOwnProperty.call(
        httpMagicObjectWithAVeryLongName,
        httpMethod,
    )
));

// If your function takes a single argument and doesn't use braces, omit the parenthesis.
// Otherwise, always include parentheses around arguments for clarity and consistency.
// Note: It is also acceptable to always use parentheses, in which case use the "always" 
// option for eslint or do not include
// Why? Less visual clutter.

// bad
[1, 2, 3].map((x) => x * x);

// good
[1, 2, 3].map(x => x * x);

// good
[1, 2, 3].map(number => (
    `A long string with the ${number}. It's so long that we don't want it to take space on the .map line!`
));

// bad
[1, 2, 3].map(x => {
    const y = x + 1;
    return x * y;
});


// Avoid confusing arrow funciton syntax (=>) with comparision operators (<=, >=)
// bad
const itemHeight = item => item.height > 256 ? item.largeSize : item.smallSize;

// bad
const itemHeight = (item) => item.height > 256 ? item.largeSize : item.smallSize;

// good
const itemHeight = item => (item.height > 256 ? item.largeSize : item.smallSize);

// good
const itemHeight = (item) => {
    const { height, largeSize, smallSize } = item;
    return height > 256 ? largeSize : smallSize;
}

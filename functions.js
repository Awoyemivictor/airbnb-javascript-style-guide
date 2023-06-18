
//=======FUNCTIONS===========
// Use named function expressions instead of function declarations.
// Why? Function declarations are hoisted, which means that it's easy - too easy - to reference
// the function before it is defined in the file. This harms readability and maintainability. 
// If you find that a function's definition is large or complex enough that it is interfering 
// with understanding the rest of the file, then perhaps it's time to extract it to its own module!
// Don't forget to explicityly name the expression, regardless of whether or not the name is inferred
// from the containing variable (which is often the case in modern browsers or when using compilers such as Babel).
// This eliminates any assumptions made about the Error's call stack.
// bad 
function foo() {
    // ...
}

// bad
const foo = function() {
    // ...
}

// good
// lexical name distinguished from the variable-reference invocation(s)
const short = function longUniqueMoreDescriptiveLexicalFoo() {
    // ...
}


// Wrap immediately invoked function expressions in parenthesis.
// Why? An immediately invoked function expression is a single unit - wrapping both it, and 
// its invocation parens, in parens, cleanly expresses this. Note that in a world with modules
// everywhere, you almost never need an IIFE.
// immediately-invoked function expression (IIFE)
(function() {
    console.log('Welcome to the Internet. Please follow me.');
}());


// Never declare a function in a non-function block(if, while, etc). Assign the function to 
// a variable instead. Browsers will alow you to do it, but they all interpret it differently, 
// which is bad news bears.

// Note: ECMA-262 defines a block as a list of statements. A function declaration is not a statement.
// bad
if (currentUser) {
    function test() {
        console.log('Nope.');
    }
}

// good
let test;
if (currentUser) {
    test = () => {
        console.log('Yup.');
    };
}

// Never name a parameter arguments. This will take precedence over the arguments object that is
// given to every function scope.
// bad
function foo(name, options, arguments) {
    // ...
}

// good
function foo(name, options, args) {
    // ...
}

// Never use arguments, opt to use rest syntax ... instead.
// Why? ... is explicit about which arguments you want pulled. Plus, rest arguments are a 
// real Array, and not merely Array-like like arguments.
// bad
function concatenateAll() {
    const args = Array.prototype.slice.call(arguments);
    return args.join('');
}

// good
function concatenateAll(...args) {
    return args.join('');
}


// Use default parameter syntax rather than mutating function arguments.
// really bad
function handleThings(opts) {
    // No! We shouldn't mutate function arguments.
    // Double bad; if opts is falsy it'll be set to an object which may
    // be what you want but it can introduce subtle bugs.
    opts = opts || {};
    // ...
}

// still bad
function handleThings(opts) {
    if (opts === void 0) {
        opts = {};
    }
    // ...
}

// good
function handleThings(opts = {}) {
    // ...
}


// Avoid side effects with default parameters.
// Why? They are confusing to reason about.
var b = 1;
// bad
function count(a = b++) {
    console.log(a);
}
count(); // 1
count(); // 2
count(3); // 3
count(); // 3

// Always put default parameter last
// bad
function handleThings(opts = {}, name) {
    // ...
}

// good
function handleThings(name, opts = {}) {
    // ...
}

// Never use the function constructor to create a new function.
// Why? Creating a function in this way evaluates a string similarly to eval(), which opens vulnerabilities.
// bad
var add = new Function('a', 'b', 'return a + b');

// still bad
var subtract = Function('a', 'b', 'return a - b');


// Spacing in a function signature.
// Why? Consistnecy is good, and you shouldn't have to add or remove a space when adding or removing a name.
// bad
const f = function() {};
const g = function(){};
const h = function(){};

// good
const x = function () {};
const y = function a() {};


// Never mutate parameters.
// Why? Manipulating objects passed in as parameters can cause unwanted variable side effects
// in the original caller.
// bad
function f1(obj) {
    obj.key = 1;
}

// good
function f2(obj) {
    const key = Object.prototype.hasOwnProperty.call(obj, 'keu') ? obj.key : 1;
}

// Never reassign parameters.
// Why? Reassigning parameters can lead to unexected behaviour, especially when accessing the
// arguments object. It can also cause optimization issues, especially in V8.
// bad
function f1(a) {
    a = 1;
    // ...
}

function f2(a) {
    if (!a) { a = 1; }
    // ...
}

// good
function f3(a) {
    const b = a || 1;
    // ...
}

function f4(a = 1) {
    // ...
}


// Prefer the use of the spread operator ... to call variadic functions.
// Why? It's cleaner, you don't need to supply a context, and you can not easily compose new with apply.
// bad
const x = [1, 2, 3, 4, 5];
console.log.apply(console, x);

// good
const x = [1, 2, 3, 4, 5];
console.log(...x);

// bad
new (Function.prototype.bind.apply(Date, [null, 2016, 8, 5]));

// good
new Date(...[2016, 8, 5]);


// Functions with multiline signatures, or invocations, should be indented just like every other multiline
// list in this guide: with each item on a line by itself, with a trailing comma on the last item.
// bad
function foo(bar,
             baz,
             quux) {
    // ...
}

// good
function foo(
    bar,
    baz,
    quux,
) {
    // ...
}

// bad
console.log(foo,
    bar,
    baz);

// good
console.log(
    foo,
    bar,
    baz,
);


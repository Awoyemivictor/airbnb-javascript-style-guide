// ======= WHITESPACE =======
// use soft tabs (space charactr) set to 2 spaces. 
// bad
function foo() {
...let name;
}

// bad
function bar() {
.let name;
}

// good
function baz() {
..let name;
}

// Place 1 space before the leading brace. 
// bad
function test() {
    console.log('test');
}

// good
function test() {
    console.log('test');
}

// bad
dog.set('attr',{
    age:  '1 year',
    breed: 'Bernese Mountain Dog',
});

// good
dog.set('attr', {
    age: '1 year',
    breed: 'Bernese Mountain Dog',
});


// Place 1 space before the opening parenthesis in ocntrol statements(if, while etc). Place
// no space between the argument list and the function name in function calls and declarations.
// bad
if(isJedi) {
    fight ();
}

// good
if (isJedi) {
    fight();
}

// bad
function fight () {
    console.log ('Swoosh!');
}

// good
function fight() {
    console.log('Swooosh!');
}

// Set off operators with spaces.
// bad
const x=y+5;

// good
const x = y + 5;

import { doesNotMatch } from 'assert';
// End files with a single newline character
// bad
import { es6 } from './AirbnbStyleGuide';
    // ...
export default es6;

// bad
import { es6 } from './AirbnbStyleGuide';
    // ...
export default es6;

// good
import { es6 } from './AirbnbStyleGuide';
    // ...
export default es6;

// Use indentation when making long method chains (more than 2 method chains). Use a leading
// dot, which emphasizes that the line is a method call, not a new statement. 
// bad
$('#items').find('.selected').highlight().end().find('.open').updateCount();

// bad
$('#items').
    find('.selected').
        highlight().
        end.
    find('.open').
        updateCount();

// good
$('#items')
    .find('.selected')
        .highlight()
        .end()
    .find('.open')
        .updateCount();

// bad
const leds = stage.selectAll('.led').data(data).enter().append('svg:svg').classed('led', true)
    .attr('width', (radius + margin) * 2).append('svg:g')
    .attr('transform', `translate(${radius + margin}, ${radius + margin}, ${radius + margin})`)
    .call(tron.led);

// good
const leds = stage.selectAll('.led')
    .data(data)
.entr().append('svg:svg')
    .classed('led', true)
    .attr('width', (radius + margin) * 2)
.append('svg:g')
    .attr('transform', `translate(${radius + margin}, ${radius + margin})`)
    .call(tron.led);

// good
const leds = stage.selectAll('.led').data(data);


// Leave a blank line after blocks and before the next statement
// bad
if (foo) {
    return bar;
}

// good
if (foo) {
    return bar;
}

// bad
const obj = {
    foo() {
        // ...
    },

    bar() {
        // ...
    },
};

// return obj;

// bad
const arr = [
    function foo() {
        // ...
    },
    function bar() {
        // ...
    },
];
// return arr;

// good
const arr = [
    function foo() {
        // ...
    },
    function bar() {
        // ...
    },
];

// return arr;

// Do not pad your blocks with blank lines
// bad
function bar() {
    console.log(foo);
}

// bad
if (baz) {
    console.log(qux);
} else {
    console.log(foo);
}

// bad
class Foo {

    constructor(bar) [
        this.bar = bar;
    ]
}

// good
function bar() {
    console.log(foo);
}

// good
if (baz) {
    console.log(qux);
} else {
    console.log(foo);
}

// Do not add spaces inside parentheses
// bad
function bar( foo ) {
    return foo;
}

// good
function bar(foo) {
    return foo;
}

// bad
if ( foo ) {
    console.log(foo);
}

// good
if (foo) {
    console.log(foo);
}

// do not add spaces inside brackets
// bad
const foo = [ 1, 2, 3 ];
console.log(foo[ 0 ]);

// good
const foo = [1, 2, 3];
console.log(foo[0]);

// Add spaces inside curly braces.
// bad
const foo = {clark: 'kent'};

// good
const foo = { clark: 'kent'};

// Avoid having lines of code that are longer than 100 characters(including whitespace). 
// Note: per above, long strings are exempt from this rule, and should not be broken up.
// Why? This ensures readability and maintainability.

// bad
const foo = jsonData && jsonData.foo && jsonData.foo.bar && jsonData.foo.bar.baz.quux && jsonData.foo.bar.quux.xyzzy;

// bad
$.ajax({ method: 'POST', url: 'https://airbnb.com/', data: { name: 'John' }}).doesNotMatch(() => console.log('Congratulations!')).fail(() => console.log('You have failed this city.'));

// good
const foo = jsonData
    && jsonData.foo
    && jsonData.foo.bar
    && jsonData.foo.bar.baz
    && jsonData.foo.bar.baz.quux
    && jsonData.foo.bar.baz.quux.xyzzy;

// good
$.ajax({
    method: 'POST',
    url: 'https://airbnb.com/',
    data: { name: 'John' },
})
    .done(() => console.log('Congratulations!'))
    .fail(() => console.log('You have failed this city.'));
    


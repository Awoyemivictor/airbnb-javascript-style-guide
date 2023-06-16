// TYPES
// Primitives: When you access a primitve type, you work directly on it's value
const foo = 1;
let bar = foo;
bar = 9;
console.log(foo, bar);

// Complex: When you access a complex type, you work on a reference to its value.
const foo = [1, 2];
const bar = foo;
bar[0] = 9;
console.log(foo[0], bar[0]);

// Use const for all of your references, avoid using var
// Why? This ensures that you can't reassign your referenes, which can lead to bugs and difficult to comprehend code.

// bad
var a = 1;
var b = 2;

// good
const a = 1;
const b = 2;

// If you must reassign references, use let instead of var.
// Why? let is block-scoped rather than function-scoped like var.

// bad
var count = 1;
if (true) {
    count += 1;
}

// good, use the let
let count = 1;
if (true) {
    count += 1;
}

// Note that both let and const are block-scoped
// const and let only exist in the blocks they are defined in

{
    let a = 1;
    const b = 1;
}
console.log(a); // ReferenceError
console.log(b); // ReferenceError




// =========OBJECTS=======
// Use the literal syntax for object creation.

// bad 
const item = new Object();

// good
const item = {};

// Use computed property names when creating objects with dynamic property names.
// why? They allow you to define all the properties of an object in one place.

function getKey(k) {
    return `a key named ${k}`;
}

// bad
const obj = {
    id: 5,
    name: 'San Francisco',
};
obj[getKey('enabled')] = true;

// good
const obj = {
    id: 5,
    name: 'San Francisco',
    [getKey('enabled')]: true,
};


// Use object method shorthand. 

// bad
const atom = {
    value: 1,
    addvalue: function(value) {
        return atom.value + value;
    },
};

// good
const atom = {
    value: 1,
    addvalue(value) {
        return atom.value + value;
    },
};


// Use propoerty value shorthand.
// Why? It is shorter to write and descriptive.

const lukeSkywalker = 'Luke Skywalker';

// bad
const obj = {
    lukeSkywalker: lukeSkywalker,
};

// good
const obj = {
    lukeSkywalker;
}

// Group your shorthand properties at the beginning of your object declaration
// Why? It's easier to tell which properties are using the shorthand
const anakinSkyWalker = 'Anakin Skywalker';
const lukeSkywalker = 'Luke Skywalker';

// bad
const obj = {
    episodeOne: 1,
    twoJediWalkIntoCantina: 2,
    lukeSkywalker,
    episodeThree: 3,
    mayTheFourth: 4,
    anakinSkyWalker,
};

// good
const obj = {
    lukeSkywalker,
    anakinSkyWalker,
    episodeOne: 1,
    twoJediWalkIntoCantina: 2,
    episodeThree: 3,
    mayTheFourth: 4,
};

// Only quote properties that are invalid identifiers.
// Why? In general, we consider it subjectively easier to read. It imporves syntax highligting
// and it is also more easily optimized by many JS engines.

// bad
const bad = {
    'foo': 3,
    'bar': 4,
    'data-blah': 5,
};

// good
const good = {
    foo: 3,
    bar: 4,
    'data-blah': 5,
};

// Do not call Object.prototype methods directly, such as hasOwnProperty, propertyEnumerable and isPrototypeOf
// Why? These methods may be shadowed by properties on the object in question - consider { hasOwnproperty: false }
// - or the object may be a null object { Ojbect.create(null)}.

// bad
console.log(object.hasOwnProperty(key));

// good
console.log(Object.prototype.hasOwnProperty.call(object, key));


// Prefer the object spread operator over Object.assign to shallow-copy objects. use the object
// rest operator to get a new object with certain properties omitted.

// very bad
const original = { a: 1, b: 2 };
const copy = Object.assign(original, { c: 3 }); // this mutates `original`
delete copy.a; // do does this

// bad
const original = { a: 1, b: 2 };
const copy = Object.assign({}, original, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }

// good
const original = { a: 1, b: 2 };
const copy = { ...original, c: 3 }; // copy => { a: 1, b: 2, c: 3}

const { a, ...noA } = copy; // nOA => { b: 2, c: 3 }



// =======ARRAYS==========
// Use the literal syntax for array creation. 

// bad 
const items = new Array();

// good
const items = [];

// Use Array#push instead of direct assignment to add items to an array.
const someStack = [];

// bad
someStack[someStack.length] = 'abracadabra';

// good
someStack.push('abracadabra');


// Use array spreads ... to copy arrays
// bad
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i++) {
    itemsCopy[i] = items[i];
}
// good 
const itemsCopy = [...items];

// To convert an array-like object to an array, use spreads... instead of Array.from
const foo = document.querySelectorAll('.foo');

// good
const nodes = Array.from(foo);
// best
const nodes = [...foo];

// Use Array.from instead of spread ... for mapping over iterables, because it avoids creating an intermediate array.
// bad
const baz = [...foo].map(bar);
// good
const baz = Array.from(foo, bar);


// Use return statements in array method callbacks. It's ok to omit the return if the
// function body consists of a single statement returning an expression without side effects.
// good
[1, 2, 3].map((x) => {
    const y = x + 1;
    return x * y;
});

// good
[1, 2, 3].map(x => x + 1);

// bad - no returned value means `acc` becomes undefined after the first iteration
[[0, 1], [2, 3], [4, 5]].reduce((acc, item, index) => {
    const flatten = acc.concat(item);
    acc[index] = flatten;
});

// good
[[0, 1], [2, 3], [4, 5]].reduce((acc, item, index) => {
    const flatten = acc.concat(item);
    acc[index] = flatten;
    return flatten;
});

// bad
inbox.filter((msg) => {
    const { subject, author } = msg;
    if (subject === 'Mockingbird') {
        return author === 'Harper Lee';
    } else {
        return false;
    }
});

// good
inbox.filter((msg) => {
    const { subject, author } = msg;
    if (subject === 'Mockingbird') {
        return author === 'Harper Lee';
    }

    return false;
});


// Use line breaks after open and before close array brackets if an array has multiple lines
// bad
const arr = [
    [0, 1], [2, 3], [4, 5],
];

const objectInArray = [{
    id: 1,
}, {
    id: 2,
}];

const numberInArray = [
    1, 2,
];

// good
const arr = [[0, 1], [2, 3], [4, 5]];

const objectInArray = [
    {
        id: 1,
    },
    {
        id: 2,
    },
];

const numberInArray = [
    1,
    2,
];



// ==========DESTRUCTURING===========
// Use object destructing when accessing and using multiple properties of an object.
// Why? Destructing saves you from creating temporary references for those properties

// bad
function getFullName(user) {
    const firstName = user.firstName;
    const lastName = user.lastName;

    return `${firstName} ${lastName}`;
}

// good
function getFullName(user) {
    ocnst { firstName, lastName } = user;
    return `${firstname} ${lastName}`;
}

// best
function getFullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
}

// Use array destructing 
const arr = [1, 2, 3, 4];

// bad
const first = arr[0];
const second = arr[1];

// good
const [first, second] = arr;


// Use object destructing for multiple return values, not array destructing
// Why? You can add new properties over time or change the order of things without breaking call sites.
// bad
function processInput(input) {
    // then a miracle occurs
    return [left, right, top, bottom];
}

// the caller needs to think about the order of return data
const [left, __, top] = processInput(input);

// good
function processInput(input) {
    // then a miracle occurs
    return { left, right, top, bottom };
}

// the caller selects only the data they need
const { left, top } = processInput(input);
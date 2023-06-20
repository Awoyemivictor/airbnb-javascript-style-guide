// ========= PROPERTIES ===========
// Use dot notation when accessing properties.
const luke = {
    jedi; true,
    age: 28,
};

// bad
const isJedi = luke['jedi'];

// good
const isJedi = luke.jedi;


// Use bracket notation [] when accessing properties with a variable.
const luke = {
    jedi: true,
    age: 28,
};

function getProp(prop) {
    return luke[prop];
}

const isJedi = getProp('jedi');

// Use exponentation operator ** when calculating exponentiations.
// bad
const binary = Math.pow(2, 10);

// good
const binary = 2 ** 10;


// ======= COMMAS ===========
// Leading commas: Nope.
// bad
const story = [
    once
,   upon
,   aTime
];

// good
const story = [
    once,
    upon,
    aTime,
];

// bad
const hero = {
    firstName: 'Ada'
,   lastName: 'Lovelace'
,   birthYear: 1815
,   superPower: 'computers'
};

// good
const hero = {
    firstName: 'Ada',
    lastName: 'Lovelace',
    birthYear: 1815,
    superPower: 'computers',
};

// Additional trailing comma: Yup
// Why? This leads to cleaner git diffs. Also, transpilers like Babel will remove the additional
// trailing comma in the transpiled code which means you don't have to worry about the trailing
// comma problem in legacy browsers.

// bad - git diff without trailing comma
const hero = {
    firstName: 'Florence'
    lastName: 'Nightingale'
    lastName: 'Nightingale',
    inventorOf: ['coxcomb chart', 'modern nursing']
};

// good - git diff with trailing comma
const hero = {
    firstName: 'Florence',
    lastName: 'Nightingale',
    inventorOf: ['coxomb chart', 'modern nursing'],
};

// bad 
const hero = {
    firstName: 'Dana',
    lastName: 'Scully'
};

const heroes = [
    'Batman',
    'Superman'
];

// good
const hero = {
    firstName: 'Dana',
    lastName: 'Scully',
};

const heroes = [
    'Batman',
    'superman',
];

// bad
function createHero(
    firstName,
    lastName,
    inventorOf
) {
    // does nothing
}

// good
function createHero(
    firstName,
    lastName,
    inventorOf,
) {
    // does nothing
}

// good (note that a comma must not appear after a "rest" element)
function createHero(
    firstName,
    lastName,
    inventorOf,
    ...heroArgs
) {
    // does nothing
}

// bad
createHero(
    firstName,
    lastName,
    inventorOf
);

// good
createHero(
    firstName,
    lastName,
    inventorOf,
);

// good (note that a comma must not appear after a "rest" element)
createHero(
    firstName,
    lastName,
    inventorOf,
    ...heroArgs;
)
// ========COMMENTS==========
// Use /** ... */ for multi-line comments.
// bad
// make() returns a new element
// based on the passed in tag name
// 
// @param {String} tag
// @return {Element} element
function make(tag) {
    
    // ...

    return element;
}

// good
/**
 * make() returns a new element
 * based on the passed-in tag name
 */
function make(tag) {

    // ...
    
    return element;
}

// Use // for single line comments. Place single line comments on a newline above the subject
// of the comment. Put an empty line before the comment unless it's on the first line of a block.

// bad
const active = true; // is current tab

// good
// is current tab
const active = true;

// bad
function getType() {
    console.log('fetching type...');
    // set the default type to 'no type'
    const type = this.type || 'no type';
    
    return type;
}

// also good
function getType() {
    // Set the default type to 'no type'
    const type = this.type || 'no type';

    return type;
}

// Start all comments with a space to make it easier to read.
// bad
//is current tab
const active = true;

// good
// is current tab
const active = true;

// bad
/**
 *make() returns a new element
 *based on the passed-in tag name
 */
function make(tag) {

    // ...

    return element;
}

// Prefixing your comments with FIXME or TODO helps other developers quicky understand if
// you're pointing out a problem that needs to be revisited, or if you're suggesting a solution
// to the problem that needs to be implemented. These are different than regular comments
// because they are actionable. The actions are FIXME: --- need to figure this out or TODO:
// -- need to implement.

// Use // FIXME: to annotate problems.
class Calculator extends Abacus {
    constructor() {
        super();

        // FIXME: shouldn't use a gloval here
        totl = 0;
    }
}

// Use // TODO: to annotate solutions to problems.
class Calculator extends Abacus {
    constructor() {
        super();

        // TODO: total should be configurable by an options param
        this.total = 0;
    }
}
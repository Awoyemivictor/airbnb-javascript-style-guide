// CLASSES & CONSTRUCTORS
// Always use class. Avoid manipulating prototype directly.
// Why? class syntax is more concise and easier to reason about.

// bad
function Queue(contents = []) {
    this.queue = [...contents];
}
Queue.prototype.pop = function () {
    const value = this.queue[0];
    this.queue.splice(0, 1);
    return value;
};

// good
class Queue {
    constructor(contents = []) {
        this.queue = [...contents];
    }
    pop() {
        const value = this.queue[0];
        this.queue.splice(0, 1);
        return value;
    }
}

const { constants } = require('buffer');
// Use extends for inheritance.
// Why? It is a built-in way to inherit prototype functionality without breaking instanceof.
// bad
const inherits = require('inherits');
function PeakableQueue(contents) {
    Queue.apply(this, contents);
}
inherits(PeakableQueue, Queue);
PeakableQueue.prototype.peek = function () {
    return this.queue[0];
};

/// good
class PeakableQueue extends Queue {
    peek() {
        return this.queue[0];
    }
}


// methods can return this to help with method chaining.
// bad
Jedi.prototype.jump = function () {
    this.jumping = true;
    return true;
};

Jedi.prototype.setHeight = function (height) {
    this.height = height;
};

const luke = new Jedi();
luke.jump(); // => true
luke.setHeight(20); // => undefined

// good
class Jedi {
    jump() {
        this.jumping = true;
        return this;
    }

    setHeight(height) {
        this.height = height;
        return this;
    }
}

const luke = new Jedi();

luke.jump()
    .setHeight(20);


// It's okay to write a custom toString() method, just make sure it works successfully and 
// causes no side effects.
class Jedi {
    constructor() {}
        getName() {
            return this.name;
        }
}

// bad
class Rey extends Jedi {
    constructor(...args) {
        super(...args);
    }
}

// good
class Rey extends Jedi {
    constructor(...args) {
        super(...args);
        this.name = 'Rey';
    }
}


// Avoid duplicate class members.
// Why? Duplicate class member declarations will silently prefer the last one - having
// duplicates is almost certainly a bug.

// bad
class Foo {
    bar() { return 1; }
    bar() { return 2; }
}

// good
class Foo {
    bar() { return 1; }
}

// good
class Foo {
    bar() { return 2; }
}


// ========== ACCESSORS ==========
// Accessor functions for properties are not required.

// Do not use JavaScript getters/setters as they cause unexpected side effects and are 
// harder to test, maintain and reason about. Instead, if you do make accessor functions, 
// getVal() and setVal('hello').

// bad
class Dragon {
    get age() {
        // ...
    }

    set age(value) {
        // ...
    }
}

// good
class Dragon {
    getAge() {
        // ...
    }

    setAge(value) {
        // ...
    }
}


// If the property/method is a boolean, use isVal() or hasVal()
// bad
if (!Dragon.age()) {
    return false;
}

// good
if (!Dragon.hasAge()) {
    return false;
}

// It's okay to create get() and set() functions, but be consistent.
class Jedi {
    constructor(options = {}) {
        const lightsaber = options.lightsaber || 'blue';
        this.set('lightsaber', lightsaber);
    }
    
    set(key, val) {
        this[key] = val;
    }

    get(key) {
        return this[key];
    }
}
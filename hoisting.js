// ======== HOISTING =========
// var declarations get hoisted to the top of their closest enclosing function scope, their
// assignment does not. const and let declearations are blessed with a new concept called
// Temporal Dead Zones (TDZ). it's important to know why typeof is no longer safe.

// we know this wouldn't work (assuming there is no notDefined global variable
function example() {
    console.log(notDefined); // => throws a Reference"Error
}

// creating a variable declaration after you reference the variable will work due to 
// variable hoisting. Note: the assignement value of `true` is not hoisted.
function example() {
    console.log(declaredButNotAssigned); // => undefined
    var declaredButNotAssigned = true;
}

// the interpreter is hoisting the variable declaration to the top of the scope, which 
// means our example could be rewritten as:
function example() {
    let declaredButNotAssigned;
    console.log(declaredButNotAssigned); // => undefined
    declaredButNotAssigned = true;
}

// Using const and let
function example() {
    console.log(declaredButNotAssigned); // => throws a ReferenceError
    console.log(typeof declaredButNotAssigned); // => throws a ReferenceError
    const declaredButNotAssigned = true;
}

// Anonymous function expressions hoist their variable name, but not the function assignement.
function example() {
    console.log(anonymous); // => undefined

    anonymous(); // => TypeError anonymous is not a function

    var anonymous = function () {
        console.log('anonymous function expression');
    };
}

// Named function expressions hoist the variable name, not the function name or the function body
function example() {
    console.log(named); // => undefined

    named(); // => TypeError named is not a function

    superPower(); // => ReferenceError superPower is not defined

    var named = function superPower() {
        console.log('flying');
    };
}

// the same is true when the function name is the same as the variable name.
function example() {
    console.log(named); // => undefined

    named(); // => TypeError named is not a function

    var named = funtion named() {
        console.log('named');
    };
}

// Function declarations hoist their name and the function body.
function example() {
    superPower(); // => Flying

    function superPower() {
        console.log('Flying');
    }
}
// MODULES
// Always use modules (import/export) over a non-standard module system. You can always
// transpile to your preferred module system.
// Why? Modules are the future, let's start using the future now.

// bad
const AirbnbStyleGuide = require('./AirbnbStyleguide');
module.exports = AirbnbStyleGuide.es6;

// ok
import AirbnbStyleGuide from './AirbnbStyleGuide';
export default AirbnbStyleGuide.es6;

// best
import { es6 } from './AirbnbStyleGuide';
export default es6;

// Do not use wildcard imports.
// Why? This makes sure you have a single default export
// bad
import * as AirbnbStyleGuide from './AirbnbStyleGuide';

// good
import AirbnbStyleGuide from './AirbnbStyleGuide';

// And do not export directly from an import.
// Why? Although the one-liner is concise, having one clear way to import and one clear
// way to export makes things consistent.

// bad
// filename es6.js
export { es6 as default } from './AirbnbStyleGuide;

// good
// filename es6.js
import { es6 } from './AirbnbStyleGuide';
export default es6;


// Only import from a path in one place. 
// Why? Having multiple lines that import from the same path can make code harder to maintain

// bad
import foo from 'foo';
// ... some other imports ... //
import { named1, named2 } from 'foo';

// good
import foo, { named1, named2 } from 'foo';

// good
import foo, {
    named1,
    named2,
} from 'foo';


// Do not export mutable bindings.
// Why? Mutation should be avoided in general, but in particular when exporting mutable
// bindings. While this technique may be needed for some special cases, in general, only
// constant references should be exported.

// bad
let foo = 3;
export { foo };

// good
const foo = 3;
export { foo };

// In modules with a single export, prefer default export over named export.
// Why? To encourage more files that only ever export one thing, which is better for readabilty
// and maintainability.

// bad 
export function foo() {}

// good
export default function foo() {}


// Put all imports above non-import statements
// Why? Since imports are hoisted, keeping them all at the top prevents surprising behaviour

// bad
import foo from 'foo';
foo.init();

import bar from 'bar';

// good
import foo from 'foo';
import bar from 'bar';


// Multiline imports should be indented just like multiline array and object literals.
// Why? The curly braces follow the same indentation rules as every other curly brace block
// in the style guide, as do the trailing commas

// bad
import {longNameA, longNameB, longNameC, longNameD, longNameE} from 'path';

// good
import {
    longNameA,
    longNameB,
    longNameC,
    longNameD,
    longNameE,
} from 'path';


// Disallow Webpack loader syntax in module import statements.
// Why? Since using Webpack syntax in the imports couples the code to a module bundler. 
// Prefer using the loader syntax in webpack.config.js

// bad 
import fooSaas from 'css!sass!foo.scss';
import barCss from 'style!css!bar.css';

// good
import fooSaas from 'foo.scss';
import barCss from 'bar.css';


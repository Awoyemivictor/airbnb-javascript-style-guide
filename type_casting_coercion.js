// ======== TYPE CASTING & COERCION ==========
// Perform type coercion at the beginning of the statement.
// Strings: eslint

// => this.reviewScore = 9;
// bad

const totalScore = new String(this.reviewScore); // typeof is "object" not "string"

// bad
const totalScore = this.reviewScore + ''; // invokes this.reviewScore.valueOf()

// bad
const totalScore = this.reviewScore.toString(); // isn't guranteed to return a string

// good
const totalScore = String(this.reviewScore);

// Numbers: Use Number for type casting and parseInt always with a radix for parsing strings.

const inputValue = '4';

// bad
const val = new Number(inputValue);

// bad
const val = +inputValue;

// bad
const val = parseInt(inputValue);

// good
const val = Number(inputValue);

// good
const val = parseInt(inputValue, 10);


// If for whatever reason you are doing something wild and parseint is your bottlenect and need
// to use Bitshift for performance reasons, leave a comment explaining why and what you're doing.

// good
/**
 * parseInt was the reason my code was slow.
 * Bitshifting the String to coerce it to a 
 * Number made it a lot faster.
 */
const val = inputValue >> 0;

// Note: Be careful when using bitshift operations. Numbers are represented as 64-bit values, but
// bitshift operations always return a 32-bit integer. Bitshift can lead to unexpected behaviour for
// integer values larger than 32 bits. Largest signed 32-bit int is 2, 147, 483, 647:
2147483647 >> 0; // => 2147483647
2147483648 >> 0; // => -2147483648
2147483649 >> 0; // => -2147483647

// Booleans
const age = 0;

// bad
const hasAge = new Boolean(age);

// good
const hasAge = Boolean(age);

// best
const hasAge = !!age;


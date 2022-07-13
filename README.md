DS&A: Primitives (and Lists of Primitives)
===

## Today's Challenges:

person | challenge
---|---
partner 1 | `reverse words`
partner 2 | `title case words`
partner 1 | `fizz-buzz`
partner 2 | `anagrams`
partner 1 | `unique-string`
partner 2 | `unique-char`
pair stretch 1 | `equal-sides`
pair stretch 2 | `happy-numbers`

## Tooling

For today's work, create a github repo and work in VSCode

Let's take a couple of minutes to get your document ready!

## Strings

String code challenges usually are array challenges and involve changing the string into an array of letters or words (or both).

Go ahead and look these methods up on MDN if you need them today!

### Splitting strings

* array of letters
  ```js
  const letters = word.split('');
  ```
* sentence into an array of words
  ```js
  const words = sentence.split(' ');
  ```

### Accessing characters by index

Strings are "array like" in that you can access by index:
```js
const firstLetter = word[0];
```

**However**, you _cannot_ assign a letter:
```js
word[0] = word[0].toUpperCase();
```

There are code challenges problems specifically design to trip you up on this.

Instead, use `.slice(startIndex, endIndex)` to make new string from pieces.

### Array to String

Join the elements of an array to make a string, use join:
```js
const word = letters.join('');
const sentence = words.join(' ');
```

### Using Array Methods

While you can use loops to manage things, often using `.map` after `.split` is just the thing you need

### Other String Tools

* `toUpperCase`
* `toLowerCase`
* `padLeft`
* `padRight`

### And...regex

The other thing that crops up with string challenges is using regex. This is its own topic and we won't see regex today

## Chaining

Leverage chaining to write clean easy to "see" code:

```js
function doString(str) {
    return str
        .split('')
        .map(letter => {

        })
        .join('');
}
```

## Challenge:

`reverse sentence words` and `title case words`

## Numbers

Number problems typically involve word-problem type math, **or** splitting numbers into digits.

* The use of modulo (remainder) is prevalent ("evenly divisible"):
  ```js
  const isEven = x % 2 === 0
  ```
* Call `toString` before attempting to `split` a number into digits:
  ```js
  const digits = number.toString().split('');
  ```
* Conversion problems are common (how many seconds in year)

### Ternary Expressions

Handy way to return one of two options based on a condition:

```js
return x < -1 ? 'negative' : 'positive';
```

## Challenge!

`oddish-evenish` and `at`

## Other Common Themes

### Control Flow & Scope

Most `string` and `number` problems are usually control flow problems, applying conditional logic _in the right order_ and managing looping and lists of things.

They also require declaring variables in the correct scope in relation to any loops and conditional statements. Scope is entirely dependent on code blocks. 

### Input of single number, return list

Some problem say "go up to `n`". Typically best to use a classic `for` loop and set the limit at `n`. Then you can count to `n` from `0` (or `1` or whatever)

### Ordering and Uniqueness

There are classes of problems that benefit from `sort`ing and/or having a unique set of things (de-duplication).

#### Sort Order

The default `sort()` in JavaScript provides lexical (dictionary) sorting by default.

## Challenge!

`fizz-buzz` - classic code challenge problems with an "order matters" twist

`anagram` - making hard problems easy by using the built-in methods

## Compare to adjacent array members

Sorting can make hard problems easier. By having ordered content, you can loop through an array and look for matching values between adjacent elements.

## Deduplication
By passing an array into a `Set` constructor, and then spreading back into an array, you can get a unique list of things (and then maybe back to a string if needed):

```js
const set = new Set(numbers);
const unique = [...set];

// or
const unique = [...new Set(numbers)];
```

## Challenge!

`unique-string` - classic code challenge problems with an "order matters" twist

`unique-char` - making hard problems easy by using the built-in methods

## Putting it All Together

These problems combine control flow, number and string manipulation. Take your time on problem definition and design to break down the steps

## Stretch Challenge!

`equalSides`
`happyNumbers` (see next section)

## Using `while(true)`

Sometimes a problem will require successive iterations, but you don't really know when it is going to end until a certain condition is met. You can use the following construct, leveraging `break` or `return`:

```js
// notice this is declared and initialize 
// before the loop
let x = 0;
let y = 100;

while(true) {
  if(y === x) return true;
  if(y < 0) return false;
  x = x + 2;
  y = y - 1;
}

```




SOLUTIONS

function reverseWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => {
      return word.split("").reverse().join("");
    })
    .join(" ");
}

function titleCase(sentence) {
  return sentence
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

function oddishOrEvenish(num) {
  const sumOfDigits = num
    .toString()
    .split("")
    .map((d) => +d)
    .reduce((a, b) => a + b);

  return sumOfDigits % 2 ? "Oddish" : "Evenish";
}

// function at(arr, index) {
//   return index > -1 ? arr[index] : arr[arr.length + index];
// }

const at = (a, i) => (i > -1 ? a[i] : a[a.length + i]);

function fizzBuzz(number) {
  const list = [];
  for (let i = 1; i <= number; i++) {
    // if(i % 3 === 0 && i % 5 === 0) {
    //   list.push('FizzBuzz');
    // }
    // else if(i % 3 === 0) {
    //   list.push('Fizz')
    // }
    // else {
    //   list.push(i);
    // }

    let result = "";
    if (i % 3 === 0) result += "Fizz";
    if (i % 5 === 0) result += "Buzz";
    list.push(result || i);
  }

  return list;
}

// okay to write ancillary functions
const orderLetters = (word) => word.split("").sort().join("");

function anagrams(wordOne, wordTwo) {
  return orderLetters(wordOne) === orderLetters(wordTwo);
}

// function uniqueString(strings) {
//   const normalized = strings.map((s) =>
//     [...new Set(s.toLowerCase())].sort().join("")
//   );

//   // special case to check if it's the first one:
//   if (normalized[0] !== normalized[1] && normalized[1] === normalized[2]) {
//     return strings[0];
//   }

//   const index = normalized.findIndex((string, i) => {
//     const prev = normalized[i - 1];
//     const next = normalized[i + 1];
//     return i !== 0 && string !== prev && string !== next;
//   });

//   return strings[index];
// }

// Alternate approach that supports multiple matching patterns
// eg. ['bar', 'bra', 'foo', 'abc', 'cab'] -> 'foo'
function uniqueString(strings) {
  const charGroups = strings.reduce((sorted, str) => {
    const uniqueChars = [...new Set(str.toLowerCase())].sort().join("");
    sorted[uniqueChars] ??= [];
    sorted[uniqueChars].push(str);

    return sorted;
  }, {});

  const unique = Object.values(charGroups).find(
    (words) => words.length === 1
  )[0];

  return unique;
}

function uniqueChar(string) {
  const chars = string.split("").sort();
  for (let i = 0; i < chars.length; i++) {
    const current = chars[i];
    const prev = chars[i - 1];
    const next = chars[i + 1];
    if (current !== prev && current !== next) return i;
  }

  return "_";
}

function equalSides(numbers) {
  // // O(n^2)!
  // for(let i = 0; i < numbers.length; i++) {
  //   const left = numbers.slice(0, i).reduce(((a, b) => a + b), 0);
  //   const right = numbers.slice(i + 1).reduce(((a, b) => a + b), 0);
  //   if(left === right) return i;
  // }
  // return -1;

  // O(n)  (2n still n, we care about exponent)
  let left = 0;
  let right = numbers.reduce((a, b) => a + b) - numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (left === right) return i;
    left += numbers[i];
    right -= numbers[i + 1];
  }
}

function isHappy(n) {
  const seen = {};
  while (true) {
    const sum = n
      .toString()
      .split("")
      .map((digit) => digit ** 2) // implicit conversion: '3' ** 2 --> 3 ** 2
      .reduce((a, b) => a + b);

    if (sum === 1) return true;
    if (seen[sum]) return false;
    seen[sum] = true;
    n = sum;
  }
}
module.exports = { reverseWords, titleCase };




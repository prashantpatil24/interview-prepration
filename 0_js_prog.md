# 🚀 JavaScript Interview Programs (Practice Collection)

> A collection of frequently asked JavaScript interview coding questions with solutions.

---

# 📑 Table of Contents

| No | Program | Link |
|----|---------|------|
| 1 | Infinite Currying | [Go](#1-infinite-currying) |
| 2 | Flatten Array | [Go](#2-flatten-array) |
| 3 | Find Duplicate Characters | [Go](#3-find-duplicate-characters-in-a-string) |
| 4 | Remove Duplicate Characters | [Go](#4-remove-duplicate-characters-from-a-string) |
| 5 | Find Unique Characters | [Go](#5-find-unique-non-repeating-characters) |
| 6 | Find Vowels | [Go](#6-find-vowels-in-a-string) |
| 7 | Promise Retry Mechanism | [Go](#7-promise-retry-with-timeout-mechanism) |
| 8 | Count Element Frequency | [Go](#8-count-element-frequency-in-an-array) |
| 9 | Find First Non-Repeated Character | [Go](#9-find-first-non-repeated-character) |
| 12 | Memoization | [Go](#12-memoization) |
| 13 | Anagram | [Go](#13-anagram) |
| 14 | Bracket Matcher | [Go](#14-bracket-matcher) |
| 15 | Two Sum (Target Sum) | [Go](#15-two-sum-target-sum) |
| 16 | Largest Number with Second Highest Frequency | [Go](#16-largest-number-with-second-highest-frequency) |
| 17 | Custom Map (Polyfill) | [Go](#17-custom-map-polyfill) |
| 18 | Custom Filter (Polyfill) | [Go](#18-custom-filter-polyfill) |
| 19 | Custom Reduce (Polyfill) | [Go](#19-custom-reduce-polyfill) |
| 20 | Flatten Nested Array | [Go](#20-flatten-nested-array) |
| 21 | Group By Key | [Go](#21-group-by-key) |
| 22 | Find Missing Number | [Go](#22-find-missing-number) |
| 23 | Repeat String | [Go](#23-repeat-string) |
| 24 | Reverse Array | [Go](#24-reverse-array) |
---

---

# 1. Infinite Currying

### Problem
Implement an infinite curry function.

### Solution

```javascript
// Normal Function
function sum(a){
    return function(b){
        if(b === undefined){
            return a;
        }
        return sum(a+b);
    }
}

console.log(sum(1)());        //1
console.log(sum(1)(2)());     //3
console.log(sum(1)(2)(3)());  //6

// Arrow Function
const arrow_sum = (a)=>{
    return (b)=>{
        return b === undefined ? a : arrow_sum(a+b);
    }
}

console.log(arrow_sum(1)());
console.log(arrow_sum(1)(2)());
console.log(arrow_sum(1)(2)(3)());

// ES6 Short Version
const arrow_short_sum = (a)=>(b)=> b===undefined ? a : arrow_short_sum(a+b);

console.log(arrow_short_sum(1)());
console.log(arrow_short_sum(1)(2)());
console.log(arrow_short_sum(1)(2)(3)());
```

**Output**

```
1
3
6
```

⬆️ [Back to Top](#-table-of-contents)

---

# 2. Flatten Array

### Problem

Flatten a nested array.

### Solution

```javascript
const biDimensionalArr = [11,[22,33],[44,55],[66,77],88,99];

// Method 1
const flat = biDimensionalArr.flat(Infinity);
console.log(flat);

// Method 2
const concatFlat = [].concat(...biDimensionalArr);
console.log(concatFlat);

// Method 3
function myFlat(arr){
    return arr.reduce((acc,el)=>
        acc.concat(Array.isArray(el) ? myFlat(el) : el)
    ,[]);
}

console.log(myFlat(biDimensionalArr));
```

**Output**

```
[
11,22,33,
44,55,66,
77,88,99
]
```

⬆️ [Back to Top](#-table-of-contents)

---

# 3. Find Duplicate Characters in a String

### Problem

Return duplicate characters.

### Solution

```javascript
function findDuplicates(str) {
    const map = {};
    const duplicate = [];

    for (let char of str) {
        map[char] = (map[char] || 0) + 1;

        if (map[char] === 2) {
            duplicate.push(char);
        }
    }

    return duplicate;
}

console.log(findDuplicates("programming"));
```

**Output**

```
['r','m','g']
```

⬆️ [Back to Top](#-table-of-contents)

---

# 4. Remove Duplicate Characters from a String

### Problem

Remove duplicate characters.

### Solution

```javascript
function removeDuplicatesByFlag(str) {
    const seen = {};
    const result = [];

    for (const char of str) {
        if (!seen[char]) {
            seen[char] = true;
            result.push(char);
        }
    }

    return result;
}

console.log(removeDuplicatesByFlag("programming"));
```

**Output**

```
['p','r','o','g','a','m','i','n']
```

⬆️ [Back to Top](#-table-of-contents)

---

# 5. Find Unique (Non-Repeating) Characters

### Problem

Return characters appearing only once.

### Solution

```javascript
function uniqueCharacters(str) {
    const map = {};

    for (const ch of str) {
        map[ch] = (map[ch] || 0) + 1;
    }

    return Object.keys(map).filter(ch => map[ch] === 1);
}

console.log(uniqueCharacters("programming"));
```

**Output**

```
['p','o','a','i','n']
```

⬆️ [Back to Top](#-table-of-contents)

---

# 6. Find Vowels in a String

### Problem

Find all vowels.

### Solution

```javascript
function findVowels(str) {

    const vowels = ['a','e','i','o','u'];
    const chars = [];

    for(const ch of str){
        if(vowels.includes(ch)){
            chars.push(ch);
        }
    }

    return chars;
}

console.log(findVowels("programming"));
```

**Output**

```
['o','a','i']
```

⬆️ [Back to Top](#-table-of-contents)

---

# 7. Promise Retry with Timeout Mechanism

### Problem

Retry an API until success.

### Solution

```javascript
async function retry(fn, retries = 3, delay = 1000) {

    for(let attempt=1; attempt<=retries; attempt++){

        try{
            return await fn();
        }
        catch(err){

            console.log(`Attempt ${attempt} failed`);

            if(attempt === retries){
                throw err;
            }

            await new Promise(resolve =>
                setTimeout(resolve, delay)
            );
        }

    }
}

let count = 0;

async function fetchData(){

    count++;

    console.log("Calling API:", count);

    if(count < 4){
        throw new Error("Request failed");
    }

    return {
        id:1,
        name:"Test"
    };
}

retry(fetchData,4,2000)
.then(console.log)
.catch(console.error);
```

**Output**

```
Calling API: 1
Attempt 1 failed

Calling API: 2
Attempt 2 failed

Calling API: 3
Attempt 3 failed

Calling API: 4

{
 id:1,
 name:"Test"
}
```
---

# 8. Count Element Frequency in an Array

### Problem

Count the frequency of each element in an array.

### Solution

```javascript
// Using forEach
function countElementInArray(arr) {
    let count = {};

    arr.forEach((item) => {
        count[item] = (count[item] || 0) + 1;
    });

    return count;
}

// Using reduce
function countElementInArrayByReduceMethod(arr) {
    return arr.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {});
}

console.log(
    countElementInArray([1,2,3,1,2,3,4,5,7,1,2,4])
);

console.log(
    countElementInArrayByReduceMethod([1,2,3,1,2,3,4,5,7,1,2,4])
);
```

### Output

```javascript
{
  '1': 3,
  '2': 3,
  '3': 2,
  '4': 2,
  '5': 1,
  '7': 1
}
```

### Time Complexity

```
O(n)
```

### Space Complexity

```
O(n)
```

⬆️ [Back to Top](#-table-of-contents)

---

# 9. Find First Non-Repeated Character

### Problem

Find the first character that appears only once in a string.

### Solution

```javascript
function findFirstNotRepeatedChar(str) {
    const count = {};

    // Count frequency
    for (const char of str) {
        count[char] = (count[char] || 0) + 1;
    }

    // Find first non-repeated character
    for (const char of str) {
        if (count[char] === 1) {
            return char;
        }
    }

    return null;
}

console.log(findFirstNotRepeatedChar("abcdefabcdefgh"));
```

### Output

```javascript
g
```

### Time Complexity

```
O(n)
```

### Space Complexity

```
O(n)
```

⬆️ [Back to Top](#-table-of-contents)

---
| 10 | Debounced Search | [Go](#10-debounced-search-in-javascript) |
| 11 | Deep Copy | [Go](#11-deep-copy-in-javascript) |

---

# 10. Debounced Search in JavaScript

### Problem

Implement a debounced search input to prevent unnecessary API calls while the user is typing.

### Solution

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Debounce Search</title>

<style>
body{
    font-family: Arial, sans-serif;
    margin:40px;
}

input{
    width:300px;
    padding:10px;
    font-size:16px;
}

#debounce{
    display:block;
    margin-bottom:15px;
    font-weight:bold;
}
</style>

</head>

<body>

<div id="root">
    <span id="debounce"></span>

    <input
        id="search"
        type="text"
        placeholder="Search..."
    />
</div>

<script>

const searchField = document.getElementById("search");
const debounceField = document.getElementById("debounce");

function debounce(fn, delay){

    let timer;

    return function(...args){

        clearTimeout(timer);

        timer = setTimeout(()=>{
            fn(...args);
        }, delay);

    }

}

function handleApiCall(e){

    const value = e.target.value.trim();

    if(!value){
        debounceField.textContent = "";
        return;
    }

    debounceField.textContent = value;

    console.log("API Call:", value);

}

const handleSearch = debounce(handleApiCall,1000);

searchField.addEventListener("input", handleSearch);

</script>

</body>
</html>
```

### Output

```
User types:
r
re
rea
reac
react

(wait 1 second)

API Call: react
```

### Time Complexity

```
O(1)
```

### Space Complexity

```
O(1)
```

### Interview Follow-up

- Difference between Debounce and Throttle?
- Why use `clearTimeout()`?
- Where is Debounce commonly used?
- Can Debounce return a Promise?
- Implement Debounce with Leading & Trailing options.

⬆️ [Back to Top](#-table-of-contents)

---

# 11. Deep Copy in JavaScript

### Problem

Create a deep copy of an object or array without sharing references.

### Solution

```javascript
// Original Array
const a = [
    { id: 1, name: "test_1" },
    { id: 2, name: "test_2" }
];


// -----------------------------------
// 1. JSON.parse(JSON.stringify())
// -----------------------------------

const b = JSON.parse(JSON.stringify(a));

b[0].name = "test_3";

console.log("Original:", a);
console.log("JSON Copy:", b);


// -----------------------------------
// 2. structuredClone()
// -----------------------------------

const c = structuredClone(a);

c[0].name = "test_4";

console.log("Original:", a);
console.log("structuredClone:", c);


// -----------------------------------
// 3. Recursive Deep Copy
// -----------------------------------

function deepCopy(obj){

    if(typeof obj !== "object" || obj === null){
        return obj;
    }

    const copy = Array.isArray(obj) ? [] : {};

    for(const key in obj){
        copy[key] = deepCopy(obj[key]);
    }

    return copy;
}

const d = deepCopy(a);

d[0].name = "test_5";

console.log("Original:", a);
console.log("Recursive Copy:", d);
```

### Output

```javascript
Original:
[
  { id: 1, name: "test_1" },
  { id: 2, name: "test_2" }
]

JSON Copy:
[
  { id: 1, name: "test_3" },
  { id: 2, name: "test_2" }
]

structuredClone:
[
  { id: 1, name: "test_4" },
  { id: 2, name: "test_2" }
]

Recursive Copy:
[
  { id: 1, name: "test_5" },
  { id: 2, name: "test_2" }
]
```

### Comparison

| Method | Pros | Cons |
|---------|------|------|
| `JSON.parse(JSON.stringify())` | Simple and widely supported | Loses `Date`, `Map`, `Set`, `undefined`, `Function`, `BigInt`, circular references |
| `structuredClone()` | Modern, fast, handles `Date`, `Map`, `Set`, circular references | Not available in very old browsers |
| Recursive Function | Fully customizable | Doesn't handle circular references unless implemented separately |

### Time Complexity

```
O(n)
```

### Space Complexity

```
O(n)
```

### Interview Follow-up

- Difference between Shallow Copy and Deep Copy?
- When should you use `structuredClone()`?
- Why does `JSON.stringify()` fail for circular references?
- Difference between `Object.assign()`, Spread Operator, and Deep Copy?
- Can Lodash `cloneDeep()` handle circular references?

⬆️ [Back to Top](#-table-of-contents)

---

# 12. Memoization

### Problem

Implement memoization to cache previously computed results and avoid repeated calculations.

### Solution

```javascript
function memo() {

    const cache = {};

    return function (val) {

        if (val in cache) {
            console.log("Cache Hit");
            return cache[val];
        }

        console.log("Calculating...");

        const result = val + 10;

        cache[val] = result;

        return result;
    };
}

const calculate = memo();

console.log(calculate(10));
console.log(calculate(10));
console.log(calculate(20));
console.log(calculate(30));
console.log(calculate(10));
```

### Output

```text
Calculating...
20

Cache Hit
20

Calculating...
30

Calculating...
40

Cache Hit
20
```

### Time Complexity

| Operation | Complexity |
|-----------|------------|
| First Call | O(1) |
| Cached Call | O(1) |

### Space Complexity

```
O(n)
```

### Interview Follow-up

- What is Memoization?
- Difference between Memoization and Caching?
- Where is Memoization used in React?
- Difference between `useMemo()` and `React.memo()`?
- Can Memoization cache multiple arguments?

⬆️ [Back to Top](#-table-of-contents)

---

# 13. Anagram

### Problem

Determine whether two strings are anagrams.

### Solution 1 (Sorting)

```javascript
function isAnagram(source, target) {

    return source.split("").sort().join("") ===
           target.split("").sort().join("");
}

console.log(isAnagram("listen", "silent"));
```

### Solution 2 (Hash Map)

```javascript
function isAnagramByCustom(source, target) {

    if (source.length !== target.length) {
        return false;
    }

    const count = {};

    for (const char of source) {
        count[char] = (count[char] || 0) + 1;
    }

    for (const char of target) {

        if (!count[char]) {
            return false;
        }

        count[char]--;
    }

    return true;
}

console.log(isAnagramByCustom("listen", "silent"));
```

### Output

```text
true
true
```

### Time Complexity

| Approach | Time | Space |
|----------|------|--------|
| Sorting | O(n log n) | O(n) |
| HashMap | O(n) | O(n) |

### Interview Follow-up

- Ignore spaces?
- Ignore punctuation?
- Case insensitive?
- Unicode characters?
- Find all anagrams in an array?

⬆️ [Back to Top](#-table-of-contents)

---

# 14. Bracket Matcher

### Problem

Check whether brackets are balanced using a stack.

### Solution

```javascript
function bracketMatcher(str) {

    const stack = [];

    const map = {
        ")": "(",
        "]": "[",
        "}": "{"
    };

    for (const ch of str) {

        if (ch === "(" || ch === "[" || ch === "{") {
            stack.push(ch);
        }

        else if (ch === ")" || ch === "]" || ch === "}") {

            if (stack.pop() !== map[ch]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(bracketMatcher("(coder)(byte)"));
console.log(bracketMatcher("{[(])}"));
console.log(bracketMatcher("((()))"));
console.log(bracketMatcher("(()"));
```

### Output

```text
true
false
true
false
```

### Time Complexity

```
O(n)
```

### Space Complexity

```
O(n)
```

### Interview Follow-up

- Why is Stack used?
- Can this work for HTML tags?
- What if only parentheses are present?
- Maximum stack size?

⬆️ [Back to Top](#-table-of-contents)

---

# 15. Two Sum (Target Sum)

### Problem

Find the indices of two numbers whose sum equals the target.

### Solution

```javascript
function findSumOfEqualTarget(arr, target) {

    const map = new Map();

    for (let i = 0; i < arr.length; i++) {

        const diff = target - arr[i];

        if (map.has(diff)) {
            return [map.get(diff), i];
        }

        map.set(arr[i], i);
    }

    return [];
}

console.log(findSumOfEqualTarget([2,3,8,7,6], 9));
```

### Output

```text
[0, 3]
```

### Dry Run

| Index | Value | Required | Map |
|------:|------:|---------:|-----|
| 0 | 2 | 7 | {2→0} |
| 1 | 3 | 6 | {2→0,3→1} |
| 2 | 8 | 1 | {2→0,3→1,8→2} |
| 3 | 7 | 2 ✅ | Return [0,3] |

### Time Complexity

```
O(n)
```

### Space Complexity

```
O(n)
```

### Interview Follow-up

- Return values instead of indices.
- Handle duplicate values.
- Return all possible pairs.
- Solve without extra space.
- Three Sum variation.

⬆️ [Back to Top](#-table-of-contents)

---

# 16. Largest Number with Second Highest Frequency

### Problem

Given an array, return the **largest number** whose frequency is the **second highest**.

### Example

```javascript
Input:
[1,2,2,2,3,3,3,4,4,5,5]

Output:
5
```

### Solution

```javascript
function findSecondLargest(arr) {

    const freq = {};

    for (const num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }

    const frequencies = [
        ...new Set(Object.values(freq))
    ].sort((a, b) => b - a);

    if (frequencies.length < 2) {
        return -1;
    }

    const secondHighest = frequencies[1];

    const candidates = Object.keys(freq)
        .filter(key => freq[key] === secondHighest)
        .map(Number);

    return Math.max(...candidates);
}

console.log(
    findSecondLargest([1,2,2,2,3,3,3,4,4,5,5])
);
```

### Output

```text
5
```

### Time Complexity

```
O(n)
```

### Space Complexity

```
O(n)
```

### Interview Follow-up

- Return all elements with the second-highest frequency.
- Return the smallest element instead.
- Solve without sorting.
- Find the kth highest frequency.

⬆️ [Back to Top](#-table-of-contents)

---

# 17. Custom Map (Polyfill)

### Problem

Implement the behavior of JavaScript's native `Array.prototype.map()`.

### Solution

```javascript
Array.prototype.myMap = function (callback) {

    const result = [];

    for (let i = 0; i < this.length; i++) {
        result.push(
            callback(this[i], i, this)
        );
    }

    return result;
};

const result = [1,2,3].myMap(item => item * 2);

console.log(result);
```

### Output

```text
[2,4,6]
```

### Time Complexity

```
O(n)
```

### Space Complexity

```
O(n)
```

### Interview Follow-up

- Why doesn't `map()` modify the original array?
- Difference between `map()` and `forEach()`.
- How does native `map()` handle sparse arrays?

⬆️ [Back to Top](#-table-of-contents)

---

# 18. Custom Filter (Polyfill)

### Problem

Implement the behavior of JavaScript's native `Array.prototype.filter()`.

### Solution

```javascript
Array.prototype.myFilter = function (callback) {

    const result = [];

    for (let i = 0; i < this.length; i++) {

        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }

    }

    return result;
};

const result = [1,2,3,4].myFilter(
    item => item % 2 === 0
);

console.log(result);
```

### Output

```text
[2,4]
```

### Time Complexity

```
O(n)
```

### Space Complexity

```
O(n)
```

### Interview Follow-up

- Difference between `filter()` and `find()`.
- Does `filter()` mutate the original array?
- What happens if callback returns a non-boolean value?

⬆️ [Back to Top](#-table-of-contents)

---

# 19. Custom Reduce (Polyfill)

### Problem

Implement the behavior of JavaScript's native `Array.prototype.reduce()`.

### Solution

```javascript
Array.prototype.myReducer = function (callback, initialValue) {

    let accumulator = initialValue;
    let startIndex = 0;

    // Handle missing initial value
    if (accumulator === undefined) {
        accumulator = this[0];
        startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
        accumulator = callback(
            accumulator,
            this[i],
            i,
            this
        );
    }

    return accumulator;
};

const result = [1,2,3,4].myReducer(
    (acc, item) => acc + item,
    0
);

console.log(result);
```

### Output

```text
10
```

### Time Complexity

```
O(n)
```

### Space Complexity

```
O(1)
```

### Interview Follow-up

- Why is `reduce()` so powerful?
- Difference between `reduce()` and `reduceRight()`.
- What happens if no initial value is provided?
- Implement `map()` using `reduce()`.
- Implement `filter()` using `reduce()`.

⬆️ [Back to Top](#-table-of-contents)

---

# 20. Flatten Nested Array

### Problem

Flatten a nested array into a single-dimensional array.

### Solution 1 (Built-in)

```javascript
const flatArray = [1,2,3,[4,5,6],[5,6]].flat(Infinity);

console.log(flatArray);
```

### Solution 2 (Recursive)

```javascript
function flatten(arr) {

    return arr.reduce((acc, item) => {

        return acc.concat(
            Array.isArray(item)
                ? flatten(item)
                : item
        );

    }, []);
}

console.log(
    flatten([1,2,3,[4,5,6],[5,6]])
);
```

### Output

```text
[
1,2,3,
4,5,6,
5,6
]
```

### Time Complexity

```
O(n)
```

### Space Complexity

```
O(n)
```

### Interview Follow-up

- Flatten only one level.
- Flatten without recursion.
- Implement `Array.prototype.flat()`.
- Handle deeply nested arrays.

⬆️ [Back to Top](#-table-of-contents)

---

# 21. Group By Key

### Problem

Group an array of objects by a specific property.

### Input

```javascript
const users = [
    { name: "A", age: 20 },
    { name: "B", age: 20 },
    { name: "C", age: 30 }
];
```

### Solution 1 (Loop)

```javascript
function groupByKey(arr) {

    const map = {};

    for (const user of arr) {

        const { age } = user;

        if (!map[age]) {
            map[age] = [];
        }

        map[age].push(user);
    }

    return map;
}

console.log(groupByKey(users));
```

### Solution 2 (Reduce)

```javascript
function groupByReduce(arr) {

    return arr.reduce((acc, user) => {

        const age = user.age;

        if (!acc[age]) {
            acc[age] = [];
        }

        acc[age].push(user);

        return acc;

    }, {});
}

console.log(groupByReduce(users));
```

### Output

```javascript
{
  "20": [
    { "name": "A", "age": 20 },
    { "name": "B", "age": 20 }
  ],
  "30": [
    { "name": "C", "age": 30 }
  ]
}
```

### Time Complexity

```
O(n)
```

### Space Complexity

```
O(n)
```

### Interview Follow-up

- Group by multiple keys.
- Group dynamically by any property.
- Implement `Object.groupBy()`.
- Sort groups after grouping.

⬆️ [Back to Top](#-table-of-contents)

---

# 22. Find Missing Number

### Problem

Given an array containing numbers from **1 to n** with one missing number, find the missing number.

### Example

```javascript
Input:
[1,2,3,5]

Output:
4
```

### Solution

```javascript
function findMissingNum(arr) {

    const totalElements = arr.length + 1;

    const expectedSum =
        (totalElements * (totalElements + 1)) / 2;

    const actualSum = arr.reduce(
        (acc, item) => acc + item,
        0
    );

    return expectedSum - actualSum;
}

console.log(findMissingNum([1,2,3,5]));
```

### Output

```text
4
```

### Time Complexity

```
O(n)
```

### Space Complexity

```
O(1)
```

### Interview Follow-up

- Find multiple missing numbers.
- Array is unsorted.
- Numbers don't start from 1.
- Solve using XOR.
- Missing and duplicate number together.

⬆️ [Back to Top](#-table-of-contents)

---

# 23. Repeat String

### Problem

Given an array of strings where each element contains a character followed by a number, repeat the character according to the number.

### Example

```javascript
Input:
["a2", "b3", "c4"]

Output:
["aa", "bbb", "cccc"]
```

### Solution 1 (Loop)

```javascript
function getRepeatString(arr) {

    const result = [];

    for (let i = 0; i < arr.length; i++) {

        const [char, num] = arr[i].split("");

        result.push(char.repeat(Number(num)));
    }

    return result;
}

console.log(
    getRepeatString(["a2", "b3", "c4"])
);
```

### Solution 2 (Reduce)

```javascript
function getRepeatStringWithReduce(arr) {

    return arr.reduce((acc, item) => {

        const [char, num] = item.split("");

        acc.push(char.repeat(Number(num)));

        return acc;

    }, []);
}

console.log(
    getRepeatStringWithReduce(["a2", "b3", "c4"])
);
```

### Output

```text
[
  "aa",
  "bbb",
  "cccc"
]
```

### Time Complexity

```
O(n)
```

### Space Complexity

```
O(n)
```

### Interview Follow-up

- Support multi-digit numbers (`"a12"`).
- Decode compressed strings like `"a2b3c4"`.
- Handle invalid inputs.
- Encode the string back into compressed form.

⬆️ [Back to Top](#-table-of-contents)

---

# 24. Reverse Array

### Problem

Reverse an array using different approaches.

### Input

```javascript
const arr = [1,2,3,4,5];
```

### Solution 1 (slice + reverse)

```javascript
console.log(
    arr.slice().reverse()
);
```

### Solution 2 (Spread + reverse)

```javascript
console.log(
    [...arr].reverse()
);
```

### Solution 3 (Reduce)

```javascript
const reversed = arr.reduce(
    (acc, item) => [item, ...acc],
    []
);

console.log(reversed);
```

### Solution 4 (Two Pointer - In Place)

```javascript
function reverseArray(arr) {

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {

        [arr[left], arr[right]] =
        [arr[right], arr[left]];

        left++;
        right--;
    }

    return arr;
}

console.log(
    reverseArray([1,2,3,4,5])
);
```

### Output

```text
[5,4,3,2,1]
```

### Time Complexity

| Method | Time | Space |
|---------|------|--------|
| reverse() | O(n) | O(1) (in-place) |
| slice().reverse() | O(n) | O(n) |
| Spread + reverse | O(n) | O(n) |
| reduce() | O(n²) | O(n) |
| Two Pointer | O(n) | O(1) |

> **Note:** Avoid using `arr.sort((a, b) => b - a)` to reverse an array. It **sorts** the elements in descending order rather than reversing their existing order, and it mutates the original array.

### Interview Follow-up

- Reverse an array without using built-in methods.
- Reverse only part of an array.
- Reverse a string using the two-pointer approach.
- Difference between `reverse()` and `sort()`.

⬆️ [Back to Top](#-table-of-contents)

---

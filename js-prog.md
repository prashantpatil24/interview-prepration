# 1. Curry Sum Function Examples
 
```javascript
//normal curry function
function sum(a){
    return function(b){
        if(b === undefined){
            return a
        }
        return sum(a+b) 
    }
}
console.log(sum(1)())//1
console.log(sum(1)(2)())//3
console.log(sum(1)(2)(3)())//6
 
//using arrow_sum ==> es6
const arrow_sum = (a) => {
    return (b) =>{
       return  b === undefined ? a : arrow_sum(a+b)
    }
}
console.log(arrow_sum(1)())//1
console.log(arrow_sum(1)(2)())//3
console.log(arrow_sum(1)(2)(3)())//6
 
//using es6 arrow with shortcut
const arrow_short_sum = (a) => (b) => b === undefined ? a : arrow_short_sum(a+b)
console.log(arrow_short_sum(1)())//1
console.log(arrow_short_sum(1)(2)())//3
console.log(arrow_short_sum(1)(2)(3)())//6
```

# 2. Flat array with different method

```javascript
const biDimensionalArr = [11, [22, 33], [44, 55], [66, 77], 88, 99];

//default method
const flat = biDimensionalArr.flat(Infinity) 
console.log(flat) // [11,22,33,44,55,66,77,88,99]

//concat method
const concatFlat = [].concat(...biDimensionalArr)
console.log(concatFlat) // [11,22,33,44,55,66,77,88,99]

//by custom method
function myFlat(arr){
    return arr.reduce((acc,el)=> acc.concat(Array.isArray(el) ? myFlat(el) : ele) ,[])
}
console.log(myFlat(biDimensionalArr)) // [11,22,33,44,55,66,77,88,99]
```
# 3. Find Duplicate Characters in String
 
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

console.log(findDuplicates("programming")); // ['r','m','g']
```
# 4. Remove duplicate without in build 
 
```javascript

function removeDuplicatesByFlag(str) {
    const seen = {};
    const result = [];

    for (const char of str) {
        if (!seen[char]) {
            seen[char] = true;   // Assignment
            result.push(char);
        }
    }

    return result;
}

console.log(removeDuplicates("programming")); //[ 'p', 'r', 'o',   'g', 'a', 'm', 'i', 'n']
```
# 6. Return only unique (non-repeating) characters
 
```javascript

function uniqueCharacters(str) {
    const map = {};

    for (const ch of str) {
        map[ch] = (map[ch] || 0) + 1;
    }

    return Object.keys(map).filter(ch => map[ch] === 1);
}

console.log(uniqueCharacters("programming")); //['p', 'o', 'a', 'i', 'n']
```





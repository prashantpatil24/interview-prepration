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
# 7. Find Vowels in string
 
```javascript

function findVowels(str) {
    const vowels = ['a','e','i','o','u']
    const char = []
    for (const ch of str) {
        if(vowels.includes(ch)){
            char.push(ch)
        }
    }
    return char;
}
console.log(findVowels("programming")); 

```
# 8. Product with pagination (React)
 
```javascript
import React, { useEffect, useState } from "react";

export default function App() {
  const limit = 10;

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    async function fetchProducts() {
      const skip = (page - 1) * limit;

      try {
        const res = await fetch(
          `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
        );

        const data = await res.json();

        setProducts(data.products);
        setTotalPages(Math.ceil(data.total / limit));
      } catch (err) {
        console.error(err);
      }
    }

    fetchProducts();
  }, [page]);

  return (
    <div>
      <h2>Products</h2>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - ${product.price}
          </li>
        ))}
      </ul>

      <button
        disabled={page === 1}
        onClick={() => setPage((p) => p - 1)}
      >
        Prev
      </button>

      <span style={{ margin: "0 10px" }}>
        Page {page} of {totalPages}
      </span>

      <button
        disabled={page === totalPages}
        onClick={() => setPage((p) => p + 1)}
      >
        Next
      </button>
    </div>
  );
}
```
# 8. Promise with timeout and retry mechanism

```javascript

async function retry(fn, retries = 3, delay = 1000) {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            return await fn();
        } catch (err) {
            console.log(`Attempt ${attempt} failed`);

            if (attempt === retries) {
                throw err;
            }

            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }
}

let count = 0;

async function fetchData() {
    count++;
    console.log("Calling API:", count);

    if (count < 4) {
        throw new Error("Request failed");
    }

    return {
        id: 1,
        name: "Test"
    };
}

retry(fetchData, 4, 2000)
    .then(console.log)
    .catch(console.error);

```



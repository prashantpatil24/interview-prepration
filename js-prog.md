# JavaScript & React Interview Programs (Practice Collection)

# 1. Curry Function

``` javascript
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

# 2. flat array

``` javascript
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

# 3. find duplicate characters

``` javascript

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

# 4. remove duplicate characters

``` javascript

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

# 6. return only unique (non-repeating) characters

``` javascript

function uniqueCharacters(str) {
    const map = {};
    for (const ch of str) {
        map[ch] = (map[ch] || 0) + 1;
    }
    return Object.keys(map).filter(ch => map[ch] === 1);
}

console.log(uniqueCharacters("programming")); //['p', 'o', 'a', 'i', 'n']
```

# 7. find vowels in string

``` javascript

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

# 8. product list with pagination - React

``` javascript
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

# 9. Promise with timeout and retry mechanism

``` javascript

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

# 9. Count (+,-,0) using UseReducer

``` javascript
import React, { useReducer } from "react";

const initialState = 0;

function reducer(state, action) {
    switch (action.type) {
        case "INCREMENT": return state + 1;
        case "DECREMENT": return state - 1;
        case "RESET": return initialState;
        default: return state;
    }
}

export default function App() {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h2>Counter using useReducer</h2>
            <p>{count}</p>
            <button onClick={() => dispatch({ type: "INCREMENT" })}> Increment </button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}> Decrement </button>
            <button onClick={() => dispatch({ type: "RESET" })}> Reset </button>
        </div>
    );
}
```

# 10. theme change with Context

``` javascript
import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext("light");

function ThemeButton() {
    const theme = useContext(ThemeContext);

    const background = theme === "light" ? "#eee" : "#333";
    const color = theme === "light" ? "#000" : "#fff";

    return (
        <button
            style={{
                background,
                color,
                margin: "10px 10px",
                padding: "10px 20px",
                border: "none",
                cursor: "pointer"
            }}
        >
            Current Theme: {theme}
        </button>
    );
}

export default function App() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={theme}>
            <h2>Theme with Context API</h2>

            <ThemeButton />

            <button onClick={toggleTheme}>
                Toggle Theme
            </button>
        </ThemeContext.Provider>
    );
}
```

# 11. Task (add, update, delete) with React

``` javascript
import React, { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editId, setEditId] = useState(null);

  // Add Task
  const addTask = () => {
    if (!newTask.trim()) return;

    const task = {
      id: Date.now(),
      text: newTask.trim(),
    };

    setTasks((prev) => [...prev, task]);
    setNewTask("");
  };

  // Edit Task
  const editTask = (id) => {
    const task = tasks.find((t) => t.id === id);

    if (!task) return;

    setNewTask(task.text);
    setEditId(id);
  };

  // Update Task
  const updateTask = () => {
    if (!newTask.trim()) return;

    setTasks((prev) =>
      prev.map((task) =>
        task.id === editId
          ? { ...task, text: newTask.trim() }
          : task
      )
    );

    setNewTask("");
    setEditId(null);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));

    // Reset edit mode if the edited task is deleted
    if (editId === id) {
      setEditId(null);
      setNewTask("");
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "30px auto" }}>
      <h2>Todo CRUD App</h2>

      <input
        type="text"
        placeholder="Enter task..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />

      {editId === null ? (
        <button onClick={addTask}>Add</button>
      ) : (
        <button onClick={updateTask}>Update</button>
      )}

      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ margin: "10px 0" }}>
            {task.text}

            <button
              style={{ marginLeft: "10px" }}
              onClick={() => editTask(task.id)}
            >
              Edit
            </button>

            <button
              style={{ marginLeft: "5px" }}
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {tasks.length === 0 && <p>No tasks available.</p>}
    </div>
  );
}
```

# 12. Count Element in Array

``` javascript

function countElementInArray(arr){
    let count = {}
    arr.forEach((item)=> count[item] = (count[item]||0) + 1)
    return count
}

function countElementInArrayByReduceMethod(arr){
    return arr.reduce((acc,item)=> {
         acc[item] = (acc[item]||0) + 1 
        return acc
    },{})
}
console.log(countElement([1,2,3,1,2,3,4,5,7,1,2,4]))
console.log(countByReduce([1,2,3,1,2,3,4,5,7,1,2,4]))
//{ '1': 3, '2': 3, '3': 2, '4': 2, '5': 1, '7': 1 }
```

# 13. Find First Non-Repeated Character

``` javascript

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

    return null; // No unique character found
}

console.log(findFirstNotRepeatedChar("abcdefabcdefgh")); // g
```

# 14. Toggle Theme and apply on body

``` javascript

export default function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.style.backgroundColor =
      theme === "light" ? "#eee" : "#333";

    document.body.style.color =
      theme === "light" ? "#000" : "#fff";
  }, [theme]);

  return (
    <div>
      <h2>Theme Switcher</h2>

      <p>Current Theme: {theme}</p>

      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}
```

# 15. Debounce with search field in React

``` javascript

import { useEffect, useState } from "react";

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

export default function App() {
  const [value, setValue] = useState("");

  const debouncedValue = useDebounce(value, 1000);

  return (
    <div>
      <h2>Debounced Search</h2>

      <p>Debounced Value: {debouncedValue}</p>

      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
```

# 16. Debounce with search field in Javascript

``` javascript

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Debounce Search</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 40px;
        }

        input {
            width: 300px;
            padding: 10px;
            font-size: 16px;
        }

        #debounce {
            display: block;
            margin-bottom: 15px;
            font-weight: bold;
        }
    </style>
</head>
<body>

<div id="root">
    <span id="debounce"></span>
    <input
        type="text"
        id="search"
        placeholder="Search..."
    />
</div>

<script>

    const searchField = document.getElementById("search");
    const debounceField = document.getElementById("debounce");

    function debounce(fn, delay) {
        let timer;
        return function (...args) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                fn(...args);
            }, delay);
        };
    }

    function handleApiCall(e) {
        const value = e.target.value.trim();
        if (!value) {
            debounceField.textContent = "";
            return;
        }
        debounceField.textContent = value;
        console.log("API Call:", value);
    }

    const handleSearch = debounce(handleApiCall, 1000);
    searchField.addEventListener("input", handleSearch);

</script>

</body>
</html>
```

# 17. Deep Copy

``` javascript

    // Original Array
    const a = [
        { id: 1, name: "test_1" },
        { id: 2, name: "test_2" }
    ];

    // -------------------------
    // 1. Deep Copy using JSON
    // -------------------------

    const b = JSON.parse(JSON.stringify(a));

    b[0].name = "test_3";

    console.log("Original:", a);
    console.log("JSON Copy:", b);

    // -------------------------
    // 2. Deep Copy using structuredClone()
    // -------------------------

    const c = structuredClone(a);

    c[0].name = "test_4";

    console.log("Original:", a);
    console.log("structuredClone:", c);

    // -------------------------
    // 3. Deep Copy using Recursion
    // -------------------------

    function deepCopy(obj) {

        if (typeof obj !== "object" || obj === null) {
            return obj;
        }

        const copy = Array.isArray(obj) ? [] : {};

        for (const key in obj) {
            copy[key] = deepCopy(obj[key]);
        }

        return copy;
    }

    const d = deepCopy(a);

    d[0].name = "test_5";

    console.log("Original:", a);
    console.log("Recursive Copy:", d);
```

# 17. Deep Copy

``` javascript

    // Original Array
    const a = [
        { id: 1, name: "test_1" },
        { id: 2, name: "test_2" }
    ];

    // -------------------------
    // 1. Deep Copy using JSON
    // -------------------------

    const b = JSON.parse(JSON.stringify(a));

    b[0].name = "test_3";

    console.log("Original:", a);
    console.log("JSON Copy:", b);

    // -------------------------
    // 2. Deep Copy using structuredClone()
    // -------------------------

    const c = structuredClone(a);

    c[0].name = "test_4";

    console.log("Original:", a);
    console.log("structuredClone:", c);

    // -------------------------
    // 3. Deep Copy using Recursion
    // -------------------------

    function deepCopy(obj) {

        if (typeof obj !== "object" || obj === null) {
            return obj;
        }

        const copy = Array.isArray(obj) ? [] : {};

        for (const key in obj) {
            copy[key] = deepCopy(obj[key]);
        }

        return copy;
    }

    const d = deepCopy(a);

    d[0].name = "test_5";

    console.log("Original:", a);
    console.log("Recursive Copy:", d);
```

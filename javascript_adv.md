## Javascript Interview Question   

# Controlled vs Uncontrolled Components

| Controlled Component         | Uncontrolled Component                            |
| ---------------------------- | ------------------------------------------------- |
| React controls the form data | DOM controls the form data                        |
| Uses `useState`              | Uses `useRef`                                     |
| Value stored in React state  | Value stored in DOM                               |
| Re-renders on every change   | No re-render while typing                         |
| Easy validation              | Validation is manual                              |
| Recommended for most forms   | Good for simple forms or third-party integrations |

# Difference between Memoization and Caching

| Memoization                    | Caching                               |
| ------------------------------ | ------------------------------------- |
| Stores function results        | Stores any type of data               |
| Input → Output mapping         | Key → Value mapping                   |
| Mostly used for pure functions | Used for API, DB, images, files, etc. |
| Usually in memory              | Memory, Redis, Browser, CDN, Database |
| Scope is usually local         | Can be shared across applications     |


## Difference between `filter()` and `find()`

| `filter()`                            | `find()`                                           |
| ------------------------------------- | -------------------------------------------------- |
| Returns **all matching elements**     | Returns the **first matching element**             |
| Returns an **array**                  | Returns a **single object/value** (or `undefined`) |
| Iterates through the **entire array** | Stops as soon as it finds the first match          |
| Use when you need multiple results    | Use when you need only one result                  |


## Lexical Scope

**Lexical Scope** means that **a function can access variables based on
where it is defined in the code, not where it is called.** The scope is
determined at the time the function is created.

# JavaScript - Nullish Coalescing Operator (`??`)

## What is the Nullish Coalescing Operator (`??`)?

The **Nullish Coalescing Operator (`??`)** returns the **right-hand value only if the left-hand value is `null` or `undefined`**.

Unlike the logical OR (`||`), it **does not treat other falsy values** such as `0`, `false`, `''` (empty string), or `NaN` as missing values.

---

## Syntax

```javascript
const result = value ?? defaultValue;
```

If `value` is:

- `null` → returns `defaultValue`
- `undefined` → returns `defaultValue`
- Otherwise → returns `value`

---

## Example

```javascript
let name = null;

console.log(name ?? "Guest");
```

### Output

```text
Guest
```

---

## More Examples

```javascript
console.log(null ?? "Default");       // Default
console.log(undefined ?? "Default");  // Default
console.log(0 ?? 100);                // 0
console.log(false ?? true);           // false
console.log("" ?? "Hello");           // ""
console.log(NaN ?? 10);               // NaN
```

---

# Difference between `??` and `||`

| `??` (Nullish Coalescing) | `||` (Logical OR) |
|---------------------------|-------------------|
| Returns right side only if left is `null` or `undefined` | Returns right side if left is **any falsy value** |
| Preserves `0`, `false`, `''`, and `NaN` | Treats `0`, `false`, `''`, and `NaN` as false |
| Best for default values when valid falsy values should be kept | Best for general boolean fallback logic |

---

## Example Comparison

```javascript
const count = 0;

console.log(count || 10);
console.log(count ?? 10);
```

### Output

```text
10
0
```

Explanation:

- `||` treats `0` as falsy, so it returns `10`.
- `??` treats only `null` and `undefined` as missing values, so it returns `0`.

---

## Another Example

```javascript
const isAdmin = false;

console.log(isAdmin || true);  // true
console.log(isAdmin ?? true);  // false
```

---

## Empty String Example

```javascript
const username = "";

console.log(username || "Guest"); // Guest
console.log(username ?? "Guest"); // ""
```

---

# Interview One-Liner

> **`??` returns the right-hand value only when the left-hand value is `null` or `undefined`, whereas `||` returns the right-hand value for any falsy value (`0`, `false`, `''`, `NaN`, `null`, or `undefined`).**

---

# Memory Trick

- **`??` → Only checks `null` and `undefined`**
- **`||` → Checks all falsy values**


# function scope vs block scope
```javascript
{
  {
     var a = 10;
     let b = 20;
     console.log(a); //10 var is function-scoped, not block-scoped.
     console.log(b); //20 let is block-scoped, but the inner block is nested inside the block where b is declared
  }
}
```
# Babel vs Polyfill

| Babel | Polyfill |
|--------|----------|
| Transpiles modern JavaScript syntax | Adds missing JavaScript features/APIs |
| Converts ES6+ → ES5 | Implements unsupported APIs in older browsers |
| Changes your code | Adds runtime functionality |
| Cannot add `Promise`, `fetch`, or `includes()` by itself | Can provide `Promise`, `fetch`, `includes()`, etc. |
| Example: Arrow Functions, Classes, Template Literals | Example: `Promise`, `fetch`, `Map`, `Set`, `Array.includes()` |

  ------------------------------------------------------------------------
  **Feature**      **Babel**                      **Polyfill**
  ---------------- ------------------------------ ------------------------
  Purpose          Converts modern JavaScript     Adds missing JavaScript
                   syntax into older syntax       features/APIs

  What it does     **Transpiles** code            **Implements missing
                                                  APIs**

  Handles          Arrow functions, classes,      Promise,
                   optional chaining, async       Array.includes(), Map,
                   syntax, JSX                    Set, fetch (not all),
                                                  etc.

  Changes syntax?  ✅ Yes                         ❌ No

  Adds runtime     ❌ Not by itself               ✅ Yes
  code?                                           
  ------------------------------------------------------------------------
  # Tailwind CSS vs Bootstrap

| Tailwind CSS | Bootstrap |
|--------------|-----------|
| Utility-first framework | Component-based framework |
| Build custom UI using utility classes | Uses pre-built UI components |
| Highly customizable | Opinionated default design |
| Smaller production bundle (with PurgeCSS) | Larger CSS bundle |
| Minimal custom CSS required | Often needs CSS overrides |
| Faster for custom designs | Faster for admin dashboards and prototypes |
| No default UI look | Bootstrap components have a recognizable default look |
| Steeper learning curve initially | Easier for beginners |

## What is Tailwind CSS?

Tailwind CSS is a **utility-first CSS framework** that provides
pre-built utility classes to build custom UI directly in HTML/JSX
without writing much custom CSS.

Example:

\<button class=\"bg-blue-500 text-white px-4 py-2 rounded
hover:bg-blue-600\"\>

Submit

\</button\>

Advantages

-   Utility-first approach

-   Faster UI development

-   Highly customizable

-   Small production bundle (purges unused CSS)

-   Responsive utilities built in

-   Dark mode support

-   Consistent design system

-   Easy to integrate with React, Next.js, Vue, Angular

Disadvantages

-   HTML/JSX can become cluttered with many classes

-   Learning utility class names takes time

-   May require \@apply or custom CSS for complex reusable styles

# **Install Tailwind CSS**

> npm install tailwindcss \@tailwindcss/vite
>
> Then configure tailwind.config.js:
>
> \"For a React + Vite project using Tailwind CSS v4, I install
> tailwindcss and \@tailwindcss/vite, add the Tailwind Vite plugin in
> vite.config.js, import tailwindcss in my main CSS file, import that
> CSS into main.jsx, and then run the application.
>
> For older Tailwind v3 projects, I initialize the configuration with
> tailwind.config.js and use the \@tailwind base, \@tailwind components,
> and \@tailwind utilities directives.\"

# What is the difference between isNaN and Number.isNaN?

**isNaN**: The global function isNaN converts the argument to a Number and
returns true if the resulting value is NaN.

**Number.isNaN**: This method does not convert the argument. But it returns
true when the type is a Number and value is NaN

##

# defineProperties 

**Object.defineProperties()** : lets you define multiple properties at once
and control their descriptors such as:

-   value
-   writable
-   enumerable
-   configurable
-   get
-   Set

```javascript
const ob = {}
Object.defineProperties(obj, {
    property1: {
        value: 42,
        writable: true,
        enumerable: true,
        configurable: true
    },
    property2: {
        get() {
            return this._value;
        },
        set(v) {
         this._value = v;
        },
        enumerable: true,
        configurable: true
    }
});
```
-   value: The property\'s value.
-   writable: If true, the value can be **changed**.
-   enumerable: If true, the property appears in **loops** such as
    > for\...in and in Object.keys().
-   configurable: If true, the property can be **deleted** or its
    > descriptor changed.
-   get: Function called when the property is read.
-   set: Function called when the property is assigned.

# Difference Between defineProperty() and defineProperties()

```javascript
    //Single Property
    Object.defineProperty(obj, "id", {
        value: 1
    });

    //Multiple Properties
    Object.defineProperties(obj, {
        id: {
            value: 1
        },
        name: {
            value: "Prashant"
        }
    });
```
| **Method**               | **Copies Own Properties?** | **Prototype Preserved?** | **Copy Type**         | **Use Case**                                       |
| ------------------------ | -------------------------- | ------------------------ | --------------------- | -------------------------------------------------- |
| `Object.create(obj)`     | ❌ No                       | ✅ Yes                    | Prototype inheritance | Create an object that inherits from another object |
| `Object.assign({}, obj)` | ✅ Yes                      | ❌ No                     | Shallow copy          | Clone or merge objects                             |
| `{ ...obj }`             | ✅ Yes                      | ❌ No                     | Shallow copy          | Modern syntax for cloning objects                  |


# Difference between Rest Parameter and arguments

```javascript
    //arguments:
    function test() {
        console.log(arguments);
    }
```
    - Available in regular functions
    - Array-like object
    - Not a real array

//rest

```javascript
    function test(...args) {
        console.log(args);
    }
    rest (...args):
```
    - Real array
    - Supports array methods (map, filter, reduce)
    - Preferred in modern JavaScript



# Compiler vs Interpreter

A **compiler** translates the entire source code into machine code before execution, producing an executable program.

An **interpreter** translates and executes code line by line at runtime.

## Key Differences

| Compiler | Interpreter |
|----------|-------------|
| Translates the entire program before execution | Translates and executes code line by line |
| Generates an executable file | Does not generate a separate executable |
| Faster execution after compilation | Slower execution due to runtime translation |
| Compilation errors shown after compiling the whole program | Errors are reported line by line during execution |
| Better runtime performance | Easier debugging and faster development |

## Advantages of a Compiler

- Faster execution
- Better optimization
- Generates standalone executable
- Suitable for production applications

## Advantages of an Interpreter

- Faster development cycle
- Easier debugging
- Platform independent (requires interpreter)
- Executes code immediately

## Examples

### Compiled Languages
- C
- C++
- Rust
- Go

### Interpreted Languages
- Python
- Ruby
- PHP
- Bash

## JavaScript

Modern JavaScript engines (such as **Google V8**) use **Just-In-Time (JIT) Compilation**, combining the advantages of both compilation and interpretation.

- Parses JavaScript code.
- Compiles frequently executed code into machine code.
- Optimizes hot code during runtime.
- Provides near-native execution speed.

> **Interview Point:** JavaScript is **neither purely compiled nor purely interpreted**. Modern engines use **JIT Compilation**, which combines characteristics of both approaches.

# Promise Methods

```javascript
const promise1 = Promise.resolve("promise1");
const promise2 = Promise.reject("promise2");
const promise3 = Promise.resolve("promise3");
```

---

# 1. Promise.all()

```javascript
Promise.all([promise1, promise2, promise3])
  .then(result => console.log(result))
  .catch(error => console.log(error));
```

## Rule

- Waits for **all promises to fulfill**.
- If **any promise rejects**, it immediately rejects.
- Returns the fulfilled values in the same order as the input array.

### Output

```javascript
promise2
```

---

# 2. Promise.allSettled()

```javascript
Promise.allSettled([promise1, promise2, promise3])
  .then(result => console.log(result))
  .catch(error => console.log(error));
```

## Rule

- Waits for **all promises to settle**.
- Doesn't matter whether they **fulfill** or **reject**.
- Always resolves with an array describing the result of every promise.

### Output

```javascript
[
  { status: "fulfilled", value: "promise1" },
  { status: "rejected", reason: "promise2" },
  { status: "fulfilled", value: "promise3" }
]
```

## Why `.then()` and not `.catch()`?

Because **`Promise.allSettled()` never rejects**.

Even if every promise fails:

```javascript
Promise.allSettled([
  Promise.reject("A"),
  Promise.reject("B")
])
.then(console.log);
```

Output:

```javascript
[
  { status: "rejected", reason: "A" },
  { status: "rejected", reason: "B" }
]
```

---

# 3. Promise.race()

```javascript
Promise.race([promise1, promise2, promise3])
  .then(result => console.log(result))
  .catch(error => console.log(error));
```

## Rule

- Returns the **first settled promise**.
- **Settled** means either:
  - Fulfilled ✅
  - Rejected ❌

### Output (depends on which settles first)

```javascript
promise1
```

or

```javascript
promise2
```

> Whichever promise settles first wins.

---

# 4. Promise.any()

```javascript
Promise.any([promise1, promise2, promise3])
  .then(result => console.log(result))
  .catch(error => console.log(error));
```

## Rule

- Returns the **first fulfilled promise**.
- Ignores rejected promises.
- Rejects only if **all promises reject**.

### Output

```javascript
promise1
```

### If all promises reject

```javascript
Promise.any([
  Promise.reject("A"),
  Promise.reject("B")
])
.catch(error => console.log(error));
```

Output:

```javascript
AggregateError: All promises were rejected
```

---

# Comparison Table

| Method | Success Condition | Failure Condition | Output |
|---------|-------------------|-------------------|--------|
| `Promise.all()` | All promises fulfill | Any promise rejects | Rejects with first error |
| `Promise.allSettled()` | Always resolves | Never rejects | Array of status objects |
| `Promise.race()` | First promise fulfills | First promise rejects | First settled result |
| `Promise.any()` | First promise fulfills | All promises reject | First fulfilled value or `AggregateError` |

---

# Interview One-Liners

- **`Promise.all()`** → **"All must succeed."**
- **`Promise.allSettled()`** → **"Give me everyone's result."**
- **`Promise.race()`** → **"Whoever finishes first wins (success or failure)."**
- **`Promise.any()`** → **"Give me the first success; ignore failures unless everyone fails."**

---

# Memory Trick

| Method | Think Like |
|---------|------------|
| `all()` | Team project — everyone must finish |
| `allSettled()` | Exam report card — show everyone's result |
| `race()` | Sprint race — first to finish wins |
| `any()` | First successful candidate gets selected |

# What is JavaScript?

JavaScript is a **high-level**, **dynamic**, and **interpreted (JIT-compiled)** programming language used to make web pages interactive and build modern web applications.

It primarily runs in the **browser**, and it can also run on the **server** using environments like **Node.js**.

## What JavaScript Does

### Without JavaScript

- Static web pages (HTML + CSS only)
- No interactivity
- No dynamic updates

### With JavaScript

- Handle button clicks and user interactions
- Validate forms
- Manipulate the DOM
- Fetch data without refreshing the page (AJAX/Fetch API)
- Create animations
- Build Single Page Applications (React, Angular, Vue)
- Build backend applications using Node.js

---

# async vs defer in JavaScript

By default, when the browser encounters a script:

```html
<script src="app.js"></script>
```

The browser:

1. Stops HTML parsing.
2. Downloads the JavaScript file.
3. Executes the script.
4. Continues parsing the remaining HTML.

This blocks page rendering and can slow down page loading.

---

## 1. async

```html
<script src="app.js" async></script>
```

### How it works

- Downloads the script in parallel with HTML parsing.
- Executes immediately after the download completes.
- HTML parsing pauses while the script executes.
- Execution order is **not guaranteed**.

### Best Use Cases

- Analytics scripts
- Advertisements
- Third-party widgets
- Independent scripts

---

## 2. defer

```html
<script src="app.js" defer></script>
```

### How it works

- Downloads the script in parallel with HTML parsing.
- Waits until HTML parsing is complete.
- Executes before the `DOMContentLoaded` event.
- Maintains execution order when multiple deferred scripts are present.

### Best Use Cases

- Application scripts
- React, Angular, Vue applications
- Scripts that depend on the DOM
- Multiple JavaScript files with dependencies

---

# Comparison Table

| Feature | `async` | `defer` |
|---------|---------|---------|
| Download | Parallel with HTML parsing | Parallel with HTML parsing |
| Execution Time | Immediately after download | After HTML parsing completes |
| Blocks HTML Parsing During Execution | ✅ Yes (briefly) | ❌ No |
| Execution Order Maintained | ❌ No | ✅ Yes |
| Waits for DOM to Finish | ❌ No | ✅ Yes |
| Best Use Case | Analytics, Ads, Independent Scripts | Main Application Scripts |

---

# Multiple Scripts Example

### async

```html
<script src="a.js" async></script>
<script src="b.js" async></script>
```

Execution order depends on which script downloads first.

Possible output:

```
b.js
a.js
```

---

### defer

```html
<script src="a.js" defer></script>
<script src="b.js" defer></script>
```

Execution order always follows the HTML order:

```
a.js
b.js
```

---

# Interview One-Liner

- **Default** → Stops HTML parsing, downloads, executes, then continues.
- **`async`** → Download in parallel, execute as soon as ready, order **not guaranteed**.
- **`defer`** → Download in parallel, execute after HTML parsing, order **guaranteed**.

> **Rule of Thumb:** Use **`defer`** for your application's JavaScript and **`async`** for independent third-party scripts like analytics or ads.


# How can you avoid memory consumption issues caused by `var`?

`var` is **function-scoped**, so variables remain alive for the entire function execution. This can cause unnecessary memory retention, especially when large objects are kept referenced longer than needed.

Modern JavaScript prefers **`let`** and **`const`** because they are **block-scoped**, limiting the lifetime of variables.

## Best Practices

- Prefer `let` and `const` over `var`.
- Keep variable scope as small as possible.
- Remove references to large objects when they are no longer needed.
- Avoid accidental global variables.
- Clear timers (`setTimeout`, `setInterval`) when finished.
- Remove unused event listeners.
- Avoid unnecessary closures that retain large objects.
- Let the **Garbage Collector (GC)** reclaim unused memory.

### Interview One-Liner

> **Use `let` and `const` instead of `var`, minimize variable scope, remove unnecessary references, and clean up timers, event listeners, and closures so the garbage collector can reclaim memory.**

---

# `prototype` vs `__proto__`

## `prototype`

- A property of **functions and classes**.
- Acts as a **template** for objects created using the `new` keyword.
- Used to define shared methods and properties.

## `__proto__`

- A property of **objects**.
- Points to the object's prototype.
- Used by JavaScript to perform inheritance and method lookup.

## Example

```javascript
function User() {}

const user = new User();

console.log(user.__proto__ === User.prototype); // true

console.log(User.prototype.constructor === User); // true

console.log(User.prototype.__proto__ === Object.prototype); // true
```

## Prototype Chain

```
user
  │
  ▼
user.__proto__
  │
  ▼
User.prototype
  │
  ▼
Object.prototype
  │
  ▼
null
```

## Key Differences

| `prototype` | `__proto__` |
|-------------|-------------|
| Property of functions/classes | Property of objects |
| Used when creating objects with `new` | Reference to the object's prototype |
| Defines shared methods | Used for inheritance lookup |
| Exists on constructor functions | Exists on every object |

### Interview One-Liner

> **`prototype` belongs to constructor functions and defines shared members, whereas `__proto__` belongs to objects and points to the prototype they inherit from.**

> **Note:** `__proto__` is widely supported but considered legacy. Prefer `Object.getPrototypeOf()` and `Object.setPrototypeOf()` in modern JavaScript.

---

# Pure Function vs Pure Component

## Pure Function

A **pure function**:

1. Always returns the **same output** for the **same input**.
2. Has **no side effects** (doesn't modify external state, DOM, variables, make API calls, etc.).

### Example

```javascript
function add(a, b) {
  return a + b;
}

add(2, 3); // 5
add(2, 3); // 5
```

### Characteristics

- Predictable
- Easy to test
- Easy to debug
- Supports memoization
- No hidden dependencies

### Interview One-Liner

> **A pure function always returns the same output for the same input and produces no side effects, making it predictable and easy to optimize.**


# Class in JavaScript

Before ES6, JavaScript used **constructor functions** and **prototypes** to create objects. ES6 introduced the `class` syntax, which provides a cleaner and more readable way to achieve the same behavior.

> **Note:** A JavaScript class is **syntactic sugar** over constructor functions and prototypes.

---

## Constructor Function (Before ES6)

```javascript
function Bike(model, color) {
  this.model = model;
  this.color = color;
}

Bike.prototype.getDetails = function () {
  return `${this.model} bike has ${this.color} color`;
};

const bike = new Bike("Honda", "Red");

console.log(bike.getDetails());
```

---

## ES6 Class

```javascript
class Bike {
  constructor(model, color) {
    this.model = model;
    this.color = color;
  }

  getDetails() {
    return `${this.model} bike has ${this.color} color`;
  }
}

const bike = new Bike("Honda", "Red");

console.log(bike.getDetails());
```

---

# Constructor Function vs ES6 Class

| Constructor Function | ES6 Class |
|----------------------|-----------|
| Uses function keyword | Uses `class` keyword |
| Methods added using `prototype` | Methods defined inside class body |
| Can be called without `new` (not recommended) | Must be called with `new` |
| Less readable | Cleaner and easier to read |
| Prototype-based | Still prototype-based (syntactic sugar) |

---

# Object Literal (`{}`) vs Class Object

## 1. Object Literal

An object literal creates a **single object directly**.

```javascript
const user = {
  name: "John",
  age: 25,

  greet() {
    console.log("Hello");
  }
};

console.log(user.name);
```

### Characteristics

- Quick and simple
- Best for one-off objects
- No blueprint for creating multiple objects
- Each object owns its own methods

---

## Make Only One Property Read-Only

```javascript
const user = {
  name: "John",
  age: 25
};

Object.defineProperty(user, "name", {
  writable: false
});

user.name = "Alice";

console.log(user.name); // John
```

### Result

- `name` becomes read-only.
- Other properties remain editable.

---

## 2. Class Object

A class is a **blueprint** for creating multiple similar objects.

```javascript
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello");
  }
}

const user1 = new User("John", 25);
const user2 = new User("Alice", 30);
```

### Characteristics

- Reusable
- Supports inheritance
- Methods stored on prototype
- Better memory usage
- Easier to maintain

---

# Memory Difference

## Object Literal

```javascript
const user1 = {
  greet() {
    console.log("Hello");
  }
};

const user2 = {
  greet() {
    console.log("Hello");
  }
};
```

Memory:

```
user1
 └── greet()  ← Separate function

user2
 └── greet()  ← Another separate function
```

Each object stores its own copy of `greet()`.

---

## Class

```javascript
class User {
  greet() {
    console.log("Hello");
  }
}

const user1 = new User();
const user2 = new User();
```

Memory:

```
        User.prototype
            │
         greet()
         /      \
    user1      user2
```

Only **one copy** of `greet()` exists in memory.

---

# Prototype Check

### Object Literal

```javascript
const user = {};

console.log(user.__proto__ === Object.prototype);
// true
```

### Class Instance

```javascript
class User {}

const user = new User();

console.log(user.__proto__ === User.prototype);
// true
```

---

# {} vs class

> Object literals are ideal for **creating single objects**, while classes provide **reusable blueprints** where methods are shared via the prototype, making them more memory-efficient for creating multiple instances.

# Explain the JavaScript Event Loop

JavaScript is **single-threaded**, meaning it executes one task at a time using the **Call Stack**.

Asynchronous operations are handled by browser APIs or Node.js APIs, and their callbacks are queued for later execution.

Execution order:

1. Call Stack
2. Microtask Queue
3. Macrotask Queue

---

## Queues

### Call Stack

Executes synchronous code.

### Microtask Queue

Examples:

- Promise callbacks
- `queueMicrotask()`
- `MutationObserver`

### Macrotask Queue

Examples:

- `setTimeout`
- `setInterval`
- I/O
- DOM Events

---

## Example

```javascript
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");
```

### Output

```text
A
D
C
B
```

> Promise callbacks are microtasks, so they execute before macrotasks.

---

## Real-World Importance

Understanding the event loop helps debug:

- Race conditions
- Async bugs
- React rendering timing
- Performance issues

---

# `var` in Event Loop

## Problem

```javascript
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
```

Output:

```text
5
5
5
5
5
```

Reason:

`var` is function-scoped, so every callback shares the same `i`.

---

## Fix 1 — `let`

```javascript
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
```

Output:

```text
0
1
2
3
4
```

---

## Fix 2 — IIFE

```javascript
for (var i = 0; i < 5; i++) {
  (function (x) {
    setTimeout(() => console.log(x), 1000);
  })(i);
}
```

---

## Fix 3 — Pass Argument to `setTimeout`

```javascript
for (var i = 0; i < 5; i++) {
  setTimeout((x) => console.log(x), 1000, i);
}
```

---

# What is a Closure?

A closure is created when an inner function **retains access to variables from its outer lexical scope**, even after the outer function has finished execution.

```javascript
function counter() {
  let count = 0;

  return function () {
    return ++count;
  };
}

const increment = counter();

console.log(increment()); // 1
console.log(increment()); // 2
```

The inner function remembers `count`.

---

## Real-World Use Cases

- React Hooks
- Data privacy
- Memoization
- Event handlers
- Factory functions

---

# Deep Copy vs Shallow Copy

## Shallow Copy

Copies only the first level.

```javascript
const user = {
  name: "John",
  address: {
    city: "Pune",
  },
};

const copy = { ...user };

copy.address.city = "Mumbai";

console.log(user.address.city); // Mumbai
```

Both objects share the same nested object.

---

## Deep Copy

Creates completely independent objects.

```javascript
const deepCopy = structuredClone(user);
```

Changing nested properties doesn't affect the original object.

---

#  Explain `this`

The value of `this` depends on **how a function is called**, not where it's defined.

```javascript
const obj = {
  name: "John",

  greet() {
    console.log(this.name);
  },
};

obj.greet();
```

Output:

```text
John
```

---

```javascript
const fn = obj.greet;

fn();
```

Output:

```text
undefined
```

The function loses its object context.

---

## Ways to Control `this`

```javascript
fn.call(obj);

fn.apply(obj);

const bound = fn.bind(obj);

bound();
```

---

# Implement Debounce

```javascript
function debounce(fn, delay) {
  let timer;

  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
```

---

## Use Cases

- Search autocomplete
- API optimization
- Resize events
- Input validation

---

# Debounce vs Throttle

## Debounce

Executes **after** the user stops triggering an event.

Example:

- Search box

---

## Throttle

Executes at a fixed interval while the event continues.

Example:

- Scroll tracking
- Mouse movement
- Window resize

---

## Comparison

| Debounce | Throttle |
|----------|----------|
| Waits until events stop | Executes at regular intervals |
| Search input | Scroll, resize, drag |

---

# Explain Memory Leaks in JavaScript

Common causes:

- Unremoved event listeners
- Uncleared timers
- Closures retaining large objects
- Detached DOM nodes
- WebSocket connections
- Uncleaned React effects

## Prevention

- Cleanup inside `useEffect`
- Remove listeners
- Clear timers
- Close WebSockets
- Avoid retaining unnecessary references

---
# JavaScript Memory Management

JavaScript automatically manages memory using **Garbage Collection (GC)**.

Lifecycle:

1. Allocate memory
2. Use memory
3. Release unused memory

---

## Memory Types

### Stack Memory

Stores:

- Primitive values
- Function calls
- Execution contexts
- References

Fast and automatically managed.

---

### Heap Memory

Stores:

- Objects
- Arrays
- Functions
- Closures

---

# Mark-and-Sweep Garbage Collection

## Mark

Starting from root references:

- Global variables
- Stack references

GC marks every reachable object.

---

## Sweep

Objects that weren't marked are removed from memory.

---
# JavaScript Garbage Collector (GC)

## What is Garbage Collection?

Garbage Collection (GC) is JavaScript's automatic memory management system that frees memory occupied by objects that are no longer reachable.

Modern JavaScript engines such as **V8**, **SpiderMonkey**, and **JavaScriptCore** automatically perform garbage collection.

---

## Mark-and-Sweep Algorithm

### Step 1 — Mark

GC starts from **root objects** such as:

- Global variables
- Execution stack
- Closures
- Active timers
- Event listeners

It recursively marks every reachable object.

```text
Roots
  │
  ▼
Reachable Objects
```

---

### Step 2 — Sweep

Objects that were **not marked** are unreachable and are removed from memory.

```text
Reachable ✓ Keep

Unreachable ✗ Remove
```

---

## Modern V8 Optimizations

V8 improves GC using:

- Generational GC
- Incremental GC
- Concurrent GC
- Parallel GC

These techniques reduce pause times and improve application responsiveness.

---

## Interview One-Liner

> **JavaScript uses a mark-and-sweep garbage collector that starts from root references, marks reachable objects, and automatically removes unreachable objects. Modern engines optimize this using generational, incremental, and concurrent garbage collection.**

---

# JavaScript Memory Leaks

## What is a Memory Leak?

A memory leak occurs when objects are no longer needed but are still referenced, preventing the garbage collector from reclaiming memory.

---

## Common Causes

### Detached DOM Nodes

```javascript
let element = document.getElementById("box");
element.remove();
// Still referenced
```

---

### Event Listeners

```javascript
window.addEventListener("resize", handler);

// Cleanup
window.removeEventListener("resize", handler);
```

---

### Timers

```javascript
const id = setInterval(fetchData, 1000);

// Cleanup
clearInterval(id);
```

---

### Closures

Closures can unintentionally retain large objects.

```javascript
function createHandler(bigData) {
  return () => console.log(bigData.length);
}
```

---

### Unbounded Caches

```javascript
cache[key] = hugeObject;
```

Without eviction, memory keeps growing.

---

## Debugging Memory Leaks

Use Chrome DevTools:

- Heap Snapshot
- Allocation Timeline
- Memory Panel

Look for:

- Detached DOM nodes
- Growing retained objects
- Increasing heap size

---

## React Memory Leak Checklist

- Cleanup `useEffect`
- Remove subscriptions
- Clear timers
- Remove event listeners
- Cancel network requests
- Avoid stale refs

---

## Interview One-Liner

> **Most JavaScript memory leaks come from retained references such as detached DOM nodes, unremoved event listeners, long-lived closures, timers, and unbounded caches.**

---


# JavaScript — Difference Between `for...in` and `for...of`

## 1. `for...in`

Iterates over **keys, indexes, or property names**.

Example:

```javascript
const arr = ["React", "Angular", "Vue"];

for (const index in arr) {
  console.log(index);
}
```

Output:

```text
0
1
2
```

Object example:

```javascript
const user = {
  name: "John",
  age: 25,
};

for (const key in user) {
  console.log(key);
}
```

Output:

```text
name
age
```

---

## 2. `for...of`

Iterates over **values**.

Works with:

- Arrays
- Strings
- Maps
- Sets
- Any iterable object

Example:

```javascript
const arr = ["React", "Angular", "Vue"];

for (const value of arr) {
  console.log(value);
}
```

Output:

```text
React
Angular
Vue
```

String example:

```javascript
for (const ch of "React") {
  console.log(ch);
}
```

Output:

```text
R
e
a
c
t
```

---

# `for...in` vs `for...of`

| Feature | `for...in` | `for...of` |
|----------|------------|------------|
| Iterates over | Keys / Indexes | Values |
| Works on Objects | ✅ Yes | ❌ No (unless iterable) |
| Works on Arrays | ✅ Yes | ✅ Yes |
| Works on Strings | ❌ (indexes) | ✅ Characters |
| Works on Maps | ❌ | ✅ |
| Works on Sets | ❌ | ✅ |
| Returns | Property names | Values |

---

## Interview One-Liner

- **`for...in`** → Iterates over object keys or array indexes.
- **`for...of`** → Iterates over iterable values such as arrays, strings, maps, and sets.

# `for...in` vs `for...of`

## Important Differences

| Feature | `for...in` | `for...of` |
|----------|------------|------------|
| **Returns** | Keys / Indexes | Values |
| **Mostly used for** | Objects | Arrays / Iterables |
| **Works on Objects** | ✅ Yes | ❌ No (unless iterable) |
| **Works on Arrays** | ✅ Yes | ✅ Yes |
| **Use Case** | Object properties | Array values |

### Example

#### `for...in`

```javascript
const user = {
  name: "John",
  age: 25,
};

for (const key in user) {
  console.log(key);
}
```

Output:

```text
name
age
```

---

#### `for...of`

```javascript
const fruits = ["Apple", "Banana", "Orange"];

for (const fruit of fruits) {
  console.log(fruit);
}
```

Output:

```text
Apple
Banana
Orange
```

---

  



## React Interview Question   

#Controlled vs Uncontrolled Components

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

## How to handle API or Backend Error 

I handle backend errors using centralized exception handling so all APIs
return a consistent response format. I validate inputs first and return
appropriate HTTP status codes like 400, 404, 409, or 500. I create
custom exception classes for business errors, log detailed errors with
request IDs using a logging framework, and never expose stack traces to
clients. For external services, I use retries with exponential backoff,
timeouts, and circuit breakers where appropriate. I also monitor
production errors using tools like Sentry or Datadog. This approach
makes the application secure, maintainable, and easier to debug

## If you find bug what is approch 

My approach is: reproduce the bug, identify the root cause, assess its
impact, communicate it to the team, implement and test the fix, add
regression tests, get it reviewed through a PR, deploy it, and monitor
the application afterward. If the issue reveals a gap in the process, I
also suggest preventive improvements so the same type of bug doesn't
happen again

## "What would you do if, one day later, you realize your story point estimate was lower than the actual effort?"

> "As soon as I realize my estimate is inaccurate, I don't wait until
> the end of the sprint. I inform my Scrum Master and Tech Lead, explain
> why the estimate changed, and provide a revised estimate based on what
> I've learned. I keep stakeholders updated on the impact to the sprint
> and discuss whether we should adjust priorities or move some work if
> necessary. During the sprint retrospective, I analyze why the estimate
> was off---such as unclear requirements, hidden technical complexity,
> or unexpected dependencies---and use that learning to improve future
> estimations."

## Want to start new application

Whenever I integrate any application or third-party service into a React project,

I first understand the **business requirements** and study the **API or
SDK documentation**.

I design a **clean architecture by separating the UI**, custom hooks,
service layer, and API client instead of calling APIs directly from
components.

I implement **secure authentication,** centralize API calls with
interceptors, and manage state appropriately using local state, Context,
Redux Toolkit, or TanStack Query depending on the use case.

I also focus on l**oading states, error handling, accessibility**,
performance optimizations like lazy loading and memoization, and write
unit and integration tests.

Finally, I validate **the integration in staging, monitor it in
production**, and ensure it is maintainable and scalable.\"

## Lexical Scope

**Lexical Scope** means that **a function can access variables based on
where it is defined in the code, not where it is called.** The scope is
determined at the time the function is created.

## What is nullish coalescing operator (??)?

**?? -\>** return right hand if left hand **null or undefined**

**\|\| -\>** return right hand if left hand [**has any falsy value,**
not only null or undefined.]{.mark}

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

## Babel vs Polyfill?

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

## Tailwind vs Bootstrap

Tailwind CSS is a utility-first CSS framework that enables rapid,
consistent, and responsive UI development by composing small utility
classes directly in HTML/JSX. It offers excellent customization,
mobile-first responsive utilities, and optimized production builds by
removing unused CSS.

  -----------------------------------------------------------------------
  **Feature**      **Tailwind**                **Bootstrap**
  ---------------- --------------------------- --------------------------
  Approach         Utility-first               Component-based

  Customization    High                        Moderate

  CSS Size         Smaller after purge         Larger

  Design           Fully custom                Bootstrap look by default

  Learning         Utility classes             Prebuilt components
  -----------------------------------------------------------------------

## 1. What is a Micro Frontend?

Answer:
A Micro Frontend is an architectural approach where a frontend
application is split into smaller, independently developed, tested, and
deployed applications.

Example:

-   Team A → Authentication

-   Team B → Dashboard

-   Team C → Payments

-   Team D → Profile

Each team owns its own frontend.

## 2. Why use Micro Frontends?

Benefits:

-   Independent deployment

-   Smaller codebases

-   Team autonomy

-   Easier maintenance

-   Technology flexibility (React, Vue, Angular together)

-   Faster development

## 3. What are the disadvantages?

-   Larger bundle size

-   Shared dependency management

-   Routing complexity

-   State sharing challenges

-   Performance overhead

-   Version conflicts

## 4. Different ways to implement Micro Frontends?

> Common approaches:
>
> **Build-time Integration**
>
> Combine apps during build.
>
> Example:
>
> npm package
>
> **Runtime Integration**
>
> Load applications dynamically.

Example:

-   Module Federation

-   Single SPA

-   iframe

**Server-side Composition**

Compose pages on the server before sending HTML.

Edge-side Includes

Compose at CDN/Edge.

## 5. What is Module Federation?

One of **Webpack 5\'s** biggest features.

It allows one application to **expose** **modules** that another
application can load at runtime without rebuilding.

## 6. Explain Host and Remote.

Host

Consumes remote applications.

Remote

Exposes components/modules.

## 7. How do applications communicate?

Methods:

-   Props

-   Custom Events

-   Redux

-   Context API

-   RxJS

-   Event Bus

-   Browser Storage

-   URL Parameters

## 8. How do you share authentication?

Usually:

-   JWT Token

-   Cookies

-   Shared Auth Service

-   OAuth Provider

## 9. How do you share state?

Options:

-   Redux

-   Zustand

-   Context

-   Event Bus

-   Shared Library

## 10. Challenges in Micro Frontends

-   Duplicate React versions

-   CSS conflicts

-   Shared dependencies

-   Routing

-   SEO

-   Authentication

-   Error boundaries

11. How do you avoid CSS conflicts?

Methods:

-   CSS Modules

-   Tailwind CSS

-   Styled Components

-   Shadow DOM

-   Naming conventions (BEM)

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

## 12. Can different React versions work?

Yes.

The shared configuration belongs in the **Webpack Module Federation
configuration**, typically inside webpack.config.js

Using Module Federation:
```javascript
shared: {
   react: {
    **singleton: true**
   }
}
```
Usually a singleton React instance is preferred to avoid runtime issues.

# Webpack Interview Questions

## 13. What is Webpack?

Webpack is a module bundler.

It bundles:

-   JS

-   CSS

-   Images

-   Fonts

-   SVG

-   JSON

## 14. Why do we need Webpack?

-   Bundling

-   Tree shaking

-   Code splitting

-   Minification

-   Hot Reload

-   Asset optimization

## 15. Explain entry.

Starting point of the application.

```javascript
    entry: \"./src/index.js\"
```

## 16. Explain output.

Where bundles are generated.
```javascript
output: {
    filename: \"bundle.js\"
}
```

## 17. What are Loaders?

Loaders **transform non-JavaScript files**.

Examples:

-   babel-loader

-   css-loader

-   style-loader

-   file-loader

-   ts-loader

## 18. What are Plugins?

Plugins perform build tasks.

Examples:

-   HtmlWebpackPlugin

-   MiniCssExtractPlugin

-   DefinePlugin

-   CleanWebpackPlugin

## 19. Difference between Loader and Plugin?

| **Loader**                                       | **Plugin**                              |
| ------------------------------------------------ | --------------------------------------- |
| Transforms files                                 | Extends Webpack functionality           |
| Runs on individual files                         | Runs during the overall build process   |
| Converts one file type to another                | Performs build-level tasks              |
| Works before bundling                            | Works before, during, or after bundling |
| Configured in `module.rules`                     | Configured in `plugins`                 |
| Examples: `babel-loader`, `css-loader`, `style-l |                                         |


## 20. What is Tree Shaking?

Removes unused code.

```javascript
Example:

export const add = () =\> {}
export const sub = () =\> {}
import { add } from \"./math\";

```
Only add is included in the production bundle if tree shaking is
enabled.

## 21. What is Code Splitting?

Splits bundles into smaller chunks.

```javascript
    const Home = React.lazy(() =\> import(\"./Home\"));
```
Benefits:
-   Faster loading
-   Smaller initial bundle
-   Better performance

## 22. What is Lazy Loading?

Loads components only when needed.

```javascript
    const Dashboard = React.lazy(() =\> import(\"./Dashboard\"));
```

## 23. What is Hot Module Replacement (HMR)?

Updates changed modules without refreshing the whole page.

Benefits:
-   Preserves component state
-   Faster development

## 24. What is Babel?

Babel converts modern JavaScript into code that older browsers can
understand.

Example:
```javascript
    const add = (a, b) =\> a + b;
```
is transformed into ES5-compatible JavaScript.

## 25. What is Source Map?

Maps bundled code back to the original source.

- Useful for debugging.

## 26. Explain Webpack build modes.

- development
- production
- none

Production mode enables:
-   Minification
-   Tree shaking
-   Optimizations

## 27. What is webpack-dev-server?

A development server that provides:

-   Live reload
-   Hot Module Replacement
-   Faster local development

## 28. Explain Module Federation configuration.

Remote (webpack.config.js):
```javascript
    new ModuleFederationPlugin({
        name: \"header\",
        filename: \"remoteEntry.js\",
        exposes: {
            \"./Header\": \"./src/Header\" 
        },
        shared: {
            react: { singleton: true },
        \"react-dom\": { singleton: true }
        }
    });
```
Host (webpack.config.js):

```javascript
    new ModuleFederationPlugin({
    remotes: {
        header: \"header@http://localhost:3001/remoteEntry.js\"
    }
});
```

## Scenario-Based Interview Questions

# 1. How would you migrate a React monolith to a micro frontend architecture?

Answer

I would **avoid a full rewrite and migrate incrementally** using the
Strangler Fig pattern.

Steps:

1.  Identify independent business domains.
    -   Authentication
    -   Dashboard
    -   Orders
    -   Payments
    -   Profile

2.  Extract one feature at a time into its own application.

3.  Use a shell (host) application that loads micro frontends
    > dynamically using Module Federation.

4.  Keep shared dependencies like React, React DOM, and the design
    > system as singletons.

5.  Migrate routing gradually.

6.  Once all features are migrated, retire the monolith.


# 2. How would you handle version conflicts between multiple remote applications?

Answer

Version conflicts are one of the biggest challenges in Module
Federation.

I would:

-   Share React as a singleton.
-   Keep common libraries shared.
-   Use semantic versioning.
-   Maintain compatibility across teams.
-   Avoid duplicate dependencies.

Example:
```javascript
    shared: {
        react: {
            singleton: true,
            requiredVersion: \"\^18.2.0\"
        },
    \"react-dom\": {

    singleton: true

    }
}
```
For internal libraries:

-   Publish shared packages.
-   Use versioning.
-   Avoid breaking changes.

# 3. What happens if a remote application is unavailable? How would you
provide a fallback UI?

Answer

A remote may fail because of:
-   Network issue
-   Deployment issue
-   CDN issue
-   Server down

I would use:
-   React Error Boundary
-   Suspense fallback
-   Retry mechanism
-   Graceful degradation

Example:
```javascript
    <Suspense fallback={\<Loading /\>}\>
        <ErrorBoundary fallback={\<ErrorPage /\>}\>
            <RemoteDashboard /\>
        </ErrorBoundary\>
    </Suspense\>
 ```   

Users should still be able to use the rest of the application.

# 4. How would you implement authentication across multiple micro
frontends?

Answer

Authentication should be centralized.

Implementation:

-   Login once.
-   Store JWT in secure HttpOnly cookies if possible.
-   Share authentication through the shell.
-   Refresh tokens centrally.
-   Never let every micro frontend implement login independently.

# 5. How would you share a design system across teams?

Answer

Create a shared component library.

# 6. How would you optimize performance when using Module Federation?

Answer

I would:

-   Share React as a singleton.
-   Lazy load remote applications.
-   Load only required remotes.
-   Enable browser caching.
-   Use CDN.
-   Split bundles.
-   Compress assets.
-   Prefetch important remotes.
-   Optimize images.

Example:

```javascript
`const Orders = React.lazy(() =\> import(\"orders/App\"));
```
Avoid loading all remotes during the initial page load.

# 7. How would you implement CI/CD for independently deployed micro frontends?

Answer

Each micro frontend should have its own pipeline.

```javascript
    Git
    ↓
    Build
    ↓
    Unit Tests
    ↓
    Integration Tests
    ↓
    Deploy
    ↓
    CDN
    ↓
    Host loads latest remote
```
Benefits:

-   Independent deployment
-   Faster releases
-   Team autonomy
-   Easier rollback

The shell application should not require rebuilding every time a remote
changes.

# 8. How would you monitor errors across multiple micro frontend applications?

Answer

Centralized monitoring is essential.

Use:
-   Error Boundaries
-   Logging
-   Monitoring tools
-   Distributed tracing

# 9. When would you choose micro frontends over a monolithic frontend?

Answer
 I would choose micro frontends when:

    ✅ Multiple teams work independently.
    ✅ Independent deployments are needed.
    ✅ The application is very large.
    ✅ Different business domains exist.

Examples:

-   Banking
-   E-commerce
-   Healthcare
-   Enterprise ERP

I would not choose micro frontends for:

-   Small applications
-   MVPs
-   Teams with fewer than 5 developers
-   Projects with simple deployment needs

# 10. How do you ensure consistent user experience and routing across independently deployed micro frontend applications?

Answer

The shell application should own:

-   Global navigation
-   Header
-   Footer
-   Theme
-   Authentication
-   Routing

Guidelines:

-   Maintain a shared design system.
-   Use consistent spacing, colors, and typography.
-   Define routing conventions.
-   Keep global state (authentication, user preferences) in the shell.
-   Use shared error pages and loading indicators.


# HTTP CODE

| **Code** | **Meaning**                | **When it's used**                                                                |
| -------- | -------------------------- | --------------------------------------------------------------------------------- |
| **200**  | OK                         | Request completed successfully.                                                   |
| **201**  | Created                    | A new resource was successfully created (e.g., `POST /users`).                    |
| **204**  | No Content                 | Request succeeded but nothing is returned (e.g., successful delete).              |
| **301**  | Moved Permanently          | Resource has permanently moved to a new URL.                                      |
| **302**  | Found (Temporary Redirect) | Resource is temporarily available at another URL.                                 |
| **400**  | Bad Request                | Client sent invalid data or malformed request.                                    |
| **401**  | Unauthorized               | Authentication is required or the token is missing/invalid.                       |
| **403**  | Forbidden                  | User is authenticated but doesn't have permission.                                |
| **404**  | Not Found                  | Requested resource doesn't exist.                                                 |
| **405**  | Method Not Allowed         | HTTP method isn't supported for the endpoint (e.g., `PUT` on a `GET`-only route). |
| **409**  | Conflict                   | Request conflicts with the current state (e.g., duplicate email).                 |
| **429**  | Too Many Requests          | Rate limit exceeded.                                                              |
| **500**  | Internal Server Error      | Unexpected server-side error.                                                     |
| **502**  | Bad Gateway                | A proxy/gateway received an invalid response from an upstream server.             |
| **503**  | Service Unavailable        | Server is temporarily unavailable (maintenance or overload).                      |
| **504**  | Gateway Timeout            | A gateway/proxy timed out waiting for an upstream server.                         |

##

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

---

# Pure Component (React)

A **Pure Component** is a React component that **skips re-rendering** when its **props** and **state** have not changed (based on a **shallow comparison**).

It performs a shallow comparison of:

- `props`
- `state`

If neither has changed, React skips the render.

## Class Component

```jsx
import React, { PureComponent } from "react";

class User extends PureComponent {
  render() {
    return <h1>{this.props.name}</h1>;
  }
}
```

## Functional Component

```jsx
const User = React.memo(({ name }) => {
  return <h1>{name}</h1>;
});
```

## Benefits

- Prevents unnecessary re-renders
- Improves performance
- Uses shallow comparison
- Best for components with immutable props and state

## `React.memo` vs `PureComponent`

| `React.memo` | `PureComponent` |
|---------------|-----------------|
| Functional components | Class components |
| Shallow comparison of props | Shallow comparison of props and state |

### Interview One-Liner

> **A Pure Component re-renders only when its props or state change based on a shallow comparison, helping avoid unnecessary renders and improving performance.**

##  

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

---

# React Fiber - How Does React Decide Priority?

React Fiber uses a scheduling system called **Lanes** to assign priorities to updates.

Instead of processing every update immediately, React schedules work based on priority, ensuring urgent updates render first.

---

## What are Lanes?

**Lanes** are React Fiber's **priority-based scheduling system** (introduced in React 18).

They determine **which updates should be processed first**.

---

## Why are Lanes Needed?

Imagine a user is:

- Typing in a search box ✍️
- Filtering a large list 🔍
- Fetching data 🌐

Without priorities:

- Expensive rendering blocks typing.

With lanes:

- Typing gets **high priority**.
- List filtering becomes **interruptible**.
- Background work waits.

This keeps the UI responsive.

---

## Common Lane Priorities

| Lane | Purpose |
|------|---------|
| **Sync Lane** | Immediate updates (button clicks) |
| **Input Continuous Lane** | Scrolling, dragging |
| **Default Lane** | Normal state updates |
| **Transition Lane** | Non-urgent updates (`startTransition`) |
| **Idle Lane** | Background work |

---

## Interview One-Liner

> React Fiber assigns updates to different priority lanes. **High-priority updates like typing and clicking** are processed first, while **lower-priority work such as transitions or background rendering** can be paused and resumed, keeping the UI responsive.

---

# How to Debug a Slow React Application

## 1. React DevTools Profiler

The React Profiler is the first tool to use.

Look for:

- Components rendering too frequently
- Long render durations
- Unnecessary re-renders

---

## 2. Highlight Component Re-renders

React DevTools:

```
Settings
    ↓
General
    ↓
Highlight updates when components render
```

This visually shows components re-rendering.

---

## 3. Check Render Count

If a component renders hundreds of times unnecessarily:

- Check props
- Check state
- Check context updates

---

## 4. Chrome Performance Tab

Steps:

1. Open DevTools
2. Go to **Performance**
3. Click **Record**
4. Perform the slow action
5. Stop recording

Look for:

- Long Tasks (> 50 ms)
- JavaScript execution time
- Layout calculations
- Paint/Repaint operations
- Flame chart hotspots

---

## 5. Detect Expensive Calculations

If expensive computations run on every render:

Use:

```jsx
useMemo()
```

---

## 6. Check Network Requests

DevTools → **Network**

Look for:

- Slow APIs
- Duplicate requests
- Large payloads
- Waterfall loading

---

## 7. Use Why Did You Render

Detect unnecessary renders.

```bash
npm install @welldone-software/why-did-you-render
```

Useful during development.

---

## 8. Check Context Performance

Every context value change causes all consumers to re-render.

Solutions:

- Split contexts
- Memoize provider values
- Use selector-based context patterns

---

## 9. Optimize Large Lists

Use virtualization/windowing libraries.

Examples:

- `react-window`
- `react-virtualized`

Only visible items are rendered.

---

## 10. Analyze Bundle Size

Large bundles slow startup.

Build:

```bash
npm run build
```

Webpack:

```bash
npm install webpack-bundle-analyzer
```

Look for:

- Large libraries
- Duplicate dependencies
- Dead code

---

## 11. Check Memory Leaks

Symptoms:

- App slows over time
- Memory usage keeps increasing

Common causes:

- Uncleared timers
- Event listeners
- WebSockets
- Unreleased object references

---

## 12. Measure Web Vitals

Important production metrics:

```javascript
import { onLCP, onINP } from "web-vitals";
```

### Benchmarks

| Metric | Good |
|---------|------:|
| **LCP (Largest Contentful Paint)** | < 2.5 s |
| **INP (Interaction to Next Paint)** | < 200 ms |
| **CLS (Cumulative Layout Shift)** | < 0.1 |

---

# Senior React Interview Answer

> When debugging a slow React application, I first use the React DevTools Profiler to identify expensive renders and unnecessary re-renders. Then I inspect the browser Performance tab for long tasks, layout shifts, and JavaScript execution. Next, I analyze network requests, bundle size, context updates, and large list rendering. Finally, I check for memory leaks and monitor Core Web Vitals like LCP, INP, and CLS to ensure good production performance.

# Typical Real-World Investigation Flow (Slow React Application)

When users report that a React page is slow, follow this investigation process:

1. Reproduce the issue.
2. Open **React DevTools Profiler**.
3. Identify expensive component renders.
4. Check the **Network** tab for slow APIs.
5. Inspect the **Performance** tab for long tasks.
6. Identify unnecessary re-renders.
7. Verify Context updates.
8. Analyze bundle size.
9. Measure Core Web Vitals.
10. Optimize only the actual bottleneck.

> **Golden Rule:** Measure first, optimize second.

---

# Interview Answer (Short Version)

> I start with React DevTools Profiler to identify expensive component renders. Then I use Chrome Performance and Network tabs to analyze JavaScript execution, API latency, and rendering costs. I check for unnecessary re-renders, context updates, large lists, memory leaks, and bundle size issues. After identifying the bottleneck, I optimize using memoization, virtualization, code splitting, or state restructuring as appropriate.

---

# Redux Toolkit (RTK)

## What is Redux Toolkit?

Redux Toolkit (RTK) is the **official, recommended way** to write Redux logic. It simplifies Redux development by reducing boilerplate and providing built-in best practices.

It includes utilities such as:

- `configureStore`
- `createSlice`
- `createAsyncThunk`
- RTK Query

---

## Why use Redux Toolkit instead of Redux?

### Advantages

- Less boilerplate code
- Simpler state management
- Built-in Redux DevTools support
- Built-in Immer (write mutable-looking code safely)
- Better TypeScript support
- Better developer experience

---

## What is `configureStore()`?

Creates the Redux store with sensible defaults.

Features:

- Automatically combines reducers
- Enables Redux DevTools
- Adds useful middleware
- Supports Redux Thunk by default

```javascript
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
```

---

## What is `createSlice()`?

`createSlice()` automatically generates:

- Slice reducer
- Action creators
- Action types

from a **single configuration object**.

```javascript
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment(state) {
      state.value++;
    },
  },
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;
```

---

## What is `createAsyncThunk()`?

A helper for handling asynchronous operations like API calls.

Automatically generates:

- `pending`
- `fulfilled`
- `rejected`

actions.

```javascript
export const fetchUsers = createAsyncThunk(
  "users/fetch",
  async () => {
    const response = await fetch("/users");
    return response.json();
  }
);
```

---

## What is RTK Query?

RTK Query is Redux Toolkit's built-in data fetching and caching solution.

Features:

- Automatic caching
- Background refetching
- Loading & error states
- Request deduplication
- Automatic cache invalidation

It eliminates most manual API logic.

---

# `useEffect` vs `useLayoutEffect`

## `useEffect`

Runs **after** the browser paints the screen.

Best for:

- API calls
- Event listeners
- Subscriptions
- Timers
- Logging

```jsx
useEffect(() => {
  fetchData();
}, []);
```

---

## `useLayoutEffect`

Runs **synchronously after DOM updates** but **before the browser paints**.

Best for:

- Measuring DOM
- Reading layout
- Preventing UI flicker
- Positioning tooltips/modals

```jsx
useLayoutEffect(() => {
  const width = divRef.current.offsetWidth;
}, []);
```

> Since `useLayoutEffect` blocks painting, use it only when necessary.

---

# `useEffect` vs `useLayoutEffect`

| Feature | `useEffect` | `useLayoutEffect` |
|---------|-------------|-------------------|
| Runs | After paint | Before paint |
| Blocks paint | ❌ No | ✅ Yes |
| Best for | API calls, subscriptions | DOM measurements, layout calculations |

---

# 1. Explain the JavaScript Event Loop

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

# 2. What is a Closure?

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

# 3. Deep Copy vs Shallow Copy

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

# 4. Explain `this`

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

# 5. Implement Debounce

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

# 6. Debounce vs Throttle

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

# 7. Explain React Reconciliation

React uses a **Virtual DOM**.

When state changes:

1. Creates a new Virtual DOM.
2. Compares it with the previous Virtual DOM.
3. Calculates the minimum changes.
4. Updates the real DOM efficiently.

This process is called **Reconciliation**.

React uses an **O(n)** diffing algorithm instead of **O(n³)**.

Keys help React identify stable elements.

---

# 8. What is React Fiber?

React Fiber is the rendering engine introduced in **React 16**.

## Before Fiber

- Synchronous rendering
- Could not pause rendering
- UI could freeze

## After Fiber

- Rendering can be paused
- Work is prioritized
- Rendering can resume later

### Benefits

- Concurrent Rendering
- Suspense
- Transitions
- Better responsiveness

---

# 9. `React.memo` vs `useMemo` vs `useCallback`

## `React.memo`

Prevents unnecessary component re-renders.

```jsx
export default React.memo(UserCard);
```

---

## `useMemo`

Caches expensive computed values.

```jsx
const activeUsers = useMemo(() => {
  return users.filter((u) => u.active);
}, [users]);
```

---

## `useCallback`

Caches function references.

```jsx
const handleClick = useCallback(() => {
  saveUser();
}, []);
```

---

## Comparison

| Tool | Prevents |
|------|----------|
| `React.memo` | Component re-render |
| `useMemo` | Expensive recalculation |
| `useCallback` | New function creation |

---

# 10. What Causes React Re-renders?

A component re-renders when:

- State changes
- Props change
- Context changes
- Parent re-renders

### Optimizations

- `React.memo`
- `useMemo`
- `useCallback`
- State colocation
- Context splitting

---

# 11. `useEffect` Lifecycle

```jsx
useEffect(() => {
  console.log("effect");

  return () => {
    console.log("cleanup");
  };
}, [count]);
```

### Initial Render

```text
effect
```

### Dependency Changes

```text
cleanup
effect
```

### Component Unmount

```text
cleanup
```

> React always runs the cleanup function before executing the next effect or unmounting the component.

---

# 12. How Would You Optimize a Slow React Application?

### Interview Answer

> I first reproduce the issue and use React DevTools Profiler to identify expensive renders. Then I inspect Chrome Performance and Network tabs to analyze JavaScript execution, rendering costs, and API latency. I check for unnecessary re-renders, context updates, memory leaks, large lists, and bundle size. Once the root cause is identified, I optimize using techniques such as `React.memo`, `useMemo`, `useCallback`, virtualization (`react-window`), code splitting (`React.lazy` and `Suspense`), state colocation, context splitting, and API/request optimization. Finally, I validate improvements using Core Web Vitals like LCP, INP, and CLS.


# 12. How Would You Optimize a Slow React Application?

## Investigation Flow

### Step 1: Use React DevTools Profiler

Identify:

- Slow components
- Repeated renders
- Expensive calculations
- Long commit durations

---

### Step 2: Check Render Counts

Use **Why Did You Render** during development.

```bash
npm install @welldone-software/why-did-you-render
```

It helps identify unnecessary component re-renders.

---

### Step 3: Optimize Re-renders

Use:

- `React.memo`
- `useMemo`
- `useCallback`

Only apply memoization after confirming it solves an actual bottleneck.

---

### Step 4: Optimize Large Lists

Use virtualization libraries:

- `react-window`
- `react-virtualized`

Instead of rendering 50,000 rows, render only the visible rows.

---

### Step 5: Code Splitting

```jsx
const Dashboard = React.lazy(() => import("./Dashboard"));
```

Load components only when needed.

---

### Step 6: Bundle Analysis

Analyze bundle size.

Look for:

- Heavy libraries
- Duplicate packages
- Dead code

Common tools:

- webpack-bundle-analyzer
- Vite Bundle Visualizer

---

# 13. Explain React Query (TanStack Query)

## What is React Query?

TanStack Query is a library for managing **server state**.

Unlike Redux, which manages client state, React Query focuses on fetching, caching, synchronizing, and updating server data.

## Features

- Automatic caching
- Background refetching
- Pagination
- Retry mechanism
- Optimistic updates
- Request deduplication
- Loading & error states

## Example

```jsx
const { data } = useQuery({
  queryKey: ["users"],
  queryFn: fetchUsers,
});
```

## Benefits

- Less Redux code
- Better performance
- Automatic synchronization
- Built-in caching
- Simplified API management

> **Interview One-Liner:** React Query manages server state by handling data fetching, caching, synchronization, retries, and background updates automatically.

---

# 14. How Would You Design a Large-Scale React Application?

## Folder Structure

```text
src/
│
├── features/
│   ├── users/
│   ├── orders/
│   └── products/
│
├── shared/
├── services/
├── hooks/
├── routes/
├── store/
└── utils/
```

## Architecture Principles

- Feature-based architecture
- API abstraction layer
- Reusable custom hooks
- Error boundaries
- Lazy loading
- Unit testing
- Integration testing
- Type safety
- Separation of concerns

---

# 15. Explain Memory Leaks in JavaScript

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

# 16. Explain React Suspense

React Suspense allows React to **pause rendering** until asynchronous work finishes.

During the wait, React displays a fallback UI.

```jsx
<Suspense fallback={<Spinner />}>
    <Dashboard />
</Suspense>
```

Used with:

- React.lazy
- Data fetching libraries
- Server Components

---

# 17. What Causes Unnecessary Re-renders?

```jsx
<Child onClick={() => doSomething()} />
```

The arrow function creates a **new function reference** on every render.

Since React compares props by reference, `React.memo` detects the prop as changed and re-renders the child.

## Common Causes

- New function references
- New object literals
- New arrays
- Parent re-renders
- Context updates
- Non-memoized props

## Solution

```jsx
const handleClick = useCallback(() => {
    doSomething();
}, []);

<Child onClick={handleClick} />
```

---

# 18. How Would You Improve Performance of a Slow React Application?

## Investigation Order

1. React DevTools Profiler
2. Chrome Performance Tab
3. Network analysis
4. Bundle analysis
5. Memory profiling

Optimize only after identifying the actual bottleneck.

---

# 19. Frontend Security Best Practices

## Protect Against XSS

- Escape user input
- Avoid `dangerouslySetInnerHTML`
- Sanitize HTML

## Prevent CSRF

- CSRF tokens
- SameSite cookies

## Content Security Policy (CSP)

Restrict trusted sources for:

- Scripts
- Images
- Styles

## Token Storage

Prefer:

- HttpOnly Secure Cookies

Avoid storing sensitive tokens in Local Storage when possible.

## Authentication

- JWT
- OAuth 2.0
- OpenID Connect

---

# Concurrent Rendering in React

Concurrent Rendering allows React to prepare multiple UI updates and prioritize urgent work over less important work.

React can:

- Pause rendering
- Resume rendering
- Discard outdated work
- Prioritize updates
- Keep the UI responsive

---

## `startTransition`

Marks updates as **non-urgent**.

```jsx
startTransition(() => {
    setSearchResults(data);
});
```

---

## `useTransition`

Provides:

- pending state
- transition function

```jsx
const [isPending, startTransition] = useTransition();
```

### Difference

| startTransition | useTransition |
|-----------------|---------------|
| Standalone function | React Hook |
| No pending state | Provides `isPending` |

---

# Why React Needed Fiber

Before React 16:

- Rendering was synchronous
- Rendering couldn't be interrupted
- Large updates blocked the main thread

Fiber introduced:

- Incremental rendering
- Scheduling
- Prioritization
- Interruptible rendering

Benefits:

- Better responsiveness
- Smoother animations
- Better user experience

---

# Fiber Rendering Phases

## 1. Render Phase (Interruptible)

Performs:

- Reconciliation
- Diffing

Can be paused.

---

## 2. Commit Phase (Synchronous)

Applies changes:

- DOM updates
- Refs
- Layout effects

Cannot be interrupted.

---

# SSR and Hydration

## Server-Side Rendering (SSR)

The server renders React into HTML before sending it to the browser.

Benefits:

- Faster first paint
- Better SEO
- Better perceived performance

---

## Hydration

Hydration attaches React to server-rendered HTML.

It:

- Attaches event listeners
- Restores component state
- Makes the HTML interactive

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

# Common React Memory Leaks

- Uncleared effects
- Event listeners
- Timers
- WebSockets
- Large caches
- Stale subscriptions

---

# V8 JavaScript Engine

V8 powers:

- Chrome
- Node.js
- Deno
- Electron

Pipeline:

```
JavaScript
      ↓
Parser
      ↓
Ignition (Interpreter)
      ↓
TurboFan (JIT Optimizer)
      ↓
Machine Code
```

---

# Monomorphic vs Polymorphic vs Megamorphic

| Type | Meaning |
|--------|---------|
| Monomorphic | Same object shape repeatedly |
| Polymorphic | Few different object shapes |
| Megamorphic | Many object shapes; difficult to optimize |

Monomorphic code is easiest for V8 to optimize.

---

# CSS-in-JS vs Utility CSS

| CSS-in-JS | Utility CSS |
|------------|-------------|
| Styles written in JavaScript | Styles composed from utility classes |
| Examples: Styled Components, Emotion | Examples: Tailwind CSS, UnoCSS |

---

# JavaScript & React Performance Best Practices

## JavaScript

- Reduce algorithm complexity
- Avoid blocking the main thread
- Minimize DOM manipulation
- Debounce expensive events
- Throttle frequent updates
- Use `requestAnimationFrame`
- Lazy load code
- Optimize memory usage

---

## React

- Prevent unnecessary re-renders
- Memoize expensive computations
- Virtualize large lists
- Split code using `React.lazy`
- Optimize API requests
- Split Contexts
- Colocate state
- Measure first, optimize later

> **Golden Rule:** Never optimize blindly. Measure first using React Profiler, Chrome Performance tools, and Web Vitals, then optimize the real bottleneck.  


# React Performance Optimization

## Best Practices

1. Prevent unnecessary re-renders
2. Use `React.memo`
3. Use `useCallback` for stable function references
4. Use `useMemo` for expensive calculations
5. Keep state close to where it's used (State Colocation)
6. Split large components into smaller ones
7. Virtualize large lists (`react-window`, `react-virtualized`)
8. Use stable and unique `key` props
9. Avoid storing derived state
10. Lazy load components with `React.lazy`
11. Use Concurrent Features (`startTransition`, `useTransition`)
12. Optimize Context usage (split contexts, memoize provider values)
13. Avoid inline objects/functions when passing memoized props
14. Take advantage of React's automatic batching (React 18+)
15. Optimize network requests
16. Reduce JavaScript bundle size
17. Measure first; avoid premature optimization

---

# JavaScript vs React Performance

## JavaScript Optimization

Focus on:

- Efficient algorithms
- Avoid blocking the main thread
- Reduce object allocations
- Batch DOM updates
- Lazy load resources
- Optimize memory usage

---

## React Optimization

Focus on:

- Reducing re-renders
- Memoization
- Component splitting
- Virtualization
- Stable references
- Proper state management
- Efficient Context usage

---

# High-Level Browser Loading Flow

```text
User requests page
        │
        ▼
DNS Lookup
        │
        ▼
TCP/TLS Connection
        │
        ▼
HTTP Request
        │
        ▼
Receive HTML
        │
        ▼
Parse HTML → DOM
        │
        ├──────── Parse CSS → CSSOM
        │
        ▼
DOM + CSSOM
        │
        ▼
Render Tree
        │
        ▼
Layout
        │
        ▼
Paint
        │
        ▼
Composite
        │
        ▼
Interactive Page
```

---

# React Rendering Flow

```text
State / Props Change
        │
        ▼
Create React Elements
        │
        ▼
Create / Update Fiber Tree
        │
        ▼
Reconciliation (Diffing)
        │
        ▼
Compute DOM Changes
        │
        ▼
Commit Phase
        │
        ▼
Real DOM Update
        │
        ▼
Browser Paint
```

---

# Common React Performance Problems

1. Large JavaScript bundles
2. Render-blocking CSS
3. Too many network requests
4. Expensive React rendering
5. Large hydration cost (SSR)
6. Memory leaks
7. Unnecessary re-renders

---

# General Optimization Techniques

- Code Splitting
- Tree Shaking
- HTTP Caching
- Compression (Gzip/Brotli)
- CDN
- Lazy Loading
- Prefetching / Preloading

---

# React-Specific Optimizations

- `React.memo`
- `useMemo`
- `useCallback`
- Virtualization
- Suspense
- Transitions
- Selective Hydration
- Server Components

Modern optimization emphasizes:

- Progressive rendering
- Streaming
- Partial hydration
- Reducing JavaScript shipped to the client

---

# Responsibilities

## Browser

- Networking
- HTML/CSS parsing
- Layout
- Paint
- Event loop

---

## JavaScript

- Business logic
- DOM manipulation
- Event handling
- Rendering coordination

---

## React

- Component rendering
- Reconciliation
- Scheduling
- DOM updates
- Hydration

---

# Debounce vs Throttle

## Debounce

> Wait until the user stops triggering events.

### Use Cases

- Search autocomplete
- Auto-save
- Form validation
- Resize completion

---

## Throttle

> Execute at most once every fixed interval.

### Use Cases

- Scroll tracking
- Mouse movement
- Window resize
- Infinite scrolling
- Game controls

---

## Comparison

| Debounce | Throttle |
|-----------|----------|
| Runs after events stop | Runs at fixed intervals |
| Search input | Scroll tracking |
| Auto-save | Mouse movement |
| Form validation | Infinite scrolling |

---

# Browser Event Loop vs Node.js Event Loop

## Browser

Responsibilities:

- UI rendering
- DOM events
- Layout & Paint
- Timers

APIs:

- Web APIs
- Rendering pipeline

---

## Node.js

Responsibilities:

- File system
- Networking
- Backend services
- Streams

APIs:

- libuv
- Thread pool
- Event loop phases

---

## Key Differences

| Browser | Node.js |
|----------|---------|
| Handles UI rendering | No UI rendering |
| Uses Web APIs | Uses libuv |
| Rendering between tasks | No rendering phase |
| Optimized for user interaction | Optimized for I/O operations |

---

# Frontend Performance & Rendering Architecture

## What is the Critical Rendering Path?

The Critical Rendering Path is the sequence the browser follows to convert **HTML, CSS, and JavaScript into visible pixels**.

```
HTML
   │
   ▼
DOM
   │
CSS
   ▼
CSSOM
   │
   ▼
Render Tree
   │
   ▼
Layout
   │
   ▼
Paint
   │
   ▼
Composite
```

### Why is it Important?

A slow Critical Rendering Path delays:

- First Paint (FP)
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)

---

## How to Optimize It

- Minimize render-blocking CSS/JS
- Inline critical CSS
- Use `async` / `defer`
- Compress assets
- Reduce DOM complexity
- Preload critical resources

---

# Core Web Vitals

Google's metrics for measuring real user experience.

| Metric | Measures | Good |
|---------|----------|------|
| **LCP** | Loading performance | < 2.5 s |
| **INP** | Responsiveness | < 200 ms |
| **CLS** | Visual stability | < 0.1 |

---

## Improve LCP

- Optimize images
- CDN
- Reduce server response time
- Preload hero assets

---

## Reduce CLS

- Set image dimensions
- Reserve layout space
- Avoid inserting content above existing content
- Use stable fonts

---

# HTTP Caching

HTTP caching stores responses in browsers or CDNs to avoid repeated network requests.

## Important Headers

- Cache-Control
- ETag
- Expires
- Last-Modified

---

## Strong vs Weak Caching

| Strong Cache | Weak Cache |
|--------------|------------|
| Browser serves cached resource directly | Browser validates with server |
| Faster | Requires conditional request |

---

## Benefits

- Faster page loads
- Reduced bandwidth
- Lower server load

---

# Content Negotiation

Client and server negotiate the best response format.

Examples:

- WebP vs JPEG
- Brotli vs Gzip
- Language localization

Headers:

- `Accept`
- `Accept-Encoding`
- `Accept-Language`

---

# Lazy Loading

Load resources only when needed.

Examples:

- Images below the fold
- Route-based code splitting
- Infinite scrolling

```jsx
const Dashboard = React.lazy(() => import("./Dashboard"));
```

Benefits:

- Smaller initial bundle
- Faster first paint
- Reduced bandwidth

---

# Bundle Splitting

Break JavaScript into smaller chunks loaded on demand.

Strategies:

- Route splitting
- Component splitting
- Vendor splitting

Benefits:

- Smaller initial download
- Faster Time to Interactive (TTI)

---

# Windowing (Virtualization)

Render only visible items in a large list.

Libraries:

- `react-window`
- `react-virtualized`

Benefits:

- Lower memory usage
- Faster rendering
- Smooth scrolling

---

# Essential State Model

Store only the minimum required state and derive everything else.

❌ Bad

```jsx
const [fullName, setFullName] = useState("");
```

✅ Better

```jsx
const fullName = `${firstName} ${lastName}`;
```

Benefits:

- Fewer bugs
- Simpler state
- Easier debugging

---

# Reducer Pattern

Manage complex state transitions using pure functions.

```jsx
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    default:
      return state;
  }
}
```

Benefits:

- Predictable updates
- Centralized logic
- Easy testing

---

# Server-Side Rendering (SSR)

Render HTML on the server before sending it to the browser.

Benefits:

- Faster initial load
- Better SEO
- Improved social sharing previews

Drawbacks:

- Higher server cost
- Hydration overhead

Frameworks:

- Next.js
- Remix

---

# Hydration

Hydration attaches React's event handlers and state to server-rendered HTML.

It:

- Attaches event listeners
- Restores component state
- Makes HTML interactive

Modern optimizations:

- Partial Hydration
- Selective Hydration
- Islands Architecture

---

# React Server Components (RSC)

Server Components render entirely on the server and send minimal JavaScript to the client.

Benefits:

- Smaller bundles
- Better performance
- Direct database access
- Reduced hydration cost

### SSR vs Server Components

| SSR | Server Components |
|-----|--------------------|
| Sends HTML + client JS for hydration | Sends HTML with minimal/no client JS for server-only components |
| Hydrates interactive UI | Server-only components don't hydrate |

Used in:

- Next.js App Router

---

# Partial Pre-rendering (PPR)

Combines static rendering with streamed dynamic content.

Example:

- Static shell loads immediately
- Personalized content streams later

Benefits:

- Faster startup
- Better scalability
- Dynamic user experience

---

# Microfrontends

## What are Microfrontends?

Microfrontends extend the microservices concept to the frontend by splitting a large application into independently developed, deployed, and maintained frontend modules.

### Benefits

- Independent deployments
- Team autonomy
- Technology flexibility
- Better scalability
- Smaller codebases

### Common Approaches

- Webpack Module Federation
- Single-SPA
- iframes (legacy)
- Web Components

### Interview One-Liner

> **Microfrontends allow multiple teams to independently build, deploy, and maintain different parts of a large frontend application while presenting a unified user experience.**

# Microfrontends

## What are Microfrontends?

Microfrontends extend the **microservices architecture** to the frontend by breaking a large application into **independently developed, deployed, and maintained frontend modules**, each owned by a separate team.

Each microfrontend is responsible for a specific business domain while providing a seamless user experience.

---

## Benefits

- Independent deployments
- Team autonomy
- Technology flexibility
- Better scalability
- Faster development cycles
- Easier maintenance

---

## Challenges

- Shared dependencies
- Design consistency
- Communication between applications
- Routing coordination
- Authentication and authorization
- Performance overhead

---

## Common Tools

- Webpack Module Federation
- Single-SPA
- Web Components
- iframes (legacy approach)

---

## Interview One-Liner

> **Microfrontends allow multiple teams to independently build, deploy, and maintain different parts of a frontend application while presenting a unified user experience.**

---

# Most Asked Senior Frontend Interview Topics (2026)

---

# 1. CSR vs SSR vs SSG

## What is Client-Side Rendering (CSR)?

In **Client-Side Rendering**, the browser downloads a minimal HTML page and a JavaScript bundle. React then renders the UI entirely in the browser.

### Flow

```text
Browser
   │
   ▼
Download HTML
   │
   ▼
Download JS Bundle
   │
   ▼
React renders UI
```

### Advantages

- Rich interactivity
- Smooth SPA navigation
- Reduced server rendering work

### Disadvantages

- Slower initial page load
- SEO challenges
- Larger JavaScript bundles

### Best Use Cases

- Admin dashboards
- Internal enterprise applications
- Highly interactive SPAs

---

## What is Server-Side Rendering (SSR)?

The server renders the HTML for every request before sending it to the browser.

### Flow

```text
Browser Request
        │
        ▼
Server renders HTML
        │
        ▼
Browser displays HTML
        │
        ▼
React hydrates page
```

### Advantages

- Better SEO
- Faster First Contentful Paint (FCP)
- Better for dynamic pages

### Disadvantages

- Higher server cost
- Hydration overhead
- More complex infrastructure

### Best Use Cases

- E-commerce
- News websites
- Marketing pages
- SEO-critical applications

---

## What is Static Site Generation (SSG)?

HTML pages are generated during the build process and served as static files.

### Flow

```text
Build Time
      │
      ▼
Generate HTML
      │
      ▼
Deploy to CDN
      │
      ▼
Browser loads static page
```

### Advantages

- Extremely fast
- Excellent caching
- Low hosting cost
- Great SEO

### Disadvantages

- Requires rebuilds when content changes
- Less suitable for frequently changing content

### Best Use Cases

- Blogs
- Documentation
- Landing pages
- Portfolio websites

---

## CSR vs SSR vs SSG

| Feature | CSR | SSR | SSG |
|---------|-----|-----|-----|
| Initial Load | Slow | Fast | Fastest |
| SEO | Poor | Excellent | Excellent |
| Server Cost | Low | High | Very Low |
| Dynamic Content | Excellent | Excellent | Limited |
| JavaScript Required | Yes | Yes (for hydration) | Yes (if interactive) |

---

## Which One Should You Use?

| Rendering Strategy | Best For |
|--------------------|----------|
| CSR | Dashboards, Admin Panels |
| SSR | E-commerce, SEO-heavy Sites |
| SSG | Blogs, Documentation, Landing Pages |

---

# 2. Hydration and Hydration Bottlenecks

## What is Hydration?

Hydration is the process where React **attaches JavaScript behavior** to server-rendered HTML.

Server sends:

```html
<button>Buy</button>
```

Hydration adds:

- Event listeners
- React state
- Component lifecycle
- Interactivity

---

## What are Hydration Bottlenecks?

Hydration becomes slow when React has a large amount of work before the page becomes interactive.

### Common Causes

- Huge JavaScript bundles
- Deep component trees
- CPU-intensive rendering
- Large hydration scope
- Too many client components

---

## Symptoms

- Page is visible but cannot be interacted with
- Delayed clicks
- Mobile lag
- Long Time to Interactive (TTI)

---

## Solutions

- Code splitting
- Streaming SSR
- Partial Hydration
- Selective Hydration
- React Server Components
- Lazy loading

---

# Client Components vs Server Components

| Feature | Server Component | Client Component |
|----------|------------------|------------------|
| Runs On | Server | Browser |
| JavaScript Sent | Minimal | Full |
| Supports Hooks | ❌ No | ✅ Yes |
| Access Database | ✅ Yes | ❌ No |
| Best For | Data fetching, layouts | Interactive UI |

---

## Interview One-Liner

> **Server Components reduce JavaScript sent to the browser by rendering on the server, while Client Components enable interactivity using React hooks and browser APIs.**

---

# 3. Bundle Splitting & Bundle Optimization

## What is Bundle Optimization?

Bundle optimization reduces the size and execution cost of JavaScript shipped to the browser.

Goals:

- Faster downloads
- Faster parsing
- Faster execution
- Better Core Web Vitals

---

## Common Optimization Techniques

### Code Splitting

Load code only when required.

```jsx
const Admin = React.lazy(() => import("./Admin"));
```

---

### Dynamic Imports

```jsx
const module = await import("./utils");
```

Useful for:

- Feature modules
- Admin panels
- Heavy libraries

---

### Tree Shaking

Remove unused exports during the build process.

```javascript
// utils.js
export const add = () => {};
export const subtract = () => {};
export const multiply = () => {};
```

```javascript
import { add } from "./utils";
```

Only `add` is included in the production bundle (when supported by the bundler and ES modules).

---

### Compression

Serve compressed assets using:

- Brotli (preferred)
- Gzip

---

### Minification

Remove:

- Whitespace
- Comments
- Dead code

Tools:

- Terser
- esbuild
- SWC

---

### Caching

Use:

- Cache-Control
- ETag
- CDN caching

---

### Image Optimization

- WebP / AVIF
- Responsive images
- Lazy loading

---

### Prefetching & Preloading

**Preload**

Load critical resources immediately.

```html
<link rel="preload" href="/fonts/main.woff2" as="font">
```

**Prefetch**

Download resources likely needed later.

```html
<link rel="prefetch" href="/dashboard.js">
```

---

## Bundle Optimization Checklist

- ✅ Route-based code splitting
- ✅ Component-level lazy loading
- ✅ Tree shaking
- ✅ Dynamic imports
- ✅ Image optimization
- ✅ Brotli/Gzip compression
- ✅ CDN caching
- ✅ Bundle analysis
- ✅ Remove unused dependencies

---
# Interview One-Liner

> **Bundle optimization reduces JavaScript download size, parsing time, and execution cost using techniques such as code splitting, tree shaking, compression, caching, and lazy loading, resulting in faster page loads and better Core Web Vitals.**

---

# Why Are Large JavaScript Bundles Harmful?

Large JavaScript bundles increase:

- Download time
- Parse time
- Compile time
- JavaScript execution time
- Hydration delay
- Memory usage
- Time to Interactive (TTI)

---

# 5. Core Web Vitals Optimization

## What are Core Web Vitals?

Core Web Vitals are Google's metrics for measuring real-world user experience.

| Metric | Measures | Good Score |
|---------|----------|------------|
| **LCP (Largest Contentful Paint)** | Loading performance | < 2.5 s |
| **INP (Interaction to Next Paint)** | Responsiveness | < 200 ms |
| **CLS (Cumulative Layout Shift)** | Visual stability | < 0.1 |

---

## How to Improve LCP

- Optimize images (WebP/AVIF)
- Use a CDN
- Preload critical assets
- Reduce render-blocking CSS and JavaScript
- Reduce server response time
- Lazy load below-the-fold content

---

## How to Improve INP

- Reduce JavaScript execution time
- Split long-running tasks
- Reduce unnecessary React re-renders
- Debounce expensive handlers
- Use `startTransition` for non-urgent updates
- Avoid blocking the main thread

---

## How to Improve CLS

- Set explicit width and height for images/videos
- Reserve space for ads and dynamic content
- Avoid inserting content above existing content
- Use stable fonts (`font-display: swap`)
- Animate with `transform` instead of layout properties

---

## Interview One-Liner

> **Core Web Vitals measure loading (LCP), responsiveness (INP), and visual stability (CLS). Improving them leads to faster, smoother, and more stable user experiences.**

---

# 6. HTTP Caching Strategies

## What is HTTP Caching?

HTTP caching stores responses closer to users to avoid repeated computation and network requests.

Benefits:

- Faster page loads
- Reduced bandwidth
- Lower server load
- Better scalability

---

## Types of Caching

| Cache Type | Description |
|------------|-------------|
| Browser Cache | Stored in the user's browser |
| CDN Cache | Stored at geographically distributed edge servers |
| Memory Cache | Server-side in-memory cache (e.g., Redis) |
| Service Worker Cache | Offline/PWA caching |

---

## Important Cache Headers

```http
Cache-Control: max-age=3600
ETag: "abc123"
Last-Modified: Wed, 15 Jul 2026 10:00:00 GMT
Expires: Wed, 15 Jul 2026 11:00:00 GMT
```

---

## What is `stale-while-revalidate`?

The browser serves stale cached content immediately while fetching a fresh version in the background.

Benefits:

- Faster perceived performance
- Reduced latency
- Better user experience

---

## Interview One-Liner

> **HTTP caching improves performance by serving previously stored responses from the browser or CDN, reducing latency, bandwidth usage, and server load.**

---

# 7. Windowing (Virtualization)

## What is Virtualization?

Virtualization renders **only the visible items** in a large list instead of rendering the entire dataset.

---

## Why Is It Important?

Rendering thousands of DOM nodes causes:

- Slow rendering
- High memory usage
- Janky scrolling
- Increased CPU work

---

## Popular Libraries

- `react-window`
- `react-virtualized`

---

## How Does It Work?

```text
10000 Items
      │
      ▼
Viewport
      │
      ▼
Render Only 20-30 Visible Items
      │
      ▼
Recycle DOM Nodes While Scrolling
```

---

## Benefits

- Lower memory usage
- Faster rendering
- Smooth scrolling
- Better FPS

---

## Repaint vs Reflow (Layout)

| Operation | Meaning | Cost |
|------------|---------|------|
| **Repaint** | Updates pixels without changing layout | Lower |
| **Reflow (Layout)** | Recalculates element size and position | Higher |

**Reflow is significantly more expensive than repaint.**

---

## Progress Bar Animation

### Static or Occasionally Updated Progress Bars

Use:

```css
width
```

Simple and readable.

---

### Frequently Animated Progress Bars

Use:

```css
transform: scaleX(...)
```

Benefits:

- GPU accelerated
- Avoids layout recalculation
- Better animation performance

---

### When to Use `translateX()`

Use `translateX()` when moving an element.

Use `scaleX()` when increasing or decreasing progress.

---

## What Causes Layout Thrashing?

Layout thrashing occurs when JavaScript repeatedly alternates between:

1. Reading layout information

```javascript
element.offsetWidth
```

2. Writing layout information

```javascript
element.style.width = "200px";
```

Repeated read → write → read → write forces synchronous layout recalculations.

---

## How to Prevent Layout Thrashing

- Batch DOM reads together
- Batch DOM writes together
- Use `requestAnimationFrame`
- Prefer `transform` over `width`, `top`, and `left`
- Avoid unnecessary layout reads

---

## Interview One-Liner

> **Virtualization improves rendering performance by mounting only visible list items, reducing DOM size, memory usage, and rendering cost.**

---

# 8. CDN and Edge Rendering

## What is a CDN?

A Content Delivery Network (CDN) is a geographically distributed network of servers that delivers static assets from locations closer to users.

Examples:

- Images
- CSS
- JavaScript
- Fonts
- Videos

---

## Benefits

- Lower latency
- Faster asset delivery
- Reduced server load
- Higher availability
- Better global performance

---

## What is Edge Rendering?

Edge rendering executes server-side rendering close to the user's geographic location rather than from a centralized server.

Instead of:

```text
User
   │
USA Server
```

Use:

```text
User
   │
Nearest Edge Server
```

---

## Popular Platforms

- Cloudflare Workers
- Vercel Edge Functions
- Netlify Edge Functions
- Fastly Compute

---

## Why Does Edge Rendering Matter?

Improves:

- Time to First Byte (TTFB)
- Personalized responses
- Global performance
- Lower latency

---

## CDN vs Edge Rendering

| CDN | Edge Rendering |
|------|----------------|
| Delivers static assets | Executes server-side code near users |
| Caches files | Can generate dynamic HTML |
| Static content | Dynamic content |

---

## Interview One-Liner

> **A CDN delivers static assets closer to users, while Edge Rendering executes server-side logic at edge locations to reduce latency for dynamic content.**

---

# 9. State Architecture Patterns

## What is Good State Architecture?

A good state architecture stores the minimum required state while keeping updates predictable and minimizing unnecessary re-renders.

Goals:

- Predictability
- Scalability
- Maintainability
- Performance

---

## Common State Categories

| State Type | Example | Best Tool |
|------------|----------|-----------|
| Local UI State | Modal open, dropdown | `useState` |
| Server State | API data | TanStack Query |
| Global State | Authentication, Theme | Redux Toolkit / Context |
| Derived State | Filtered list, Full name | Compute with `useMemo` or directly derive |

---

## State Management Guidelines

- Keep state close to where it's used
- Don't duplicate state
- Derive values instead of storing them
- Use Context sparingly
- Separate server state from client state
- Normalize complex global state

---

## Recommended Tools

| Problem | Recommended Solution |
|----------|----------------------|
| Local component state | `useState` |
| Complex local state | `useReducer` |
| Global client state | Redux Toolkit |
| Server state | TanStack Query |
| Forms | React Hook Form |
| URL state | React Router |

---

## Interview One-Liner

> **Good state architecture stores only essential state, derives computed values, keeps state close to where it's used, and uses the right tool for local, global, and server state to improve scalability and performance.**
# Important State Management Principles

## Q: What are the important state management principles?

- Keep state minimal.
- Avoid duplicating state.
- Prefer derived values over stored values.
- Colocate state close to where it is used.
- Normalize complex state.
- Separate server state from client state.
- Keep state predictable and easy to debug.

### Interview One-Liner

> **Store only essential state, derive everything else, and keep state as close as possible to where it's used.**

---

## Q: Popular State Management Patterns & Tools

### Context API

Best for:

- Theme
- Authentication
- Locale
- Feature flags

Avoid using Context for frequently changing shared state.

---

### Reducer Pattern

Uses pure functions to manage predictable state transitions.

```tsx
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    default:
      return state;
  }
}
```

Best for:

- Complex local state
- Predictable updates

---

### Redux Toolkit

Best for:

- Large enterprise applications
- Shared client state
- Authentication
- Permissions
- Feature flags

Benefits:

- Less boilerplate
- DevTools
- Immer
- Predictable architecture

---

### Zustand

A lightweight global state management library.

Benefits:

- Minimal API
- No Provider required
- Very small bundle
- Excellent performance

Best for:

- Medium applications
- Dashboard applications
- React-only projects

---

### TanStack Query (React Query)

Best for managing **server state**.

Features:

- Caching
- Background refetching
- Pagination
- Optimistic updates
- Retry
- Request deduplication

---

# Server State vs Client State

| Server State | Client State |
|--------------|--------------|
| Comes from APIs | Local UI state |
| Asynchronous | Usually synchronous |
| Cached and refetched | Controlled locally |
| Shared across sessions | Temporary UI state |
| Managed by TanStack Query | Managed by React/Redux |

### Interview One-Liner

> **Server state belongs to the backend and requires fetching, caching, and synchronization, while client state exists only in the UI and is managed locally.**

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

# React Performance Measurement Tools

| Tool | Purpose |
|------|----------|
| Chrome Performance | Browser runtime performance |
| Lighthouse | Performance & SEO audit |
| Bundle Analyzer | JavaScript bundle analysis |
| React Profiler | React render analysis |
| Web Vitals | User experience metrics |
| Flamegraphs | Execution hotspots |

---

## Easy Interview Mental Model

| Tool | Question It Answers |
|------|----------------------|
| Chrome Performance | What is slowing the browser? |
| Lighthouse | How healthy is my application? |
| Bundle Analyzer | Why is my bundle large? |
| React Profiler | Which components are re-rendering? |
| Web Vitals | How do users experience performance? |
| Flamegraphs | Where is execution time spent? |

---

# React Context API Issues

## Why can Context become a performance problem?

Every time a Context value changes, **all consuming components re-render**, even if they only use a small part of the context value.

This makes Context unsuitable for frequently changing or large shared state.

---

## Best Practices

- Split large contexts into smaller ones.
- Memoize provider values.
- Keep Context values stable.
- Use Redux or Zustand for complex shared state.
- Verify issues using React Profiler.

---

## Interview One-Liner

> **Context is best viewed as dependency injection rather than full state management. It's ideal for stable global data like themes or authentication, but frequent updates can trigger unnecessary re-renders.**

---

# TypeScript Generics

## What are Generics?

Generics allow you to write reusable, type-safe code while preserving relationships between input and output types.

```typescript
function identity<T>(value: T): T {
  return value;
}
```

---

## Common Uses

- Utility functions
- Custom hooks
- API response models
- Collections
- `keyof` constraints

---

## Memory Trick

> **Generics = Reusable code with preserved types**

---

# any vs unknown

| any | unknown |
|------|----------|
| Disables type checking | Type-safe |
| Runtime errors possible | Requires narrowing |
| Unsafe | Safe |
| Avoid when possible | Preferred for external data |

```typescript
let value: unknown = getData();

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

---

## Memory Trick

- **any → Skip checking**
- **unknown → Check before use**

---

# interface vs type

| interface | type |
|------------|------|
| Object contracts | Any type |
| Declaration merging | No merging |
| Extensible | Flexible |
| Better for APIs | Better for unions & mapped types |

---

## When to Use

**Use `interface`**

- Public APIs
- Object models
- Component props

**Use `type`**

- Union types
- Tuples
- Conditional types
- Mapped types

---

## Memory Trick

- **interface = Objects + Extensibility**
- **type = Flexibility + Advanced Types**

---

# React.lazy() vs Suspense

## React.lazy()

Loads a component only when needed using dynamic imports.

```tsx
const Dashboard = React.lazy(() => import("./Dashboard"));
```

---

## Suspense

Displays a fallback UI while lazy-loaded components are being downloaded.

```tsx
<Suspense fallback={<Spinner />}>
  <Dashboard />
</Suspense>
```

---

## Difference

| React.lazy | Suspense |
|------------|-----------|
| Loads JavaScript on demand | Displays loading UI |
| Enables code splitting | Rendering boundary |

---

## Best Practices

Use for:

- Route-level components
- Heavy dashboards
- Admin modules

Avoid for:

- Tiny shared components

---

## Memory Trick

- **React.lazy() = Delay loading JavaScript**
- **Suspense = Loading boundary**

---

# Frontend System Design

## Design a Scalable E-commerce Frontend

### 1. Architecture Style

- Feature-based architecture
- Microfrontends (if needed)
- Component-driven design

---

### 2. Folder Structure

```text
src/
├── features/
├── shared/
├── components/
├── hooks/
├── services/
├── routes/
├── store/
├── utils/
└── assets/
```

---

### 3. State Management

- Local → `useState`
- Complex local → `useReducer`
- Global → Redux Toolkit / Zustand
- Server → TanStack Query

---

### 4. Rendering Strategy

- SSR → Product pages
- CSR → Dashboard
- SSG → Marketing pages
- React Server Components where appropriate

---

### 5. Performance

- Code splitting
- Lazy loading
- Virtualization
- Image optimization
- CDN
- Caching
- Memoization
- Bundle optimization

---

### 6. API & Data Layer

- API abstraction layer
- Axios/Fetch wrapper
- Retry mechanism
- Request cancellation
- TanStack Query caching

---

### 7. Reliability & Observability

- Error Boundaries
- Logging
- Monitoring
- Performance metrics
- Analytics
- Feature flags

---

### 8. Security

- XSS protection
- CSRF protection
- CSP headers
- Secure authentication
- HTTPS
- Token management

---

### 9. Team Scalability

- Design system
- Shared component library
- Coding standards
- CI/CD
- Automated testing
- Documentation
- Independent deployments

---

## Interview One-Liner

> For a scalable e-commerce frontend, I would use a feature-based architecture with Redux Toolkit for client state, TanStack Query for server state, SSR for SEO-critical pages, code splitting and virtualization for performance, a reusable design system for consistency, and strong observability and security practices to support large engineering teams.



# Senior-Level Frontend Interview Answers

---

# Design a Scalable E-commerce Frontend (2-Minute Answer)

> "For a scalable e-commerce frontend, I'd use a feature-based modular architecture with clear business domains such as Catalog, Cart, Checkout, Orders, and Authentication. This keeps teams independent and improves maintainability.
>
> For rendering, I'd adopt a hybrid strategy—SSR or ISR for SEO-critical pages like product listings and product details, while using CSR for authenticated areas such as dashboards, carts, and user profiles.
>
> I'd manage server state using TanStack Query because it provides caching, background refetching, retries, and request deduplication. For client state, I'd use Redux Toolkit or Zustand depending on application complexity, while avoiding Context API for frequently changing shared state.**
>
> Performance would be a priority from day one through route-based code splitting, lazy loading, virtualization for large lists, CDN-backed image optimization, HTTP caching, and continuous monitoring of Core Web Vitals.
>
> To support long-term scalability, I'd introduce an API abstraction layer, centralized error handling, feature flags for safe releases, comprehensive testing, monitoring, logging, and a reusable design system so multiple teams can develop independently while maintaining a consistent user experience."

---

# Production Page Suddenly Becomes Slow After a Release

## Senior-Level Answer (2 Minutes)

> "The first thing I'd determine is whether the slowdown is caused by the frontend, backend, rendering pipeline, network, or third-party integrations. Since it started immediately after a release, I'd initially treat it as a production regression.
>
> I'd review deployment timelines, compare release diffs, and evaluate whether a rollback or feature flag should be used if customer impact is significant.
>
> Next, I'd reproduce the issue using a production build instead of the development environment. I'd analyze the application using Chrome Performance, React Profiler, Network, and Memory tools while also reviewing Core Web Vitals and Real User Monitoring (RUM) data.
>
> I'd inspect JavaScript bundle size, API response times, third-party scripts, rendering performance, memory growth, and unnecessary React re-renders. If the issue only occurs in production, I'd rely on source maps, production traces, throttled network and CPU simulations, and telemetry because development builds often hide production bottlenecks.
>
> After identifying the root cause, I'd implement the appropriate optimization—whether that's reducing bundle size, optimizing rendering, improving caching, fixing API latency, or removing expensive third-party scripts—and verify the improvement using performance metrics before closing the incident."

---

## Investigation Checklist

### Step 1 — Determine the Problem Area

- Frontend
- Backend
- Network
- Rendering
- Third-party scripts

---

### Step 2 — Check Production Telemetry

- Core Web Vitals
- Error logs
- APM dashboards
- Real User Monitoring (RUM)

---

### Step 3 — Compare the Release

- Git diff
- Deployment timeline
- Feature flags
- Configuration changes

---

### Step 4 — Mitigate

- Rollback
- Disable feature flags
- Hotfix

---

### Step 5 — Profile

- React Profiler
- Chrome Performance
- Network
- Memory
- Bundle Analyzer

---

### Step 6 — Verify

- LCP
- INP
- CLS
- CPU usage
- Memory usage
- User feedback

---

# Behavioral Interview

# How Do You Mentor Junior Engineers?

## Senior-Level Answer (2 Minutes)

> "I mentor junior engineers by focusing not only on technical skills but also on engineering judgment. Rather than simply providing answers, I guide them through the reasoning process so they learn how to solve similar problems independently.
>
> I regularly use code reviews and pair programming to discuss debugging strategies, trade-offs, design decisions, and performance considerations. During reviews, I explain why a solution is preferred instead of only pointing out what's wrong.
>
> As engineers grow, I gradually increase their ownership—from fixing small bugs to leading complete features—while providing the architectural context needed to make informed decisions.
>
> I also work to create an environment where asking questions is encouraged, mistakes are treated as learning opportunities, and feedback is constructive. My goal is to help engineers become confident, independent contributors who can mentor others in the future."

---

## Mentoring Principles

### 1. Teach Problem Solving

Don't just provide answers.

Teach:

- Debugging
- Root cause analysis
- Trade-offs
- System thinking

---

### 2. Pair Programming

Use pairing sessions to demonstrate:

- Debugging
- Architecture
- Performance analysis
- Best practices

---

### 3. Code Reviews

Focus on:

- Maintainability
- Readability
- Performance
- Scalability
- Testing

Explain **why**, not just **what**.

---

### 4. Progressive Ownership

Example progression:

```text
Bug Fix
    ↓
Small Feature
    ↓
Feature Ownership
    ↓
Technical Design
    ↓
Mentoring Others
```

---

### 5. Share Business Context

Help engineers understand:

- Why the feature exists
- Customer impact
- Performance goals
- Product priorities

---

### 6. Psychological Safety

Encourage:

- Questions
- Experimentation
- Learning from mistakes
- Constructive feedback

---

# Real Example

## Performance Mentoring Story

> "One junior engineer was struggling with performance issues in a React screen. Instead of rewriting the implementation myself, I paired with them using React Profiler and Chrome Performance tools. Together we analyzed unnecessary re-renders, discussed optimization options, and evaluated the trade-offs of using React.memo, useMemo, and useCallback. Rather than giving the solution directly, I encouraged them to identify the bottleneck and propose improvements. Over time, they became confident in diagnosing performance issues independently and eventually started helping other teammates solve similar problems."

---

# Interview One-Liners

### Scalable Architecture

> Use feature-based modules, hybrid rendering, dedicated server/client state management, performance optimization, and strong observability to build scalable frontends.

---

### Production Performance Issue

> Treat sudden production slowdowns as regressions, verify with production telemetry, profile the application, mitigate quickly using rollback or feature flags, then optimize based on measured bottlenecks.

---

### Mentoring

> I focus on building independent engineers by teaching problem-solving, encouraging ownership, providing architectural context, and creating a safe environment for learning and feedback.


# One-to-One Interview Questions

---

# 1. What was the biggest challenge you faced in your project, and how did you resolve it?

## Senior-Level Answer (2–3 Minutes)

> "One of the biggest challenges I faced was during the migration of a large e-commerce application from Angular to React. The product listing page displayed around 3,000 products, and initially the application rendered every product at once. As a result, the initial page load was slow, scrolling became laggy, and applying filters caused noticeable UI freezes.
>
> To understand the bottleneck, I started with React DevTools Profiler. The profiler showed that every time the filter state changed in the parent component, the entire product list subtree was re-rendering. The flamegraph confirmed that every `ProductCard` component was rendering again, even when its underlying product data hadn't changed.
>
> **After investigating further, we identified three primary causes:**
>
> - The parent component re-rendered whenever filter state changed.**
> - Inline callback functions such as `onAddToCart` created new function references on every render.**
> - Derived arrays and objects were recreated inside the render function, breaking referential equality and preventing memoization from working effectively.
>
> **To address these issues, we implemented several optimizations:**
>
> 1. Wrapped the `ProductCard` component with `React.memo()` so unchanged products would skip re-rendering.
> 2. Used `useCallback()` to stabilize event handler references passed to child components.
> 3. Memoized expensive derived values using `useMemo()` and avoided recreating objects and arrays unnecessarily.
> 4. Introduced list virtualization using `react-window`, ensuring that only visible products were rendered instead of all 3,000 items.
>
> After implementing these optimizations, we validated the improvements using React Profiler. The number of component renders dropped significantly, commit times decreased, scrolling became smooth, and overall page responsiveness improved considerably. The biggest lesson was that performance optimization should always be driven by measurement rather than assumptions."

---

## Root Cause

- Parent state updates triggered the entire subtree.
- New callback references on every render.
- New objects and arrays broke memoization.
- Large DOM (≈3,000 product cards).

---

## Investigation Tools

- React DevTools Profiler
- Flamegraph
- Chrome Performance
- React DevTools "Highlight Updates"

---

## Optimizations

- `React.memo()`
- `useCallback()`
- `useMemo()`
- `react-window`
- Stable props
- Avoid unnecessary object creation

---

## Results

- Reduced unnecessary re-renders
- Lower commit time
- Faster initial render
- Smooth scrolling
- Better user experience

---

## Interview One-Liner

> I first measured the problem using React Profiler, identified unnecessary component re-renders caused by unstable props and large DOM rendering, then optimized selectively with React.memo, useCallback, useMemo, and virtualization.

---

# 2. When Can These Optimizations Make Performance Worse?

## Senior-Level Answer (2 Minutes)

> "React performance optimizations such as `React.memo`, `useMemo`, and `useCallback` should be applied selectively rather than everywhere. Each of these techniques introduces its own overhead, so using them without measurement can actually degrade performance.
>
> For example, `React.memo` performs a shallow comparison of props on every parent render. If the component is lightweight, the comparison itself may cost more than simply rendering the component again.
>
> Similarly, `useMemo` and `useCallback` require React to retain previous values and compare dependency arrays on every render. If the computation being memoized is inexpensive or the callback isn't passed to memoized children, the extra bookkeeping provides little or no benefit.
>
> In our project, we used these optimizations only where profiling showed measurable improvements. Heavy components such as `ProductCard` benefited from `React.memo`, and `useCallback` was useful for event handlers passed several levels down to memoized children. For simple UI components like buttons or labels, we intentionally avoided memoization because the render cost was negligible.
>
> We continuously validated these decisions using React Profiler, and in some cases removing unnecessary memoization actually reduced render time because it eliminated comparison overhead. The key lesson is to measure first, optimize second, and only keep optimizations that provide measurable improvements."
> 
---

## Why Can Memoization Hurt Performance?

### `React.memo`

Costs:

- Shallow prop comparison
- Extra comparison on every parent render

Not useful when:

- Component is very small
- Props change frequently
- Rendering is inexpensive

---

### `useMemo`

Costs:

- Stores cached value
- Dependency comparison
- Additional memory usage

Use only for:

- Expensive computations

Avoid for:

- Simple calculations

---

### `useCallback`

Costs:

- Stores function reference
- Dependency comparison

Useful when:

- Passing callbacks to memoized children
- Maintaining stable references

Avoid when:

- Callback stays inside the same component
- Child isn't memoized

---

## Real Usage in Our Project

| Optimization | Used? | Reason |
|--------------|------|--------|
| React.memo | ✅ | Heavy `ProductCard` component |
| useCallback | ✅ | Stable handlers for memoized children |
| useMemo | ✅ | Expensive filtered product lists |
| Memo everywhere | ❌ | Increased comparison overhead |

---

## Common Mistakes

- Memoizing every component
- Wrapping every function with `useCallback`
- Memoizing trivial calculations
- Optimizing without profiling
- Ignoring readability and maintainability

---

## Golden Rule

> **Measure → Identify Bottleneck → Optimize → Measure Again**

Never optimize based on assumptions.

---

## Interview One-Liner

> Memoization isn't free. `React.memo`, `useMemo`, and `useCallback` introduce comparison and memory overhead, so they should only be used where profiling shows a measurable performance benefit.

# 3. Can you give a real example where using React.memo or useCallback made performance worse or was unnecessary?

## Senior-Level Answer (2 Minutes)

> "Yes. React performance optimizations are not free, and I've seen cases where using `React.memo`, `useCallback`, or `useMemo` actually reduced performance or added unnecessary complexity.
>
> A simple example is wrapping very lightweight components such as buttons, icons, or small labels with `React.memo`. Since these components are cheap to render, React spends more time performing shallow prop comparisons than it would simply re-rendering the component.
>
> A more realistic production example occurred on a form-heavy page where we initially wrapped nearly every event handler with `useCallback`, assuming it would improve performance. However, React Profiler showed almost no reduction in re-renders because the child components weren't memoized. Instead, we introduced additional dependency tracking, increased code complexity, and even encountered stale closure bugs when dependency arrays weren't maintained correctly.
>
> Another common issue involved `React.memo`. Although components were memoized, the parent still created new object literals and arrays during every render, such as inline style objects or filtered arrays. Since React performs shallow comparison, these new references caused memoization to fail, meaning we paid the comparison cost while still re-rendering every component.
>
> The biggest takeaway for me was that optimization should always be guided by profiling rather than assumptions. Today, I only apply `React.memo`, `useCallback`, or `useMemo` when React Profiler demonstrates a measurable benefit—for example with expensive components, large lists, or deeply nested component trees."

---

## Example 1 — React.memo on Cheap Components

```tsx
const Button = React.memo(() => {
  return <button>Save</button>;
});
```

**Problem**

- Render is extremely cheap.
- Shallow prop comparison costs more than rendering.

Result:

❌ Worse performance.

---

## Example 2 — useCallback Everywhere

```tsx
const handleClick = useCallback(() => {
  save();
}, []);
```

If:

- Child isn't memoized
- Callback isn't passed down

Then `useCallback` provides no benefit.

Instead it adds:

- Dependency tracking
- Memory usage
- More complex code

---

## Example 3 — Memoization Broken by New References

```tsx
<ProductCard
  filters={{ active: true }}
/>
```

Every render creates:

```tsx
{ active: true }
```

New reference ⇒

```text
React.memo

↓

Shallow comparison fails

↓

Component renders anyway
```

Memoization becomes useless.

---

## Lessons Learned

Only optimize when:

- React Profiler shows expensive rendering
- Component is computationally expensive
- Referential equality matters
- Large lists exist

---

## Interview One-Liner

> Memoization isn't free. If components are inexpensive to render or props change reference every render, `React.memo`, `useMemo`, and `useCallback` may add overhead without improving performance. Always profile before optimizing.

---

# 4. Explain a Production Bug Caused by Stale Closures

## Senior-Level Answer (2 Minutes)

> "A production issue we encountered involved a debounced search input. We delayed API requests until the user stopped typing to reduce unnecessary network calls. However, the debounced callback captured an older value of `searchTerm` because of JavaScript closures.
>
> For example, if the user typed 'iph' and quickly continued typing 'iphone', the delayed callback sometimes still executed using 'iph'. The outdated request could finish after the newer request and overwrite the latest search results, causing the UI to flicker or display stale data.
>
> To resolve this, we stopped relying on captured state inside the debounced callback. Instead, we passed the latest search term directly into the debounce function or stored the latest value in a `useRef`, which always points to the current value without triggering re-renders. We also used `AbortController` to cancel previous requests so older responses couldn't overwrite newer ones.
>
> The key lesson is that asynchronous callbacks often outlive the render that created them, so they should reference the latest value explicitly or cancel outdated work."

---

## Problem

```text
User types:

iph

↓

iphone

↓

Debounce executes

↓

API called with "iph"

↓

Wrong results displayed
```

---

## Why?

JavaScript closures captured:

```tsx
searchTerm = "iph"
```

Instead of:

```tsx
searchTerm = "iphone"
```

---

## Solution 1 — Pass Latest Value

```tsx
const debouncedSearch = debounce((value) => {
  search(value);
}, 500);

<input
  onChange={(e) => debouncedSearch(e.target.value)}
/>
```

No stale closure.

---

## Solution 2 — useRef

```tsx
const latestValue = useRef("");

useEffect(() => {
  latestValue.current = searchTerm;
}, [searchTerm]);
```

Later:

```tsx
search(latestValue.current);
```

Always latest value.

---

## Solution 3 — Abort Previous Requests

```tsx
const controller = new AbortController();

controller.abort();
```

Prevents older responses from updating the UI.

---

## Debugging Steps

- React Profiler
- Network tab
- Console timestamps
- Verify request order
- Inspect closures
- Confirm latest state

---

## Interview One-Liner

> Stale closures occur when asynchronous callbacks capture outdated state. I fix them by passing the latest value explicitly, storing mutable values in `useRef`, or cancelling outdated async operations using `AbortController`.

---

# 5. useRef vs useCallback for Fixing Stale Closures

## Comparison

| Feature | `useCallback` | `useRef` |
|---------|---------------|-----------|
| Purpose | Memoize function reference | Store mutable value |
| Causes Re-render | No | No |
| Prevents Stale Closures | Indirectly (dependency updates) | Directly (always latest value) |
| Best For | Stable callbacks | Async callbacks, timers, event listeners |

---

## When to Use `useCallback`

Use when:

- Child component is memoized.
- Function identity matters.
- Callback depends on state.
- React should recreate the function when dependencies change.

Example:

```tsx
const handleSave = useCallback(() => {
  save(user);
}, [user]);
```

---

## When to Use `useRef`

Use when:

- Working with timers
- Debounce
- Throttle
- Event listeners
- `setInterval`
- Async API callbacks
- WebSocket callbacks

Example:

```tsx
const latestUser = useRef(user);

useEffect(() => {
  latestUser.current = user;
}, [user]);
```

Later:

```tsx
socket.onmessage = () => {
  console.log(latestUser.current);
};
```

---

## Which One Do I Prefer?

> I use `useCallback` when React should **manage correctness through dependency tracking and when stable function references** improve rendering performance. I use `useRef` when **asynchronous code needs access to the latest value without recreating callbacks or causing re-renders**.

---

## Memory Trick

```text
useCallback

↓

Stable Function

↓

React controls updates


useRef

↓

Latest Value

↓

Developer controls updates
```

---

## Interview One-Liner

>`useCallback` keeps  **function references stable by recreating them when dependencies change**, whereas `useRef`  **provides mutable access to the latest value without causing re-renders**, making it ideal for asynchronous callbacks such as debouncing, intervals, and event listeners.

# Microservices vs Micro Frontends

| Aspect | Microservices | Micro Frontends |
|--------|---------------|-----------------|
| **Purpose** | Backend architecture | Frontend architecture |
| **Scope** | Break backend into independent services | Break frontend into independent apps/modules |
| **Team Ownership** | Backend/domain teams | Frontend/domain teams |
| **Deployment** | Independently deployable backend services | Independently deployable frontend features |
| **Communication** | REST APIs, gRPC, events, messaging | Module Federation, shared packages, APIs |
| **Example** | cart-service, payment-service | Cart App, Product App, Checkout App |

---

# What is Source Map in React?

Source maps are files that map **minified production bundles** back to the **original source code**.

They help debug production issues by translating stack traces from bundled JavaScript into actual React components and source line numbers.

In production, it's best practice **not to expose source maps publicly**. Instead, upload them securely to monitoring tools like **Sentry** for debugging.

## Production Build

During a production build, code is:

- Minified
- Bundled
- Transpiled (modern JavaScript → browser-compatible JavaScript)

Without source maps, production stack traces are difficult to understand.

---

# What is Webpack?

Webpack is a **module bundler** that takes application code and assets and bundles them into optimized files for browsers.

Webpack processes:

- JavaScript
- TypeScript
- JSX
- CSS / Sass / SCSS
- Images
- Fonts
- Other static assets

Browsers do not naturally understand:

- TypeScript
- JSX
- Sass/SCSS
- Modern module syntax
- Advanced optimizations

Webpack helps by:

- Bundling modules
- Transpiling code
- Optimizing assets
- Code splitting
- Tree shaking
- Dependency management

---

# Bundling vs Tree Shaking

## Bundling

Bundling means combining all application modules and dependencies into browser-consumable files.

Webpack:

1. Starts from an entry point.
2. Builds a dependency graph.
3. Packages everything into bundles.

Example:

```
src/
 ├── index.js
 ├── utils.js
 └── api.js

↓

bundle.js
```

---

## Tree Shaking

Tree shaking removes **unused (dead) code** from the final bundle.

Example:

```javascript
// math.js

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}
```

```javascript
// app.js

import { add } from "./math";

console.log(add(2, 3));
```

Final bundle includes only:

```javascript
function add(a, b) {
  return a + b;
}
```

`subtract()` is removed because it isn't used.

---

## Bundling vs Tree Shaking

| Feature | Bundling | Tree Shaking |
|----------|----------|--------------|
| Purpose | Combine modules | Remove unused code |
| Output | Bundle file(s) | Smaller bundle |
| Reduces bundle size? | ❌ Not necessarily | ✅ Yes |
| Requires ES Modules | ❌ No | ✅ Yes |
| Done by | Webpack | Webpack + Terser |

---

## Interview One-Liner

> Bundling combines **application modules into optimized** browser bundles, while tree shaking**removes unused code from those bundles** to reduce JavaScript size and improve loading performance.

# Redux Toolkit (RTK)

## What is Redux Toolkit?

Redux Toolkit (RTK) is the **officially recommended** way to write Redux logic.

It simplifies Redux setup, reduces boilerplate, and includes built-in best practices.

**Official package**

```bash
@reduxjs/toolkit
```

---

# 1. Store

`configureStore()` replaces the old `createStore()`.

It automatically configures:

- Redux DevTools
- Redux Thunk middleware
- Good default settings
- Development checks

Example:

```javascript
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

---

# 2. Slice

A **slice** groups related Redux logic together.

It contains:

- State
- Reducers
- Actions

Example:

```javascript
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

---

## ❓ Why can we mutate state directly in RTK?

Because Redux Toolkit uses **Immer.js** internally.

You write code that appears to mutate state:

```javascript
state.count++;
```

Immer converts it into an immutable update behind the scenes.

Equivalent immutable update:

```javascript
return {
  ...state,
  count: state.count + 1,
};
```

---

# 3. Reducer

A reducer updates state based on dispatched actions.

Reducers must be:

- Pure functions
- Predictable
- Synchronous

Example:

```javascript
increment(state) {
    state.value++;
}
```

---

# 4. Action

An action describes **what happened**.

Example:

```javascript
dispatch(increment());
```

Action object:

```javascript
{
  type: "counter/increment"
}
```

---

# 5. useSelector & useDispatch

## useSelector()

Reads data from the Redux store.

```javascript
const count = useSelector((state) => state.counter.value);
```

---

## useDispatch()

Dispatches actions to update the store.

```javascript
const dispatch = useDispatch();

dispatch(increment());
```

---

# 6. Async Operations — createAsyncThunk

Used for asynchronous operations like API calls.

Example:

```javascript
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    const response = await fetch("/api/users");
    return response.json();
  }
);
```

---

# 7. extraReducers

Handles actions generated outside the slice, commonly by `createAsyncThunk`.

It manages:

- pending
- fulfilled
- rejected

Example:

```javascript
extraReducers: (builder) => {
  builder
    .addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    })
    .addCase(fetchUsers.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
}
```

---

# 8. RTK Query ⭐

RTK Query is Redux Toolkit's built-in solution for:

- API fetching
- Caching
- Automatic refetching
- Request deduplication
- Loading & error states
- Cache invalidation

Example:

```javascript
const { data, isLoading, error } = useGetUsersQuery();
```

## Benefits

- Minimal boilerplate
- Built-in caching
- Automatic refetching
- Loading & error handling
- Request deduplication
- Cache invalidation

---

# Interview Question

## Difference Between createAsyncThunk and RTK Query

| createAsyncThunk | RTK Query |
|------------------|-----------|
| Manual API handling | Automatic API management |
| Requires reducers | Minimal code |
| Good for complex business logic | Best for CRUD/API fetching |
| No built-in caching | Built-in caching |
| Manual loading/error state | Automatic loading/error state |
| Manual refetch | Automatic refetch |
| Manual cache management | Automatic cache invalidation |

---

## When should you use which?

### Use `createAsyncThunk` when:

- Complex business logic
- Multiple API calls
- Chained requests
- Side effects
- Custom workflows

### Use **RTK Query** when:

- REST APIs
- CRUD operations
- Data fetching
- Caching
- Automatic synchronization

---

# Interview One-Liner

> createAsyncThunk is best for **custom asynchronous business logic**, whereas RTK Query is a **complete data-fetching and caching solution** with built-in loading, error handling, and automatic cache management.

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

# React State Updates

React state updates are **asynchronous** and may be **batched together** for better performance.

## Example

```javascript
const [count, setCount] = useState(0);

setCount(count + 1);
setCount(count + 1);
```

Both updates use the same value of `count` (`0`).

React sees:

```javascript
setCount(1);
setCount(1);
```

Final value:

```text
count = 1
```

---

## Correct Way

Use the **functional update** form.

```javascript
setCount((prev) => prev + 1);
setCount((prev) => prev + 1);
```

Execution:

```text
0 → 1
1 → 2
```

Final value:

```text
count = 2
```

---

## Why Functional Updates Work

Each updater receives the **latest state value**, so React applies updates sequentially instead of using a stale snapshot.

---

## Interview One-Liner

> **React batches state updates. When the next state depends on the previous state, always use the functional update form (`setState(prev => ...)`) to avoid stale values.**

---

# Memory Leak

## JavaScript Memory Leak

A memory leak occurs when objects remain **reachable** even though they are no longer needed, preventing the garbage collector from reclaiming memory.

### Common Causes

- Event listeners not removed
- Closures retaining references
- Timers (`setInterval`, `setTimeout`)
- Detached DOM nodes
- Global variables
- Long-lived subscriptions
- Unbounded caches

---

## React Memory Leak

In React, memory leaks commonly occur when resources created inside `useEffect` are **not cleaned up** when the component unmounts.

Examples include:

- Timers (`setInterval`, `setTimeout`)
- Pending API requests
- Event listeners
- WebSocket connections
- Subscriptions
- Observers (`IntersectionObserver`, `ResizeObserver`)

---

## Bad Example

```javascript
useEffect(() => {
  const id = setInterval(() => {
    console.log("Running...");
  }, 1000);
}, []);
```

The interval continues running even after the component unmounts.

---

## Correct Example

```javascript
useEffect(() => {
  const id = setInterval(() => {
    console.log("Running...");
  }, 1000);

  return () => clearInterval(id);
}, []);
```

---

## Cancelling API Requests

```javascript
useEffect(() => {
  const controller = new AbortController();

  fetch("/api/users", {
    signal: controller.signal,
  });

  return () => controller.abort();
}, []);
```

---

## How to Debug Memory Leaks

Common tools:

- **Chrome DevTools → Memory** (Heap Snapshots)
- **Chrome Performance Panel**
- **Allocation Timeline**
- **React DevTools Profiler**

Look for:

- Increasing heap size
- Detached DOM nodes
- Retained objects
- Long-running timers
- Unremoved event listeners
- Unclosed subscriptions

---

## Interview One-Liner

> JavaScript memory leaks occur when objects remain reachable and cannot be garbage collected. In React, they usually result from effects that don't clean up resources such as timers, event listeners, API requests, WebSockets, or subscriptions. I typically diagnose them using Chrome DevTools Heap Snapshots, the Performance panel, and React Profiler to identify retained objects and increasing heap usage.

##  

# How to handle API or Backend Error 

I handle backend errors using centralized exception handling so all APIs
return a consistent response format. I validate inputs first and return
appropriate HTTP status codes like 400, 404, 409, or 500. I create
custom exception classes for business errors, log detailed errors with
request IDs using a logging framework, and never expose stack traces to
clients. For external services, I use retries with exponential backoff,
timeouts, and circuit breakers where appropriate. I also monitor
production errors using tools like Sentry or Datadog. This approach
makes the application secure, maintainable, and easier to debug

# If you find bug what is approch 

My approach is: reproduce the bug, identify the root cause, assess its
impact, communicate it to the team, implement and test the fix, add
regression tests, get it reviewed through a PR, deploy it, and monitor
the application afterward. If the issue reveals a gap in the process, I
also suggest preventive improvements so the same type of bug doesn't
happen again

asks:

# "What would you do if, one day later, you realize your story point estimate was lower than the actual effort?"

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

\"Whenever I integrate any application or third-party service into a
React project,

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

{

var a = 10;

let b = 20;

{

console.log(a); //10 -\> var is function-scoped, not block-scoped.

console.log(b); //20 -\> let is block-scoped, but the inner block is
nested inside the block where b is declared

}

}

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

Answer:\
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

11\. How do you avoid CSS conflicts?

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

### **Install Tailwind CSS**

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

shared: {

> react: {
>
> **singleton: true**
>
> }

}

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

entry: \"./src/index.js\"

## 16. Explain output.

Where bundles are generated.

output: {

filename: \"bundle.js\"

}

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

  -----------------------------------------------------------------------
  Loader                         Plugin
  ------------------------------ ----------------------------------------
  Transforms files               Extends Webpack

  Runs per file                  Runs during build

  Handles CSS/JS/images          Handles optimization, HTML generation,
                                 environment variables
  -----------------------------------------------------------------------

## 20. What is Tree Shaking?

Removes unused code.

Example:

export const add = () =\> {}

export const sub = () =\> {}

Import:

import { add } from \"./math\";

Only add is included in the production bundle if tree shaking is
enabled.

## 21. What is Code Splitting?

Splits bundles into smaller chunks.

const Home = React.lazy(() =\> import(\"./Home\"));

Benefits:

-   Faster loading

-   Smaller initial bundle

-   Better performance

## 22. What is Lazy Loading?

Loads components only when needed.

const Dashboard = React.lazy(() =\> import(\"./Dashboard\"));

## 23. What is Hot Module Replacement (HMR)?

Updates changed modules without refreshing the whole page.

Benefits:

-   Preserves component state

-   Faster development

## 24. What is Babel?

Babel converts modern JavaScript into code that older browsers can
understand.

Example:

const add = (a, b) =\> a + b;

is transformed into ES5-compatible JavaScript.

## 25. What is Source Map?

Maps bundled code back to the original source.

Useful for debugging.

## 26. Explain Webpack build modes.

development

production

none

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

new ModuleFederationPlugin({

> name: \"header\",
>
> filename: \"remoteEntry.js\",
>
> exposes: {
>
> \"./Header\": \"./src/Header\"
>
> },
>
> shared: {
>
> react: { singleton: true },
>
> \"react-dom\": { singleton: true }
>
> }

});

Host (webpack.config.js):

new ModuleFederationPlugin({

remotes: {

header: \"header@http://localhost:3001/remoteEntry.js\"

}

});

Usage:

const Header = React.lazy(() =\> import(\"header/Header\"));

##  

## Scenario-Based Interview Questions

### 1. How would you migrate a React monolith to a micro frontend architecture?

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

Example architecture:

Host App

│

┌───────────────┼──────────────┐

│ │ │

Dashboard Orders Profile

(Remote) (Remote) (Remote)

Why this approach?

-   No downtime

-   Lower risk

-   Independent deployments

-   Easier rollback

### 2. How would you handle version conflicts between multiple remote applications?

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

shared: {

react: {

singleton: true,

requiredVersion: \"\^18.2.0\"

},

\"react-dom\": {

singleton: true

}

}

For internal libraries:

-   Publish shared packages.

-   Use versioning.

-   Avoid breaking changes.

3\. What happens if a remote application is unavailable? How would you
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

\<Suspense fallback={\<Loading /\>}\>

\<ErrorBoundary fallback={\<ErrorPage /\>}\>

\<RemoteDashboard /\>

\</ErrorBoundary\>

\</Suspense\>

Users should still be able to use the rest of the application.

4\. How would you implement authentication across multiple micro
frontends?

Answer

Authentication should be centralized.

Architecture:

Identity Provider

│

▼

Authentication Service

│

▼

JWT Token

│

┌─────┼─────┐

│ │ │

MFE1 MFE2 MFE3

Implementation:

-   Login once.

-   Store JWT in secure HttpOnly cookies if possible.

-   Share authentication through the shell.

-   Refresh tokens centrally.

-   Never let every micro frontend implement login independently.

### 5. How would you share a design system across teams?

Answer

Create a shared component library.

### 6. How would you optimize performance when using Module Federation?

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

const Orders = React.lazy(() =\> import(\"orders/App\"));

Avoid loading all remotes during the initial page load.

### 7. How would you implement CI/CD for independently deployed micro frontends?

Answer

Each micro frontend should have its own pipeline.

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

Benefits:

-   Independent deployment

-   Faster releases

-   Team autonomy

-   Easier rollback

The shell application should not require rebuilding every time a remote
changes.

### 8. How would you monitor errors across multiple micro frontend applications?

Answer

Centralized monitoring is essential.

Use:

-   Error Boundaries

-   Logging

-   Monitoring tools

-   Distributed tracing

### 9. When would you choose micro frontends over a monolithic frontend?

Answer

> I would choose micro frontends when:
>
> ✅ Multiple teams work independently.
>
> ✅ Independent deployments are needed.
>
> ✅ The application is very large.
>
> ✅ Different business domains exist.

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

### 10. How do you ensure consistent user experience and routing across independently deployed micro frontend applications?

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

##  

## 

## HTTP CODE

  -----------------------------------------------------------------------
  **Code**       **Meaning**
  -------------- --------------------------------------------------------
  200            OK

  **201**        **Created**

  204            No Content

  301            Permanent Redirect

  302            Temporary Redirect

  **400**        **Bad Request**

  **401**        **Unauthorized**

  **403**        **Forbidden**

  **404**        **Not Found**

  405            Method Not Allowed

  409            Conflict

  429            Too Many Requests

  **500**        **Internal Server Error**

  **502**        **Bad Gateway**

  **503**        **Service Unavailable**

  504            Gateway Timeout
  -----------------------------------------------------------------------

## What is the difference between isNaN and Number.isNaN?

isNaN: The global function isNaN converts the argument to a Number and
returns true if the resulting value is NaN.

Number.isNaN: This method does not convert the argument. But it returns
true when the type is a Number and value is NaN

##  

## defineProperties 

Object.defineProperties() : lets you define multiple properties at once
and control their descriptors such as:

-   value

-   writable

-   enumerable

-   configurable

-   get

-   Set

Syntax

Object.defineProperties(obj, {

property1: {

value: 42,

writable: true,

enumerable: true,

configurable: true

},

property2: {

get() {

return this.\_value;

},

set(v) {

this.\_value = v;

},

enumerable: true,

configurable: true

}

});

-   value: The property\'s value.

-   writable: If true, the value can be **changed**.

-   enumerable: If true, the property appears in **loops** such as
    > for\...in and in Object.keys().

-   configurable: If true, the property can be **deleted** or its
    > descriptor changed.

-   get: Function called when the property is read.

-   set: Function called when the property is assigned.

## Difference Between defineProperty() and defineProperties()

//Single Property

Object.defineProperty(obj, \"id\", {

value: 1

});

//Multiple Properties

Object.defineProperties(obj, {

id: {

value: 1

},

name: {

value: \"Prashant\"

}

});

### Copy Property of Object

Method Copies Properties? Prototype Link? Type

Object.create(obj) ❌ No ✅ Yes Prototype inheritance

Object.assign({}, obj) ✅ Yes ❌ No Shallow copy

{\...obj} ✅ Yes ❌ No Shallow copy

### Difference between Rest Parameter and arguments

//arguments:

function test() {

console.log(arguments);

}

Available in regular functions

Array-like object

Not a real array

//rest

function test(\...args) {

console.log(args);

}

rest (\...args):

Real array

Supports array methods (map, filter, reduce)

Preferred in modern JavaScript

## Compiler vs Interpreter

A compiler translates the entire source code into machine code before
execution, producing an executable program.

An interpreter translates and executes code line by line at runtime.

Compiled languages generally execute faster,

while interpreted languages offer quicker development and debugging.

Modern JavaScript engines use JIT compilation, combining characteristics
of both approaches.

## Promise

const promise1 = Promise.resolve(\'promise1\');

const promise2 = Promise.reject(\'promise2\');

const promise3 = Promise.resolve(\'promise3\');

### 1. Promise.all()

Promise.all(\[promise1, promise2, promise3\])

.then(result =\> console.log(result))

.catch(e =\> console.log(e));

Rule

-   Waits for all promises to fulfill.

-   If one promise rejects, it immediately rejects.

### 2. Promise.allSettled()

Promise.allSettled(\[promise1, promise2, promise3\])

.then(result =\> console.log(result))

.catch(e =\> console.log(e));

Rule

-   Waits for all promises to settle.

-   Doesn\'t care whether they fulfill or reject.

-   Always resolves with an array describing every promise.

Output:

\[

{ status: \'fulfilled\', value: \'promise1\' },

{ status: \'rejected\', reason: \'promise2\' },

{ status: \'fulfilled\', value: \'promise3\' }

\]

Why .then() and not .catch()?

Because allSettled() itself never rejects.

Even if every promise fails:

Promise.allSettled(\[

> Promise.reject(\"A\"),
>
> Promise.reject(\"B\")

\]);

It still resolves successfully with status objects.

### 3. Promise.race()

Promise.race(\[promise1, promise2, promise3\])

.then(result =\> console.log(result))

.catch(e =\> console.log(e));

Rule

Returns the result of the first settled promise.

**Settled means:** fulfilled OR rejected

### 4. Promise.any()

Promise.any(\[promise1, promise2, promise3\])

.then(result =\> console.log(result))

.catch(e =\> console.log(e));

Rule

Returns the first fulfilled promise.

Rejects only if **all** promises **reject**.

Why does allSettled() call .then()?

Because allSettled() itself resolves with a report:

\[

{ status: \"fulfilled\" },

{ status: \"rejected\" }

\]

It never throws.

  --------------------------------------------------------------------------
  Metho                  Success        Failure          Output
                         Condition      Condition        
  ---------------------- -------------- ---------------- -------------------
  Promise.all()          All fulfill    Any reject       promise2 (catch)

  Promise.allSettled()   Always         Never            Status array (then)

  Promise.race()         First settled  First settled    promise1 (then)
                         fulfills       rejects          

  Promise.any()          First          All reject       promise1 (then)
                         fulfilled                       
  --------------------------------------------------------------------------

Interview One-Liner

-   all → \"All must succeed.\"

-   allSettled → \"Give me everyone\'s result.\"

-   race → \"Whoever finishes first wins (success or failure).\"

-   any → \"Give me the first success; ignore failures unless everyone
    > fails.\"

## What is JavaScript?

JavaScript is a high-level, dynamic programming language used to make
web pages interactive and build modern web applications.

It runs mainly in the browser, and also on servers using environments
like Node.js

What JavaScript does

Without JavaScript:

-   Static web pages (only HTML + CSS)

With JavaScript:

-   Click buttons and show actions

-   Validate forms

-   Load data without refreshing page

-   Build full applications (React, Angular, Node.js apps)

## async vs defer in JavaScript 

When you add a script in HTML:

\<script src=\"app.js\"\>\</script\>

By default, the browser:

-   Stops HTML parsing

-   Downloads and executes script immediately

This can slow page loading.

1\. async

\<script src=\"app.js\" async\>\</script\>

How it works:

-   Script downloads in parallel with HTML parsing

-   Executes immediately after download finishes

-   HTML parsing is paused during execution

2\. defer

\<script src=\"app.js\" defer\>\</script\>

How it works:

-   Script downloads in parallel

-   Script execution happens after HTML parsing is complete

-   Executes in order (if multiple scripts exist)

\| Feature \| async \| defer \|

\| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-- \|
\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-- \|
\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-- \|

\| Download \| Parallel \| Parallel \|

\| Execution time \| Immediately after download \| After HTML parsing \|

\| Order maintained \| ❌ No \| ✅ Yes \|

\| HTML blocking \| Minimal \| None \|

\| Best use \| Analytics, ads \| App scripts \|

## \"How can you **avoid memory consumption** issues caused by var?\"

> \"var is function-scoped and can keep variables alive for the entire
> function scope, which may lead to unnecessary memory retention.
>
> Modern JavaScript prefers **let and const** because they are
> block-scoped. To avoid memory issues, minimize variable scope,
> **remove references to large objects** when they\'re no longer needed,
> **avoid accidental globals**, and **clean up closures, timers, and
> event listeners** so the garbage collector can reclaim memory.\"

## Prototype vs \_\_proto\_\_

prototype is a **property of functions and classes** that **acts as a
template for objects** created using new.

\_\_proto\_\_ is a **property of an object that points to the
prototype** from which it **inherits properties and methods**.

By default, every function has a prototype object containing a
constructor property, and every object\'s \_\_proto\_\_ points to
Object.prototype (or the constructor\'s prototype if created with new).
JavaScript uses this prototype chain to perform inheritance and method
lookup.

function User() {}

const user = new User();

console.log(user.\_\_proto\_\_ === User.prototype); // true

console.log(User.prototype.constructor === User); // true

console.log(User.prototype.\_\_proto\_\_ === Object.prototype); // true

##  

## 

## Pure Function vs Pure Component

### Pure Function

A pure function is a function that:

1.  Always **returns** the **same outpu**t for the **same input.**

2.  Has no side effects (doesn\'t modify external state, DOM, variables,
    > API calls, etc.).

// same output -\> same input

function add(a, b) {

return a + b;

}

add(2, 3); // 5

add(2, 3); // 5

A pure function always returns the same output for the same input and
does not produce side effects. Internally, pure functions are valuable
**because they are predictable**.

This **predictability** enables optimizations such as **memoization**,

### Pure Component (React)

A Pure Component in React is a component that only re-renders when its
props or state change shallowly.

It performs a **shallow comparison** of:

-   props

-   state

If nothing has changed → it skips re-rendering.

##  

## Class in Javascript

//function constructor with prototype without class

function Bike(model, color) {

this.model = model;

this.color = color;

}

Bike.prototype.getDetails = function () {

return this.model + \" bike has\" + this.color + \" color\";

};

//ES6 class

class Bike {

constructor(color, model) {

this.color = color;

this.model = model;

}

getDetails() {

return this.model + \" bike has\" + this.color + \" color\";

}

}

###  

### Difference Between {} Object Literal and Class Object

1\. Object Literal {}

An object literal creates a single object directly.

const user = {

name: \"John\",

age: 25,

greet() {

console.log(\"Hello\");

}

};

Usage: console.log(user.name);

Characteristics:

-   Quick and simple.

-   Good for one-off objects.

-   **No blueprint for creating multiple similar objects**.

-   Methods are copied into that object.

### only one property of an object read-only

1\. **Using Object.defineProperty()** (Best for single property)

const user = {

name: \"John\",

age: 25

};

Object.defineProperty(user, \"name\", {

writable: false

});

user.name = \"Alice\"; // ❌ ignored (or error in strict mode)

Result:

-   name becomes read-only

-   other properties remain editable

2\. Class Object

**A class is a blueprint for creating multiple objects.**

class User {

constructor(name, age) {

this.name = name;

this.age = age;

}

greet() {

console.log(\"Hello\");

}

}

//create instances:

const user1 = new User(\"John\", 25);

const user2 = new User(\"Alice\", 30);

Characteristics:

-   Reusable blueprint.

-   Supports inheritance.

-   Methods are stored on the prototype.

-   Better for creating many similar objects.

Memory Difference

//Object Literal

const user1 = {

greet() {

console.log(\"Hello\");

}

};

const user2 = {

greet() {

console.log(\"Hello\");

}

};

//Each object has its own greet function.

user1 -\> greet() =\> memory

user2 -\> greet() =\> memory

//Class

class User {

greet() {

console.log(\"Hello\");

}

}

const user1 = new User();

const user2 = new User();

Both objects share the same method through the prototype.

User.prototype

↑

user1

user2

**Only one copy of greet() exists in memory.**

Prototype Check

> // Object literal:
>
> const user = {};
>
> console.log(user.\_\_proto\_\_ === Object.prototype);
>
> Output: true
>
> //Class instance:
>
> class User {}
>
> const user = new User();
>
> console.log(user.\_\_proto\_\_ === User.prototype);
>
> Output: true

## Fiber decided Priority

Fiber **uses a scheduling system called lanes** to assign priorities to
updates.

**What are Lanes in React Fiber?**

**Answer:**

**Lanes** are React Fiber\'s **priority-based scheduling system**
(introduced in React 18) that determine **which updates should be
processed first**.

Instead of processing every update immediately, React assigns updates to
different **lanes (priorities)** and schedules work accordingly, making
the UI more responsive.

Why are lanes needed?

Imagine a user is:

-   Typing in a search box ✍️

-   A large list is being filtered 🔍

-   Data is being fetched 🌐

Without priorities, the expensive list update could block typing.

With lanes:

-   Typing gets **high priority**.

-   List filtering can be **low priority** and interruptible.

> **Common Priority Types**

-   **Sync Lane** -- Immediate updates (e.g., button clicks)

-   **Input Continuous Lane** -- Continuous interactions (e.g.,
    > scrolling, dragging)

-   **Default Lane** -- Normal state updates

-   **Transition Lane** -- Non-urgent updates started with
    > startTransition

-   **Idle Lane** -- Background work

> Updates triggered by user interactions such as typing, clicking, or
> scrolling are assigned higher-priority lanes, while non-urgent work
> such as transitions or background rendering is assigned lower-priority
> lanes. The scheduler always processes the highest-priority pending
> work first and can pause lower-priority rendering to handle more
> urgent updates, keeping the UI responsive.

## Debug React application slow flow?

### 1. Use React DevTools Profiler

The React Profiler is the first tool to use. =\> Component

Look for:

-   Components rendering too frequently.

-   Components with high render duration.

-   Unnecessary re-renders.

### 2. Highlight Component Re-renders

In React DevTools:

Settings → General → Highlight updates when components render

### 3. Check Render Count

If a component renders hundreds of times unnecessarily, investigate
state and props.

### 4. Use Browser Performance Tab

Chrome DevTools

1.  Open DevTools5

2.  Performance Tab

3.  Click Record

4.  Perform slow operation

5.  Stop recording

Check:

-   Long Tasks (\>50ms)

-   JavaScript execution time

-   Layout calculations

-   Paint/Repaint operations

A flame chart helps identify exactly where time is spent.

### 5. Detect Expensive Calculations

This indicates a candidate for useMemo.

### 6. Check Network Requests

DevTools → Network

Look for:

-   Slow API responses

-   Duplicate requests

-   Large payloads

-   Waterfall loading

### 7. Use Why Did You Render

**Useful package for detecting unnecessary renders.**

npm install \@welldone-software/why-did-you-render

### 8. Identify Context Performance Problems

Whenever any value changes, every consumer re-renders.

Solutions:

-   Split contexts

-   Memoize provider values

### 9. Check Large Lists

Solution:

-   Virtualization libraries

-   Windowing

### 10. Analyze Bundle Size

Large JavaScript bundles slow startup.

Generate bundle report:

npm run build

For webpack:

npm install webpack-bundle-analyzer

Look for:

-   Huge libraries

-   Duplicate packages

-   Unused code

### 11. Check Memory Leaks

Symptoms:

-   App gets slower over time.

-   Memory usage continuously grows.

### 12. Measure Web Vitals

Useful production metrics:

-   LCP (Largest Contentful Paint)

-   INP (Interaction to Next Paint)

-   CLS (Cumulative Layout Shift)

Using:

import { onLCP, onINP } from \"web-vitals\";

Important benchmarks:

Metric. Good

LCP. \< 2.5s

INP. \<200ms

CLS. \< 0.1

### Typical Real-World Investigation Flow

When users report a slow React page:

1.  Reproduce the issue.

2.  Open React Profiler.

3.  Find expensive renders.

4.  Check Network tab for slow APIs.

5.  Check Performance tab for long tasks.

6.  Identify unnecessary re-renders.

7.  Verify Context updates.

8.  Check bundle size.

9.  Measure Web Vitals.

10. Optimize only the actual bottleneck.

Interview Answer (Short Version)

> \"I start with React DevTools Profiler to identify expensive component
> renders. Then I use Chrome Performance and Network tabs to analyze
> JavaScript execution, API latency, and rendering costs. I check for
> unnecessary re-renders, context updates, large lists, memory leaks,
> and bundle size issues. After identifying the bottleneck, I optimize
> using memoization, virtualization, code splitting, or state
> restructuring as appropriate.\"

##  

## Redux Tool Kit

What is Redux Toolkit?

Redux Toolkit is the official Redux package that simplifies Redux
development by providing utilities such as configureStore, createSlice,
and createAsyncThunk.

Why use Redux Toolkit instead of Redux?

-   Less boilerplate

-   Easier state management

-   Built-in DevTools support

-   Built-in Immer

-   Better developer experience

### What is createSlice?

createSlice() generates:

-   Reducers

-   Action creators

-   Action types

from a **single configuration object**.

### What is createAsyncThunk?

A utility for **handling asynchronous operations** such as API calls and
automatically generating pending, fulfilled, and rejected actions.

### What is RTK Query?

A powerful **data-fetching and caching solution built into Redux**
Toolkit that reduces the need for manually writing API logic.

## useEffect vs useLayoutEffect

useEffect runs after the browser paints, [making it suitable for
non-blocking side effects such as API calls, subscriptions, and event
listeners]{.mark}.

useLayoutEffect runs synchronously after DOM mutations but before paint,
[making it useful for DOM measurements and layout adjustments]{.mark}
that must happen before the user sees the UI. Because useLayoutEffect
blocks painting, it should be used sparingly and only when preventing
visual inconsistencies or reading layout information is required.

## 1. Explain the JavaScript Event Loop

Answer

JavaScript is single-threaded, meaning it executes one task at a time
using a call stack.

When asynchronous operations occur (timers, network requests, DOM
events), they are handled by browser APIs or Node.js APIs and their
callbacks are queued.

Execution order:

1.  Call Stack

2.  Microtask Queue (Promises, queueMicrotask, MutationObserver)

3.  Macrotask Queue (setTimeout, setInterval, I/O)

Example:

console.log(\'A\');

setTimeout(() =\> console.log(\'B\'), 0);

Promise.resolve().then(() =\> console.log(\'C\'));

console.log(\'D\');

Output:

A

D

C

B

Because Promise callbacks are microtasks and are processed before
macrotasks.

Real-world impact: Understanding this helps debug race conditions, React
rendering timing issues, and async performance problems.

### Var in Event- Loop

for (var i = 0; i \< 5; i++) {

setTimeout(() =\> console.log(i), 1000);

}

//fix 1 : let

for (let i = 0; i \< 5; i++) {

setTimeout(() =\> console.log(i), 1000);

}

//fix 2 : IIFE

for (var i = 0; i \< 5; i++) {

(function(x){

setTimeout(() =\> console.log(x), 1000);

})(i)

}

//fix 3 : Pass i as an Argument to setTimeout

for (var i = 0; i \< 5; i++) {

setTimeout((x) =\> console.log(x), 1000, i);

}

##  

## 2. What is a Closure?

Answer

A closure is created when an inner function r**etains access to
variables from its outer** lexical scope even after the outer function
has finished execution.

function counter() {

let count = 0;

return function() {

return ++count;

};

}

const increment = counter();

console.log(increment()); // 1

console.log(increment()); // 2

The inner function remembers count.

**Real-world use cases**

-   React hooks

-   Data privacy

-   Memoization

-   Event handlers

-   Factory functions

## 3. Difference Between Deep Copy and Shallow Copy

Answer

Shallow copy copies only the first level.

const user = {

name: \"John\",

address: {

city: \"Pune\"

}

};

const copy = { \...user };

Both objects still share the same nested address.

copy.address.city = \"Mumbai\";

Now original object also changes.

Deep copy creates completely independent objects.

const deepCopy = structuredClone(user);

## 4. Explain this Keyword

Answer

this depends on how a function is called.

const obj = {

name: \"John\",

greet() {

console.log(this.name);

}

};

obj.greet();

Output: John

const fn = obj.greet;

fn();

Output: undefined

Because the function loses its object context.

Ways to control this

fn.call(obj,null);

fn.apply(obj,null);

fn.bind(obj)()

## 5. Implement Debounce

Answer

function debounce(fn, delay) {

let timer;

return (\...args) =\> {

clearTimeout(timer);

timer = setTimeout(() =\> {

fn(\...args);

}, delay);

};

}

Use Cases

-   Search autocomplete

-   API optimization

-   Resize events

-   Scroll events

## 6. Difference Between Debounce and Throttle

Debounce

Executes **afte**r the user stops triggering/events.

Throttle

Executes **every** fixed interval.

Debounce:

-   Search input

Throttle:

-   Scroll tracking

-   Mouse movement

## 7. Explain React Reconciliation

Answer

React uses a Virtual DOM.

When state changes:

1.  New Virtual DOM is created.

2.  React compares old vs new tree.

3.  Computes minimal updates.

4.  Updates actual DOM.

This process is called reconciliation.

Optimization

React uses O(n) diffing instead of O(n³).

Important:

-   Different **element types** create different trees.

-   **Keys** identify stable elements.

## 8. What is React Fiber?

Answer

Fiber is React\'s rendering engine introduced in React 16.

Before Fiber:

Render was synchronous

Cannot pause work

UI could freeze

After Fiber:

Work can be **paused**

Work can be **prioritized**

Work can be **resumed**

Benefits:

-   Concurrent rendering

-   Suspense

-   Transitions

-   Better responsiveness

## 9. React.memo vs useMemo vs useCallback

React.memo : Prevents unnecessary component rendering.

export default React.memo(UserCard);

useMemo : Caches computed values.

const filteredUsers = useMemo(() =\> {

return users.filter(u =\> u.active);

}, \[users\]);

useCallback : Caches function references.

const handleClick = useCallback(() =\> {

saveUser();

}, \[\]);

+------------------------------+---------------------------------------+
| > Tool                       | > Prevents                            |
+==============================+=======================================+
| > React.memo                 | > Component rerender                  |
+------------------------------+---------------------------------------+
| > useMemo                    | > Expensive recalculation             |
+------------------------------+---------------------------------------+
| > useCallback                | > New function creation               |
+------------------------------+---------------------------------------+

## 10. What Causes React Re-renders?

Answer

A component re-renders when:

State changes

Props change

Context changes

Parent rerenders

Solutions:

-   React.memo

-   useMemo

-   useCallback

-   State colocation

11\. Explain useEffect Lifecycle

Answer

useEffect(() =\> {

console.log(\"effect\");

return () =\> {

console.log(\"cleanup\");

};

}, \[count\]);

//Execution:

Initial Render:

effect

Count changes:

cleanup

effect

Unmount:

cleanup

React always executes cleanup before running the next effect.

## 12. How Would You Optimize a Slow React Application?

Answer

### Step 1 : Use React Profiler.

Slow components

Repeated renders

Heavy calculations

### Step 2 Check render counts.

Why-did-you-render - using pacakge

### Step 3 Optimize:

React.memo

useMemo

useCallback

### Step 4 Large Lists

react-window

react-virtualized

Instead of rendering 50,000 rows.

### Step 5 Code Splitting

const Dashboard = React.lazy(() =\>

import(\"./Dashboard\")

);

### Step 6 Bundle Analysis

Identify heavy dependencies.

## 13. Explain React Query (TanStack Query)

Answer

React Query solves server-state management.

Features:

Caching

Background refetch

Pagination

Retry mechanism

Optimistic updates

Deduplication

Example:

const { data } = useQuery({

queryKey: \[\"users\"\],

queryFn: fetchUsers

});:

-   Less Redux code

-   Better performance

-   Automatic synchronization

## 14. How Would You Design a Large-Scale React Application?

Answer

Folder structure:

src/

├── features/

│ ├── users/

│ ├── orders/

│ └── products/

├── shared/

├── services/

├── hooks/

├── routes/

└── store/

Architecture principles:

-   Feature-based structure

-   API abstraction layer

-   Reusable hooks

-   Error boundaries

-   Lazy loading

-   Unit testing

-   Integration testing

## 15. Explain Memory Leaks in JavaScript.

-   Unremoved event listeners

-   Closures retaining references

-   Timers

-   Detached DOM nodes

## 16. Explain React Suspense.

React Suspense is a mechanism that lets **React pause rendering of part
of the UI until some asynchronous requirement is ready**, showing a
fallback UI in the meantime.

## 17. What causes unnecessary re-renders?

\<Child onClick={() =\> doSomething()} /\>

Unnecessary re-renders are commonly caused by creating new function,
object, or array references during each render, parent component
re-renders, context updates, and non-memoized props. In the example:

a new function is created every time the parent renders. Since React
compares props by reference, React.memo sees onClick as changed and
re-renders Child, even though the callback logic is the same. Using
useCallback can provide a stable function reference and help prevent
those extra renders when memoization is beneficial.

## 18. How would you improve performance of a slow React application?

1.  React Profiler

2.  Chrome Performance Tab

3.  Network analysis

4.  Bundle analysis

5.  Memory profiling

## 19. Explain frontend security best practices.

-   XSS

-   CSRF

-   Content Security Policy

-   Token storage

-   Authentication

##  

## React - Concurrent Rendering/ Fiber in React 

Concurrent Rendering is React's ability to **prepare multiple versions
of the UI at the same time and prioritize urgent updates** over less
important ones

Instead of rendering the entire component tree in one blocking
operation,

React can:

-   pause rendering work,

-   resume it later,

-   abandon outdated work,

-   prioritize more important updates,

-   keep the UI responsive during heavy rendering.

Concurrent Rendering Features

**startTransition** : **Marks** **updates** as **non-urgent.**

**useTransition** : is a React hook that improves performance by marking
state updates as non-urgent, preventing UI freezing during heavy
rendering tasks

The main difference between startTransition and useTransition is that
useTransition is a React Hook that provides a pending state, while
startTransition is a standalone function that can be used outside of
components

## React - Why React Needed Fiber 

Before Fiber (React 15 and earlier), React used a stack reconciler:

-   rendering was synchronous,

-   once rendering started, React could not interrupt it,

-   large updates blocked the main thread,

-   animations and user input could lag.

Fiber system:

-   **split** rendering work into chunks,

-   **schedule** work intelligently,

-   **prioritize** urgent updates.

### Rendering Phases in Fiber 

1\. Render Phase (Concurrent / Interruptible)

-   reconciliation phase,

-   diffing phase.

2\. Commit Phase (Synchronous) : React applies changes to the DOM.

> Examples:

-   updating DOM nodes,

-   running layout effects,

-   attaching refs.

Benefits of Fiber + Concurrent Rendering

-   Better Responsiveness

-   Smoother User Experience

-   Smarter Scheduling

-   Better Async Handling

## SSR (Server-Side Rendering) and Hydration in React

Server-Side Rendering (SSR) means rendering React components on the
server and sending the generated HTML to the browser.

Client-Side Rendering (CSR) Server-Side Rendering (SSR)

![](./media/media/image2.png){width="3.3489588801399823in"
height="2.15625in"}![](./media/media/image17.png){width="3.2031255468066493in"
height="2.1770833333333335in"}

![](./media/media/image1.png){width="7.267716535433071in"
height="3.5277777777777777in"}

## What is Hydration? 

-   attaches event listeners,

-   recreates component state,

-   connects React logic to existing HTML.

![](./media/media/image28.png){width="2.9270833333333335in"
height="1.669569116360455in"}![](./media/media/image13.png){width="4.192708880139983in"
height="2.4791666666666665in"}

SSR / SSG

![](./media/media/image15.png){width="2.9218755468066493in"
height="2.520330271216098in"}![](./media/media/image9.png){width="3.369792213473316in"
height="2.34375in"}

## State Management

![](./media/media/image26.png){width="6.442708880139983in"
height="2.9228904199475068in"}

## What Is the Zombie Child Problem? 

![](./media/media/image25.png){width="7.267716535433071in"
height="0.8055555555555556in"}

1.  Store updates

2.  Child subscriber fires first

3.  Child reads stale props/state

4.  Parent later removes child

![](./media/media/image18.png){width="6.59375in"
height="2.5509580052493437in"}

### How React Redux Solved It 

![](./media/media/image16.png){width="7.267716535433071in"
height="3.7222222222222223in"}

![](./media/media/image12.png){width="6.369792213473316in"
height="3.8697681539807522in"}

## Event Loop

![](./media/media/image23.png){width="2.9166666666666665in"
height="2.355573053368329in"}![](./media/media/image20.png){width="2.526042213473316in"
height="2.342884951881015in"}

## Memory Management in JavaScript 

-   allocates memory,

-   uses memory,

-   releases unused memory.

Unlike languages like C/C++, JavaScript has automatic memory management
through Garbage Collection (GC).

But developers still need to understand memory behavior to avoid:

-   memory leaks,

-   performance issues,

-   crashes,

-   excessive GC pauses

### Types of Memory 

1\. Stack Memory

-   primitive values,

-   function calls,

-   execution contexts,

-   references.

Fast and automatically managed.

2\. Heap Memory

-   objects,

-   arrays,

-   functions,

-   closures.

![](./media/media/image19.png){width="6.916666666666667in"
height="3.5715529308836396in"}

### Mark-and-Sweep Algorithm 

Step 1: Mark

GC starts from roots:

-   global variables,

-   stack references.

**Traverses reachable objects.**

![](./media/media/image24.png){width="7.267716535433071in"
height="0.9583333333333334in"}

Step 2: Sweep

**Unmarked objects are removed.**

React Memory Concerns

-   stale subscriptions,

-   uncleaned effects,

-   retained refs,

-   large memoized values,

-   infinite caches.

## JavaScript Engine Optimization (V8) 

Engines like:

-   V8 (Chrome, Node.js)

-   SpiderMonkey (Firefox)

-   JavaScriptCore (Safari)

### What Is V8?

V8 is Google's JavaScript engine used in:

-   Chrome,

-   Node.js,

-   Deno,

-   Electron.

V8 compiles JavaScript directly into machine code.

High-Level Pipeline

![](./media/media/image27.png){width="6.630208880139983in"
height="3.182120516185477in"}

## Monomorphic vs Polymorphic vs Megamorphic

Monomorphic ⇒ Same object shape repeatedly.

Polymorphic =\> Multiple shapes.

Megamorphic =\> Too many shapes.

## 

## CSS-in-JS vs Utility CSS 

CSS-in-JS =\> Styles are written inside JavaScript/TypeScript

Utility CSS =\> Styles are composed using small reusable utility
classes.

## How to Improve Performance in JavaScript and React 

The biggest wins usually come from:

-   Reduce dom access

-   Reduce dom size

-   Reduce use global var

-   reducing unnecessary renders,

-   avoiding wasted computation,

-   minimizing DOM updates,

-   optimizing network/data flow,

-   controlling memory usage.

JavaScript Performance Optimization

1.  Reduce Algorithm Complexity

2.  Avoid Blocking the Main Thread

3.  Minimize DOM Manipulation

4.  Debounce Expensive Events

5.  Throttle Frequent Updates

6.  Avoid Excessive Allocations

7.  Use requestAnimationFrame

8.  Lazy Load Code

9.  Optimize Memory Usage

10. Measure First -\> Never optimize blindly.

##  

## React Performance Optimization 

1.  Prevent Unnecessary Re-renders

2.  Use React.memo

3.  Stable Function References with useCallback

4.  Memoize Expensive Calculations

5.  Avoid State Too High in Tree -\> Keep state close to where used.

6.  Split Components

7.  Virtualize Large Lists -\> react-window / react-virtualized

8.  Use Proper Keys

9.  Avoid Derived State

10. Lazy Load Components

11. Concurrent Features (React 18) =\> startTransition /useTransition

12. Optimize Context Usage

13. Avoid Inline Objects

14. Batch Updates

15. Optimize Network Performance

16. Reduce Bundle Size

17. Avoid Premature Optimization

JavaScript Optimization

Focus on:

-   algorithms,

-   avoiding blocking,

-   minimizing allocations,

-   batching DOM work,

-   lazy loading.

React Optimization

Focus on:

-   reducing renders,

-   memoization,

-   component splitting,

-   virtualization,

-   stable references,

-   proper state structure.

## High-Level Browser Loading Flow 

![](./media/media/image21.png){width="3.807292213473316in"
height="4.245541338582677in"}

## React - React Rendering Flow 

> 1\. Build React element tree
>
> 2\. Create Fiber tree
>
> 3\. Reconciliation
>
> 4\. Generate virtual DOM changes
>
> 5\. Commit Real DOM updates
>
> 6\. Browser paints

Create Element -\> Create Fiber Tree -\> Reconciliation -\> Virtual DOM
Update -\> Real DOM Update -\> Paint

Performance Metrics

![](./media/media/image22.png){width="5.401042213473316in"
height="1.7564993438320209in"}

## React - Common Performance Problems

1\. Large JS Bundles -\> Slow parse/execute.

2\. Render-Blocking CSS -\> Delays paint.

3\. Too Many Network Requests -\> Slower loading.

4\. Heavy React Renders -\> CPU bottlenecks.

5\. Hydration Cost -\> SSR apps still require JS execution.

Optimization Techniques

1.  Code Splitting

2.  Tree Shaking

3.  Caching

4.  Compression

5.  CDN Usage

6.  Lazy Loading

7.  Prefetching

React-Specific Optimizations

-   memoization,

-   virtualization,

-   Suspense,

-   transitions,

-   selective hydration.

That's why modern optimization focuses on:

-   progressive rendering,

-   streaming,

-   partial hydration,

-   reducing JS.

Summary

Browser Responsibilities

-   networking,

-   parsing,

-   layout,

-   painting,

-   event loop management.

JavaScript Responsibilities

-   app logic,

-   rendering coordination,

-   interactivity.

React Responsibilities

-   component rendering,

-   reconciliation,

-   DOM updates,

-   hydration.

## Debounce vs Throttle 

Debounce : \"Wait until user stops triggering events\"

Throttle : \"Run function at most once every X milliseconds\"

Use Cases for Debounce

1.  Search input

2.  Auto-save

3.  Form validation

4.  Resize handling

Use Cases for Throttle

1.  Scroll tracking

2.  Mouse movement

3.  Window resize updates

4.  Infinite scrolling

5.  Game controls

JS Example

Debounce Throttle

![](./media/media/image29.png){width="3.2291666666666665in"
height="5.450605861767279in"}![](./media/media/image6.png){width="3.2343755468066493in"
height="5.59375in"}

React Example

![](./media/media/image14.png){width="2.6354166666666665in"
height="3.415573053368329in"}![](./media/media/image10.png){width="4.369792213473316in"
height="3.53125in"}

## Event Loop in Browser JavaScript vs Node.js 

Browsers =\> manage UI/rendering

Node.js =\> manages servers, files, networking.

Browser vs Node Key Differences

![](./media/media/image11.png){width="6.546875546806649in"
height="2.73919728783902in"}

![](./media/media/image3.png){width="6.671875546806649in"
height="3.5462259405074366in"}

![](./media/media/image5.png){width="4.963542213473316in"
height="2.6145833333333335in"}![](./media/media/image4.png){width="1.59375in"
height="2.5847692475940507in"}

## frontend performance + rendering architecture 

### Q: What is the Critical Rendering Path?

The Critical Rendering Path is the sequence the browser **follows to
convert HTML, CSS, and JavaScript into visible pixels** on the screen.

Q: Why is it important?\
A slower rendering path delays First Paint and Largest Contentful Paint,
hurting user experience and Core Web Vitals.

Q: How do you optimize it?

-   Minimize render-blocking CSS/JS

-   Inline critical CSS

-   Use async/defer for scripts

-   Compress assets

-   Reduce DOM complexity

### Core Web Vitals

**Google's metrics for measuring real-world user experience.**

Main metrics

-   LCP → Loading speed

-   INP (replaced FID) → Interactivity

-   CLS → Visual stability

Q: How do you improve LCP?

-   Optimize images

-   Use CDN

-   Reduce server response time

-   Preload important resources

Q: How do you reduce CLS?

-   Reserve image dimensions

-   Avoid dynamic layout shifts

-   Use stable fonts

##  

### HTTP Caching

Q: What is HTTP caching?\
A mechanism **where browsers or CDNs store responses to avoid repeated
network requests.**

Q: Important cache headers?

-   Cache-Control

-   ETag

-   Expires

-   Last-Modified

Q: Difference between strong and weak caching?

-   Strong caching → Browser serves directly from cache

-   Weak caching → Browser validates with server first

Q: Why is caching important?

-   Faster page loads

-   Reduced bandwidth

-   Lower server load

### Content Negotiation

Q: What is Content Negotiation?\
The **client and server** **decide the best response format** using HTTP
headers.

Examples

-   WebP vs JPEG

-   gzip vs br compression

-   Language localization

Headers involved

-   Accept

-   Accept-Encoding

-   Accept-Language

##  

### Lazy Loading

Q: What is Lazy Loading?\
**Loading resources only when needed instead of during initial page
load.**

Examples

-   Images below the fold

-   Route-based component loading

-   Infinite scrolling

Q: Benefits?

-   Smaller initial bundle

-   Faster first paint

-   Reduced bandwidth usage

React example

const Dashboard = React.lazy(() =\> import(\'./Dashboard\'));

## Phase 2 --- React Performance

Bundle Splitting

Q: What is Bundle Splitting?\
Breaking JavaScript into smaller chunks loaded on demand.

Q: Why use it?

-   Reduces initial JS payload

-   Improves load performance

-   Faster Time to Interactive

Common strategies

-   Route splitting

-   Component splitting

-   Vendor splitting

React example

const Admin = React.lazy(() =\> import(\'./Admin\'));

### Windowing

Q: What is Windowing?\
Rendering only visible items in large lists instead of the entire
dataset.

Q: Why is it needed?\
Rendering thousands of DOM nodes causes:

-   slow rendering

-   memory usage

-   scroll lag

Popular libraries

-   react-window

-   react-virtualized

### Essential State Model

Q: What is the Essential State Model?\
**Store only the minimum required state and derive everything else.**

Bad

const \[fullName, setFullName\] = useState(\'\');

Better

const fullName = firstName + lastName;

Benefits

-   Less bugs

-   Simpler updates

-   Easier debugging

### Reducer Pattern

Q: What is the Reducer Pattern?\
Managing **state transitions through pure functions using actions**.

Q: Why use reducers?

-   Predictable state updates

-   Centralized logic

-   Easier testing

React example

function reducer(state, action) {

switch (action.type) {

case \'increment\':

return { count: state.count + 1 };

default:

return state;

}

}

## Phase 3 --- Rendering Architectures

Server Side Rendering

Q: What is SSR?\
Rendering HTML on the server before sending it to the browser.

Benefits

-   Faster initial load

-   Better SEO

-   Improved social previews

Downside

-   Higher server cost

-   Hydration complexity

Frameworks

-   Next.js

-   Remix

### Rehydration

Q: What is Rehydration/Hydration?\
Attaching JavaScript behavior to server-rendered HTML.

Q: Why is hydration needed?\
SSR sends static HTML first. Hydration makes it interactive.

Problem\
Large hydration cost can slow interactivity.

Modern solution

-   Partial hydration

-   Selective hydration

-   Islands architecture

### Server Side Components

Q: What are Server Components?\
**React components rendered entirely on the server with zero client-side
JS.**

Benefits

-   Smaller bundles

-   Better performance

-   Direct database access

Q: Difference between SSR and Server Components?

-   SSR sends rendered HTML + hydrates JS

-   Server Components may send almost no client JS

Used heavily in

-   Next.js App Router

### Partial Pre-rendering

Q: What is Partial Pre-rendering?\
**Combining static rendering with streamed dynamic** content.

Example

-   Static shell rendered immediately

-   Personalized data streamed later

Benefits

-   Fast startup

-   Dynamic UX

-   Better scalability

## Phase 4 --- Enterprise Scale

### Microfrontends

Q: What are Microfrontends?\
Breaking frontend apps into independently deployable modules owned by
different teams.

Benefits

-   Independent deployments

-   Team autonomy

-   Technology flexibility

Challenges

-   Shared dependencies

-   Design consistency

-   Communication between apps

Common tools

-   Module Federation

-   Single SPA

## Most Asked Senior Frontend Interview Topics (2026)

### 1. Server Side Rendering vs CSR vs SSG

Q: What is CSR (Client-Side Rendering)?

Browser loads minimal HTML and renders UI using JavaScript.

Flow

Browser → JS Bundle → React renders page

Pros

-   Rich interactivity

-   Smooth SPA navigation

-   Less server work

Cons

-   Slow initial load

-   SEO challenges

-   Large JS bundles

Used in

-   Dashboards

-   Internal tools

-   Highly interactive apps

### Q: What is SSR?

Server generates HTML on every request.

Flow

Request → Server renders HTML → Browser hydrates

Pros

-   Better SEO

-   Faster first paint

-   Good for dynamic pages

Cons

-   Higher server cost

-   Hydration overhead

### Q: What is SSG (Static Site Generation)?

HTML is generated at build time.

Flow

Build time → Static HTML → CDN serves instantly

Pros

-   Extremely fast

-   Cheap hosting

-   Excellent caching

Cons

-   Rebuild needed for updates

-   Less dynamic

Q: When to use what?

  -----------------------------------------------------------------------
  Type       Best For
  ---------- ------------------------------------------------------------
  CSR        Dashboards, admin apps

  SSR        E-commerce, SEO-heavy pages

  SSG        Blogs, docs, landing pages
  -----------------------------------------------------------------------

### 2. Rehydration and Hydration Bottlenecks

Q: What is Hydration?

Hydration attaches JavaScript behavior to server-rendered HTML.

Example

Server sends:

\<button\>Buy\</button\>

Hydration adds:

-   click handlers

-   React state

-   event listeners

### Q: What are hydration bottlenecks?

Common problems

-   Huge JS bundles

-   Too many components

-   Blocking hydration

-   CPU-heavy rendering

Symptoms

-   UI visible but unusable

-   Delayed interaction

-   Mobile lag

Q: Solutions?

-   Code splitting

-   Partial hydration

-   Selective hydration

-   React Server Components

-   Streaming SSR

Q: Difference between Client and Server Components?

  ------------------------------------------------------------------------
  Feature                Server Component          Client Component
  ---------------------- ------------------------- -----------------------
  Runs on                Server                    Browser

  JS sent to client      Minimal                   Full

  Can use hooks          No                        Yes

  Can access DB          Yes                       No
  ------------------------------------------------------------------------

### 4. Bundle Splitting / Bundle Optimization

Q: What is bundle optimization?

Reducing JavaScript payload size and execution cost.

### Q: Common optimization techniques?

Code Splitting

const Admin = React.lazy(() =\> import(\'./Admin\'));

Tree Shaking

Remove unused code during build.

Compression

-   gzip

-   brotli

Dynamic Imports

Load only when needed.

### Q: Why is large JS harmful?

Large bundles increase:

-   parse time

-   compile time

-   hydration delay

-   memory usage

5\. Core Web Vitals Optimization

Q: What are the main Core Web Vitals?

  -----------------------------------------------------------------------
  Metric                                 Measures
  -------------------------------------- --------------------------------
  LCP(Large Content full Paint)          Loading performance

  INP(Interaction to Next Paint)         Interactivity

  CLS(Cumulative Layout Shift)           Visual stability
  -----------------------------------------------------------------------

Q: How to improve LCP?

-   Optimize images

-   Use CDN

-   Preload important assets

-   Reduce render blocking

Q: How to improve INP?

-   Reduce JS execution

-   Split heavy tasks

-   Avoid unnecessary rerenders

Q: How to improve CLS?

-   Set image dimensions

-   Avoid layout jumps

-   Reserve space for ads/components

6\. HTTP Caching Strategies

Q: What is caching?

**Storing responses closer to users to avoid repeated
computation/network calls.**

Q: Types of caching?

  -----------------------------------------------------------------------
  Type                             Description
  -------------------------------- --------------------------------------
  Browser Cache                    Stored in browser

  CDN Cache                        Stored at edge servers

  Memory Cache                     Server-side RAM cache

  Service Worker Cache             Offline/PWA caching
  -----------------------------------------------------------------------

Q: Important headers?

Cache-Control: max-age=3600

ETag: abc123

Q: What is stale-while-revalidate?

Serve stale cached content while fetching fresh data in the background.

7\. Windowing / Virtualization

Q: What is virtualization?

Rendering only visible list items instead of the full dataset.

Q: Why is it important?

Rendering 10,000 DOM nodes causes:

-   slow rendering

-   memory pressure

-   laggy scrolling

Q: Popular libraries?

-   react-window

-   react-virtualized

Q: How does it work?

A scrolling container dynamically mounts/unmounts visible rows.

Q: Difference between repaint and reflow?

  -----------------------------------------------------------------------
  Type                           Meaning
  ------------------------------ ----------------------------------------
  Repaint                        Visual update only

  Reflow/Layout                  Recalculate positions/sizes
  -----------------------------------------------------------------------

Reflow is more expensive.

Recommendation

-   Static or infrequently updated progress bars: width is perfectly
    > fine and easier to understand.

-   Highly animated or performance-sensitive UI: transform: scaleX() is
    > usually the better choice.

-   translateX() is generally for moving an element, not for showing
    > progress growth. For progress bars, scaleX() is usually the
    > transform equivalent of changing width.

### Q: What causes layout thrashing?

Repeated DOM reads/writes causing forced synchronous layouts.

### 9. CDN and Edge Rendering

Q: What is a CDN?

A **distributed network serving assets closer to users** geographically.

Q: Benefits?

-   Lower latency

-   Faster static delivery

-   Reduced server load

### Q: What is edge rendering?

**Rendering content** **near** the user using edge servers.

Popular platforms

-   Cloudflare

-   Vercel

-   Netlify

### Q: Why edge rendering matters?

Improves:

-   TTFB

-   personalization speed

-   global performance

### 10. State Architecture Patterns

Q: What is good state architecture?

Managing state predictably while minimizing unnecessary updates.

### Q: Common state categories?

  -----------------------------------------------------------------------
  State Type                               Example
  ---------------------------------------- ------------------------------
  Local UI State                           Modal open

  Server State                             API data

  Global State                             Auth/theme

  Derived State                            Computed values
  -----------------------------------------------------------------------

### Q: Important principles?

-   Keep state minimal

-   Avoid duplication

-   Prefer derived values

-   Colocate state near usage

### Q: Popular patterns/tools?

-   Context API

-   Reducer Pattern

-   Redux Toolkit

-   Zustand

-   React Query / TanStack Query

Q: Difference between server state and client state?

+----------------------------+-----------------------------------------+
| > Server State             | > Client State                          |
+============================+=========================================+
| > Comes from API           | > Local UI data                         |
+----------------------------+-----------------------------------------+
| > Async                    | > Usually synchronous                   |
+----------------------------+-----------------------------------------+
| > Cached/refetched         | > Controlled locally                    |
+----------------------------+-----------------------------------------+

## 

## Javascript - Garbage Collector

"JavaScript GC mainly uses a **mark-and-sweep** algorithm. It starts
from roots like global scope, stack, closures, timers, and listeners,
**marks reachable objects**, and **removes unreachable ones.** Modern
engines like V8 optimize this with generational, incremental, and
concurrent garbage collection to reduce pauses and improve performance."

One-Line Summary

GC in JavaScript works by tracking object reachability and automatically
removing memory that is no longer reachable from roots

Javascript - Memory leak

Most JS memory leaks come from retained references rather than manual
allocation. Common causes are detached DOM nodes, uncleaned event
listeners, long-lived closures, intervals, and unbounded caches. I
usually debug using Chrome DevTools Heap Snapshots and Allocation
Timeline to identify growing retained objects or detached DOM trees. In
React apps, I especially check useEffect cleanups, subscriptions, and
timers.

##  

## React- Performance Measure

-   **Google Chrome Performance tab** → Records runtime performance
    > (CPU, rendering, scripting, painting, network) to find UI lag,
    > long tasks, re-renders, layout shifts, and bottlenecks.

-   **Lighthouse** → An automated auditing tool that scores and analyzes
    > performance, accessibility, SEO, best practices, and Core Web
    > Vitals for a web app.

-   **Bundle Analyzer** → Visualizes JavaScript bundle size (which
    > package/file contributes how much) to detect bloated dependencies
    > and optimize bundle splitting.

-   **React DevTools React Profiler** → Measures React component render
    > performance to show which components re-rendered, why, and how
    > long rendering took.

-   **Web Vitals** → A set of user-centric performance metrics (like
    > LCP, INP, CLS) that measure real-world loading speed,
    > responsiveness, and visual stability.

-   **Flamegraphs** → A stacked visual timeline showing where execution
    > time is spent in functions/components, helping identify
    > performance hotspots.

Easy mental model for interviews

-   Chrome Performance tab → "What is slowing the browser?"

-   Lighthouse → "How healthy is my app overall?"

-   Bundle Analyzer → "What is making my JS bundle heavy?"

-   React Profiler → "Which React components are slow/re-rendering?"

-   Web Vitals → "How do users experience performance?"

-   Flamegraphs → "Where exactly is time being spent?

## React - Context API issue

"Context becomes problematic when it's used for frequently changing or
large shared state because every context update triggers rerenders for
all consumers. It's ideal for stable global concerns like auth or
theming, but for hot updates or complex state I prefer splitting
contexts, memoizing provider values, or using dedicated state management
like Zustand or Redux. I usually confirm issues with React Profiler."

A strong follow-up answer:

"Context is dependency injection, not full state management."

## Typescript - 

### Generic 

Generics allow us to write reusable, type-safe abstractions where the
type is determined at usage time. Instead of losing safety with any,
generics preserve the relationship between input and output types. I
commonly use them in reusable utilities, API response models, hooks, and
safe object access with keyof constraints."

One-line memory trick

Generics = **reusable code with preserved types**

### any /unknow

"any disables TypeScript type safety entirely, so anything can be
accessed or assigned and errors move to runtime. unknown is the
type-safe alternative---it represents an unknown value and forces
narrowing or validation before use. I prefer unknown for external data
like APIs or JSON because it prevents unsafe assumptions."

One-line memory trick

any → skip checking

unknown → check before use

### Interface/Type

"Both interface and type can **model object shapes**, but interface is
better for extensibility and declaration merging, while type is more
flexible for unions, primitives, tuples, mapped and conditional types.
In practice, I use interface for public object contracts and type for
advanced type composition."

One-line memory trick

interface = objects + extensibility + merging

type = flexibility + advanced TS

## Suspense and lazy loading.

> React.lazy() enables code-splitting by loading components on demand
>
> Suspense provides a fallback UI while those async components are
> loading.
>
> React.lazy() enables code splitting by dynamically importing
> components so their JavaScript loads only when needed, improving
> initial bundle size. Suspense acts as a rendering boundary and shows
> fallback UI while async components load. I usually apply it at route
> or heavy-component level, but avoid overusing it for tiny shared
> components because extra network requests can outweigh benefits."

Think:

lazy() = delay loading JS

Suspense = loading boundary

## Frontend Design- 

### Design frontend architecture for a scalable e-commerce platform

1.  Architecture style

2.  Folder/module structure

3.  State management

4.  Rendering strategy (SSR/CSR/SSG)

5.  Performance

6.  API/data layer

7.  Reliability & observability

8.  Security

9.  Team scalability

Senior-Level Interview Answer (2 min)

"For a scalable e-commerce frontend, I'd use a feature-based modular
architecture with clear domain boundaries like catalog, cart, checkout,
and auth. I'd use a hybrid rendering strategy---SSR/ISR for SEO-critical
product pages and CSR for authenticated areas. Server state would be
handled with TanStack Query and lightweight client state with Zustand or
Redux, avoiding Context for frequently changing data. I'd invest heavily
in performance through code splitting, CDN image optimization, caching,
and Core Web Vitals monitoring. Finally, I'd add observability, feature
flags, strong testing, and an API abstraction layer to support long-term
team scalability and reliability."

### Production page suddenly becomes slow after release

I'd first determine whether the issue is frontend, backend, rendering,
or network related using production telemetry and Core Web Vitals. Since
it started after a release, I'd treat it as a regression, compare
release diffs, and quickly mitigate through rollback or feature flags if
impact is high. Then I'd reproduce using production builds, profile with
Chrome Performance and React Profiler, inspect bundle size, third-party
scripts, API timings, and memory behavior. If it only happens in
production, I'd use source maps, RUM data, throttling, and production
traces because local dev often hides real-world conditions.

## Behaviour - How do you mentor junior engineers?

"I mentor junior engineers by focusing on both technical skills and
engineering judgment. I use code reviews and pairing to teach
problem-solving, tradeoffs, debugging, and system thinking rather than
just giving solutions. I gradually increase ownership, provide
architectural context, and create an environment where asking questions
is encouraged. My goal is to help them become independent engineers who
can reason through problems confidently."

1.  Build Problem-Solving, Not Dependency

2.  Pair Programming + Code Reviews

3.  Give Progressive Ownership

4.  Share Context, Not Just Tasks

5.  Create Psychological Safety

"A junior engineer was struggling with performance issues in a React
screen. Instead of rewriting it for them, I paired with them using
profiling tools, walked through rerender analysis, and asked them to
propose optimizations. Over time they became comfortable debugging
independently and later helped others on similar issues."

## One to One

### 1, What is the biggest challenge you face and how to resolve it in your project?

When we migrated the e-commerce application from Angular to React, one
of the biggest performance issues was that the product listing page
(around 3,000 products) was rendering all items at once, and every
filter interaction caused unnecessary rerenders.

Using React DevTools Profiler, we observed that when a filter state
changed in the parent component, the entire product list subtree
rerendered. The flamegraph showed that each ProductCard was being
rendered again even when its data didn't change.

This happened because:

-   The parent component rerendered on every filter update

-   It was passing props like inline functions and derived objects

-   React performs shallow comparison, so new references broke
    > memoization

For example, we had patterns like:

-   inline callbacks for actions like onAddToCart

-   derived filter arrays recreated on every render

To fix this:

1.  We wrapped ProductCard with React.memo so it would skip rerenders
    > when props didn't change.

2.  We stabilized callback references using useCallback, so function
    > identity remained consistent across renders.

3.  We also ensured we weren't creating new objects/arrays unnecessarily
    > inside render.

4.  Finally, for the large dataset (3,000 products), we implemented list
    > virtualization so only visible items in the viewport were
    > rendered.

This reduced unnecessary DOM nodes significantly and improved initial
render time and scroll performance.

We validated improvements using React Profiler, where we saw reduced
commit time and fewer rerenders per interaction

### 2. When can these optimizations actually make performance worse instead of better?

Yes --- we should not blindly use React.memo and useCallback everywhere.

The main reason is that these optimizations themselves have a cost. For
example,

React.memo performs a shallow comparison of props on every render. If
the component is simple or cheap to render, this comparison cost can
actually be higher than just rerendering the component.

Similarly, useCallback and useMemo add overhead because React has to
store previous references and compare dependencies on every render. So
they only make sense when referential equality actually matters --- for
example when passing props to memoized child components or when
preventing expensive recalculations.

In our case, we used them selectively:

-   React.memo for heavy ProductCard components

-   useCallback for stable event handlers passed deep into the tree

-   avoided memoization for simple UI components where rerender cost was
    > negligible

We validated this using React Profiler --- in some cases removing memo
actually improved performance because the memo comparison overhead was
not worth it.

The real cost is:

-   extra comparison work (shallow compare)

-   loss of readability

-   accidental misuse preventing optimizations

-   sometimes *worse performance due to memo overhead*

### 3. Can you give me a real example where using React.memo or useCallback made performance worse or was unnecessary?

"Yes, there are real cases where React.memo, useCallback, and useMemo
can actually hurt performance or become unnecessary overhead.

A simple example is using React.memo on small or cheap components, like
a button or a simple counter display. In such cases, React's shallow
comparison adds more cost than just rerendering the component.

But in real production scenarios, I've seen more subtle issues.

For example, we once added useCallback across many event handlers in a
form-heavy page. Initially we assumed it would improve performance, but
React Profiler showed no meaningful reduction in rerenders. Instead, it
added complexity and dependency tracking overhead, and in some cases
caused stale closures because dependencies were incorrectly managed.

Another issue is with React.memo where props were still changing
reference identity --- like passing inline objects or derived arrays. In
those cases, memoization was effectively useless, because shallow
comparison always failed. So we were paying the cost of memo check
without any benefit.

So the key learning is:\
We only use these optimizations when profiler shows a real bottleneck
--- especially in cases like large lists, expensive renders, or deeply
nested component trees.

Otherwise, unnecessary memoization increases complexity, makes debugging
harder, and sometimes even reduces performance."

### 4. Can you explain a real production bug caused by stale closures in React hooks, and how you would debug and fix it?

Yes, stale closure issues commonly appear in debounce or async API
scenarios.

For example, in a search input, we implemented a debounce function to
call an API after the user stops typing. Inside the debounced function,
we were using a state value like searchTerm.

The issue was that the debounced function captured an older version of
searchTerm due to closure behavior. So when the API call finally
executed, it sometimes used a stale value instead of the latest input.

This caused inconsistent UI behavior --- for example:

-   user types "iph"

-   then quickly types "iphone"

-   API request still uses "iph"

-   and results displayed were outdated or flickering

To fix this, we used a combination of:

-   passing the latest value directly into the debounce function instead
    > of relying on closure state

-   and using useRef to always hold the latest value when needed inside
    > async callbacks

-   in some cases, we also used AbortController to cancel previous
    > requests so outdated responses don't overwrite newer ones

So the key fix is: don't rely on stale captured state inside async or
delayed functions --- always ensure you're referencing the latest value
explicitly or cancel outdated operations."

### 5. In React, what is the difference between:

-   fixing stale closures using useRef\
    > vs

-   fixing it by adding dependencies in useCallback

  ------------------------------------------------------------------------
  Concept           useCallback                  useRef
  ----------------- ---------------------------- -------------------------
  Purpose           memoize function             store mutable value

  Causes rerender?  no (but dependency changes   no
                    function)                    

  Fixes stale       indirectly via dependencies  directly (always latest
  closure?                                       value)

  Best use case     pure functions depending on  async/debounce/event
                    state                        handlers
  ------------------------------------------------------------------------

In practice, I use useCallback when I want React to manage correctness
via dependency tracking. I use useRef when I want to bypass closure
issues and always access the latest value in asynchronous flows like
debounce, intervals, or event listeners.

## Micro Service vs Micro Frontend 

+------------+-----------------------+--------------------------------+
| > Aspect   | Microservices         | Micro Frontends                |
+============+=======================+================================+
| Purpose    | Backend architecture  | Frontend architecture          |
+------------+-----------------------+--------------------------------+
| Scope      | Break backend into    | Break frontend into            |
|            | independent services  | independent apps/modules       |
+------------+-----------------------+--------------------------------+
| Team       | Backend/domain teams  | Frontend/domain teams          |
| ownership  |                       |                                |
+------------+-----------------------+--------------------------------+
| Deployment | Independently         | Independently deployable       |
|            | deployable backend    | frontend features              |
|            | services              |                                |
+------------+-----------------------+--------------------------------+
| Com        | API, gRPC, events,    | Module federation, shared      |
| munication | messaging             | packages, APIs                 |
+------------+-----------------------+--------------------------------+
| Example    | cart-service,         | cart app, product app,         |
|            | payment-service       | checkout app                   |
+------------+-----------------------+--------------------------------+

## 

## What is Source Map in React?

Source maps are files that map minified production bundles back to
original source code. They help debug production issues by translating
stack traces from bundled JS to actual React components and line
numbers. In production, I prefer not exposing them publicly but
uploading them securely to monitoring systems like Sentry for debugging

In React production builds, code gets:

-   minified

-   bundled

-   transpiled (modern JS → browser-compatible JS)

Without source maps, production stack traces are hard to debug.

## What is Webpack?

Webpack is a **module bundler** that takes application code and assets
(JavaScript, TypeScript, CSS, images, fonts, etc.) and bundles them into
optimized files for the browser.

Browsers do not naturally understand:

-   TypeScript

-   JSX

-   Sass/SCSS

-   module transformations

-   advanced optimizations

Webpack helps by:

-   bundling modules

-   transpiling code

-   optimizing assets

-   code splitting

-   tree shaking

-   dependency management

## Difference between Bundling and Tree Shaking in Webpack

-   Bundling means:

> Combining application modules and dependencies into browser-consumable
> files.
>
> Webpack starts from an entry point, builds a dependency graph, and
> packages code together.

-   Tree shaking means

> Removing unused code from the final bundle.

## Redux Tool Kit

What is Redux Toolkit?

-   Redux Toolkit (RTK) is the official recommended way to write Redux
    > logic.

-   It simplifies Redux setup and reduces boilerplate code.

-   Comes with built-in best practices.

Official package:\
\@reduxjs/toolkit

1\. Store

-   configureStore() replaces old createStore()

-   Automatically adds:

    -   Redux DevTools

    -   thunk middleware

    -   good default settings

![](./media/media/image7.jpg){width="6.223958880139983in"
height="2.1336472003499565in"}

2\. Slice

A slice contains:

-   state

-   reducers

-   actions

![](./media/media/image8.jpg){width="6.744792213473316in"
height="5.0491032370953635in"}❓ Why can we mutate state directly in
RTK?

Because RTK uses Immer.js internally, which converts mutable code into
immutable updates.

3\. Reducer

Reducer updates state based on action.

Reducers must be:

-   pure functions

-   predictable

-   synchronous

4\. Action

Action describes what happened.

5\. useSelector & useDispatch

useSelector -\> Reads data from store.

useDispatch-\> Dispatches actions.

6\. Async Operations --- createAsyncThunk

Used for API calls.

7\. extraReducers

Handles async states:

-   pending

-   fulfilled

-   rejected

8\. RTK Query (Very Important)

RTK Query is used for:

-   API fetching

-   caching

-   automatic refetching

Benefits

-   removes manual API state handling

-   caching support

-   loading/error states built-in

Interview Question

### ❓ Difference between createAsyncThunk and RTK Query?

+---------------------------------------+------------------------------+
| > createAsyncThunk                    | > RTK Query                  |
+=======================================+==============================+
| > Manual API handling                 | > Automatic                  |
+---------------------------------------+------------------------------+
| > Need reducers                       | > Minimal code               |
+---------------------------------------+------------------------------+
| > Good for complex logic              | > Best for API fetching      |
+---------------------------------------+------------------------------+
| > No caching                          | > Built-in caching           |
+---------------------------------------+------------------------------+

###  

### JS - Difference Between for\...in and for\...of in JavaScript

1\. for\...in

Used to iterate over **keys / indexes / properties**.

2\. for\...of

Used to iterate **over values.**

Works on:

-   Arrays

-   Strings

-   Maps

-   Sets

-   Iterables

> Important Difference

+------------------------+----------------------+---------------------+
| > Feature              | > for\...in          | > for\...of         |
+========================+======================+=====================+
| > Returns              | > keys/indexes       | > values            |
+------------------------+----------------------+---------------------+
| > Mostly used for      | > objects            | > arrays/iterables  |
+------------------------+----------------------+---------------------+
| > Works on objects     | > ✅                 | > ❌                |
+------------------------+----------------------+---------------------+
| > Works on arrays      | > ✅                 | > ✅                |
+------------------------+----------------------+---------------------+
| > Use case             | > object properties  | > array values      |
+------------------------+----------------------+---------------------+

## In React, state updates are asynchronous and may be batched together.

If count = 0 and you do this:

setCount(count + 1);

setCount(count + 1);

Both lines use the same old value of count (0).

So React sees:

setCount(1);

setCount(1);

Final output:

count = 1

To correctly increment twice, use the functional update form:

setCount((prev) =\> prev + 1);

setCount((prev) =\> prev + 1);

Now React processes them sequentially:

1.  0 → 1

2.  1 → 2

Final output:

count = 2

## Memory Leak

-   In JavaScript, memory leaks usually happen because objects are still
    > referenced and cannot be garbage collected---common reasons are

-   event listeners,

-   closures,

-   timers,

-   detached DOM nodes,

-   global variables,

-   subscriptions, and

-   large caches.

In React, leaks mostly occur when

-   useEffect resources are not cleaned up during unmount,

-   such as intervals,

-   API requests,

-   event listeners,

-   WebSockets, or subscriptions.

I usually debug using Chrome DevTools heap snapshots, performance memory
profiling, and React profiler to identify retained objects and
increasing heap usage.

## React Interview Question   

### Type of component

| Component Type | Definition | State | Hooks | Optimization |
|---------------|------------|-------|-------|--------------|
| Functional Component | Function that returns JSX | ✅ Yes | ✅ Yes | `React.memo()` |
| Class Component | ES6 class extending `React.Component` | ✅ Yes | ❌ No | `shouldComponentUpdate()` |
| Pure Component | Class extending `React.PureComponent` | ✅ Yes | ❌ No | Automatic shallow comparison |
| Higher-Order Component (HOC) | Function that takes a component and returns an enhanced component | Depends | Depends | Code reuse |

### Interview Answer (30 Seconds)

- **Functional Components** are JavaScript functions that return JSX and use Hooks for state and lifecycle features.
- **Class Components** are ES6 classes extending `React.Component` that manage state using lifecycle methods.
- **Pure Components** extend `React.PureComponent` and prevent unnecessary re-renders by performing a shallow comparison of props and state.
- **Higher-Order Components (HOCs)** are functions that take a component as input and return a new enhanced component with additional functionality, enabling code reuse.
- 
# Controlled vs Uncontrolled Components

| Controlled Component         | Uncontrolled Component                            |
| ---------------------------- | ------------------------------------------------- |
| React controls the form data | DOM controls the form data                        |
| Uses `useState`              | Uses `useRef`                                     |
| Value stored in React state  | Value stored in DOM                               |
| Re-renders on every change   | No re-render while typing                         |
| Easy validation              | Validation is manual                              |
| Recommended for most forms   | Good for simple forms or third-party integrations |

## What is Webpack?

Webpack is a module bundler.

It bundles:

-   JS

-   CSS

-   Images

-   Fonts

-   SVG

-   JSON

## Why do we need Webpack?

-   Bundling

-   Tree shaking

-   Code splitting

-   Minification

-   Hot Reload

-   Asset optimization

## Explain entry.

Starting point of the application.

```javascript
    entry: \"./src/index.js\"
```

## Explain output.

Where bundles are generated.
```javascript
output: {
    filename: \"bundle.js\"
}
```

##  What are Loaders?

Loaders **transform non-JavaScript files**.

Examples:

-   babel-loader

-   css-loader

-   style-loader

-   file-loader

-   ts-loader

## What are Plugins?

Plugins perform build tasks.

Examples:

-   HtmlWebpackPlugin

-   MiniCssExtractPlugin

-   DefinePlugin

-   CleanWebpackPlugin

## Difference between Loader and Plugin?

| **Loader**                                       | **Plugin**                              |
| ------------------------------------------------ | --------------------------------------- |
| Transforms files                                 | Extends Webpack functionality           |
| Runs on individual files                         | Runs during the overall build process   |
| Converts one file type to another                | Performs build-level tasks              |
| Works before bundling                            | Works before, during, or after bundling |
| Configured in `module.rules`                     | Configured in `plugins`                 |
| Examples: `babel-loader`, `css-loader`, `style-l |                                         |


## What is Tree Shaking?

Removes unused code.

```javascript
Example:

export const add = () =\> {}
export const sub = () =\> {}
import { add } from \"./math\";

```
Only add is included in the production bundle if tree shaking is
enabled.

##  What is Code Splitting?

Splits bundles into smaller chunks.

```javascript
    const Home = React.lazy(() =\> import(\"./Home\"));
```
Benefits:
-   Faster loading
-   Smaller initial bundle
-   Better performance

## What is Lazy Loading?

Loads components only when needed.

```javascript
    const Dashboard = React.lazy(() =\> import(\"./Dashboard\"));
```

## What is Hot Module Replacement (HMR)?

Updates changed modules without refreshing the whole page.

Benefits:
-   Preserves component state
-   Faster development

## What is Babel?

Babel converts modern JavaScript into code that older browsers can
understand.

Example:
```javascript
    const add = (a, b) =\> a + b;
```
is transformed into ES5-compatible JavaScript.

## What is Source Map?

Maps bundled(production) code back to the original source.

- Useful for debugging.

## Explain Webpack build modes.

- development
- production
- none

Production mode enables:
-   Minification
-   Tree shaking
-   Optimizations

## What is webpack-dev-server?

A development server that provides:

-   Live reload
-   Hot Module Replacement
-   Faster local development



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

# Explain React Reconciliation

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

# What is React Fiber?

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

# `React.memo` vs `useMemo` vs `useCallback`

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

#  What Causes React Re-renders?

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

#  `useEffect` Lifecycle

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


#  Explain React Query (TanStack Query)

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

# Explain React Suspense

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

# What Causes Unnecessary Re-renders?

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

# How Would You Improve Performance of a Slow React Application?

## Investigation Order

1. React DevTools Profiler
2. Chrome Performance Tab
3. Network analysis
4. Bundle analysis
5. Memory profiling

Optimize only after identifying the actual bottleneck.

---

# Frontend Security Best Practices

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

## Render Phase (Interruptible)

Performs:

- Reconciliation
- Diffing

Can be paused.

---

## Commit Phase (Synchronous)

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

# Most Asked Senior Frontend Interview Topics (2026)

---

# CSR vs SSR vs SSG

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

# Hydration and Hydration Bottlenecks

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

Bundle optimization reduces JavaScript download size, parsing time, and execution cost using techniques such as code splitting, tree shaking, compression, caching, and lazy loading, resulting in faster page loads and better Core Web Vitals.

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

# Core Web Vitals Optimization

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

> Core Web Vitals measure loading (LCP), responsiveness (INP), and visual stability (CLS). Improving them leads to faster, smoother, and more stable user experiences.

---

# HTTP Caching Strategies

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

# Windowing (Virtualization)

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

**Reflow** is significantly **more expensive** than **repaint.**

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


# CDN and Edge Rendering

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

# State Architecture Patterns

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

## What are the important state management principles?

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

# Can you give a real example where using React.memo or useCallback made performance worse or was unnecessary?

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

##  React.memo on Cheap Components

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

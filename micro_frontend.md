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



## Can different React versions work?

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

## Explain Module Federation configuration.

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


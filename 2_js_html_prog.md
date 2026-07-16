# JavaScript DOM Interview Programs

A collection of commonly asked JavaScript DOM interview programs with complete source code.

---

## 📚 Table of Contents

| No | Topic | Link |
|----|-------|------|
| 1 | Todo App | [Go](#1-todo-app---javascript) |
| 2 | Search Product by Name | [Go](#2-search-product-by-name) |
| 3 | Product Data with Pagination | [Go](#3-product-data-with-pagination) |
| 4 | Load More Data | [Go](#4-load-more-data) |
| 5 | Center Div | [Go](#5-center-div) |
| 6 | Load More Data (Limit 100) | [Go](#6-load-more-data-with-limit-100) |
| 7 | Product Search with Categories | [Go](#7-product-search-with-categories) |
| 8 | Progress Bar |  [Go](#8-progress-bar) |
| 9 | Debounced Search in JavaScript |  [Go](#9-debounce) |
| 10 | Todo Cards by User |  [Go](#10-todo-card) |

---

# 1. Todo App - JavaScript

## Features

- Add Todo
- Delete Todo
- Complete / Undo Todo
- Press **Enter** to Add Todo
- Empty State Message
- Pure HTML, CSS & JavaScript

---

## Source Code

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Todo App</title>

    <style>
      body {
        font-family: Arial, sans-serif;
        background: #f5f5f5;
        padding: 30px;
      }

      .root {
        width: 450px;
        margin: auto;
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 6px rgba(0,0,0,.2);
      }

      input {
        width: 70%;
        padding: 10px;
        font-size: 16px;
      }

      button {
        padding: 10px 14px;
        cursor: pointer;
        margin-left: 5px;
      }

      ul {
        list-style: none;
        padding: 0;
        margin-top: 20px;
      }

      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
      }

      .completed {
        text-decoration: line-through;
        color: gray;
      }

      .actions button {
        margin-left: 5px;
      }

      .empty {
        color: gray;
        text-align: center;
        margin-top: 20px;
      }
    </style>
  </head>

  <body>
    <div class="root">
      <input id="todo" type="text" placeholder="Enter todo..." />
      <button id="add-todo">Add Todo</button>

      <ul id="todos"></ul>
    </div>

    <script>
      const todos = [];

      const todoInput = document.getElementById("todo");
      const btnAdd = document.getElementById("add-todo");
      const list = document.getElementById("todos");

      function renderTodo() {
        list.innerHTML = "";

        if (todos.length === 0) {
          list.innerHTML = "<p class='empty'>No todos available.</p>";
          return;
        }

        todos.forEach((todo, index) => {
          const li = document.createElement("li");

          li.innerHTML = `
            <span class="${todo.completed ? "completed" : ""}">
              ${todo.text}
            </span>

            <div class="actions">
              <button onclick="markTodo(${index})">
                ${todo.completed ? "Undo" : "Complete"}
              </button>

              <button onclick="deleteTodo(${index})">
                Delete
              </button>
            </div>
          `;

          list.appendChild(li);
        });
      }

      function addTodo() {
        const value = todoInput.value.trim();

        if (!value) {
          alert("Please enter a todo.");
          return;
        }

        todos.push({
          text: value,
          completed: false,
        });

        todoInput.value = "";
        todoInput.focus();

        renderTodo();
      }

      function markTodo(index) {
        todos[index].completed = !todos[index].completed;
        renderTodo();
      }

      function deleteTodo(index) {
        todos.splice(index, 1);
        renderTodo();
      }

      btnAdd.addEventListener("click", addTodo);

      todoInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          addTodo();
        }
      });

      renderTodo();
    </script>
  </body>
</html>
```

---

## Output

- Add new todo
- Complete / Undo todo
- Delete todo
- Empty state when no todos exist

---

---

# 2. Search Product by Name

## Features

- Search products by name
- Debouncing (500ms)
- API Integration using Fetch
- Loading state
- Error handling
- In-memory caching
- Displays "No products found" message
- Pure HTML, CSS & JavaScript

---

## Source Code

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Search Products</title>

    <style>
      body {
        font-family: Arial, sans-serif;
        background: #f5f5f5;
        padding: 40px;
      }

      .root {
        width: 400px;
        margin: auto;
      }

      input {
        width: 100%;
        padding: 10px;
        font-size: 16px;
        box-sizing: border-box;
      }

      ul {
        list-style: none;
        padding: 0;
        margin-top: 15px;
      }

      li {
        background: white;
        padding: 12px;
        margin-bottom: 8px;
        border: 1px solid #ddd;
        border-radius: 5px;
      }

      .loading {
        margin-top: 10px;
        color: blue;
      }

      .error {
        margin-top: 10px;
        color: red;
      }
    </style>
  </head>

  <body>
    <div class="root">
      <input
        id="search"
        type="text"
        placeholder="Search products..."
      />

      <div id="status"></div>

      <ul id="search-list"></ul>
    </div>

    <script>
      const input = document.getElementById("search");
      const list = document.getElementById("search-list");
      const status = document.getElementById("status");

      let timer;
      const cache = {};

      function render(items) {
        list.innerHTML = "";

        if (items.length === 0) {
          list.innerHTML = "<li>No products found.</li>";
          return;
        }

        items.forEach((item) => {
          const li = document.createElement("li");

          li.innerHTML = `
            <strong>${item.title}</strong><br>
            Price: $${item.price}
          `;

          list.appendChild(li);
        });
      }

      async function searchResult(query) {
        if (query in cache) {
          render(cache[query]);
          return;
        }

        status.textContent = "Loading...";

        try {
          const response = await fetch(
            `https://dummyjson.com/products/search?q=${encodeURIComponent(
              query
            )}`
          );

          if (!response.ok) {
            throw new Error("Failed to fetch products");
          }

          const data = await response.json();

          cache[query] = data.products;

          render(data.products);

          status.textContent = "";
        } catch (err) {
          console.error(err);

          status.textContent = "Something went wrong.";
          status.className = "error";
        }
      }

      function search(event) {
        const value = event.target.value.trim();

        clearTimeout(timer);

        if (!value) {
          list.innerHTML = "";
          status.textContent = "";
          return;
        }

        timer = setTimeout(() => {
          searchResult(value);
        }, 500);
      }

      input.addEventListener("input", search);
    </script>
  </body>
</html>
```

---

## Concepts Covered

- DOM Manipulation
- Event Handling (`input`)
- Debouncing
- Fetch API
- Async/Await
- Error Handling (`try...catch`)
- API Response Parsing
- Object Caching
- Template Literals
- Conditional Rendering

---

## Output

- Search products by typing in the input field
- API call after **500ms** of inactivity (Debounce)
- Cached results prevent duplicate API requests
- Loading indicator while fetching data
- Error message if API request fails
- Displays matching products with **Title** and **Price**
- Shows **"No products found"** when no matching results are available

---


---

# 3. Product Data with Pagination

## Features

- Fetch products from REST API
- Client-side pagination
- Previous / Next navigation
- Loading indicator
- Error handling
- Disable buttons on first and last page
- Dynamic page information
- Pure HTML, CSS & JavaScript

---

## Source Code

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Products with Pagination</title>

    <style>
      body {
        font-family: Arial, sans-serif;
        background: #f5f5f5;
        margin: 0;
        padding: 20px;
      }

      .root {
        max-width: 500px;
        margin: auto;
      }

      #product-list {
        margin-bottom: 20px;
      }

      .card {
        background: #fff;
        border: 1px solid #ddd;
        border-radius: 6px;
        padding: 15px;
        margin-bottom: 10px;
      }

      .card h3 {
        margin: 0 0 10px;
      }

      #loader {
        text-align: center;
        padding: 10px;
        display: none;
      }

      .pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
      }

      button {
        padding: 8px 16px;
        cursor: pointer;
      }

      button:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }
    </style>
  </head>

  <body>
    <div class="root">
      <div id="product-list"></div>

      <div id="loader">Loading...</div>

      <div class="pagination">
        <button id="prev">Prev</button>

        <span id="page-txt">
          Page 1 of 1
        </span>

        <button id="next">Next</button>
      </div>
    </div>

    <script>
      const container = document.getElementById("product-list");
      const loader = document.getElementById("loader");
      const prevBtn = document.getElementById("prev");
      const nextBtn = document.getElementById("next");
      const pageTxt = document.getElementById("page-txt");

      const limit = 10;

      let currentPage = 0;
      let totalProducts = 0;
      let totalPages = 0;
      let loading = false;

      async function render(page) {
        if (loading) return;

        loading = true;
        loader.style.display = "block";

        try {
          const response = await fetch(
            `https://dummyjson.com/products?limit=${limit}&skip=${page * limit}`
          );

          if (!response.ok) {
            throw new Error("Failed to fetch products");
          }

          const data = await response.json();

          totalProducts = data.total;
          totalPages = Math.ceil(totalProducts / limit);
          currentPage = page;

          container.innerHTML = "";

          data.products.forEach((product) => {
            const card = document.createElement("div");

            card.className = "card";

            card.innerHTML = `
              <h3>${product.title}</h3>
              <p><strong>Price:</strong> $${product.price}</p>
              <p>${product.description}</p>
            `;

            container.appendChild(card);
          });

          pageTxt.textContent = `Page ${currentPage + 1} of ${totalPages}`;

          prevBtn.disabled = currentPage === 0;
          nextBtn.disabled = currentPage === totalPages - 1;
        } catch (error) {
          console.error(error);

          container.innerHTML =
            "<p>Failed to load products.</p>";
        } finally {
          loading = false;
          loader.style.display = "none";
        }
      }

      prevBtn.addEventListener("click", () => {
        if (currentPage > 0) {
          render(currentPage - 1);
        }
      });

      nextBtn.addEventListener("click", () => {
        if (currentPage < totalPages - 1) {
          render(currentPage + 1);
        }
      });

      render(0);
    </script>
  </body>
</html>
```

---

## Concepts Covered

- DOM Manipulation
- Fetch API
- Async/Await
- REST API Pagination
- Query Parameters (`limit` & `skip`)
- Loading State
- Error Handling (`try...catch...finally`)
- Dynamic Rendering
- Button Enable/Disable
- Event Listeners
- State Management

---

## Output

- Fetches products from the API in pages of **10 items**
- Displays product **Title**, **Price**, and **Description**
- Shows **Loading...** while data is being fetched
- Navigate using **Previous** and **Next** buttons
- Displays the current page number (e.g., **Page 2 of 20**)
- Disables **Previous** on the first page
- Disables **Next** on the last page
- Displays an error message if the API request fails

---


---

# 4. Load More Data

## Features

- Fetch data from REST API
- Load data in batches
- Append new records without replacing existing data
- Load More button
- Loading indicator
- Prevent duplicate API requests
- Disable button when all records are loaded
- Error handling
- Pure HTML, CSS & JavaScript

---

## Source Code

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Load More Data</title>

    <style>
      body {
        font-family: Arial;
        max-width: 600px;
        margin: 40px auto;
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        padding: 10px;
        border-bottom: 1px solid #ddd;
      }

      #loader {
        margin: 15px 0;
        font-weight: bold;
      }

      button {
        padding: 10px 20px;
        cursor: pointer;
      }

      button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    </style>
  </head>

  <body>
    <h2>Todos</h2>

    <ul id="products"></ul>

    <div id="loader"></div>

    <button id="load-more">
      Load More
    </button>

    <script>
      const list = document.getElementById("products");
      const loader = document.getElementById("loader");
      const btnLoadMore = document.getElementById("load-more");

      const LIMIT = 10;

      let skip = 0;
      let total = 0;
      let loading = false;

      function render(todos) {
        todos.forEach((todo) => {
          const li = document.createElement("li");

          li.textContent = `${todo.id}. ${todo.todo}`;

          list.appendChild(li);
        });
      }

      async function fetchTodos() {
        if (loading) return;

        loading = true;
        loader.textContent = "Loading...";

        try {
          const response = await fetch(
            `https://dummyjson.com/todos?limit=${LIMIT}&skip=${skip}`
          );

          if (!response.ok) {
            throw new Error("Failed to fetch todos");
          }

          const data = await response.json();

          render(data.todos);

          total = data.total;
          skip += LIMIT;

          if (skip >= total) {
            btnLoadMore.disabled = true;
            btnLoadMore.textContent = "No More Data";
          }
        } catch (err) {
          console.error(err);

          loader.textContent = "Something went wrong.";
        } finally {
          loading = false;

          if (skip < total || total === 0) {
            loader.textContent = "";
          }
        }
      }

      fetchTodos();

      btnLoadMore.addEventListener("click", fetchTodos);
    </script>
  </body>
</html>
```

---

## Concepts Covered

- DOM Manipulation
- Fetch API
- Async/Await
- REST API Integration
- Incremental Loading (Load More)
- Pagination using `limit` and `skip`
- State Management
- Loading Indicator
- Error Handling (`try...catch...finally`)
- Button Enable/Disable
- Event Handling

---

## Output

- Loads the first **10 todos** when the page opens
- Clicking **Load More** fetches the next **10 records**
- New records are **appended** to the existing list
- Displays **Loading...** while fetching data
- Prevents multiple API requests while a request is in progress
- Disables the **Load More** button after all records have been loaded
- Changes the button text to **No More Data**
- Displays an error message if the API request fails

---

---

# 5. Center Div

## Features

- Horizontally center a `<div>`
- Vertically center a `<div>`
- Uses **CSS Flexbox**
- Full viewport height (`100vh`)
- Minimal and responsive layout
- Pure HTML & CSS

---

## Source Code

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Center Div</title>

    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: Arial, sans-serif;
      }

      #root {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }

      #root-child {
        width: 200px;
        height: 200px;
        background: #eee;
        border: 1px solid #ccc;
      }
    </style>
  </head>

  <body>
    <div id="root">
      <div id="root-child"></div>
    </div>
  </body>
</html>
```

---

## Concepts Covered

- CSS Flexbox
- `display: flex`
- `justify-content`
- `align-items`
- Viewport Height (`100vh`)
- CSS Reset
- Box Model (`box-sizing`)

---

## Output

- Displays a **200 × 200 px** box
- Centers the box **horizontally**
- Centers the box **vertically**
- Uses the full browser viewport height
- Simple and responsive layout using **Flexbox**

---

---

# 6. Load More Data with Limit 100

## Features

- Fetch data from REST API
- Load records in batches of **20**
- Maximum limit of **100 records**
- Append new data without replacing existing records
- Uses `DocumentFragment` for efficient DOM updates
- Loading indicator
- Prevent duplicate API requests
- Disable button after reaching the limit
- Error handling
- Pure HTML, CSS & JavaScript

---

## Source Code

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Load More Data</title>

    <style>
      body {
        font-family: Arial;
        max-width: 600px;
        margin: 40px auto;
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        padding: 10px;
        border-bottom: 1px solid #ddd;
      }

      #loader {
        margin: 15px 0;
        font-weight: bold;
      }

      button {
        padding: 10px 20px;
        cursor: pointer;
      }

      button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    </style>
  </head>

  <body>
    <h2>Todos</h2>

    <ul id="products"></ul>

    <div id="loader"></div>

    <button id="load-more">
      Load More
    </button>

    <script>
      let LIMIT = 100;
      let page = 0;
      let startIndex = 20;
      let loading = false;

      const list = document.getElementById("products");
      const loader = document.getElementById("loader");
      const btnMore = document.getElementById("load-more");

      function render(data) {
        const fragment = document.createDocumentFragment();

        data.forEach((element) => {
          const li = document.createElement("li");

          li.textContent = `${element.id} - ${element.todo}`;

          fragment.appendChild(li);
        });

        list.appendChild(fragment);
      }

      async function fetchMore() {
        if (loading) return;

        btnMore.disabled = true;
        loader.textContent = "Loading...";

        try {
          loading = true;

          const response = await fetch(
            `https://dummyjson.com/todos?limit=${startIndex}&skip=${page}`
          );

          if (!response.ok) {
            throw new Error("Failed to fetch todos");
          }

          const data = await response.json();

          page = page + startIndex;

          if (page === LIMIT) {
            btnMore.disabled = true;
            loader.textContent = "No More Data";
          }

          render(data.todos);
        } catch (error) {
          console.error("API Error:", error);

          loader.textContent = "Something went wrong.";
        } finally {
          loading = false;

          if (page < LIMIT) {
            loader.textContent = "";
            btnMore.disabled = false;
          }
        }
      }

      fetchMore();

      btnMore.addEventListener("click", fetchMore);
    </script>
  </body>
</html>
```

---

## Concepts Covered

- DOM Manipulation
- Fetch API
- Async/Await
- REST API Integration
- Incremental Loading (Load More)
- Pagination using `limit` and `skip`
- `DocumentFragment` for DOM Optimization
- State Management
- Loading Indicator
- Error Handling (`try...catch...finally`)
- Button Enable/Disable
- Event Handling

---

## Output

- Loads the first **20 todos** when the page opens
- Clicking **Load More** fetches the next **20 records**
- Appends new records to the existing list
- Uses **DocumentFragment** to improve rendering performance
- Displays **Loading...** while fetching data
- Prevents multiple API requests during loading
- Stops loading after **100 records**
- Disables the **Load More** button and displays **No More Data**
- Displays an error message if the API request fails

---

---

# 7. Product Search by Name and Categories

## Features

- Fetch products from REST API
- Search products by name
- Filter products by category
- Combined search and category filtering
- Debounced search input (300ms)
- Dynamic category dropdown
- Loading indicator
- Error handling
- Responsive UI
- Pure HTML, CSS & JavaScript

---

## Source Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Product Search</title>

    <style>
        body {
            font-family: Arial;
            padding: 30px;
        }

        .controls {
            display: flex;
            gap: 20px;
            margin-bottom: 20px;
        }

        input,
        select {
            padding: 8px;
        }

        .card {
            border: 1px solid #ddd;
            padding: 12px;
            margin-bottom: 10px;
            border-radius: 5px;
        }

        #loading {
            display: none;
        }
    </style>
</head>

<body>
    <h2>DummyJSON Product Search</h2>

    <div class="controls">
        <input
            type="text"
            id="search"
            placeholder="Search Product..."
            aria-label="Search Products"
        />

        <select
            id="category"
            aria-label="Filter Category"
        >
            <option value="all">
                All Categories
            </option>
        </select>
    </div>

    <p id="loading">Loading...</p>

    <div id="products"></div>

    <script>
        const API =
            "https://dummyjson.com/products?limit=125";

        const state = {
            products: [],
            filteredProducts: [],
            search: "",
            category: "all"
        };

        const productContainer =
            document.getElementById("products");

        const searchInput =
            document.getElementById("search");

        const categorySelect =
            document.getElementById("category");

        const loading =
            document.getElementById("loading");

        // Fetch Products
        async function loadProducts() {
            try {
                loading.style.display = "block";

                const response = await fetch(API);

                if (!response.ok) {
                    throw new Error(
                        "Unable to fetch products"
                    );
                }

                const data = await response.json();

                state.products = data.products;
                state.filteredProducts = data.products;

                populateCategories(data.products);
                renderProducts(state.filteredProducts);
            } catch (err) {
                productContainer.innerHTML =
                    `<h3>${err.message}</h3>`;
            } finally {
                loading.style.display = "none";
            }
        }

        // Populate Categories
        function populateCategories(products) {
            const categories = [
                ...new Set(
                    products.map(
                        product => product.category
                    )
                )
            ];

            categories.sort();

            categories.forEach(category => {
                const option =
                    document.createElement("option");

                option.value = category;
                option.textContent = category;

                categorySelect.appendChild(option);
            });
        }

        // Render Products
        function renderProducts(products) {
            if (products.length === 0) {
                productContainer.innerHTML =
                    "<h3>No Products Found</h3>";
                return;
            }

            productContainer.innerHTML = products
                .map(product => `
                    <div class="card">
                        <h3>${product.title}</h3>
                        <p>${product.category}</p>
                        <p>$${product.price}</p>
                    </div>
                `)
                .join("");
        }

        // Filter Products
        function filterProducts() {
            const search =
                state.search.toLowerCase();

            state.filteredProducts =
                state.products.filter(product => {

                    const matchesSearch =
                        product.title
                            .toLowerCase()
                            .includes(search);

                    const matchesCategory =
                        state.category === "all" ||
                        product.category === state.category;

                    return (
                        matchesSearch &&
                        matchesCategory
                    );
                });

            renderProducts(state.filteredProducts);
        }

        // Debounce
        function debounce(fn, delay) {
            let timer;

            return function () {
                clearTimeout(timer);

                timer = setTimeout(() => {
                    fn.apply(this, arguments);
                }, delay);
            };
        }

        // Search Event
        searchInput.addEventListener(
            "input",
            debounce(function (e) {
                state.search = e.target.value;
                filterProducts();
            }, 300)
        );

        // Category Event
        categorySelect.addEventListener(
            "change",
            (e) => {
                state.category = e.target.value;
                filterProducts();
            }
        );

        loadProducts();
    </script>
</body>
</html>
```

---

## Concepts Covered

- DOM Manipulation
- Fetch API
- Async/Await
- REST API Integration
- State Management
- Search Filtering
- Category Filtering
- Combined Filtering
- Debouncing
- Dynamic Dropdown Creation
- `Set` for Unique Values
- Array Methods (`map`, `filter`, `sort`)
- Template Literals
- Conditional Rendering
- Loading Indicator
- Error Handling
- Event Handling

---

## Output

- Fetches **125 products** from the DummyJSON API
- Dynamically populates the **Category** dropdown
- Search products by **Name**
- Filter products by **Category**
- Combines **Search** and **Category** filters
- Uses **300ms Debounce** to reduce unnecessary filtering
- Displays **Product Name**, **Category**, and **Price**
- Shows **Loading...** while fetching data
- Displays **No Products Found** when there are no matching results
- Displays an error message if the API request fails

---

# 8. Progress Bar

## Features
---

## Source Code

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Progress Bar</title>

    <style>
        .outer {
            width: 400px;
            border: 1px solid #ccc;
            border-radius: 10px;
            overflow: hidden;
        }

        .inner {
            width: 0%;
            background: green;
            color: white;
            text-align: center;
            padding: 10px 0;
            transition: width 0.5s ease-in;
        }
    </style>
</head>
<body>
    <div class="outer">
        <div class="inner" id="inner">0%</div>
    </div>
    <script>
        const inner = document.getElementById("inner");
        let percentage = 0;
        function render() {
            const interval = setInterval(() => {
                if (percentage > 100) {
                    clearInterval(interval);
                    return;
                }
                inner.innerHTML = percentage + "%";
                inner.style.width = percentage + "%";
                percentage++;
            }, 100);
        }
        render();
    </script>
</body>
</html>
```

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
# 10. Todo Cards by User - JavaScript

## Source Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo Cards by User</title>

    <style>
        * {
            box-sizing: border-box;
        }

        body {
            font-family: Arial, Helvetica, sans-serif;
            padding: 30px;
            background: #f5f5f5;
        }

        h2 {
            margin-bottom: 20px;
        }

        #loading {
            display: none;
            font-size: 18px;
            margin-bottom: 20px;
            color: #555;
        }

        #product {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
        }

        .card {
            width: 300px;
            background: #fff;
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 16px;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        }

        .card h3 {
            margin: 0 0 12px;
            color: #333;
        }

        .todo {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 6px 0;
            border-bottom: 1px solid #eee;
        }

        .todo:last-child {
            border-bottom: none;
        }
    </style>
</head>

<body>

    <h2>Todos Grouped by User</h2>

    <p id="loading">Loading...</p>

    <div id="product"></div>

    <script>
        const loading = document.getElementById("loading");
        const root = document.getElementById("product");

        function render(groupedTodos) {
            root.innerHTML = "";

            groupedTodos.forEach(userTodos => {
                const card = document.createElement("div");
                card.className = "card";

                const title = document.createElement("h3");
                title.textContent = `User #${userTodos[0].userId}`;
                card.appendChild(title);

                userTodos.forEach(todo => {
                    const row = document.createElement("div");
                    row.className = "todo";

                    row.innerHTML = `
                        <input type="checkbox" ${todo.completed ? "checked" : ""} disabled>
                        <span>${todo.todo}</span>
                    `;

                    card.appendChild(row);
                });

                root.appendChild(card);
            });
        }

        async function fetchData() {
            loading.style.display = "block";

            try {
                const response = await fetch("https://dummyjson.com/todos?limit=10&skip=80");

                if (!response.ok) {
                    throw new Error("Failed to fetch todos");
                }

                const data = await response.json();

                // Group todos by userId
                const groupedById = {};

                data.todos.forEach(todo => {
                    if (!groupedById[todo.userId]) {
                        groupedById[todo.userId] = [];
                    }

                    groupedById[todo.userId].push(todo);
                });

                render(Object.values(groupedById));

            } catch (error) {
                console.error(error);
                root.innerHTML = "<p>Failed to load todos.</p>";
            } finally {
                loading.style.display = "none";
            }
        }

        fetchData();
    </script>

</body>
</html>
```

⬆️ [Back to Top](#-table-of-contents)

---




# 1. Todo - Javascript

```javascript

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
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
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

      const todoInput = document.getElementById('todo');
      const btnAdd = document.getElementById('add-todo');
      const list = document.getElementById('todos');

      function renderTodo() {
        list.innerHTML = '';

        if (todos.length === 0) {
          list.innerHTML = "<p class='empty'>No todos available.</p>";
          return;
        }

        todos.forEach((todo, index) => {
          const li = document.createElement('li');

          li.innerHTML = `
            <span class="${todo.completed ? 'completed' : ''}">
                ${todo.text}
            </span>

            <div class="actions">
                <button onclick="markTodo(${index})">
                    ${todo.completed ? 'Undo' : 'Complete'}
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
          alert('Please enter a todo.');
          return;
        }

        todos.push({
          text: value,
          completed: false,
        });

        todoInput.value = '';
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

      btnAdd.addEventListener('click', addTodo);

      todoInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          addTodo();
        }
      });

      renderTodo();
    </script>
  </body>
</html>
```

# 2. Search Product

```javascript

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
      <input id="search" type="text" placeholder="Search products..." />
      <div id="status"></div>
      <ul id="search-list"></ul>
    </div>

    <script>
      const input = document.getElementById('search');
      const list = document.getElementById('search-list');
      const status = document.getElementById('status');

      let timer;
      const cache = {};

      function render(items) {
        list.innerHTML = '';

        if (items.length === 0) {
          list.innerHTML = '<li>No products found.</li>';
          return;
        }

        items.forEach((item) => {
          const li = document.createElement('li');
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

        status.textContent = 'Loading...';

        try {
          const response = await fetch(
            `https://dummyjson.com/products/search?q=${encodeURIComponent(
              query
            )}`
          );

          if (!response.ok) {
            throw new Error('Failed to fetch products');
          }

          const data = await response.json();

          cache[query] = data.products;

          render(data.products);

          status.textContent = '';
        } catch (err) {
          console.error(err);
          status.textContent = 'Something went wrong.';
          status.className = 'error';
        }
      }

      function search(event) {
        const value = event.target.value.trim();

        clearTimeout(timer);

        if (!value) {
          list.innerHTML = '';
          status.textContent = '';
          return;
        }

        timer = setTimeout(() => {
          searchResult(value);
        }, 500); // Debounce
      }

      input.addEventListener('input', search);
    </script>
  </body>
</html>

```

#3. Product Data with Pagination 

```javascript

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
        <span id="page-txt">Page 1 of 1</span>
        <button id="next">Next</button>
      </div>
    </div>

    <script>
      const container = document.getElementById('product-list');
      const loader = document.getElementById('loader');
      const prevBtn = document.getElementById('prev');
      const nextBtn = document.getElementById('next');
      const pageTxt = document.getElementById('page-txt');

      const limit = 10;

      let currentPage = 0;
      let totalProducts = 0;
      let totalPages = 0;
      let loading = false;

      async function render(page) {
        if (loading) return;

        loading = true;
        loader.style.display = 'block';

        try {
          const response = await fetch(
            `https://dummyjson.com/products?limit=${limit}&skip=${page * limit}`
          );

          if (!response.ok) {
            throw new Error('Failed to fetch products');
          }

          const data = await response.json();

          totalProducts = data.total;
          totalPages = Math.ceil(totalProducts / limit);
          currentPage = page;

          container.innerHTML = '';

          data.products.forEach((product) => {
            const card = document.createElement('div');
            card.className = 'card';

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
          container.innerHTML = '<p>Failed to load products.</p>';
        } finally {
          loading = false;
          loader.style.display = 'none';
        }
      }

      prevBtn.addEventListener('click', () => {
        if (currentPage > 0) {
          render(currentPage - 1);
        }
      });

      nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages - 1) {
          render(currentPage + 1);
        }
      });

      render(0);
    </script>
  </body>
</html>

```

#4. Load More Data 

```javascript
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
    <button id="load-more">Load More</button>
    <script>
      const list = document.getElementById('products');
      const loader = document.getElementById('loader');
      const btnLoadMore = document.getElementById('load-more');

      const LIMIT = 10;
      let skip = 0;
      let total = 0;
      let loading = false;

      function render(todos) {
        todos.forEach((todo) => {
          const li = document.createElement('li');
          li.textContent = `${todo.id}. ${todo.todo}`;
          list.appendChild(li);
        });
      }

      async function fetchTodos() {
        if (loading) return;
        loading = true;
        loader.textContent = 'Loading...';

        try {
          const response = await fetch(
            `https://dummyjson.com/todos?limit=${LIMIT}&skip=${skip}`
          );
          if (!response.ok) {
            throw new Error('Failed to fetch todos');
          }

          const data = await response.json();
          render(data.todos);

          total = data.total;
          skip += LIMIT;
          if (skip >= total) {
            btnLoadMore.disabled = true;
            btnLoadMore.textContent = 'No More Data';
          }
        } catch (err) {
          console.error(err);
          loader.textContent = 'Something went wrong.';
        } finally {
          loading = false;
          if (skip < total || total === 0) {
            loader.textContent = '';
          }
        }
      }
      fetchTodos();
      btnLoadMore.addEventListener('click', fetchTodos);
    </script>
  </body>
</html>

```

#5. Center Div

```javascript

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

#6. Load More Date with limit 100

```javascript

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
    <button id="load-more">Load More</button>
    <script>
      let LIMIT = 100;
      let page = 0;
      let startIndex = 20;
      let loading = false;

      const list = document.getElementById('products');
      const loader = document.getElementById('loader');
      const btnMore = document.getElementById('load-more');

      function render(data) {
        const fragment = document.createDocumentFragment();
        data.forEach((element) => {
          const li = document.createElement('li');
          li.textContent = `${element.id} - ${element.todo}`;
          fragment.appendChild(li);
        });
        list.appendChild(fragment);
      }

      async function fetchMore() {
        if (loading) return;
        btnMore.disabled = true;
        loader.textContent = 'loading...';

        try {
          loading = true;

          const response = await fetch(
            `https://dummyjson.com/todos?limit=${startIndex}&skip=${page}`
          );
          if (!response.ok) {
            throw new Error('Failed to fetch todos');
          }

          const data = await response.json();
          page = page + startIndex;

          if (page === LIMIT) {
            btnMore.disabled = true;
            loader.textContent = 'No More Data';
          }
          render(data.todos);
        } catch (e) {
          console.log('api failing', e);
        } finally {
          loading = false;
          if (page < LIMIT) {
            loader.textContent = '';
            btnMore.disabled = false;
          }
        }
      }

      fetchMore();

      btnMore.addEventListener('click', fetchMore);
    </script>
  </body>
</html>

```

# React Interview Programs (Practice Collection)

A collection of commonly asked **React interview coding programs** using Hooks, Context API, Reducer, API integration, and performance optimization techniques.

---
## 📚 Table of Contents

| No | Topic | Link |
|----|-------|------|
| 1 | AutoSearch with Debounce | [Go](#1-autosearch-with-debounce) |
| 2 | React Product List with Pagination | [Go](#2-react-product-list-with-pagination) |
| 3 | Counter using useReducer | [Go](#3-counter-using-usereducer) |
| 4 | Theme Switching with Context API | [Go](#4-theme-switching-with-context-api) |
| 5 | React Todo CRUD (Add, Update, Delete) | [Go](#5-react-todo-crud-add-update-delete) |
| 6 | Toggle Theme and Apply to Body | [Go](#6-toggle-theme-and-apply-to-body) |
| 7 | Debounced Search in React | [Go](#7-debounced-search-in-react) |
| 8 | Jira Ticket Board (Move Between Lanes) | [Go](#8-jira-ticket-board-move-between-lanes) |
| 9 | Start, Stop & Reset Counter | [Go](#9-start-stop--reset-counter) |
| 10 | Progress Bar | [Go](#10-progress-bar) |
| 11 | Product Search | [Go](#11-product-search) |
| 12 | Todo App (Add, Edit, Delete) | [Go](#12-todo-app-add-edit-delete) |
| 13 | Dynamic Form | [Go](#13-dynamic-form) |

---

# 1. AutoSearch with Debounce

## Features

- Search with **500ms Debounce**
- API Integration
- Client-side Filtering
- In-memory Caching using `useRef`
- Controlled Input
- Loading initial data with `useEffect`
- Conditional Rendering
- Pure React Hooks

---

## Concepts Covered

- `useState`
- `useEffect`
- `useRef`
- Debouncing
- Caching
- Fetch API
- Controlled Components
- Conditional Rendering
- Array `filter()`
- Component Re-rendering

---

## Output

- Fetches comments from API on page load
- Searches by **Name**
- Waits **500ms** before filtering (Debounce)
- Uses cache to avoid repeated filtering
- Displays matching names
- Displays **No Result Found** when there are no matches

---

## Source Code

```jsx
// App.js

import React, { useState, useEffect, useRef } from 'react';
import './style.css';

export default function App() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const cache = useRef({});

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setSearchResult(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!search.trim()) {
        setSearchResult(data);
        return;
      }

      if (cache.current[search]) {
        setSearchResult(cache.current[search]);
        return;
      }

      const filtered = data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );

      cache.current[search] = filtered;
      setSearchResult(filtered);
    }, 500);

    return () => clearTimeout(timer);
  }, [search, data]);

  return (
    <div className="container">
      <div className="autocomplete">
        <h2>Autocomplete Search</h2>

        <input
          value={search}
          onChange={handleSearch}
          placeholder="Search..."
        />

        {searchResult.length ? (
          <ul>
            {searchResult.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        ) : (
          <p>No Result Found</p>
        )}
      </div>
    </div>
  );
}
```

---

# 2. React Product List with Pagination

## Features

- Fetch Products from REST API
- Pagination
- Previous / Next Navigation
- Dynamic Page Count
- React Hooks

---

## Concepts Covered

- `useState`
- `useEffect`
- Fetch API
- Pagination
- REST API
- Event Handling
- Conditional Button Disable

---

## Output

- Loads **10 products** per page
- Navigate using **Previous** and **Next**
- Displays current page number
- Disables Previous on first page
- Disables Next on last page

---

## Source Code

```jsx
import React, { useEffect, useState } from "react";

export default function App() {
  const limit = 10;

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    async function fetchProducts() {
      const skip = (page - 1) * limit;

      const res = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
      );

      const data = await res.json();

      setProducts(data.products);
      setTotalPages(Math.ceil(data.total / limit));
    }

    fetchProducts();
  }, [page]);

  return (
    <>
      {products.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}

      <button
        disabled={page === 1}
        onClick={() => setPage((p) => p - 1)}
      >
        Prev
      </button>

      <button
        disabled={page === totalPages}
        onClick={() => setPage((p) => p + 1)}
      >
        Next
      </button>
    </>
  );
}
```

---

# 3. Counter using useReducer

## Features

- Increment Counter
- Decrement Counter
- Reset Counter
- Centralized State Management

---

## Concepts Covered

- `useReducer`
- Reducer Pattern
- Dispatch Actions
- Immutable State
- State Management

---

## Output

- Increment count
- Decrement count
- Reset to initial value

---

## Source Code

```jsx
import React, { useReducer } from "react";

const initialState = 0;

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state - 1;

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

export default function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h2>{count}</h2>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Increment
      </button>

      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        Decrement
      </button>

      <button onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>
    </>
  );
}
```

---

# 4. Theme Switching with Context API

## Features

- Global Theme Management
- Context API
- Theme Toggle
- Dynamic Styling
- Avoids Prop Drilling

---

## Concepts Covered

- `createContext`
- `useContext`
- `useState`
- Context Provider
- Global State
- Dynamic Styling

---

## Output

- Toggle between **Light** and **Dark** themes
- Child component receives theme using Context API
- No prop drilling required

---

## Source Code

```jsx
import React, { createContext, useContext, useState,} from "react";

const ThemeContext = createContext("light");

function ThemeButton() {
  const theme = useContext(ThemeContext);

  return (
    <button
      style={{
        background: theme === "light" ? "#eee" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      {theme}
    </button>
  );
}

export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeButton />
      <button
        onClick={() =>
          setTheme((prev) =>
            prev === "light" ? "dark" : "light"
          )
        }
      >
        Toggle Theme
      </button>
    </ThemeContext.Provider>
  );
}
```
---

# 5. React Todo CRUD (Add, Update, Delete)

## Features

- Add Todo
- Edit Todo
- Update Todo
- Delete Todo
- Controlled Input
- Conditional Rendering (Add / Update button)
- Empty State
- React Hooks

---

## Concepts Covered

- `useState`
- CRUD Operations
- Controlled Components
- Array `map()`
- Array `filter()`
- Conditional Rendering
- Immutable State Updates
- Event Handling

---

## Output

- Add new tasks
- Edit existing tasks
- Update task text
- Delete tasks
- Shows **No tasks available** when the list is empty
- Switches between **Add** and **Update** mode

---

## Source Code

```jsx
import React, { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editId, setEditId] = useState(null);

  const addTask = () => {
    if (!newTask.trim()) return;

    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: newTask.trim(),
      },
    ]);

    setNewTask("");
  };

  const editTask = (id) => {
    const task = tasks.find((task) => task.id === id);

    if (!task) return;

    setEditId(id);
    setNewTask(task.text);
  };

  const updateTask = () => {
    if (!newTask.trim()) return;

    setTasks((prev) =>
      prev.map((task) =>
        task.id === editId
          ? { ...task, text: newTask.trim() }
          : task
      )
    );

    setEditId(null);
    setNewTask("");
  };

  const deleteTask = (id) => {
    setTasks((prev) =>
      prev.filter((task) => task.id !== id)
    );

    if (editId === id) {
      setEditId(null);
      setNewTask("");
    }
  };

  return (
    <div>
      <input
        value={newTask}
        onChange={(e) =>
          setNewTask(e.target.value)
        }
      />

      {editId === null ? (
        <button onClick={addTask}>Add</button>
      ) : (
        <button onClick={updateTask}>
          Update
        </button>
      )}

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}

            <button  onClick={() =>  editTask(task.id) } >
              Edit
            </button>

            <button  onClick={() => deleteTask(task.id) } >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {tasks.length === 0 && (
        <p>No tasks available.</p>
      )}
    </div>
  );
}
```

---

# 6. Toggle Theme and Apply to Body

## Features

- Toggle between Light and Dark themes
- Apply theme to entire page
- Dynamic background and text color
- React Hooks

---

## Concepts Covered

- `useState`
- `useEffect`
- Side Effects
- DOM Manipulation
- Dynamic Styling

---

## Output

- Switches between **Light** and **Dark** themes
- Updates the **body background color**
- Updates the **text color**
- Displays the current theme

---

## Source Code

```jsx
import React, { useEffect, useState,} from "react";

export default function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "light"
        ? "dark"
        : "light"
    );
  };

  useEffect(() => {
    document.body.style.backgroundColor =
      theme === "light"
        ? "#eee"
        : "#333";

    document.body.style.color =
      theme === "light"
        ? "#000"
        : "#fff";
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

---

# 7. Debounced Search in React

## Features

- Custom `useDebounce` Hook
- Delays updates by **1 second**
- Prevents unnecessary API calls
- Reusable Hook
- Controlled Input

---

## Concepts Covered

- Custom Hooks
- `useState`
- `useEffect`
- Debouncing
- Controlled Components
- Side Effects

---

## Output

- Updates input value immediately
- Updates **debounced value** after **1000ms**
- Useful for search and API optimization

---

## Source Code

```jsx
import React, { useEffect, useState } from "react";

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

  const debouncedValue =  useDebounce(value, 1000);

  return (
    <div>
      <h2>Debounced Search</h2>

      <p>
        Debounced Value:
        {debouncedValue}
      </p>

      <input
        value={value}
        onChange={(e) =>
          setValue(e.target.value)
        }
      />
    </div>
  );
}
```

---

# 8. Jira Ticket Board (Move Between Lanes)

## Features

- Jira-style Kanban Board
- Three lanes (**To Do**, **In Progress**, **Done**)
- Move tickets to the **Previous** lane
- Move tickets to the **Next** lane
- Immutable state updates
- Dynamic rendering using `map()`
- React Hooks
- Inline styling
- Pure React

---

## Concepts Covered

- `useState`
- State Management
- Immutable Updates
- Array `map()`
- Array `filter()`
- Conditional Logic
- Event Handling
- Component Rendering
- Props & Object Spread Operator (`...`)
- Kanban Board Implementation

---

## Output

- Displays three Jira-style lanes:
  - **To Do**
  - **In Progress**
  - **Done**
- Each ticket has **Previous** and **Next** buttons
- Clicking **Previous** moves the ticket to the previous lane
- Clicking **Next** moves the ticket to the next lane
- Prevents moving beyond the first or last lane
- Updates the UI automatically using React state

---

## Source Code

```jsx
import React, { useState } from "react";

export default function App() {
  return <JiraLanesDemo />;
}

// -------------------------------
// Initial Data
// -------------------------------

const initialLanes = [
  {
    id: 0,
    title: "To Do",
    tickets: [
      { id: "T-1", title: "Setup project" },
      { id: "T-2", title: "Create components" },
    ],
  },
  {
    id: 1,
    title: "In Progress",
    tickets: [
      { id: "T-3", title: "Implement logic" },
    ],
  },
  {
    id: 2,
    title: "Done",
    tickets: [],
  },
];

function JiraLanesDemo() {
  const [lanes, setLanes] =
    useState(initialLanes);

  const moveTicket = (
    fromLaneIndex,
    toLaneIndex,
    ticket
  ) => {
    if (
      toLaneIndex < 0 ||
      toLaneIndex >= lanes.length
    ) {
      return;
    }

    setLanes((prev) =>
      prev.map((lane, index) => {
        // Remove from current lane
        if (index === fromLaneIndex) {
          return {
            ...lane,
            tickets: lane.tickets.filter(
              (t) => t.id !== ticket.id
            ),
          };
        }

        // Add to destination lane
        if (index === toLaneIndex) {
          return {
            ...lane,
            tickets: [
              ...lane.tickets,
              ticket,
            ],
          };
        }

        return lane;
      })
    );
  };

  return (
    <div style={styles.board}>
      {lanes.map((lane, laneIndex) => (
        <div
          key={lane.id}
          style={styles.lane}
        >
          <h3 style={styles.laneTitle}>
            {lane.title}
          </h3>

          {lane.tickets.map((ticket) => (
            <div
              key={ticket.id}
              style={styles.ticket}
            >
              <div style={styles.ticketTitle}>
                {ticket.title}
              </div>

              <div style={styles.actions}>
                <button
                  style={styles.button}
                  onClick={() =>
                    moveTicket(
                      laneIndex,
                      laneIndex - 1,
                      ticket
                    )
                  }
                >
                  Previous
                </button>

                <button
                  style={styles.button}
                  onClick={() =>
                    moveTicket(
                      laneIndex,
                      laneIndex + 1,
                      ticket
                    )
                  }
                >
                  Next
                </button>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

// -------------------------------
// Styles
// -------------------------------

const styles = {
  board: {
    display: "flex",
    gap: "16px",
    padding: "20px",
    background: "#f4f5f7",
    minHeight: "100vh",
  },

  lane: {
    flex: 1,
    background: "#fff",
    borderRadius: "8px",
    padding: "12px",
    boxShadow:
      "0 1px 4px rgba(0,0,0,0.1)",
  },

  laneTitle: {
    marginBottom: "12px",
    fontSize: "16px",
    fontWeight: "600",
  },

  ticket: {
    background: "#fafbfc",
    border: "1px solid #dfe1e6",
    borderRadius: "6px",
    padding: "10px",
    marginBottom: "10px",
  },

  ticketTitle: {
    marginBottom: "8px",
    fontWeight: "500",
  },

  actions: {
    display: "flex",
    justifyContent: "space-between",
  },

  button: {
    padding: "4px 8px",
    fontSize: "12px",
    cursor: "pointer",
  },
};
```

---

---

# 9. Start, Stop & Reset Counter

## Features

- Start Counter
- Stop Counter
- Reset Counter
- Auto Increment every **1 second**
- Interval Cleanup
- React Hooks

---

## Concepts Covered

- `useState`
- `useEffect`
- `setInterval`
- `clearInterval`
- Cleanup Function
- Event Handling
- State Management

---

## Output

- Counter starts from **0**
- Clicking **Start** begins incrementing every second
- Clicking **Stop** pauses the counter
- Clicking **Reset** stops the timer and resets the counter to **0**

---

## Source Code

```jsx
import React, { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () =>
      clearInterval(interval);
  }, [running]);

  return (
    <div>
      <h2>Counter : {count}</h2>

      <button onClick={() => setRunning(true)} >
        Start
      </button>

      <button onClick={() => setRunning(false)} >
        Stop
      </button>

      <button
        onClick={() => {
          setRunning(false);
          setCount(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}
```

---

# 10. Progress Bar

## Features

- Auto Progress
- Updates every **1 second**
- Smooth CSS Transition
- Stops at **100%**
- Responsive Progress Bar
- React Hooks

---

## Concepts Covered

- `useState`
- `useEffect`
- `setInterval`
- Cleanup Function
- Dynamic Inline Styles
- CSS Transition
- State Updates

---

## Output

- Progress starts from **0%**
- Increases by **10% every second**
- Stops automatically at **100%**
- Smooth width animation

---

## Source Code

```jsx
import React, { useEffect, useState } from "react";

const styles = {
  outer: {
    border: "1px solid #333",
    borderRadius: "10px",
    overflow: "hidden",
    margin: "20px",
    width: "400px",
  },

  inner: {
    padding: "10px",
    textAlign: "center",
    transition: "width .5s ease",
    background: "green",
    color: "#fff",
  },
};

export default function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 1000);

    return () =>
      clearInterval(interval);
  }, []);

  return (
    <div style={styles.outer}>
      <div
        style={{
          ...styles.inner,
          width: `${progress}%`,
        }}
      >
        {progress}%
      </div>
    </div>
  );
}
```

---

# 11. Product Search

## Features

- Fetch products from REST API
- Search products by title
- Custom `useDebounce` Hook
- Memoized filtering using `useMemo`
- Loading State
- Error Handling
- Searching indicator
- Component-based architecture
- React Hooks

---

## Concepts Covered

- `useState`
- `useEffect`
- `useMemo`
- Custom Hooks
- Debouncing
- Fetch API
- Component Composition
- Controlled Components
- Conditional Rendering
- Error Handling
- Loading State

---

## Output

- Loads products from the API
- Search by product title
- Waits **3 seconds** before filtering (Debounce)
- Displays **Searching...** while waiting
- Uses `useMemo` to avoid unnecessary filtering
- Displays matching products
- Shows **No products found** if there are no matches
- Displays loading and error states

---

## Source Code

```jsx
import React, {  useEffect,  useMemo, useState } from "react";

const useDebounce = (value,  delay) => {
  const [ debouncedValue, setDebouncedValue ] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () =>
      clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
};

const SearchBar = ({ search, onChange }) => (
  <input
    value={search}
    onChange={onChange}
    placeholder="Search Product..."
  />
);

const ProductList = ({ products }) => {
  if (!products.length) {
    return <p>No products found.</p>;
  }

  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>{product.category}</p>
          <strong>
            ${product.price}
          </strong>
        </div>
      ))}
    </>
  );
};

export default function App() {
  const [products, setProducts] =  useState([]);

  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [searching, setSearching] = useState(false);

  const debouncedSearch =  useDebounce(search, 3000);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);

        const response = await fetch(
          "https://fakestoreapi.com/products"
        );

        if (!response.ok) {
          throw new Error(
            "Failed to fetch products"
          );
        }

        const data =
          await response.json();

        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const filteredProducts =
    useMemo(() => {
      return products.filter(
        (product) =>
          !debouncedSearch ||
          product.title
            .toLowerCase()
            .includes(
              debouncedSearch.toLowerCase()
            )
      );
    }, [products, debouncedSearch]);

  useEffect(() => {
    setSearching(false);
  }, [debouncedSearch]);

  if (loading)
    return <h2>Loading...</h2>;

  if (error)
    return <h2>{error}</h2>;

  return (
    <>
      <SearchBar
        search={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setSearching(true);
        }}
      />

      {searching ? (
        <h3>Searching...</h3>
      ) : (
        <ProductList
          products={filteredProducts}
        />
      )}
    </>
  );
}
```

---

# 12. Todo App (Add, Edit, Delete)

## Features

- Add Todo
- Edit Todo
- Update Todo
- Delete Todo
- Controlled Input
- Conditional **Add / Update** button
- Immutable State Updates
- React Hooks

---

## Concepts Covered

- `useState`
- CRUD Operations
- Controlled Components
- Array `map()`
- Array `filter()`
- Array `find()`
- Conditional Rendering
- Event Handling
- Immutable State Updates

---

## Output

- Add new todos
- Edit an existing todo
- Update the selected todo
- Delete a todo
- Switches between **Add** and **Update** modes automatically

---

## Source Code

```jsx
import React from "react";

export default function App() {
  const [task, setTask] = React.useState("");
  const [todo, setTodo] = React.useState([]);
  const [editId, setEditId] = React.useState(null);

  // Add Todo
  const addTodo = () => {
    if (!task.trim()) return;

    const item = {
      id: Date.now(),
      name: task,
    };

    setTodo((prev) => [...prev, item]);
    setTask("");
  };

  // Edit Todo
  const editTodo = (id) => {
    const selected = todo.find(item => item.id === id);

    setTask(selected?.name || "");
    setEditId(id);
  };

  // Update Todo
  const updateTodo = () => {
    setTodo((prev) =>
      prev.map((item) =>
        item.id === editId
          ? { ...item, name: task }
          : item
      )
    );

    setTask("");
    setEditId(null);
  };

  // Delete Todo
  const deleteTodo = (id) => {
    setTodo((prev) =>
      prev.filter(
        (item) => item.id !== id
      )
    );
  };

  return (
    <div>
      <input
        value={task}
        onChange={(e) =>
          setTask(e.target.value)
        }
      />

      {editId ? (
        <button
          onClick={updateTodo}
        >
          Update
        </button>
      ) : (
        <button
          onClick={addTodo}
        >
          Add
        </button>
      )}

      <ul>
        {todo.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              gap: "10px",
            }}
          >
            <li>{item.name}</li>

            <button
              onClick={() =>
                editTodo(item.id)
              }
            >
              Edit
            </button>

            <button
              onClick={() =>
                deleteTodo(item.id)
              }
            >
              Delete
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}
```

---

# 13. Dynamic Form

## Features

- Dynamic Form Rendering
- Configuration-driven UI
- Text Input
- Select Dropdown
- Radio Buttons
- Checkboxes
- Controlled Components
- Form Submission
- React Hooks

---

## Concepts Covered

- `useState`
- Dynamic Forms
- Controlled Components
- Conditional Rendering
- Array `map()`
- Form Handling
- Event Handling
- Configuration-driven UI
- Reusable Components

---

## Output

- Renders form fields dynamically from a configuration object
- Supports:
  - Text Input
  - Select Dropdown
  - Radio Buttons
  - Multiple Checkboxes
- Stores all form values in a single state object
- Prints form data on **Submit**

---

## Source Code

```jsx
import React, { useState } from "react";

const formConfig = [
  {
    type: "text",
    name: "fullName",
    label: "Full Name",
  },
  {
    type: "select",
    name: "country",
    label: "Country",
    options: [
      "India",
      "USA",
      "UK",
    ],
  },
  {
    type: "radio",
    name: "gender",
    label: "Gender",
    options: [
      "Male",
      "Female",
      "Other",
    ],
  },
  {
    type: "checkbox",
    name: "skills",
    label: "Skills",
    options: [
      "React",
      "Angular",
      "Vue",
    ],
  },
];

export default function App() {
  const [formData, setFormData] = useState({});

  const handleChange = (  name, value  ) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (name,option  ) => {
    const current = formData[name] || [];

    const updated =
      current.includes(option)
        ? current.filter(
            (item) =>
              item !== option
          )
        : [...current, option];

    handleChange(name, updated);
  };

  const renderField = ( field ) => {
    switch (field.type) {
      case "text":
        return (
          <input
            value={
              formData[field.name] ||
              ""
            }
            onChange={(e) =>
              handleChange(
                field.name,
                e.target.value
              )
            }
          />
        );

      case "select":
        return (
          <select
            value={
              formData[field.name] ||
              ""
            }
            onChange={(e) =>
              handleChange(
                field.name,
                e.target.value
              )
            }
          >
            <option value="">
              Select
            </option>

            {field.options.map(
              (option) => (
                <option
                  key={option}
                >
                  {option}
                </option>
              )
            )}
          </select>
        );

      case "radio":
        return field.options.map(
          (option) => (
            <label key={option}>
              <input
                type="radio"
                value={option}
                checked={
                  formData[
                    field.name
                  ] === option
                }
                onChange={(e) =>
                  handleChange(
                    field.name,
                    e.target.value
                  )
                }
              />

              {option}
            </label>
          )
        );

      case "checkbox":
        return field.options.map(
          (option) => (
            <label key={option}>
              <input
                type="checkbox"
                checked={
                  formData[
                    field.name
                  ]?.includes(
                    option
                  ) || false
                }
                onChange={() =>
                  handleCheckboxChange(
                    field.name,
                    option
                  )
                }
              />

              {option}
            </label>
          )
        );

      default:
        return null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
    >
      {formConfig.map(
        (field) => (
          <div
            key={field.name}
          >
            <label>
              {field.label}
            </label>

            {renderField(field)}
          </div>
        )
      )}

      <button type="submit">
        Submit
      </button>
    </form>
  );
}
```

---

# 13. Update Div base on color click

```javascript

import React from "react";
import "./style.css";

const BoxStyle = ({id, color, onClick}) =>{
    return(
      <div style={{
        width: "50px",
        height: "50px",
        margin: '10px',
        background: color,
      }} onClick={()=> onClick(id)}>
      </div>
    )
}
const colors = [
  { id: 1, color:'red'},
  { id: 2, color:'green'},
  { id: 3, color:'red'},

]
export default function App() {
  const [color, setColors] = React.useState(colors)
  //color : green click -> remove ite
  //color : red click -> make it red and add one more green
  const handleClick = (id) =>{
    const selectedColor = color.find((item) => item.id === id);
    if (selectedColor.color === "red") {
      setColors((prev)=> prev.map((p) => 
         p.id === id ? { ...p, color: "green" } : p
      ))
      const item =  {
        id: color + 1,
        color: "red",
      }
      setColors((prev)=> [...prev, item])
    }else{
      setColors((prev)=> prev.filter((p)=> p.id !== id))
    }
  }


  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      {
       color.map((c)=>(
         <div key={c.id}>
         <BoxStyle id={c.id} color={c.color} onClick={handleClick} />
         </div>
       ))
     }
    </div>
  );
}

```

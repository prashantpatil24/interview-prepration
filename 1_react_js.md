# React Interview Programs (Practice Collection)

# 1. AutoSearch with debounce

``` javascript

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
   try {
     fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
       .then((response) => response.json())
       .then((data) => {
         setData(data);
         setSearchResult(data);
       });
   } catch (e) {
     console.log(e);
   }
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
       <h2 className="title">Autocomplete Search</h2>
       <input
         className="searchInput"
         type="text"
         placeholder="Search names..."
         onChange={handleSearch}
         value={search}
       />
       <div className="resultContainer">
         {searchResult.length ? (
           <ul className="resultList">
             {searchResult.map((item) => (
               <li className="resultItem" key={item.id}>
                 {item.name}
               </li>
             ))}
           </ul>
         ) : (
           <div className="noResult">No Result Found</div>
         )}
       </div>
     </div>
   </div>
 );
}
//style.css
h1,
p {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

body {
  background: #f4f7fb;
 }
 
 .container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 80px;
 }
 
 .autocomplete {
  width: 400px;
  position: relative;
 }
  
 .title {
  margin-bottom: 15px;
  color: #333;
  text-align: center;
 }

.searchInput {
  width: 100%;
  padding: 14px 16px;
  border: 2px solid #d0d7e2;
  border-radius: 10px;
  outline: none;
  font-size: 16px;
  transition: 0.3s ease;
  background: #fff;
 }
 
 .searchInput:focus {
  border-color: #4a90e2;
  box-shadow: 0 0 8px rgba(74, 144, 226, 0.3);
 }
 
 .resultContainer {
  margin-top: 8px;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
  max-height: 300px;
  overflow-y: auto;
 }
  
 .resultList {
  list-style: none;
 }

 .resultItem {
  padding: 14px 16px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  transition: 0.2s ease;
 }
  
 .resultItem:last-child {
  border-bottom: none;
 }

 .resultItem:hover {
  background: #f0f7ff;
  color: #1d72d8;
 }
 
 
 .noResult {
  padding: 16px;
  text-align: center;
  color: #999;
 }


```
# 2. React Product List with Pagination

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



# 3. Counter using useReducer

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

# 4. Theme Switching with Context API

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

# 5. React Todo CRUD (Add, Update, Delete)

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
# 6. Toggle Theme and Apply to Body

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
# 7. Debounced Search in React

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
# 8. Jira Ticker

```javascript

import React, { useState } from 'react';

export default function App() {
  return <JiraLanesDemo />;
}

// -------------------------------
// Initial Data (DO NOT MODIFY)
// -------------------------------

const initialLanes = [
  {
    id: 0,
    title: 'To Do',
    tickets: [
      { id: 'T-1', title: 'Setup project' },
      { id: 'T-2', title: 'Create components' },
    ],
  },
  {
    id: 1,
    title: 'In Progress',
    tickets: [{ id: 'T-3', title: 'Implement logic' }],
  },
  {
    id: 2,
    title: 'Done',
    tickets: [],
  },
];

function JiraLanesDemo() {
  const [lanes, setLanes] = useState(initialLanes);

  const moveTicket = (fromLaneIndex, toLaneIndex, ticket) => {
    if (toLaneIndex < 0 || toLaneIndex >= lanes.length) return;
    setLanes((prev) =>
      prev.map((lane, index) => {
        //prev
        if (index == fromLaneIndex) {
          return {
            ...lane,
            tickets: lane.tickets.filter((t) => t.id !== ticket.id),
          };
        }
        //next
        if (index == toLaneIndex) {
          return {
            ...lane,
            tickets: [...lane.tickets, ticket],
          };
        }
        return lane;
      })
    );
  };
  return (
    <div style={styles.board}>
      {lanes.map((lane, laneIndex) => (
        <div key={lane.id} style={styles.lane}>
          <h3 style={styles.laneTitle}>{lane.title}</h3>{' '}
          {lane.tickets.map((ticket) => (
            <div key={ticket.id} style={styles.ticket}>
              <div style={styles.ticketTitle}>{ticket.title}</div>{' '}
              <div style={styles.actions}>
                {' '}
                <button
                  style={styles.button}
                  onClick={() => moveTicket(laneIndex, laneIndex - 1, ticket)}
                >
                  Previous{' '}
                </button>{' '}
                <button
                  style={styles.button}
                  onClick={() => moveTicket(laneIndex, laneIndex + 1, ticket)}
                >
                  Next{' '}
                </button>
              </div>{' '}
            </div>
          ))}{' '}
        </div>
      ))}
    </div>
  );
}
// -------------------------------
// Styles (Provided)
// -------------------------------
const styles = {
  board: {
    display: 'flex',
    gap: '16px',
    padding: '20px',
    background: '#f4f5f7',
    minHeight: '100vh',
  },

  lane: {
    flex: 1,
    background: '#ffffff',
    borderRadius: '8px',
    padding: '12px',
    boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
  },

  laneTitle: {
    marginBottom: '12px',
    fontSize: '16px',
    fontWeight: '600',
  },

  ticket: {
    background: '#fafbfc',
    border: '1px solid #dfe1e6',
    borderRadius: '6px',
    padding: '10px',
    marginBottom: '10px',
  },

  ticketTitle: {
    marginBottom: '8px',
    fontWeight: '500',
  },

  actions: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  button: {
    padding: '4px 8px',
    fontSize: '12px',
    cursor: 'pointer',
  },
};

```
# 9. START, STOP, RESET - Counter

```javascript
import React, { useEffect, useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="root">
      <h2>Counter : {count}</h2>
      <div>
        <button onClick={() => setRunning(true)}>Start</button>
        <button onClick={() => setRunning(false)}>Stop</button>
        <button onClick={() => {
          setRunning(false)
          setCount(0)
        }}>Reset</button>
      </div>
    </div>
  );
}

```

# 11. Progress Bar

```javascript

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
    fontSize: "14px",
    padding: "10px",
    textAlign: "center",
    transition: "width 0.5s ease-in",
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

    return () => clearInterval(interval);
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

# 12. Product Search

```javascript

import React, { useEffect, useMemo, useState } from 'react';

const useDebounce = (value, delay) => {
  const [debouncedSearch, setDebouncedSearch] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(value);
    }, delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debouncedSearch;
};

const SearchBar = ({ search, onChange }) => {
  return (
    <input
      type="text"
      placeholder="search product..."
      value={search}
      onChange={onChange}
      style={{ border: '1px solid #ddd', padding: '8px', marginBottom: '8px' }}
    />
  );
};

const ProductList = ({ products }) => {
  if (!products.length) {
    return <p>No products found.</p>;
  }
  return (
    <div>
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: '1px solid #ddd',
            padding: '12px',
            marginBottom: '8px',
          }}
        >
          <h3>{product.title}</h3>
          <p>{product.category}</p>
          <strong>${product.price}</strong>
        </div>
      ))}
    </div>
  );
};

export default function App() {
  const [search, setSearch] = useState('');
  const [searching, setSearching] = useState(false);

  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const debouncedSearch = useDebounce(search, 3000);

  useEffect(() => {
    let ignore = false;

    async function fetchProducts() {
      try {
        setLoading(true);
        setError('');
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        const data = await response.json();
        if (!ignore) {
          setProducts(data);
        }
      } catch (err) {
        if (!ignore) {
          setError(err.message);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }
    fetchProducts();
    return () => {
      ignore = true;
    };
  }, []);

  //handle input change
  const handleChange = (e) => {
    setSearch(e.target.value);
    setSearching(true);
  };

  const filteredProducts = useMemo(() => {
    return products.filter(
      (product) =>
        !debouncedSearch ||
        product.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
  }, [products, debouncedSearch]);

  useEffect(() => {
    setSearching(false);
  }, [debouncedSearch]);

  if (loading) {
    return <h2>Loading products...</h2>;
  }
  if (error) {
    return (
      <div>
        <h2>Error</h2>
        <p>{error}</p>
      </div>
    );
  }
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
      <h1>Product Search</h1>
      <div className="parent">
        <div>Centered Content</div>
      </div>
      <SearchBar search={search} onChange={handleChange} />
      {searching ? (
        <h3>Searching...</h3>
      ) : (
        <ProductList products={filteredProducts} />
      )}
    </div>
  );
}

```

# 12. ToDO App - Add,Edit,Delete

```javascript
import React from 'react';

export default function App() {
  const [task, setTask] = React.useState('');
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
    setTask('');
  };

  // Edit Todo
  const editTodo = (id) => {
    const selected = todo.find((item) => item.id === id);
    setTask(selected?.name || '');
    setEditId(id);
  };

  // Update Todo
  const updateTodo = () => {
    setTodo((prev) =>
      prev.map((item) => (item.id === editId ? { ...item, name: task } : item))
    );
    setTask('');
    setEditId(null);
  };

  // Delete Todo
  const deleteTodo = (id) => {
    setTodo((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div>
      <input
        type="text"
        name="newTask"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      {editId ? (
        <button onClick={updateTodo}>Update</button>
      ) : (
        <button onClick={addTodo}>Add</button>
      )}

      <div>
        <ul>
          {todo.map((item) => (
            <div
              key={item.id}
              style={{ display: 'flex', gap: '10px', marginTop: '10px' }}
            >
              <li>{item.name}</li>
              <button onClick={() => editTodo(item.id)}>Edit</button>
              <button onClick={() => deleteTodo(item.id)}>Delete</button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
```
#13. Dynamic Form

```javascript

import React, { useState } from 'react';
import './style.css';
const formConfig = [
  {
    type: 'text',
    name: 'fullName',
    label: 'Full Name',
  },
  {
    type: 'select',
    name: 'country',
    label: 'Country',
    options: ['India', 'USA', 'UK'],
  },
  {
    type: 'radio',
    name: 'gender',
    label: 'Gender',
    options: ['Male', 'Female', 'Other'],
  },
  {
    type: 'checkbox',
    name: 'skills',
    label: 'Skills',
    options: ['React', 'Angular', 'Vue'],
  },
];

export default function App() {
  const [formData, setFormData] = useState({});

  const handleChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (name, option) => {
    const current = formData[name] || [];
    const updated = current.includes(option)
      ? current.filter((item) => item !== option)
      : [...current, option];
    handleChange(name, updated);
  };

  const renderField = (field) => {
    switch (field.type) {
      case 'text':
        return (
          <input
            type="text"
            value={formData[field.name] || ''}
            onChange={(e) => handleChange(field.name, e.target.value)}
          />
        );
      case 'select':
        return (
          <select
            value={formData[field.name] || ''}
            onChange={(e) => handleChange(field.name, e.target.value)}
          >
            <option value="">Select</option>
            {field.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      case 'radio':
        return (
          <>
            {field.options.map((option) => (
              <label key={option}>
                <input
                  type="radio"
                  name={field.name}
                  value={option}
                  checked={formData[field.name] === option}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                />
                {option}
              </label>
            ))}
          </>
        );
      case 'checkbox':
        return (
          <>
            {field.options.map((option) => (
              <label key={option}>
                <input
                  type="checkbox"
                  checked={formData[field.name]?.includes(option) || false}
                  onChange={() => handleCheckboxChange(field.name, option)}
                />
                {option}
              </label>
            ))}
          </>
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
    <form onSubmit={handleSubmit}>
      {formConfig.map((field) => (
        <div key={field.name}>
          <label>{field.label}</label>
          {renderField(field)}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}

```














import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="header">
        <h2>AI Todo App</h2>
      </div>
      <div className="content">
        <div className="utilities">
          <button>Add</button>
          <input type="text" />
        </div>
        <div className="todoList">
          <ul>
            <li>
              <p>title</p>
              <p>description</p>
              <p>createdAt</p>
              <p>deadline</p>
            </li>
            <li>
              <p>A title</p>
              <p>A Description</p>
              <p>30/12/2025</p>
              <p>2025-12-30 23:26</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

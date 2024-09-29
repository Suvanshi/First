import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';
import Footer from './components/Footer';

function App() {
  const [todos, setTodos] = useState([]); // State for the list of todos

  const addTodo = (text) => {
    const newTodo = { text, completed: false }; // Each todo has a 'completed' status
    setTodos([...todos, newTodo]); // Add the new todo to the existing list
  };

  const toggleTodo = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos); // Toggle the completed status of the todo
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index); // Remove the todo at the specific index
    setTodos(newTodos); // Update the todos state
  };

  return (
    <div className="app-container">
      <h1>TaskOrbit </h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      <Footer/>
    </div>
  );
}

export default App;

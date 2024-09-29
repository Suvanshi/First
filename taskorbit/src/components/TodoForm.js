import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [inputText, setInputText] = useState(''); // State for the input field

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission from refreshing the page
    if (inputText.trim()) {
      addTodo(inputText); // Call the addTodo function passed as a prop
      setInputText(''); // Clear the input field after submission
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)} // Update input state as user types
        placeholder="Add a new task"
        className="todo-input"
      />
      <button type="submit" className="add-button">Add Todo</button>
    </form>
  );
};

export default TodoForm;

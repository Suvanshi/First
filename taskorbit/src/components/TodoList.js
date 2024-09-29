import React from 'react';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <li key={index} className={todo.completed ? 'completed' : ''}>
          <span onClick={() => toggleTodo(index)}>{todo.text}</span>
          <button onClick={() => deleteTodo(index)} className="delete-button">Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

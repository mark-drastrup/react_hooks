import React, { useState } from "react";
import Todo from "./Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleUpdate = e => {
    setInputValue(e.target.value);
  };

  const addTodo = () => {
    const todo = { todo: inputValue, completed: false };
    setTodos([...todos, todo]);
    setInputValue("");
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos &&
          todos.map((todo, index) => (
            <Todo key={index} todo={todo.todo}></Todo>
          ))}
      </ul>
      <input type="text" value={inputValue} onChange={handleUpdate} />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};

export default TodoList;

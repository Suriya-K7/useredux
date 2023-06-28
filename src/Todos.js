import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo.js";

const Todos = () => {
  const todos = useSelector((todos) => todos);
  return (
    <div>
      {todos && todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
    </div>
  );
};

export default Todos;

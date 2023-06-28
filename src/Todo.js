import React from "react";
import { ACTIONS } from "./App.js";
import { useDispatch, useSelector } from "react-redux";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <span style={{ color: todo.complete ? "#AAA" : "#000" }}>
        {todo.name}
      </span>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.COM, payload: { id: todo.id } })
        }
      >
        complete
      </button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.DEL, payload: { id: todo.id } })
        }
      >
        delete
      </button>
    </div>
  );
};

export default Todo;

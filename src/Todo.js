import React from "react";
import { ACTIONS } from "./App.js";
import { useDispatch } from "react-redux";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <div className="d-flex container align-items-center justify-content-between ">
      <span
        className=" d-block w-25"
        style={{ color: todo.complete ? "#AAA" : "#000" }}
      >
        {todo.name}
      </span>
      <button
        className="btn btn-outline-secondary"
        onClick={() =>
          dispatch({ type: ACTIONS.COM, payload: { id: todo.id } })
        }
      >
        complete
      </button>
      <button
        className="btn btn-outline-danger"
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

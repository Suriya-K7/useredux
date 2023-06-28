import React, { useRef, useState } from "react";
import { createStore } from "redux";
import Todos from "./Todos.js";
import { Provider } from "react-redux";

export const ACTIONS = {
  ADD: "add",
  COM: "complete",
  DEL: "delete",
};

const todoReducer = (todos = [], action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      return [...todos, action.payload];
    case ACTIONS.COM:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    case ACTIONS.DEL:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
};

const store = createStore(todoReducer);

function newTodo(name) {
  return {
    id: Date.now(),
    name: name,
    complete: false,
  };
}

const App = () => {
  /*
  function reducer(todos, action) {
    switch (action.type) {
      case ACTIONS.ADD_TODO:
        return [...todos, newTodo(action.payload.name)];
      case ACTIONS.COM:
        return todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, complete: !todo.complete };
          } else {
            return todo;
          }
        });
      case ACTIONS.DEL:
        return todos.filter((todo) => todo.id !== action.payload.id);
      default:
        return todos;
    }
  }
  function newTodo(name) {
    return {
      name: name,
      id: Date.now(),
      complete: false,
    };
  }
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  }
*/
  // const [name, setName] = useState("");
  const name = useRef("");
  function handleSubmit(e) {
    let todo = newTodo(name.current.value);
    e.preventDefault();
    store.dispatch({
      type: ACTIONS.ADD,
      payload: todo,
    });
    name.current.value = "";
    name.current.focus();
  }
  return (
    <Provider store={store}>
      <div className="container">
        <form onSubmit={handleSubmit} className="p-3 d-flex gap-2">
          <input ref={name} type="text" className="form-control" />
          <button className="btn btn-outline-primary" type="submit">
            Submit
          </button>
        </form>
        <Todos />
        {/* <div>
          {store.getState().map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </div> */}
      </div>
    </Provider>
  );
};

export default App;

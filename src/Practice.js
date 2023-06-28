/* counter using redeucer*/

// import React, { useReducer } from "react";

// const App = () => {
//   const ACTIONS = {
//     INC: "inc",
//     DEC: "dec",
//   };

//   function reducer(state, action) {
//     switch (action.type) {
//       case ACTIONS.INC:
//         return { count: state.count + 1 };
//       case ACTIONS.DEC:
//         return { count: state.count - 1 };
//       default:
//         return state.count;
//     }
//   }
//   let [state, dispatch] = useReducer(reducer, { count: 0 });
//   return (
//     <div>
//       <button onClick={() => dispatch({ type: ACTIONS.DEC })}>-</button>
//       <br />
//       <p>{state.count}</p>
//       <br />
//       <button onClick={() => dispatch({ type: ACTIONS.INC })}>+</button>
//     </div>
//   );
// };

// export default App;

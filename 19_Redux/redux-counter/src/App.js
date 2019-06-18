import React from 'react';
import Counter from "./components/Counter"

import { Provider } from "react-redux"
import { createStore } from "redux"

const initialState = {
  count: 0
}

const reducer = (state=initialState, action) => {
  console.log("Action received", action)
  switch(action.type){
    case 'INCREMENT':
      return{
        count: state.count + 1
      };
    case 'DECREMENT':
      return{
        count: state.count - 1 
      }
      default:
        return state
    }
};

const store = createStore( reducer );



function App() {
  return (
    <div className="App">
      <div>
        <Provider store={store}>
          <Counter />
        </Provider>
      </div>
    </div>
  );
}

export default App;

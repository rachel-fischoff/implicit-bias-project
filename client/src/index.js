import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";

import reducers from "./reducers";
import Age from './components/age'
import Chart from "./components/chart";
import Gender from "./components/gender"
import Race from './components/race'

import 'bootstrap/dist/css/bootstrap.css'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <div>
        <h1 className="text-center">App</h1>

          <Age/>
          <Gender/>
          <Race/>
          <Chart/>
    
    
      </div>
  </Provider>,
  document.getElementById('root')
);



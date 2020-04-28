import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import Counter from "./Counter";
import "./index.css";

const App = () => (
  <div>
    <Provider store={store}>
      <Counter />
    </Provider>
  </div>
);

render(<App />, document.getElementById("root"));

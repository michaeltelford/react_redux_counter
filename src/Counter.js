import React from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from "./actions";

const Counter = props => {
  const { count, increment, decrement, reset } = props;

  return (
    <div className="counter">
      <h2>Counter</h2>
      <div>
        <button onClick={decrement}>-</button>
        <span className="count">{count}</span>
        <button onClick={increment}>+</button>
      </div>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = {
  increment,
  decrement,
  reset
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

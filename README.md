# React Redux Counter

A Javascript front end app built using React and Redux. Useful as a reference project.

## React Redux Notes

### Store & State

The state is the data, and the store is where it’s kept. The `redux` lib gives you a store, and lets you keep state in it, get state out, and respond when the state changes. But that’s all it does. The `react-redux` lib lets you `connect` pieces of the state to React components.

Store Rule #1: Only have 1 store per application, it's the app's single source of truth.

### Reducer

A simple function that takes an action and the current state, and returns the nextState:

```js
const reducer = (action, state) => nextState;
```

Reducer Rule #1: Never return undefined from a reducer, default the `state` param.
Reducer Rule #2: Reducers must be pure functions, no side effects e.g. API calls.
Reducer Rule #3: Never directly mutate the state, treat it as read only e.g.

```js
return {
  ...state,
  overrideStateHere: "blah"
};
```

### Actions and Dispatch

An action is plain object with a property called `type` eg. `{ type: 'ACTION_NAME' }`. In order to make an action DO something, you need to `dispatch` it. Call `dispatch` with an action, and Redux will call **all** reducers with that action (one of which, you'll have wired up to process the action - typically using a `switch` statement) e.g.

```js
store.dispatch({ type: "INCREMENT" });
```

### Provider and Connect

By wrapping the entire app with the `Provider` component, every component in the app tree will be able to access the Redux store if needed; but not automatically. We’ll need to use the `connect` function on our components to access the store. Under the hood the `subscribe` and `getState` functions are called to re-`render` the `connect`ed components.

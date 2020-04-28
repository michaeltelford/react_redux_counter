import { INCREMENT, DECREMENT, RESET } from "./actions";

const countReducer = (count = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return count + 1;
    case DECREMENT:
      return count - 1;
    case RESET:
      return 0;
    default:
      return count;
  }
};

export { countReducer };

// reducer takes in 2 things:
// 1. Copy of current state
// 2. Actions
import { INCREMENT_LIKES } from "../actions/actionCreators";

const posts = (state = [], action) => {
  console.log(state, action);
  switch (action.type) {
    case INCREMENT_LIKES:
      return state;
    default:
      return state;
  }
  return state;
};
export default posts;

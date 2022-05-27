import { data } from "../../Data";
const counterReducer = (state = data, action) => {
  switch (action.type) {
    case "INCREMENT":
      for (var i in state) {
        if (state[i].userId == action.payload) {
          state[i].id = state[i].id + 1;
          console.log(" state[i].id", state);

          return state;
          break; //Stop this loop, we found it!
        }
      }
    case "DECREMENT":
      for (var i in state) {
        if (state[i].userId == action.payload) {
          state[i].id = state[i].id - 1;
          console.log(" state[i].id", state);
          return state;
          break; //Stop this loop, we found it!
        }
      }

    default:
      return state;
  }
};
export default counterReducer;

// function () {
//   for (var i in state) {
//     if (state[i].id == action.payload) {
//       state[i].id = state[i].id - 1;
//       console.log(" state[i].id", state[i].id);
//       return state;
//       break; //Stop this loop, we found it!
//     }
//   }
// };

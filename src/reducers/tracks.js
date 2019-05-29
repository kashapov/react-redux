const initialState = ["Smells like teen spirit", "Enter Sandman"];

export default function playlist(state = initialState, action) {
  if (action.type === "ADD_TRACK") {
    return [...state, action.payload];
  } else if (action.type === "DELETE_TRACK") {
    return state;
  }
  return state;
}

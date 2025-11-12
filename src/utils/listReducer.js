export function listReducer(state, action) {
  switch (action.type) {
    case "set": return action.payload;
    case "add": return [...state, action.payload];
    case "update": return state.map((it) =>
      it.id === action.payload.id ? action.payload : it
    );
    case "delete": return state.filter((it) => it.id !== action.payload);
    default: return state;
  }
}

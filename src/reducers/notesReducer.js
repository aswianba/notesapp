const initialState = [{ id: 1, title: "initialTitle", body: "default body" }];

const notesList = (state = initialState, action) => {
  // alert();
  console.log(state, action);
  switch (action.type) {
    case "ADD_NOTE":
      action.payload.id = Math.floor(Math.random() * 100000);
      return [...state, action.payload];
    case "UPDATE_NOTE":
      return state.map((note) => {
        if (note.id === action.payload.id) {
          note = action.payload;
        }
        return note;
      });

    case "DELETE_NOTE":
      return state.filter((note) => note.id !== action.payload.id);

    case "GET_ALL":
      return state;
    default:
      return state;
  }
};

export default notesList;

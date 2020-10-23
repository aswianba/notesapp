const addNote = (note) => ({
  type: "ADD_NOTE",
  payload: { note },
});

export default addNote;

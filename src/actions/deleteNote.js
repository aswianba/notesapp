const deleteNote = (note) => ({
  type: "DELETE_NOTE",
  payload: { note },
});

export default deleteNote;

const saveNotes = (note) => ({
  type: "SAVE_NOTES",
  payload: { note },
});

export default saveNotes;

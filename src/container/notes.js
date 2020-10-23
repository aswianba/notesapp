import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchNotes from "../actions/fetchNotes";
import NotesList from "../components/NotesList";
import CreateNotes from "../components/CreateNotes";
import deleteNote from "../actions/deleteNote";
import addNote from "../actions/addNote";

const Notes = () => {
  const dispatch = useDispatch();
  const notesList = useSelector((state) => state.fetchNotesReducer.notes);
  const [notes, setNotes] = useState();
  const [selected, setSelected] = useState({});
  const saveInfo = useSelector((state) => state.addNoteReducer);

  useEffect(() => {
    setNotes(notesList);
  }, [notesList]);

  useEffect(() => {
    dispatch(fetchNotes());
  }, []);

  useEffect(() => {
    if (saveInfo.successMsg) {
      setSelected({});
    } else if (saveInfo.errorMsg) {
      alert(saveInfo.errorMsg);
    }
  }, [saveInfo]);

  const handleClick = (event, data) => {
    setSelected(data);
  };

  const handleSave = () => {
    if (validateData()) {
      dispatch(addNote({ ...selected }));
    } else {
      alert("Provide all values");
    }
  };
  const handleChange = (field, value) => {
    setSelected({ ...selected, [field]: value });
  };
  const handleDelete = (event, data) => {
    setSelected({});
    dispatch(deleteNote(data));
  };

  const handleAdd = () => {
    setSelected({});
  };
  const validateData = () => {
    if (
      selected.title === null ||
      selected.title === undefined ||
      selected.title === ""
    ) {
      return false;
    } else if (
      selected.body === null ||
      selected.body === undefined ||
      selected.body === ""
    ) {
      return false;
    }
    return true;
  };
  //return <div>{notesList.map((notes) => notes.title)}</div>;
  return (
    <div>
      <nav class="navbar navbar-default">
        <div class="navbar-brand">G Notes</div>
      </nav>
      <div className="row">
        <div className="col-sm-6">
          <ul class="list-group">
            <NotesList
              data={notes}
              handleClick={handleClick}
              handleDelete={handleDelete}
            />
          </ul>
        </div>
        <div className="col-sm-6">
          <ul class="list-group">
            <CreateNotes
              selectedData={selected}
              handleChange={handleChange}
              handleSave={handleSave}
              handleAdd={handleAdd}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notes;

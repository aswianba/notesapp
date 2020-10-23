import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import NotesList from "../components/NotesList";
import CreateNotes from "../components/CreateNotes";
import deleteNote from "../actions/deleteNote";
import addNote from "../actions/addNote";
import updateNote from "../actions/updateNote";

const Notes = () => {
  const dispatch = useDispatch();
  const notesList = useSelector((state) => state.notesList);
  const [notes, setNotes] = useState();
  const [selected, setSelected] = useState({});

  useEffect(() => {
    setNotes(notesList);
  }, [notesList]);

  const handleClick = (event, data) => {
    setSelected(data);
  };

  const handleSave = () => {
    if (validateData()) {
      !selected.id
        ? dispatch(addNote(selected))
        : dispatch(updateNote(selected));
      setSelected({});
    } else {
      alert("Provide all values");
    }
  };
  const handleChange = (field, value) => {
    setSelected({ ...selected, [field]: value });
  };
  const handleDelete = (event, data) => {
    dispatch(deleteNote(data));
    setSelected({});
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

  return (
    <div>
      <nav className="navbar navbar-default">
        <div className="navbar-brand">G Notes</div>
      </nav>
      <div className="row">
        <div className="col-sm-6">
          <ul className="list-group">
            <NotesList
              data={notes}
              handleClick={handleClick}
              handleDelete={handleDelete}
            />
          </ul>
        </div>
        <div className="col-sm-6">
          <ul className="list-group">
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

import React from "react";

const NotesList = (props) => {
  const renderSingleList = (note) => {
    return (
      <li class="list-group-item">
        <div className="row">
          <div
            className="col-sm-10"
            onClick={(e) => props.handleClick(e, note)}
          >
            {note.title}
            <br />
            {note.body}
          </div>
          <div className="col-sm-2">
            <i
              className="fa fa-trash"
              style={{ float: "right", cursor: "pointer" }}
              onClick={(e) => props.handleDelete(e, note)}
            ></i>
          </div>
        </div>
      </li>
    );
  };

  return (
    <div>{props.data && props.data.map((note) => renderSingleList(note))}</div>
  );
};

export default NotesList;

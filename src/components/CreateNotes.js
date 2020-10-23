import React from "react";

const CreateNotes = (props) => {
  const { selectedData } = props;

  return (
    <div class="col-sm-11">
      <div className="form-group">
        <button
          type="button"
          className="btn btn-default"
          style={{ float: "right" }}
          onClick={props.handleAdd}
        >
          <i className="fa fa-plus" style={{ marginRight: "10px" }}></i>
          Add Note
        </button>
      </div>
      <div className="form-group">
        <label htmlFor="usr">Title:</label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={selectedData.title ? selectedData.title : ""}
          onChange={(e) => props.handleChange("title", e.target.value)}
        />
      </div>
      <div class="form-group">
        <label htmlFor="comment">Body:</label>
        <textarea
          className="form-control"
          rows="5"
          id="comment"
          value={selectedData.body ? selectedData.body : ""}
          onChange={(e) => props.handleChange("body", e.target.value)}
        ></textarea>
      </div>
      <button
        type="button"
        className="btn btn-primary"
        style={{ float: "right" }}
        onClick={props.handleSave}
      >
        Save
      </button>
    </div>
  );
};

export default CreateNotes;

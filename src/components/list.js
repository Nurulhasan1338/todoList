import React from "react";
import del from "./Del.png"
const List = ({ DeleteNote, notes }) => {
  return (
    <div className="notes m-3">
      <div className="row row-cols-4">
        {notes.map((note,index) => {
          return (
			<div key={notes.id} className="col mx-4 my-3 rounded shadow" style={{backgroundColor:note.color}}>
			<div className="card-body box p-0 pt-2">
			  <p className="card-text mx-0 px-1 Text">{note.text}</p>
			  </div>
			  <div className="d-flex justify-content-between">

			  <p className="card-link text-muted d-inline">{note.date}</p>
			  <botton
					className="card-link"
					onClick={() => DeleteNote(note.id)}
					>
					<img src={del} style={{"width":"20px"}} alt="delete"/>
                </botton>

				</div>
		  </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;

import React from 'react'
import { useState } from 'react';
import Addiocn from "../components/icons8-plus.gif";

const AddNotes = ({AddNote })=> {

    const [noteText, setNoteText] = useState('');
	const characterLimit = 200;

	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};

	const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			AddNote(noteText);
			setNoteText('');
		}
	};

  return (
    <div>
        <div className='row p-4 shadow'>
		<h5><img src={Addiocn} className="mx-2" style={{"width":"20px"}} alt="" />Add Notes</h5>
			<div className="col-10">
			<textarea
				rows='1'
				className="form-control" id="exampleFormControlTextarea1"
				style={{"width":"15rem;"}}
				placeholder='new note...'
				value={noteText}
				onChange={handleChange}
				></textarea>
				</div>
				<div className="col d-flex justify-content-center align-items-center">
					<button className='btn btn-success' onClick={handleSaveClick}>save</button>
				</div>

			<div className='row'>
				<small className='mt-2 text-muted'>
					{characterLimit - noteText.length} Remaining
				</small>
				
			</div>
		</div>
    </div>
  )
}

export default AddNotes;
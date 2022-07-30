import React from 'react'
import "./App.css";
import { useState } from 'react';
import { nanoid } from 'nanoid';
import AddNotes from './components/addNotes.js';
import List from './components/list.js';

export default function App() {
	const date = new Date();
  const [notes, setNotes] = useState([
	{
		id: nanoid(),
		text: 'On monday I have to go for a long walk',
		date: date.toLocaleDateString(),
		color:`hsl(${Math.floor(Math.random() * 300)}deg 100% 80%)`
	},
	{
		id: nanoid(),
		text: 'take minimum one codding contest per week',
		date: date.toLocaleDateString(),
		color:`hsl(${Math.floor(Math.random() * 300)}deg 100% 80%)`
	},
	{
		id: nanoid(),
		text: 'I have to prepare for internship',
		date: date.toLocaleDateString(),
		color:`hsl(${Math.floor(Math.random() * 300)}deg 100% 80%)`
	},
	]);

  const AddNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
			color:`hsl(${Math.floor(Math.random() * 350)+6}deg 100% 79%)`
		};
  	const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const DeleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};
  return (
    <div className='w-100'>
	   <div className='pt-3 shadow p-3 mynav'>My Notes</div>
       <div className='mt-4 mx-4 px-5'>

		<div className="row">
        <AddNotes AddNote={AddNote}/>
		</div>

		<div className="row">
        <List notes={notes} DeleteNote={DeleteNote}/>
		</div>

    </div>
    </div>
  )
}

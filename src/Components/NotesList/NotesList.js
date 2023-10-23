import React from 'react';
import './NotesList.css';
import Note from '../Note/Note';
import AddNote from '../AddNote/AddNote';

const NotesList = ({notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className='notes-list'>
      {notes.map((note) => (
        <Note id={note.id} content={note.text} date={note.date}
        handleDeleteNote={handleDeleteNote}
        />
      ))}
       <AddNote handleAddNote={handleAddNote}/>
        </div>
  )
}

export default NotesList
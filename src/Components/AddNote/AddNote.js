import React, { useState } from 'react';
import './AddNote.css';

const AddNote = ({ handleAddNote }) => {
    const[noteText, setNoteText] =useState('');
    const characterLimit = 200;

    const handleChange = (event) => {
        if(characterLimit - event.target.value.length >=0 ){         //  when the remaining amount limit is reached you cannot type more text
        setNoteText(event.target.value);
        }
    };

    const handleSaveClick = (event) => {
        if( noteText.trim().length > 0){   //if no note is typed it should not be added
        handleAddNote(noteText);
        setNoteText('');   // after adding the note the text in the textarea resets
        }
    }


  return (
    <div className='new-note'>

<textarea 
rows='8' 
cols='10'
 placeholder='Type here to add a new note...' 
 value={noteText} onChange={handleChange}>
    </textarea> 
<div className='note-footer'>
    <small> {characterLimit- noteText.length}  Remaining</small>
    <button className='save' onClick={handleSaveClick}> Add </button>
</div>

    </div>
  )
}

export default AddNote;
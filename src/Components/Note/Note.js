import React from 'react';
import {MdDeleteForever} from 'react-icons/md';
import './Note.css';

const Note = ({id, content, date, handleDeleteNote}) => {
  return (
    <div className='note'>
        <span>{content}</span>
        <div className='note-footer'>
            <small> 10/23/2023</small>
            <MdDeleteForever  onClick={() => handleDeleteNote(id)}
            className='delete-icon' size='1.3rem'/>
        </div>
        </div>
  )
};

export default Note;
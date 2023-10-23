import React, {useEffect, useState} from "react";
import {nanoid} from 'nanoid';
import NotesList from "./Components/NotesList/NotesList";
import Search from "./Components/Search/Search";
import Header from "./Components/Header/Header";




function App() {
  const[notes, setNotes] = useState([
    {id:nanoid() , text:"Buy groceries", date:'2023-05-30'},
    {id:nanoid(), text:"Study for math test",date:'2023-06-07'},
    {id: nanoid(), text:"Clean the entire garage",date:'2023-10-05'},
    
  ]);

  const [searchText, setSearchText]= useState('');

  const [darkMode, setDarkMode] = useState(false);

  useEffect(()=>{
      const savedNotes = JSON.parse(localStorage.getItem('notesapp-data'));

      if(savedNotes){ setNotes(savedNotes);
      }
  }, []);

  useEffect(() =>{
    localStorage.setItem('notesapp-data', JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date= new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);

  }; 
  const deleteNote =(id) => {
    const newNotes= notes.filter ((note) => note.id !==id);
    setNotes(newNotes);
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>   
    <div className="container">
      <Header handleToggleDarkMode={setDarkMode}/>
      <Search handleSearchNote={setSearchText}/>
      <NotesList notes={notes.filter((note) => note.text.toLowerCase().includes(searchText)     //filters based on what you search
     )} 
     handleAddNote={addNote} handleDeleteNote={deleteNote}
     />
    </div>
    </div>
  );
}

export default App;

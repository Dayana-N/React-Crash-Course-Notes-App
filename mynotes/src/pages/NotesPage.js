import React, { useState, useEffect } from 'react';
// import notes from '../assets/data';
import Listitem from '../components/Listitem';

function NotesPage() {
  let [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  let getNotes = async () => {
    let response = await fetch(
      'https://3333-dayanan-reactcrashcours-3baf0y6xed8.ws-eu110.gitpod.io/notes'
    );
    let data = await response.json();
    setNotes(data);
  };
  return (
    <div className='notes'>
      <div className='notes-header'>
        <h2 className='notes-title'>&#9782;Notes</h2>
        <p className='notes-count'>{notes.length}</p>
      </div>

      <div className='notes-list'>
        {notes.map((note, index) => (
          <Listitem key={index} note={note} />
        ))}
      </div>
    </div>
  );
}

export default NotesPage;

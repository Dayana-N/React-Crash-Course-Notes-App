import React from 'react';
import notes from '../assets/data';
import Listitem from '../components/Listitem';

function NotesPage() {
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

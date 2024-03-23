import React from 'react';
import notes from '../assets/data';
import Listitem from '../components/Listitem';

function NotesPage() {
  return (
    <div>
      {notes.map((note) => (
        <p>
          <Listitem note={note} />
        </p>
      ))}
    </div>
  );
}

export default NotesPage;

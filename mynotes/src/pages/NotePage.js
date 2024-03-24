import React from 'react';
import notes from '../assets/data';

function NotePage({ match }) {
  let noteId = match.params.id;

  let note = notes.find((note) => note.id == noteId);
  return (
    <div className='note'>
      <div className='note-header'></div>
      <textarea value={note?.body}></textarea>
    </div>
  );
}

export default NotePage;

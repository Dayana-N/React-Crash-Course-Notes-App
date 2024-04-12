import React, { useState, useEffect } from 'react';
import notes from '../assets/data';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';

function NotePage({ match }) {
  let noteId = match.params.id;
  let [note, setNote] = useState(null);

  useEffect(() => {
    getNote();
  }, [noteId]);

  // let note = notes.find((note) => note.id == noteId);

  let getNote = async () => {
    let response = await fetch(
      `https://3333-dayanan-reactcrashcours-3baf0y6xed8.ws-eu110.gitpod.io/notes/${noteId}`
    );
    let data = await response.json();
    setNote(data);
  };
  return (
    <div className='note'>
      <div className='note-header'>
        <h3>
          <Link to='/'>
            <ArrowLeft />
          </Link>
        </h3>
      </div>

      <textarea value={note?.body}></textarea>
    </div>
  );
}

export default NotePage;

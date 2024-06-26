import React, { useState, useEffect } from 'react';
import notes from '../assets/data';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';

function NotePage({ match, history }) {
  let noteId = match.params.id;
  let [note, setNote] = useState(null);

  useEffect(() => {
    getNote();
  }, [noteId]);

  // let note = notes.find((note) => note.id == noteId);

  let getNote = async () => {
    if (noteId === 'new') return;
    let response = await fetch(
      `https://3333-dayanan-reactcrashcours-3baf0y6xed8.ws-eu110.gitpod.io/notes/${noteId}`
    );
    let data = await response.json();
    setNote(data);
  };

  let updateNote = async () => {
    await fetch(
      `https://3333-dayanan-reactcrashcours-3baf0y6xed8.ws-eu110.gitpod.io/notes/${noteId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...note, updated: new Date() }),
      }
    );
  };

  let createteNote = async () => {
    await fetch(
      `https://3333-dayanan-reactcrashcours-3baf0y6xed8.ws-eu110.gitpod.io/notes/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...note, updated: new Date() }),
      }
    );
  };

  let deleteNote = async () => {
    await fetch(
      `https://3333-dayanan-reactcrashcours-3baf0y6xed8.ws-eu110.gitpod.io/notes/${noteId}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
      }
    );
    history.push('/');
  };

  let handleSubmit = () => {
    if (noteId !== 'new' && !note.body) {
      deleteNote();
    } else if (noteId !== 'new') {
      updateNote();
    } else if (noteId === 'new' && note !== null) {
      createteNote();
    }

    history.push('/');
  };

  return (
    <div className='note'>
      <div className='note-header'>
        <h3>
          <Link to='/'>
            <ArrowLeft onClick={handleSubmit} />
          </Link>
        </h3>
        {noteId !== 'new' ? (
          <button onClick={deleteNote}>Delete</button>
        ) : (
          <button onClick={handleSubmit}>Done</button>
        )}
      </div>

      <textarea
        onChange={(e) => {
          setNote({ ...note, body: e.target.value });
        }}
        value={note?.body}
      ></textarea>
    </div>
  );
}

export default NotePage;

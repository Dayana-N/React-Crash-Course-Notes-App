import React from 'react';

export const Listitem = ({ note }) => {
  return (
    <div className='notes-list-item'>
      <h3>{note.body}</h3>
    </div>
  );
};

export default Listitem;

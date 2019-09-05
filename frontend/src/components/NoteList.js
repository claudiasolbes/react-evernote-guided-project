import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
  return (
    <ul>
      {
        props.note.map(note => {
          return <NoteItem
            note={note}
            key={note.title}
            viewNote={props.viewNote}
          />})
      }
    </ul>
  );
}

export default NoteList;

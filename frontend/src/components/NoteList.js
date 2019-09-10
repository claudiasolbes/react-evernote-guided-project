import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
  return (
    <ul>
      {
          props.note.filter(note => note.title.toLowerCase().includes(props.searchBar)).map(note => {
          return( 
            <NoteItem 
              note={note}
              key={note.id}
              viewNote={props.viewNote}
            />
          )
        })
      }
    </ul>
  );
}

export default NoteList;

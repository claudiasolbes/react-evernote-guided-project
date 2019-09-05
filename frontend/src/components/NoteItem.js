import React from 'react';

const NoteList = (props) => {
  return(
  <li
    onClick ={ () => {props.viewNote(props.note)}}>
    <h2>{props.note.title}</h2>
    <p>{props.note.body.slice(0, 15) + "..."}</p>
  </li>
  )
  }

export default NoteList;

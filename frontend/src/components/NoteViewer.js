import React, { Fragment } from 'react';

const NoteViewer = (props) => {
  return (
    <Fragment>
      <h2>{props.noteDisplayed.title}</h2>
      <p>{props.noteDisplayed.body}</p>
      <button onClick={props.homeScreen}>Home Screen</button>
      <button onClick={props.updateNote}>Edit</button>
      <button onClick={props.deleteNote}>Delete</button>
    </Fragment>
  );
}

export default NoteViewer;

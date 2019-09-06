import React, { Fragment } from 'react';

const NoteViewer = (props) => {
  return (
    <Fragment>
      <h2>{props.noteDisplayed.title}</h2>
      <p>{props.noteDisplayed.body}</p>
      <button onClick={props.updateNote}>Edit</button>
    </Fragment>
  );
}

export default NoteViewer;

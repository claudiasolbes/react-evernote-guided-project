import React, { Fragment } from 'react';

const NoteViewer = (props) => {
  return (
    <Fragment>
      <h2>{props.noteClicked.title}</h2>
      <p>{props.noteClicked.body}</p>
      <button>Edit</button>
    </Fragment>
  );
}

export default NoteViewer;

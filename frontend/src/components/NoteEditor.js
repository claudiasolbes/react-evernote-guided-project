import React, { Component } from 'react';

class NoteEditor extends Component {

  findUneditedNote = () => {
    const uneditedNote = this.props.notes.find(note => (note.id === this.props.noteDisplayed.id))
    return uneditedNote
  }

  render() {
    return (
      <form className="note-editor">
        <input type="text" name="title" onChange={this.props.editNote} value={this.props.noteDisplayed.title}/>
        <textarea name="body" onChange={this.props.editNote} value={this.props.noteDisplayed.body}/>
        <div className="button-row">
          <button className="button" type="button" onClick={this.props.patchNote}>Save</button>
          <button type="button" onClick={() => {this.props.viewNote(this.findUneditedNote())}} >Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
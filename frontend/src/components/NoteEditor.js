import React, { Component } from 'react';

class NoteEditor extends Component {
  render() {
    return (
      <form className="note-editor">
        <input type="text" name="title"  onChange={this.props.editNote} value={this.props.noteDisplayed.title}/>
        <textarea name="body" onChange={this.props.editNote} value={this.props.noteDisplayed.body}/>
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button type="button" onClick={this.props.viewNote} >Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;

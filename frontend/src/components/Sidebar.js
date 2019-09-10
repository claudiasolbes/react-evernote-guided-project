import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {
  render() {
    return (
      <div className='master-detail-element sidebar'>
        <button onClick={this.props.newNoteForm}>New Note</button>
        <br/>
        <br/>
        <button onClick={this.props.sortNotes} onDoubleClick={this.props.unsortNotes}>Sort/Unsort</button>
        <br/>
        <br/>
        <NoteList
          note={this.props.notes}
          viewNote={this.props.viewNote}
          searchBar={this.props.searchBar}
          newNoteForm={this.props.newNoteForm}
          newNote={this.props.newNote}
        />
      </div>
    );
  }
}

export default Sidebar;

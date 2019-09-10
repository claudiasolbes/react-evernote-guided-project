import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {
  render() {
    return (
      <div className='master-detail-element sidebar'>
        <NoteList
          note={this.props.notes}
          viewNote={this.props.viewNote}
          searchBar={this.props.searchBar}
          newNoteForm={this.props.newNoteForm}
          newNote={this.props.newNote}
        />
        <button onClick={this.props.newNoteForm}>New</button>
      </div>
    );
  }
}

export default Sidebar;

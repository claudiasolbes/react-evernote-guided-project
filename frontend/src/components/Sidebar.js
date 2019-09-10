import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {
  render() {

    const divStyle={
      overflowY: 'scroll',
      width:'500px',
      float: 'left',
      height:'800px',
      position:'relative'
    };

    return (
      <div className='master-detail-element sidebar' style={divStyle}>
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
        <button onClick={this.props.newNoteForm}>New Note</button>
      </div>
    );
  }
}

export default Sidebar;
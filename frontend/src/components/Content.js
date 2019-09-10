import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteCreator from './NoteCreator';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and renderContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
class Content extends Component {
  renderContent = () => {
    if (this.props.isFormDisplayed === true && this.props.noteDisplayed !== null){
      return <NoteEditor
        noteDisplayed={this.props.noteDisplayed}
        editNote={this.props.editNote}
        viewNote={this.props.viewNote}
        notes={this.props.notes}
        patchNote={this.props.patchNote}
      />;
    } else if (this.props.isFormDisplayed === true && this.props.noteDisplayed === null){
      return <NoteCreator
        postNote={this.props.postNote}
        newNoteForm={this.props.newNoteForm}
        cancelNewNote={this.props.cancelNewNote}
      />
    }else if (this.props.noteDisplayed !== null && this.props.isFormDisplayed === false) {
      return<NoteViewer
        noteDisplayed={this.props.noteDisplayed}
        updateNote={this.props.updateNote}
        deleteNote={this.props.deleteNote}
        cancelNewNote={this.props.cancelNewNote}
        homeScreen={this.props.homeScreen}
        />
    } else {
      return <Instructions />;
    }
  }

  render() {
    return (
      <div className='master-detail-element detail'>
        {this.renderContent()}
      </div>
    );
  }
}

export default Content;

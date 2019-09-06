import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {
  constructor(){
    super()
    this.state = {
      notes: [],
      noteDisplayed: null,
      isFormDisplayed: false
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/api/v1/notes")
    .then(resp => resp.json())
    .then(notes => {
      this.setState({notes: notes})
    })
  }

  viewNote = (noteObj) => {
    this.setState({
      noteDisplayed: noteObj,
      isFormDisplayed: false
    })
  }

  updateNote = () => {
    this.setState({
      isFormDisplayed: true
    })
  }

  editNote = (event) => {
    const newText = {...this.state.noteDisplayed}
    newText[event.target.name] = event.target.value
    this.setState({
      noteDisplayed: newText
    })
  }

  render() {
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar
              notes={this.state.notes}
              viewNote={this.viewNote}
            />
          <Content
            noteDisplayed={this.state.noteDisplayed}
            updateNote={this.updateNote}
            isFormDisplayed={this.state.isFormDisplayed}
            editNote={this.editNote}
            viewNote={this.viewNote}
            />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;

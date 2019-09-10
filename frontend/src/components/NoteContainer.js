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
      isFormDisplayed: false,
      searchBar: "",
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
      isFormDisplayed: false,
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
      noteDisplayed: newText,
    })
  }

  patchNote = (event) => {
    const body = {
      user_id: this.state.noteDisplayed.user.id,
      title: this.state.noteDisplayed.title,
      body: this.state.noteDisplayed.body
    }
    fetch(`http://localhost:3000/api/v1/notes/${this.state.noteDisplayed.id}`,{
      method: "PATCH",
      headers: {'Content-Type':'application/json',
      'Accept': 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then(resp => resp.json())
    this.setState({
      isFormDisplayed: false,
    })
  }

  // findUpdatedNote = () => {
  //   this.state.notes.map(note => note.id === this.state.noteDisplayed.id)
    
  // }

  deleteNote = () => {
    const body = {
      user_id: this.state.noteDisplayed.user.id,
      title: this.state.noteDisplayed.title,
      body: this.state.noteDisplayed.body
    }
    fetch(`http://localhost:3000/api/v1/notes/${this.state.noteDisplayed.id}`,{
      method: "DELETE",
      headers: {'Content-Type':'application/json',
      'Accept': 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then(resp => resp.json())
    
    this.setState({
      noteDisplayed: null,
      isFormDisplayed: false
    })
  }

  homeScreen = () => {
    this.setState({
      isFormDisplayed: false,
      noteDisplayed: null
    })
  }

  newNoteForm = () => {
    this.setState({
      isFormDisplayed: true,
      noteDisplayed: null
    })
  }

  postNote = (newNoteObj) => {
    const body = {
      user_id: 1,
      title: newNoteObj.title,
      body: newNoteObj.body
    }
    fetch(`http://localhost:3000/api/v1/notes`,{
      method: "POST",
      headers: {'Content-Type':'application/json',
      'Accept': 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then(resp => resp.json())
    this.setState({
      isFormDisplayed: false,
      noteDisplayed: newNoteObj,
      notes: [...this.state.notes, newNoteObj]
    })
  }

  cancelNewNote = () => {
    this.setState({
      isFormDisplayed: false
    })
  }

  filterNotes = (event) => {
    this.setState({
      searchBar: event.target.value
    })
  }

  render() {
    return (
      <Fragment>
        <Search filterNotes={this.filterNotes}/>
        <div className='container'>
          <Sidebar
              notes={this.state.notes}
              viewNote={this.viewNote}
              newNoteForm={this.newNoteForm}
              searchBar={this.state.searchBar}
            />
          <Content
            noteDisplayed={this.state.noteDisplayed}
            updateNote={this.updateNote}
            isFormDisplayed={this.state.isFormDisplayed}
            editNote={this.editNote}
            viewNote={this.viewNote}
            notes={this.state.notes}
            patchNote={this.patchNote}
            postNote={this.postNote}
            cancelNewNote={this.cancelNewNote}
            deleteNote={this.deleteNote}
            homeScreen={this.homeScreen}
          />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;

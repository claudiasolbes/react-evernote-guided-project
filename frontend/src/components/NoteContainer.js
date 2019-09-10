import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {
  constructor(){
    super()
    this.state = {
      notes: [],
      unsortedNotes: [],
      noteDisplayed: null,
      isFormDisplayed: false,
      searchBar: ""
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/api/v1/notes")
    .then(resp => resp.json())
    .then(notes => {
      this.setState({
        notes: notes,
        unsortedNotes: [...notes]
      })
    })
  }

  viewNote = (noteObj) => {
    this.setState({
      noteDisplayed: noteObj,
      isFormDisplayed: false,
    })
  }

  updateEditedNote = () => {
    const updatedNotes = this.state.notes.map((note) => {
      console.log(this.state.noteDisplayed.id)
      if(note.id === this.state.noteDisplayed.id){
        return note = this.state.noteDisplayed
      }
        return note
      })
      console.log(updatedNotes)
    this.setState({
      notes: updatedNotes
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
    this.updateEditedNote()
  }

  findDeletedNote = () => {
    const updatedNotes = this.state.notes.filter(note => note.id !== this.state.noteDisplayed.id)
    this.setState({
      notes: updatedNotes
    })
  }

  deleteNote = () => {
    alert("Are you sure you want to delete me?")
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
      isFormDisplayed: false,
    })
    this.findDeletedNote()
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

  sortNotes = () => {
    const notesArray = [...this.state.notes]
    notesArray.sort(function(a,b) {
      const noteA = a.title.toUpperCase()
      const noteB = b.title.toUpperCase()
    if (noteA < noteB){
      return -1;
    }
    if (noteA > noteB){
      return 1;
    }
    return 0;
  })
  this.setState({
    notes: notesArray
  })
}

unsortNotes = () => {
  this.setState({
    notes: this.state.unsortedNotes
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
              sortNotes={this.sortNotes}
              unsortNotes={this.unsortNotes}
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

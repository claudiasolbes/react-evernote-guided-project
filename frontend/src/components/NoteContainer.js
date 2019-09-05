import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {
  constructor(){
    super()
    this.state = {
      notes: [],
      noteDisplayed: []
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
      noteDisplayed: [...this.state.noteDisplayed, noteObj]
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
          <Content noteDisplayed={this.state.noteDisplayed} />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;

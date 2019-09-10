import React, { Component } from 'react';

class NoteCreator extends Component {
  constructor(){
    super()
    this.state = {
      title: "",
      body: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form className="note-editor">
        <input type="text" name="title" placeholder="Give me a title" onChange={this.handleChange} value={this.state.title}/>
        <textarea name="body" placeholder="What can I help you remember?" onChange={this.handleChange} value={this.state.body}/>
        <div className="button-row">
          <button className="button" type="button" onClick={() => this.props.postNote({...this.state})}>Save</button>
          <button type="button" onClick={this.props.cancelNewNote}>Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteCreator;
import React, {Component} from 'react';

class NoteList extends Component {
  
  noteSnippet = () => {
    if(this.props.note.body.length >= 50){
      return this.props.note.body.slice(0, 50) + "..."
    } else
      return this.props.note.body
  }

  render(){
    return(
    <li
      onClick ={ () => {this.props.viewNote(this.props.note)}}>
      <h2>{this.props.note.title}</h2>
      <p>{this.noteSnippet()}</p>
    </li>
    )
  }
}

export default NoteList;

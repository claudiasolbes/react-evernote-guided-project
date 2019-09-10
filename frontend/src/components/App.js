import React, { Component } from 'react';
import Header from './Header';
import NoteContainer from './NoteContainer';

class App extends Component {

  hello = () => {
    alert("I DON'T DO ANYTHING, BUT HI")
  }

  render() {
    return (
      <div className="app">
        <Header
          hello={this.hello}
        />
        <NoteContainer />
      </div>
    );
  }
}

export default App;

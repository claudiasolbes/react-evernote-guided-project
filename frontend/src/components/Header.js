import React from 'react';

const Header = (props) => {
  return (
    <div className="nav-bar">
      <ul>
        <li className="nav-item" onClick={props.hello}><h2>NoteKeeper</h2></li>
      </ul>
    </div>
  );
}

export default Header;

import React from 'react';
import './Note.css';

const Note = (props) => {
  return <div className="note-card">{props.text}</div>;
};

export default Note;

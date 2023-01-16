import React, { useState, useEffect } from 'react';
import NoteList from './components/NoteList';
import AddNoteForm from './components/AddNoteForm';
import Note from './components/Note';
import axios from "axios";
import './App.css';
import Navbar from './components/Navbar';

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    getNotes();
  }, []);

  const handleSave = async (text) => {
    try {
      const response = await axios.post("http://localhost:5000/api/notes/add", { text });
      setNotes([...notes, response.data]);
    } catch (err) {
      console.error(err);
    }
  };

  const getNotes = async () => {
    try {
        const response = await axios.get("http://localhost:5000/api/notes");
        setNotes(response.data);
    } catch (err) {
        console.error(err);
    }
  };

  const deleteNote = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/notes/${id}`);
      setNotes(notes.filter(note => note._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const updateNote = async (id, text) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/notes/${id}`, { text });
      setNotes(notes.map(note => (note._id === id ? response.data :
        note)));
    } catch (err) {
      console.error(err);
    }
  };

  const handleNoteClick = (id) => {
    setSelectedNote(notes.find(note => note._id === id));
  };

  return (
      <div className="App">
      <Navbar />
      <div className="notes-container">
      <NoteList notes={notes} onSave={handleSave} onNoteClick={handleNoteClick} onDelete={deleteNote} />
      </div>
      {selectedNote ? (
        <Note note={selectedNote} onSave={updateNote} />
      ) : (
        <AddNoteForm onSave={handleSave} />
      )}
    </div>
  );
}

export default App
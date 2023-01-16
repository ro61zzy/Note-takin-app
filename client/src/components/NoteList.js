import React, { useState } from 'react';
import NoteCard from './NoteCard';
import axios from 'axios';

const NoteList = ({ notes, onSave, onNoteClick, onDelete }) => {
    const [selectedNotes, setSelectedNotes] = useState([]);

    const handleNoteSelect = (note, isSelected) => {
        if (isSelected) {
            setSelectedNotes([...selectedNotes, note]);
        } else {
            setSelectedNotes(selectedNotes.filter(n => n._id !== note._id));
        }
    }

    const deleteSelectedNotes = (selectedNotes) => {
        selectedNotes.forEach(note => {
            axios
            .delete(`http://localhost:5000/api/notes/${note._id}`)
            .then(() => {
                onDelete(note._id);
                setSelectedNotes(prevSelectedNotes => prevSelectedNotes.filter(n => n._id !== note._id));
            });
        });
    }

    return (
        <div className="notes-container grid gap-4 grid-cols-3">
            {notes.map(note => (
                <div className="note-card p-4 bg-gray-200 rounded-lg shadow-md">
                <NoteCard className="grid gap-4 grid-cols-3" key={note._id} note={note} onSave={onSave} onNoteClick={onNoteClick} onNoteSelect={handleNoteSelect} />
                </div>
            ))}
            <button className="bg-red-500 font-bold  w-32 h-14 text-white py-2 px-4 rounded-md hover:bg-red-600"  onClick={() => deleteSelectedNotes(selectedNotes)}>DELETE</button>
        </div>
    );
}

export default NoteList;

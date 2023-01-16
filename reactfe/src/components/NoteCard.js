import React, { useState } from 'react';

function NoteCard({ note, onNoteSelect }) {
    const [isSelected, setIsSelected] = useState(false);

    const handleSelection = (e) => {
        setIsSelected(e.target.checked);
        onNoteSelect(note, e.target.checked);
    }

    return (
        <div className="flex justify-center w-1/3 overflow-y-scroll whitespace-pre-wrap">
    <input type="checkbox" className="self-center" checked={isSelected} onChange={handleSelection} />
    <div className="p-4 rounded-lg mx-2 text-center px-4 py-2 text-base">{note.text}</div>
</div>





        // <div className="note-card">
        //     <input type="checkbox" checked={isSelected} onChange={handleSelection} />
        //     <div>{note.text}</div>
        // </div>
    );
}

export default NoteCard;

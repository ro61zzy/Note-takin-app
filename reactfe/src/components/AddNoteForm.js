import React, { useState } from 'react';
import axios from "axios";


const AddNoteForm = ({ onSave }) => {
  const [text, setText] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    //console.log("text", text);
    if (!text.trim()) {
      return;
    }
    try {
        await axios({
            method: 'post',
            url: '/api/notes/add',
            baseURL: 'http://localhost:5000',
            headers: {
                'content-type': 'application/json'
            },
            data: {text}
            }).then((response) => {
              onSave(text);
              setText("");
              });
    } catch (error) {
        console.log("error", error);
    }
  }

  
  return (
    <form className='form' onSubmit={handleSubmit}>
  <textarea
    placeholder="My Note"
    onChange={(event) => setText(event.target.value)}
    className="form-control h-64 rounded-lg bg-yellow-200"
  />
  <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white w-32 h-14 font-bold py-2 px-4 rounded-lg">
    Add Note
</button>

</form>


//     <form className='form' onSubmit={handleSubmit}>
//       <input
//   type="text"
//   placeholder="My Note"
//   onChange={(event) => setText(event.target.value)}
//   className="form-control"
// />

//       <button type="submit">Add Note</button>
//     </form>
  );
};

export default AddNoteForm;

const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

router.get('/notes', (req, res) => {
    Note.find({})
    .then(notes => res.json(notes));
});

router.post('/notes/add', (req, res) => {
    console.log({
        body: req.body
    })
    const newNote = new Note({
        text: req.body.text
    });
    newNote.save()
    .then(note => res.json(note));
});

router.put('/notes/:id', (req, res) => {
    Note.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(note => res.json(note));
});

router.delete('/notes/:id', (req, res) => {
    Note.findByIdAndRemove(req.params.id)
    .then(() => res.json({ success: true }));
});

module.exports = router;

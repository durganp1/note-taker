

const { findById, createNewNote } = require('../../lib/notes');
const { notes } = require('../../db/db.json');
const router = require('express').Router();
const uniqid = require('uniqid');

router.get('/notes', (req, res) => {
    let results = notes;
    
    
    res.json(results);
});

router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
        res.json(result);
    } 
    else {
        res.send(404);
    }
});



router.post('/notes', (req, res) => {
    req.body.id = uniqid();
    const note = createNewNote(req.body, notes);
    res.json(note);
});

module.exports = router;
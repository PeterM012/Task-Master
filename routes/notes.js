const path = require('path')
const noteTaker = require('express').Router();

noteTaker.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
})

noteTaker.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

modules.exports = noteTaker;
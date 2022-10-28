const path = require('path')
const noteTaker = require('express').Router();

noteTaker.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
})

noteTaker.post('/', (req,res) => {
 console.log(req);
})

module.exports = noteTaker;
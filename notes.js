const path = require('path')
const noteTaker = require('express').Router();
const uuid = require('uuid')
const db = require('./db/db.json')
const fs = require('fs')

let noteInput = [];

for (const note of db){
    noteInput.push(note)
}; 

noteTaker.get('/', (req,res) => {
    res.send(JSON.stringify(noteInput))
})

noteTaker.post('/', (req,res) => {
    noteInput.push({
        id: uuid.v4(),
        title: req.body.title,
        text: req.body.text
    })
    fs.writeFile('./db/db.json', JSON.stringify(noteInput), (err) => {
        if(err) console.log("Error");
    })
    res.send('Note Saved!')
})

noteTaker.delete('/:deleteNote', (req,res) => {
    for (let i = 0; i < noteInput.length; i++) {
        if(noteInput[i].id == req.params.deleteNote){
        noteInput.splice(i,1);
        break;
        }      
    }
    res.send('Note Deleted!')
}); 
    




module.exports = noteTaker;
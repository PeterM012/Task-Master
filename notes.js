
const noteTaker = require('express').Router();
const uuid = require('uuid')
const db = require('./db/db.json')
// We import the `fs` module to enable interaction with the file system
const fs = require('fs')

//Empty array for taking in the post
let noteInput = [];

//Loop adds one or more elements to the end of an array and returns the new length of the array.
for (const note of db){
    noteInput.push(note)
}; 

//Stringify JSON note inputs 
noteTaker.get('/', (req,res) => {
    res.send(JSON.stringify(noteInput))
})

// POST Route for submitting notes
noteTaker.post('/', (req,res) => {
    noteInput.push({
        id: uuid.v4(),
        title: req.body.title,
        text: req.body.text
    })
    // File description path of the file to be written in db.json.
    fs.writeFile('./db/db.json', JSON.stringify(noteInput), (err) => {
        if(err) console.log("Error");
    })
    res.send('Note Saved!')
})

 // Iterate through the notesInput to delete `req.params.delete notes`
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
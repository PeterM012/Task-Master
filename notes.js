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

noteTaker.delete('/', (req,res) => {
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




module.exports = noteTaker;
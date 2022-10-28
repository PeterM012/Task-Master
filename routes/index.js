const fs = require('fs')
const noteTaker = require('express').Router();
const newId = require('newId');
const db = require('../db/db.json')

noteTaker.get('api/notes', (req,res) => {
    fs.readFile('./db/db.json', (err,data) => {
        if(err) throw(err);
        res.send(data)
    })
})

noteTaker.post('api/notes', (req,res) => {
    let newEntry = {
        id: newId(),
        title: req.body.title,
        text: req.body.text
    }
    fs.readFile('./db/db.json', (err,data) => {
        if(err) throw(err);
        let newNote = JSON.parse(data);
        newNote.push(newEntry);

        fs.writeFile('./db/db.json', JSON.stringify(newNote),(err) => {
            if(err) throw(err);
            res.send('new note created')
    })
  })
});

module.export = noteTaker;
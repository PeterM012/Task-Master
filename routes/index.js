const fs = require('fs')
const app = require('express').Router();
const newId = require('newId');
const db = require('../db/db.json')

app.get('api/notes', (req,res) => {
    fs.readFile('./db/db.json', (err,data) => {
        if(err) throw(err);
        res.send(data)
    })
})


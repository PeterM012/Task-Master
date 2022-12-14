// Dependencies
const express = require('express');
const path = require('path');
// Sets up the Express App
const app = express();
const PORT = process.env.PORT|| 3001;

const htmlRoutes = require('./notes.js');

// Sets up the Express app to handle data parsing
// Middleware for parsing application/json and urlencoded data
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.use('/api/notes',htmlRoutes);

// GET route to get to the notes // GET request
// GET Route for retrieving all the notes and index 
app.get('/notes', (req,res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'));
})

app.get('/*', (req,res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
})

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

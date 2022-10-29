# Task-Master
https://task-master-21.herokuapp.com/

## Img
![image](https://user-images.githubusercontent.com/110750833/198754670-c372329c-db40-4997-8136-7b5539ac977f.png)


## Technologies Used
- JS - Used to create interactions and animations on webpage
- Node JS - Run Code outside browser and add in additional modules
- EXPRESS JS - Usec for a back end web application framework for building RESTful APIs with Node.js

## To Do
Make note-taking application open the Note Taker
Presented with a landing page with a link to a notes page click on the link to the notes page
Presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
Enter a new note title and the note’s text Save icon appears in the navigation at the top of the page
Click on the Save icon the new note I have entered is saved and appears in the left-hand column with the other existing notes
Click on an existing note in the list in the left-hand column that note appears in the right-hand column
Click on the Write icon in the navigation at the top of the page presented with empty fields to enter a new note title and the note’s text in the right-hand column


## Summary 
This project was to create a note-taking application using EXPRESS.JS. To begin this task I had to spend some time reading different articles such as how to install EXPRESS and how to use GET and POST. After reviewing the material and the given code I was going to need I utilizing Node.JS to check that my communications were fucntions and API/JS to make sure my HTML page was working correctly. In order to complete this task I had to use the starter code given, and navigate through each code to understand what was going to be needed. I determined that using GET and POST were going to be needed inorder to route my require method. During my research I discovered how to use the db inoreder to create new entries for the notes. I felt the most challenging task to overcome for this task was understanding how to read the starter code and use it to execute this assignment. Something that I took away from this was how you can minimize the amount of code needed. I feel at the end of this I have achieved a better EXPRESS.JS understanding Below is my code for the function that excutes the the notes being entered and saved and deleted.

## Code Snippet
JS
```js
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.port || 3001;

const htmlRoutes = require('./notes.js');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.use('/api/notes',htmlRoutes);

app.get('/notes', (req,res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'));
})

app.get('/*', (req,res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
})

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

```

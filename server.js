const express = require('express');
const path = require('path');
const app = express();
const PORT =;

const apiRoutes = require('./routes/index');
const htmlRoutes = require('./routes/notes');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

// register middleware - something that runs for each request
// we are telling express to serve up all assets from our publicPath directory
app.use(express.static(publicPath));

// route any request we can't understand to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('Server is up');
});
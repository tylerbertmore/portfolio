const express = require('express')
const app = express();
const path = require('path');
require('dotenv').config();
const PORT = process.env.PORT || 5000;

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/resume', (req, res) => {
  res.sendFile(path.join(__dirname, './public', 'tyler-bertmore-resume.pdf'));
})


app.listen(PORT, () => console.log(`Server Listening on port: ${PORT}`))
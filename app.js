const express = require('express');
const app = express();
const port = 3001;

app.use(express.static('public')); // Static files serve karne ke liye

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`EasyShop running at http://localhost:${port}`);
});

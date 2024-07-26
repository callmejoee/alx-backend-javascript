const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// New route for cart ID
app.get('/cart/:id', (req, res) => {
  const { id } = req.params;

  // Validate if id is a number
  if (!isNaN(parseInt(id, 10))) {
    res.send(`Payment methods for cart ${id}`);
  } else {
    res.status(404).send('Not Found');
  }
});

const server = app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

module.exports = server;


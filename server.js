const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(__dirname));

app.get('/api/more-info', (req, res) => {
  res.json({
    message:
      'We have been providing aerial fumigation services since 1995. ' +
      'Our fleet includes 12 fixed-wing aircraft and 30 professional agricultural drones, ' +
      'covering over 50,000 hectares annually across the region. ' +
      'All pilots hold certified agricultural aviation licenses and follow strict environmental protocols. ' +
      'Contact us today to schedule a free field assessment.'
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

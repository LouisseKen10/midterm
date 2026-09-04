//LOUISSE KEN W. TIOSEJO        WD-301
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/', function (req, res) {
  res.send('Request Header Parser Microservice - try /api/whoami');
});

app.get('/api/whoami', function (req, res) {
  res.json({
    ipaddress: req.ip,
    language: req.headers['accept-language'],
    software: req.headers['user-agent']
  });
});

app.listen(PORT, function () {
  console.log('Server running at http://localhost:' + PORT);
});
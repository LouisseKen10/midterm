//TIOSEJO, LOUISSE KEN W.       WD-301
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.send('Timestamp Microservice - try /api or /api/2015-12-25');
});

function handleDate(dateString, res) {
  var dateObject;

  if (!dateString) {
    dateObject = new Date();
  } else if (/^\d+$/.test(dateString)) {
    dateObject = new Date(parseInt(dateString));
  } else {
    dateObject = new Date(dateString);
  }

  if (dateObject.toString() === 'Invalid Date') {
    return res.json({ error: 'Invalid Date' });
  }

  res.json({
    unix: dateObject.getTime(),
    utc: dateObject.toUTCString()
  });
}

app.get('/api', function (req, res) {
  handleDate(null, res);
});

app.get('/api/:date', function (req, res) {
  handleDate(req.params.date, res);
});

app.listen(PORT, function () {
  console.log('Server running at http://localhost:' + PORT);
});

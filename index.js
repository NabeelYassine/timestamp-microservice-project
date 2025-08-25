// index.js
// Timestamp Microservice - Backend Implementation

const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for FCC testing
app.use(cors({ optionsSuccessStatus: 200 }));

// Serve static files
app.use(express.static('public'));

// Route handler for the root endpoint
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// API endpoint for timestamp conversion
app.get("/api/:date?", (req, res) => {
  let date;
  const inputDate = req.params.date;

  // Handle empty date parameter (current time)
  if (!inputDate) {
    date = new Date();
    return res.json({
      unix: date.getTime(),
      utc: date.toUTCString()
    });
  }

  // Check if input is a Unix timestamp (numeric string)
  if (/^\d+$/.test(inputDate)) {
    date = new Date(parseInt(inputDate));
  } else {
    date = new Date(inputDate);
  }

  // Validate date
  if (isNaN(date.getTime())) {
    return res.json({ error: "Invalid Date" });
  }

  // Return valid date response
  res.json({
    unix: date.getTime(),
    utc: date.toUTCString()
  });
});

// Listen on port set in environment variable or default to 3000
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Timestamp Microservice is running on port ' + listener.address().port);
});

module.exports = app; 
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5000;
const FILE_PATH = path.join(__dirname, 'history.txt');

app.use(bodyParser.json());
app.use(cors());

//reads file
function readHistoryFromFile() {
  return new Promise((resolve, reject) => {
    fs.readFile(FILE_PATH, 'utf8', (err, data) => {
      if (err) {
        return reject('Error reading file');
      }
      try {
        const entries = data.trim() ? JSON.parse(data) : [];
        if (!Array.isArray(entries)) {
          throw new Error('Data is not an array');
        }
        resolve(entries);
      } catch (parseError) {
        reject('Error parsing file data');
      }
    });
  });
}

// writes to file
function writeHistoryToFile(entries) {
  return new Promise((resolve, reject) => {
    fs.writeFile(FILE_PATH, JSON.stringify(entries, null, 2), (err) => {
      if (err) {
        return reject('Error writing to file');
      }
      resolve();
    });
  });
}

// Endpoint that gets BMI history
app.get('/history', async (req, res) => {
  try {
    const entries = await readHistoryFromFile();
    res.json(entries);
  } catch (error) {
    res.status(500).json({ error });
  }
});

// Endpoint that adds new BMI entry
app.post('/history', async (req, res) => {
  const { weight, height, bmi, date } = req.body;
  const newEntry = { weight, height, bmi, date };

  try {
    const entries = await readHistoryFromFile();
    entries.push(newEntry);

    entries.sort((a, b) => new Date(a.date) - new Date(b.date));

    if (entries.length >= 8) {
      entries.splice(0, entries.length - 7); // Remove oldest entries
    }

    await writeHistoryToFile(entries);
    res.json(entries);
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

const express = require('express');
const fs = require('fs').promises;

const app = express();

// Function to count students from a CSV file
async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length <= 1) {
      return 'Number of students: 0';
    }

    const students = {};
    let totalStudents = 0;

    for (let i = 1; i < lines.length; i += 1) {
      const fields = lines[i].split(',');

      if (fields.length === 4) {
        const field = fields[3];
        const firstName = fields[0];

        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstName);
        totalStudents += 1;
      }
    }

    let result = `Number of students: ${totalStudents}\n`;
    for (const field in students) {
      if (Object.prototype.hasOwnProperty.call(students, field)) {
        const count = students[field].length;
        const names = students[field].join(', ');
        result += `Number of students in ${field}: ${count}. List: ${names}\n`;
      }
    }

    return result.trim();
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

// Route for '/'
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Route for '/students'
app.get('/students', async (req, res) => {
  const databasePath = process.argv[2]; // Get the database path from command-line arguments
  try {
    const studentsList = await countStudents(databasePath);
    res.send(`This is the list of our students\n${studentsList}`);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Start the server
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;

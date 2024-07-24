const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return;
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

    console.log(`Number of students: ${totalStudents}`);
    for (const field in students) {
      if (Object.prototype.hasOwnProperty.call(students, field)) {
        const count = students[field].length;
        const names = students[field].join(', ');
        console.log(`Number of students in ${field}: ${count}. List: ${names}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

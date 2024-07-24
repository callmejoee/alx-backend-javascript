const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    const students = {};
    let totalStudents = 0;

    for (let i = 1; i < lines.length; i += 1) { // Use i += 1 instead of i++
      const fields = lines[i].split(',');
      if (fields.length === 4) { // making sure there are 4 columns
        const field = fields[3];
        const firstName = fields[0];

        if (!Object.prototype.hasOwnProperty.call(students, field)) {
          students[field] = [];
        }
        students[field].push(firstName);
        totalStudents += 1; // Use totalStudents += 1 instead of totalStudents++
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

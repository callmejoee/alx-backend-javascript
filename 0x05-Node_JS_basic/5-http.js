const http = require('http');
const fs = require('fs').promises;
const url = require('url');

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length <= 1) {
      return { total: 0, fields: {} };
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

    return { total: totalStudents, fields: students };
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

const app = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname } = parsedUrl;

  if (pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (pathname === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');

    const database = process.argv[2];

    try {
      const { total, fields } = await countStudents(database);
      res.write(`Number of students: ${total}\n`);
      for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          const count = fields[field].length;
          const names = fields[field].join(', ');
          res.write(`Number of students in ${field}: ${count}. List: ${names}\n`);
        }
      }
    } catch (error) {
      res.write(error.message);
    }

    res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found\n');
  }
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;

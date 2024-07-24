import fs from 'fs/promises';

export const readDatabase = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== '');

    const students = {};
    for (let i = 1; i < lines.length; i++) {
      const fields = lines[i].split(',');

      if (fields.length === 4) {
        const field = fields[3].trim();
        const firstName = fields[0].trim();

        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstName);
      }
    }

    return students;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

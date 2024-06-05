interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

class UniversityStudent implements Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;

  constructor(firstName: string, lastName: string, age: number, location: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
}

const stud1: Student = new UniversityStudent("John", "Doe", 30, "West ST. NY");
const stud2: Student = new UniversityStudent("Mary", "Smith", 30, "North ST. MA");

const studentsList: Student[] = [stud1, stud2];

const table = document.createElement('table');
const tableHead = document.createElement('thead');
const headerRow = document.createElement('tr');
const header1 = document.createElement('th');
const header2 = document.createElement('th');

header1.textContent = 'First Name';
header2.textContent = 'Location';

headerRow.appendChild(header1);
headerRow.appendChild(header2);
tableHead.appendChild(headerRow);
table.appendChild(tableHead);

const tableBody = document.createElement('tbody');

studentsList.forEach((student) => {
  const row = document.createElement('tr');
  const cell1 = document.createElement('td');
  const cell2 = document.createElement('td');

  cell1.textContent = student.firstName;
  cell2.textContent = student.location;

  row.appendChild(cell1);
  row.appendChild(cell2);
  tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);


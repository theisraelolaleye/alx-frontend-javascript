// main.ts

// 1. Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2. Create two students
const student1: Student = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 21,
  location: "New York",
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Smith",
  age: 23,
  location: "California",
};

// 3. Create an array containing the students
const studentsList: Student[] = [student1, student2];

// 4. Render a table with Vanilla JS
const table: HTMLTableElement = document.createElement("table");
const tableHead: HTMLTableSectionElement = table.createTHead();
const headerRow: HTMLTableRowElement = tableHead.insertRow();

const header1: HTMLTableCellElement = headerRow.insertCell();
header1.textContent = "First Name";

const header2: HTMLTableCellElement = headerRow.insertCell();
header2.textContent = "Location";

const tableBody: HTMLTableSectionElement = table.createTBody();

// Append rows for each student
studentsList.forEach((student: Student): void => {
  const row: HTMLTableRowElement = tableBody.insertRow();
  const firstNameCell: HTMLTableCellElement = row.insertCell();
  const locationCell: HTMLTableCellElement = row.insertCell();

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});

// Append the table to the body
document.body.appendChild(table);

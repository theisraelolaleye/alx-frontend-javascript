
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// TeacherInterface with required methods
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class implementing DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Function to create either Director or Teacher based on salary
function createEmployee(salary: number): Director | Teacher {
  if (salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Type predicate function to check if employee is Director
export function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// Function to execute work based on employee type
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// String literal type for subjects
type Subjects = "Math" | "History";

// Function to teach class based on subject
export function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else if (todayClass === "History") {
    return "Teaching History";
  }
  return "Unknown subject";
}

// Example usage:

console.log(createEmployee(200)); // Teacher
console.log(createEmployee(1000)); // Director

const employee1 = createEmployee(200);
const employee2 = createEmployee(1000);

console.log(executeWork(employee1)); // Getting to work
console.log(executeWork(employee2)); // Getting to director tasks

console.log(teachClass("Math")); // Teaching Math
console.log(teachClass("History")); // Teaching History



// // Task 5: Advanced types Part 1

// interface DirectorInterface {
//   workFromHome(): string;
//   getCoffeeBreak(): string;
//   workDirectorTasks(): string;
// }

// interface TeacherInterface {
//   workFromHome(): string;
//   getCoffeeBreak(): string;
//   workTeacherTasks(): string;
// }

// class Director implements DirectorInterface {
//   workFromHome(): string {
//     return "Working from home";
//   }

//   getCoffeeBreak(): string {
//     return "Getting a coffee break";
//   }

//   workDirectorTasks(): string {
//     return "Getting to director tasks";
//   }
// }

// class Teacher implements TeacherInterface {
//   workFromHome(): string {
//     return "Cannot work from home";
//   }

//   getCoffeeBreak(): string {
//     return "Cannot have a break";
//   }

//   workTeacherTasks(): string {
//     return "Getting to work";
//   }
// }

// function createEmployee(salary: number | string): Director | Teacher {
//   if (typeof salary === "number" && salary < 500) {
//     return new Teacher();
//   }
//   return new Director();
// }

// // Task 6: Creating functions specific to employees

// function isDirector(employee: Director | Teacher): employee is Director {
//   return employee instanceof Director;
// }

// function executeWork(employee: Director | Teacher): string {
//   if (isDirector(employee)) {
//     return employee.workDirectorTasks();
//   } else {
//     return employee.workTeacherTasks();
//   }
// }

// // Task 7: String literal types

// type Subjects = "Math" | "History";

// function teachClass(todayClass:Subjects): string {
//   if (todayClass === "Math") {
//     return "Teaching Math";
//   } else if (todayClass === "History") {
//     return "Teaching History";
//   }
//   // (TypeScript will ensure no other values possible)
// }

// // -- Testing outputs --

// console.log(createEmployee(200));    // Teacher instance
// console.log(createEmployee(1000));   // Director instance
// console.log(createEmployee('$500')); // Director instance

// console.log(executeWork(createEmployee(200)));    // Getting to work
// console.log(executeWork(createEmployee(1000)));   // Getting to director tasks

// console.log(teachClass("Math"));     // Teaching Math
// console.log(teachClass("History"));  // Teaching History
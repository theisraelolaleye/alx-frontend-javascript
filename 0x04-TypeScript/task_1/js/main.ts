interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}
interface Director extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: true,
};

const director1: Director = {
  firstName: "Jane",
  lastName: "Smith",
  fullTimeEmployee: true,
  location: "New York",
  numberOfReports: 5,
};

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};


console.log(teacher3);
console.log(director1);
console.log(printTeacher("John", "Doe")); // J. Doe



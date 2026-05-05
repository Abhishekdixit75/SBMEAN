// TypeScript Basics

let studentName: string = "Asha";
let age: number = 20;
let isActive: boolean = true;

let marks: number[] = [85, 90, 88];

interface Student {
  id: number;
  name: string;
  course: string;
}

const student: Student = {
  id: 1,
  name: studentName,
  course: "Web Development"
};

function getAverage(scores: number[]): number {
  const total = scores.reduce((sum, score) => sum + score, 0);
  return total / scores.length;
}

class User {
  constructor(public username: string, public role: string) {}

  getInfo(): string {
    return `${this.username} is a ${this.role}`;
  }
}

const user1 = new User("Ravi", "Admin");

console.log("Student:", student);
console.log("Age:", age);
console.log("Active:", isActive);
console.log("Average Marks:", getAverage(marks));
console.log(user1.getInfo());

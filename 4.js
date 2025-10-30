function Student(name) {
  this.name = name;
  this.group = "ПИ-21-1";
}

let student1 = new Student("Алексей");
let student2 = new Student("Екатерина");
let student3 = new Student("Дмитрий");

console.log(student1.name); // Алексей
console.log(student2.group); // ПИ-21-1
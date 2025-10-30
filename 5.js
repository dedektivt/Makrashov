function Student(name, age, specialty) {
  this.name = name;
  this.age = age;
  this.specialty = specialty;

  this.introduce = function() {
    console.log("Я " + this.name + ", учусь на " + this.specialty);
  };
}

let student = new Student("Ирина", 20, "информатике");
student.introduce(); // Я Ирина, учусь на информатике
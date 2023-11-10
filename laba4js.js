// Task 1: Create an object "Faculty"

const faculty = {
    name: "Faculty of Science",
    phone: "123-456-7890",
  };

  // Task 2: Create an object "Group" with properties and methods
  const group = {
    specialty: "Computer Science",
    course: "Bachelor's",
    numberOfStudents: 30,
    addData(specialty, course, numberOfStudents) {
      this.specialty = specialty;
      this.course = course;
      this.numberOfStudents = numberOfStudents;
    },
    updateData(specialty, course, numberOfStudents) {
      if (specialty) this.specialty = specialty;
      if (course) this.course = course;
      if (numberOfStudents) this.numberOfStudents = numberOfStudents;
    },
    deleteData() {
      this.specialty = "";
      this.course = "";
      this.numberOfStudents = 0;
    },
  };
  
  // Task 3: Copy properties and methods from "Faculty" and "Group" objects
  const facultyCopy = { ...faculty };
  const groupCopy = { ...group };
  
  // Task 4: Add "showData" method to the prototype of "Group"
  group.__proto__.showData = function () {
    console.log(`
      Specialty: ${this.specialty}
      Course: ${this.course}
      Number of Students: ${this.numberOfStudents}
    `);
  };
  
  // Task 5: Create an object "Session" that inherits from "Group" and has additional properties and methods
  const session = Object.create(group);
  session.expelled = 5;
  
  // Override the "showData" method in "Session"
  session.showData = function () {
    console.log(`
      Specialty: ${this.specialty}
      Course: ${this.course}
      Number of Students: ${this.numberOfStudents}
      Expelled: ${this.expelled}
    `);
  };
  
  // Task 6: Implement classes "GroupClass" and "SessionClass" with getters and setters
  class GroupClass {
    constructor(specialty, course, numberOfStudents) {
      this._specialty = specialty;
      this._course = course;
      this._numberOfStudents = numberOfStudents;
    }
  
    get specialty() {
      return this._specialty;
    }
  
    set specialty(value) {
      this._specialty = value;
    }
  
    get course() {
      return this._course;
    }
  
    set course(value) {
      this._course = value;
    }
  
    get numberOfStudents() {
      return this._numberOfStudents;
    }
  
    set numberOfStudents(value) {
      this._numberOfStudents = value;
    }
  
    showData() {
      console.log(`
      Specialty: ${this._specialty}
      Course: ${this._course}
      Number of Students: ${this._numberOfStudents}
    `);
    }
  }
  
  class SessionClass extends GroupClass {
    constructor(specialty, course, numberOfStudents, expelled) {
      super(specialty, course, numberOfStudents);
      this._expelled = expelled;
    }
  
    get expelled() {
      return this._expelled;
    }
  
    set expelled(value) {
      this._expelled = value;
    }
  
    showData() {
      console.log(`
      Specialty: ${this._specialty}
      Course: ${this._course}
      Number of Students: ${this._numberOfStudents}
      Expelled: ${this._expelled}
    `);
    }
  }
  
  // Demonstrate the functionality
  console.log("Task 1: Faculty Details");
  console.log(faculty);
  
  console.log("\nTask 2: Group Details");
  group.showData();
  group.addData("Physics", "Master's", 25);
  console.log("Updated Group Details");
  group.showData();
  group.deleteData();
  console.log("Deleted Group Details");
  group.showData();
  console.log("Task 3: Copied Faculty and Group");
  console.log("Faculty Copy:", facultyCopy);
  console.log("Group Copy:", groupCopy);
  console.log("\nTask 4: Group Prototype Method");
  group.showData();
  
  console.log("\nTask 5: Session Details");
  session.showData();
  
  console.log("\nTask 6: GroupClass and SessionClass");
  const groupClassInstance = new GroupClass("Mathematics", "Bachelor's", 40);
  console.log("GroupClass Details");
  groupClassInstance.showData();
  
  const sessionClassInstance = new SessionClass("Chemistry", "Master's", 30, 3);
  console.log("\nSessionClass Details");
  sessionClassInstance.showData();
  
  
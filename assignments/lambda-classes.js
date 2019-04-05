// CODE here for your Lambda Classes

class Person {
  constructor(attr) {
    this.name = attr.name;
    this.age = attr.age;
    this.location = attr.location;
    this.gender = attr.gender;
  }

  speak() {
    if (this.age < 3) {
      return `${this.name} is too young to be able to talk!`;
    } else return `Hello my name is ${this.name}, I am from ${this.location}.`;
  }
}

class Instructor extends Person {
  constructor(insAttr) {
    super(insAttr);
    this.specialty = insAttr.specialty;
    this.favLanguage = insAttr.favLanguage;
    this.catchPhrase = insAttr.catchPhrase;
  }

  demo(subject) {
    return `Today we are learning about ${subject}.`;
  }

  grade(student, subject) {
    return `${student} recieves a perfect score on ${subject}!`;
  }
}

class Student extends Person {
  constructor(studAttr) {
    super(studAttr);
    this.previousBackground = studAttr.previousBackground;
    this.className = studAttr.className;
    this.favSubjects = studAttr.favSubjects;
  }

  listsSubjects() {
    return `${this.name}'s favorite subjects are ${this.favSubjects[0]}, ${
      this.favSubjects[1]
    }, and ${this.favSubjects[2]}. `;
  }

  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}.`;
  }

  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}.`;
  }
}

class ProjectManager extends Person {
  constructor(pmAttr) {
    super(pmAttr);
    this.gradClassName = pmAttr.gradClassName;
    this.favInstructor = pmAttr.favInstructor;
  }

  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!`;
  }

  debugsCode(student, subject) {
    return `${this.name} debugs ${student}'s code on ${subject}.`;
  }
}

const joe = new Person({
  name: "Joe",
  age: 2,
  location: "Crib",
  gender: "male"
});

const jen = new Person({
  name: "Jen",
  age: 54,
  location: "Hollywood",
  gender: "female"
});

const fred = new Instructor({
  name: "Fred",
  location: "Bedrock",
  age: 37,
  gender: "male",
  favLanguage: "JavaScript",
  specialty: "Front-end",
  catchPhrase: `Don't forget the homies`
});

const james = new Instructor({
  name: "James",
  location: "Waxahatchie",
  age: 56,
  gender: "male",
  favLanguage: "C++",
  specialty: "Back-end",
  catchPhrase: `If it's wet and it ain't yours, dont touch it.`
});

const gill = new Student({
  name: "Gill",
  age: 21,
  location: "Ireland",
  gender: "male",
  previousBackground: "boosted LOL accounts",
  className: "WEBPT5",
  favSubjects: ["math", "english", "CSS"]
});

const gillie = new Student({
  name: "Gillie",
  age: 21,
  location: "Ireland",
  gender: "female",
  previousBackground: "landscaping",
  className: "WEBPT5",
  favSubjects: ["athletics", "spanish", "algebra"]
});

const ingrid = new ProjectManager({
  name: "Ingrid",
  age: 93,
  location: "Lafayette",
  gender: "female",
  gradClassName: "CSS1",
  favInstructor: "Judy"
});

const maza = new ProjectManager({
  name: "Maza",
  age: 29,
  location: "Jerusalem",
  gender: "male",
  gradClassName: "CSS1",
  favInstructor: "Ganja"
});

//Person

console.log(joe.speak());
console.log(joe.location);

console.log(jen.speak());
console.log(jen.gender);

//Instructors

console.log(fred.demo("python"));
console.log(fred.grade(gill.name, "python"));
console.log(fred.speak());

console.log(james.name);
console.log(james.favLanguage);
console.log(james.catchPhrase);

//Students

console.log(gill.listsSubjects());
console.log(gill.PRAssignment("JS"));
console.log(gill.sprintChallenge("JS"));

console.log(gillie.gender);
console.log(gillie.previousBackground);

//PM's

console.log(ingrid.age);
console.log(ingrid.standUp("webpt5_Ingrid"));
console.log(ingrid.debugsCode(gillie.name, "HTML"));

console.log(maza.location);
console.log(maza.gradClassName);
console.log(maza.favInstructor);

// CODE here for your Lambda Classes
class Person {
  constructor(attrs) {
    (this.name = attrs.name),
      (this.age = attrs.age),
      (this.location = attrs.location);
  }
  speak() {
    return `Hello, my name is ${this.name}. I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(attrs) {
    super(attrs),
      (this.specialty = attrs.specialty),
      (this.favLang = attrs.favLang),
      (this.catchPhrase = attrs.catchPhrase);
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(subject) {
    return `${this.name} receives a perfect score on ${subject}`;
  }
}

class Student extends Person {
  constructor(attrs) {
    super(attrs),
      (this.prevBg = attrs.prevBg),
      (this.className = attrs.className),
      (this.favSub = attrs.favSub);
  }
  listsSubjects() {
    return `Hello, my name is ${this.name} and my favorite coding languages are ${this.favSub}`;
  }
  PRAssignment(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
}

class ProjectManagers extends Person {
  constructor(attrs) {
    super(attrs),
      (this.gradClassName = attrs.gradClassName),
      (this.favInstructor = attrs.favInstructor);
  }
  standUp(channel) {
    return `${this.name} announces to ${channel} @channel standy times!`;
  }
  debugCode(student_name, subject) {
    return `${this.name} debugs ${student_name}'s code on ${subject}`;
  }
}

const Dom = new Instructor({
  name: "Dom",
  location: "Philadelphia",
  age: 20,
  favSub: "JavaScript, CSS, HTML",
  specialty: "Front-end",
  catchPhrase: `Buy low, sell high.`
});

const Jay = new Instructor({
  name: "Jay",
  location: "Albuquerque",
  age: 30,
  favSub: "Python, C+, C++",
  specialty: "Back-end",
  catchPhrase: `Here's lookin' at you, kid.`
});

const Lee = new Student({
  name: "Lee",
  location: "Omaha",
  age: 40,
  favSub: "JavaScript, CSS, HTML",
  specialty: "Full Stack",
  catchPhrase: `Go ahead, make my day.`
});

const Mary = new Student({
  name: "Mary",
  location: "New York",
  age: 50,
  favSub: "Python, C+, C++",
  specialty: "Front-end",
  catchPhrase: `You talkin' to me?`
});

const Kate = new ProjectManagers({
  name: "Kate",
  location: "Hartford",
  age: 60,
  favSub: "JavaScript, CSS, HTML, Python",
  specialty: "Back-end",
  catchPhrase: `Rosebud`
});

const Eddy = new ProjectManagers({
  name: "Eddy",
  location: "Houston",
  age: 70,
  favSub: "Python, C+, C++",
  specialty: "Full Stack",
  catchPhrase: `Bond, James Bond`
});

console.log(Dom.speak());
console.log(Dom.demo("how to pet a dog"));
console.log(Jay.grade("not throwing his food on the floor"));
console.log(Lee.listsSubjects());
console.log(Mary.PRAssignment("completing an entire sentence"));
console.log(Kate.standUp("Daycare"));
console.log(Eddy.debugCode("Dave", "throwing a tantrum"));

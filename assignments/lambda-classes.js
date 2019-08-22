// CODE here for your Lambda Classes
class Person {
    constructor(personAttr) {
        this.name = personAttr.name;
        this.age = personAttr.age;
        this.location = personAttr.location
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor(instructorAttr) {
        super(instructorAttr);
        this.specialty = instructorAttr.specialty;
        this.favLanguage = instructorAttr.favLanguage;
        this.catchPhrase = "Where's the cheese at?"
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`
    }
}

class Student extends Person {
    constructor(studentAttr) {
        super(studentAttr);
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects
    }
    listsSubjects() {
        this.favSubjects.map(studentAttr => console.log(studentAttr));
    };
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    };
    sprintChallenge() {
        return `${this.name} has begun sprint challenge on ${subject}.`;
    };
};

class ProjectManager extends Instructor {
    constructor(pmAttr) {
        super(pmAttr);
        this.gradClassName = pmAttr.gradClassName;
        this.favInstructor = pmAttr.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`
    }
}

const paul = new Instructor({
    name: 'Paul',
    location: 'New York',
    age: 27,
    favLanguage: 'CSS',
    specialty: 'Front-end',
    catchPhrase: `Where ya at?`,
  });

  console.log(paul.demo(paul.favLanguage));
  console.log(paul.speak())

  const mindy = new Instructor({
    name: 'Mindy',
    location: 'Idaho',
    age: 33,
    favLanguage: 'C#',
    specialty: 'Back-end',
    catchPhrase: `Who likes toast?`,
  });


  const andy = new Student({
      name: 'Andy',
      age: 22,
      location: 'Maine',
      previousBackground: 'History',
      className: 'Web23',
      favSubjects: 'sleeping'
  })

  console.log(andy.speak());
  console.log(andy.PRAssignment('math'));
  console.log(an)






  
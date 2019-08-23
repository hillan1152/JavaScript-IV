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
        return `${student} receives a perfect score on ${subject}.`
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
        return this.favSubjects;
    }
    // for (let i = 0; i <this.favSubjects.length; i++){
    //     console.log(this.favSubjects[i]);
    // }
    //     this.favSubjects.forEach(subject => {
    //         console.log(subject)
    //     })
    // }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun a sprint challenge on ${subject}.`;
    }
};

class ProjectManager extends Instructor {
    constructor(pmAttr) {
        super(pmAttr);
        this.gradClassName = pmAttr.gradClassName
        this.favInstructor = pmAttr.favInstructor
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(name, subject) {
        return `${name} debugs ${name}'s code on ${subject}.`
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
      favSubjects: ['sleeping', 'JS', 'CSS']
  })

  const shane = new Student({
    name: 'Shane',
    age: 24,
    location: 'CT',
    previousBackground: 'Police',
    className: 'Web23',
    favSubjects: ['JS', 'HTML']
})

   const melissa = new ProjectManager ({
    name: 'Melissa',
    age: 44,
    location: 'NC',
    gradClassName: 'CS2',
    favInstructor: 'Steve'
   })

   const chad = new ProjectManager ({
    name: 'Chad',
    age: 78,
    location: 'SC',
    gradClassName: 'Web24',
    favInstructor: 'Art'
   })

  console.log(andy.speak());
  console.log(andy.PRAssignment('math'));
  console.log(andy.sprintChallenge('JS'))
  console.log(andy.listsSubjects());

  console.log(shane.speak());
  console.log(shane.PRAssignment('Chorus'));
  console.log(shane.sprintChallenge('JS'))
  console.log(shane.listsSubjects());


  console.log(melissa.speak());
  console.log(melissa.standUp('Pablo'));
  console.log(melissa.debugsCode('Max', 'JS'));

  console.log(chad.demo("CSS"));
  console.log(chad.grade("Max", 'Java'));
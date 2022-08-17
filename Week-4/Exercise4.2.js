const Person = function () { };
Person.prototype.initialize = function (name, age) {
    this.name = name;
    this.age = age;
}
const Teacher = function () {  // Created function called teacher.
    // Person.prototype.initialize.call(this, name, age);
}

// created a method called teach in teacher.prototype
Teacher.prototype.teach = function (subject) { 
    return console.log(`${this.name}, ${this.age} is now teaching ${subject} `)
}

//made person.prototype a parent of teacher.prototype 
Object.setPrototypeOf(Teacher.prototype, Person.prototype);

//created a new obj him using Teacher class/function
const him = new Teacher();
// console.log(him);

//executing initialize method of person in him object
him.initialize("Adam", 45);

//executing teach method of teacher in him object
him.teach("Inheritance")
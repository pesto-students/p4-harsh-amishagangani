
const name1 = {
    firstName: "Pesto1",
    lastName: "tech1",
    fullName: function (greeting) {
        var that = this;
        return greeting + " " + that.firstName + " " + that.lastName;
    },
}
const name2 = {
    firstName: "Pesto2",
    lastName: "tech2",
}
const name3 = {
    firstName: "Pesto3",
    lastName: "tech3",
}

// bind
// bind will create a function
let outputB = name1.fullName.bind(name3);
console.log(outputB());

// call
// call is used for invoking the function
let outputC = name1.fullName.call(name2, "hello");
console.log(outputC);

// apply
// Apply is also used for invoking a function
const nameA1 = {
    firstName: "Pesto1",
    lastName: "tech1",
    fullName: function (type, course) {
        return this.firstName + " " + this.lastName + " " + type + " " + course;
    }
}
const nameA2 = {
    firstName: "Pesto2",
    lastName: "tech2",
}
const nameA3 = {
    firstName: "Pesto3",
    lastName: "tech3",
}

let outputA = nameA1.fullName.apply(nameA2, ["plus", "program"])
console.log(outputA);
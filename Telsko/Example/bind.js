// const person = {
//     firstName: "gagan",
//     lastName: "Kumar",
//     age: 23,

//     fullName: function() {
//         return this.firstName + " " + this.lastName
//     }
// }

// const member = {
//     firstName: "Manu",
//     lastName:"Kumar"
// }
// let fullName = person.fullName.bind(member);
// console.log(fullName)


const person = {
    firstName: "John",
    lastName: "Doe",
    // fullName: function() {
    //   return this.firstName + " " + this.lastName;
    // }
}

const member = {
    firstName: "Hege",
    lastName: "Nilsen",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
const member1 = {
    firstName: "Teju",
    lastName: "Loose",
}

let fullName = member.fullName.bind(person);
//   let fullName=5+6
console.log(fullName());



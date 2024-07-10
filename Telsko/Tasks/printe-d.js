let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// let Odd = numbers.filter(function (num) {
//     return num % 2 === 0

// })
// console.log(`even numbers of the Array ${Odd}`)


// let Even = numbers.filter(function (num) {
//     return num % 2 === 1

// })
// console.log(`odd numbers of the Array ${Even}`)

for (let i = 0; i <= 20; i++) {

    let y = i % 2 == 1;


    if (y) {
        console.log(`Even nubers are ${i}`)
    }

}

console.log("************")

for (let i = 0; i <= 20; i++) {

    let x = i % 2 == 0;
    if (x) {
        console.log(`Even nubers are ${i}`)
    }

}


// let a=isNaN("Hello")
// let b=isNaN('6 n')
// console.log(a)
// console.log(b)

// let a="3"
// let b="7"
// let c=a+b;
// let d=a-b
// let e=a*b
// console.log(c)
// console.log(d)
// console.log(e)


// const person = {

//     fullName: function (location, age) {
//         return this.firstName + " " + this.lastName + " " + location + " " +age;
//     }
// }
// const pe = {
//     firstName: "John",
//     lastName: "Doe",
// }

// // This will return "John Doe":
// console.log(person.fullName.apply(pe, ["banglore", 23]))
// console.log(person.fullName.call(pe, "banglore", 23))

const person={
    a:10,
    b:20,
    fullname:function(){
        console.log("hello")
    }
}
console.log(person.fullname.toString())
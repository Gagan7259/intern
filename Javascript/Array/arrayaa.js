let person = [
    { "id": 101, "name": "Gagan", "age": 24 },
    { "id": 102, "name": "Manoj", "age": 25 },
    { "id": 103, "name": "Lakshman", "age": 20 },
    { "id": 104, "name": "Anil", "age": 26 },
    { "id": 105, "name": "Omar", "age": 25 },

]


// let checkindex = person.filter(function (person) {
//     return person.name.indexOf("Gagan")>-1
// })
// console.log(checkindex)

// let names=person.map(function(person){
//     return person.name;
// })
// console.log(names)


// let arraychainexample = person.filter(function (person) {
//     return person.name.indexOf("Manoj") > -1;
// }).map(function (person) {
//     return person.age;
// })
// console.log(arraychainexample)


let funct = person
    .filter(person => (person.name.indexOf("Lakshman") > -1))
    .map(person => person.age)
console.log(funct)
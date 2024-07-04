let alien = {
    name: "Gagan",
    age: 24,
    techonlogy: "Java",
    laptop: {
        cpu: 'ryzen 3',
        ram: '8gb',
        storage: '512gb'
    }
}
// console.log(alien)
// console.log(alien.name)
// console.log(alien.age)
// console.log(alien.techonlogy)
// console.log(typeof alien)


// console.log(alien.laptop.storage1?.length)
// console.log(alien)
// console.log(delete alien.age)
// console.log(alien)


for(let key in alien){
    console.log(key, alien[key])
}

for
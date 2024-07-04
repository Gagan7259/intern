let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

let Odd = numbers.filter(function (num) {
    return num % 2 === 0

})
console.log(`odd numbers of the Array ${Odd}`)


let Even = numbers.filter(function (num) {
    return num % 2 === 1

})
console.log(`odd numbers of the Array ${Even}`)

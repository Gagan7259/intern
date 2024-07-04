let num = [23, 37, 46, 49, 98, 53, 49, 67]
let graterThan20 = num.every(function (number) {
    return number > 20
})
console.log(graterThan20)


let graterThan30 = num.every(function (number) {
    return number > 30
})
console.log('\n' + graterThan30)
let num = [1, 2, 3, 4, 55, 6, 67, 788, 9]

let sum = num.reduce(function (passedin, item) {
    console.log(passedin, item)
    return passedin + item
})
console.log(sum)
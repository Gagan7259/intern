let numbers = [1, 2, 44, 56, 67, 7, 778, 8, 646, 9]

let breakpoint = 50;
let Smallnum = numbers.filter(function (num) {
    if (num < breakpoint) {
        return true

    }
})
console.log(Smallnum)

console.log("***************************F")
let Bignum = numbers.filter(function (num) {
    if (num > breakpoint) {
        return true

    }
})
console.log(Bignum)

console.log("******************************")

let oddnumber = numbers.filter(function (num) {
    if (num % 2 === 1) {
        return true
    }
})
console.log(oddnumber)
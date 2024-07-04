// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = num.map(function (x) {
//     return x * 2
// })
// console.log(result)



// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = num.forEach(function (x) {
//     console.log(x)
// })



// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = num.reduce(function (total, value) {
//     return total + value
// })
// console.log(result)


// function calculateVolume(length, breadth, height) {
//     return length * breadth * height;
// }
// console.log(calculateVolume(2, 3, 5));


// function cal(length) {
//     return function (breadth) {
//         return function (height) {
//             return length * breadth * height
//         }
//     }
// }
// console.log(cal(2)(3)(5))



function app(a, b, ...res) {
    console.log(a)
    console.log(b)
    console.log(...res)
}
app(1, 2, 3, 4, 5)

// function mydisplayer(add) {
//     console.log(add)
// }

// function add(num, num2, num3) {
//     sum = num + num2 + num3
//     return sum
//     console.log(sum)
// }

// let a = add(3, 4, 5);
// mydisplayer("Call back function" + a)
// console.log(add(3, 4, 5))


function mydisplayer(add) {
    console.log(add)
}

function add(num, num2, callbackk) {
   let sum = num + num2
    callbackk(sum)
    console.log(sum)
}

let a = add(3, 4, 5);
mydisplayer("Call back function" + a)
console.log(add(3, 4, 5))
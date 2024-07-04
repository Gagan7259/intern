let num = [23, 37, 46, 49, 98, 53, 49, 67]
var result = num.reduce(function (passedIn, item) {
    return passedIn + item
})
console.log(result)



var names = ["manoj", "gagan", "hello", "teju", "sinchana", "prarthana", "omar", "anil"]

let resul = names.reduce(function (current, item) {
    return current < item ? current : item
})
console.log(resul)

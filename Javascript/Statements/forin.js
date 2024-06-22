let colors = ["Red", "Blue", "Yellow"]
let choose = function (colors) {
    for (let color in colors) {
        return color;
        console.log(colors)
    }
    return false;
}


if (choose('red') && choose('blue')) {
    console.log("It's avilable")
} else {
    console.log("No get Out")
}

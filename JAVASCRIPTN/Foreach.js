// let names = ["Sai", "Gagan", "omar", "prarthana", "Teju", "Sinchana"]
// names.forEach(function (item, index, array) {
//     console.log(index, item)
//     console.log(array)
// });



let names = ["Sai", "Gagan", "omar", "prarthana", "Teju", "Sinchana"]
names.forEach(function (item) {
    if (item === "Gagans") {
        item = item.toUpperCase();
    } else {
        item = item.toLowerCase();
    }
    console.log(item)
})
// function star(n) {
//     // you can take input from prompt or change the value
//     let string = "";
//     // External loop
//     for (let i = 1; i <= n; i++) {
//         // printing spaces
//         for (let j = n; j > i; j--) {

//         }
//         // printing star
//         for (let k = 0; k < (i * 2 - 1); k++) {
//             console.log( "*")
//         }

//     }
// }
// star(5)

/* let row = " " */
// function starr(star) {
//     for (let i = star; i <= 1; i--) {
//           row='';
//     for (j = 1; j <= star - i; j++) {
//         row='';
//     }
//     for (k = 1; k <= (2 * i - 1); k++) {
//         row+="+"
//     }
//     console.log(row)
// }
// }
// starr(5)





// let a = [1, 2, 3, 4, 5]
// let b = [6, 7, 8, 9]
// let c = [...a, ...b, 10, 11, 12]
// let d=c.toString();
// console.log(d)


// function star(a) {
//     for (let i = a; i >= 1; i--) {
//         let row = " "
//         for (j = 1; j > a - i; i++) {
//             row += " "
//         }
//         for(){

//         }

//     }
// }


// let n = 5;
// let string = "";

// for (let i = 1; i <= n; i++) {

//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }

//   for (let k = 0; k < 2 * i - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);


// let n = 5;
// let string = "";
// // External loop
// for (let i = 4; i >= 1; i--) {
//   // printing spaces
//   for (let j = 0; j < i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < 2 * (n-i) - 1; k++) {
//     string += "*";
//   }

// }
// console.log(string);

let n = 3;
let string = "";

for (let i = 0; i < n; i++) {

  for (let j = 0; j < i; j++) {
    string += " ";
  }

  for (let k = 0; k < 2 * (n-i) - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);


// let n = 3;
// let string = " ";
// for (i = 0; i < n; i++) {
//   for (let j = 0; j < i; j++) {
//     string += " "
//   }
//   for (let k = 0; k < 2 * (n - i) - 1; k++) {
//     string += "*"
//   }
//   string += '\n'
// }
// console.log(string)
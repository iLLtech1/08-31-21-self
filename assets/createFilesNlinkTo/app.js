// const adder = (a, b) => {
//   return a + b
// }

// console.log(adder(5, 7))

// end

// start

// const names = ['Jack', 'Jon', 'Jill', 'Ben']
// // I want to only grab Jon and Ben
// const [, jon, , ben] = names

// console.log(jon, ben)

// end

// Start
// To process a Message in Terminal from your app.js

// const [, , message] = process.argv

// console.log(message)

// now type in `node app.js Jello` to your terminal

// end

// start

// const [, , message, message1] = process.argv 

// console.log(message, message1)

// node app.js hello goodbye
// end

// start
// Creating a math processor

// console.log(process.argv)

// const num1 = parseInt(process.argv[2])
// const mathType = process.argv[3] 
// const num2 = parseInt(process.argv[4])

// // The above is setting up for node to run Num1 as an integer, then the mathmatical Symbol, then the num2 interger

// const math = ('num1', 'mathType', 'num2') => {
//   let result 
//   if (mathType === 'p') {
//     result = num1 + num2
// }
//   return result
// }

// console.log(math(num1, mathType, num2))
// why does the above arguments not work?
// end

// Start
// const adder = (a, b) => {
//   return a + b
// }

// const subtracter = (a, b) => {
//   return a - b
// }

// const mult = (a, b) => {
//   return a * b
// }

// const divider = (a, b) => {
//   return a / b
// }

// const exponent = (a, b) => {
//   return a ** b
// }

// let [, , operation, num1, num2] = process.argv

// num1 = parseInt(num1)
// num2 = parseInt(num2)

// switch (operation) {
//   case 'add':
//     console.log(adder(num1, num2))
//     break
//   case 'subtract':
//     console.log(subtracter(num1, num2))
//     break
//   case 'multiply':
//     console.log(mult(num1, num2))
//     break
//   case 'divide':
//     console.log(divider(num1, num2))
//     break
//   case 'exponent':
//     console.log(exponent(num1, num2))
//     break          
// }
//  now you can type `node app.js exponent 5 7` and you will get the value derived of the equation 

// end


// start
// const movie = require('./movie')[1]

// const song = require('./song')

// // even though the const turst is on line 3 in movie.js. It is still counted as 1 and the const movies on line 1 is 0

// console.log(movie)

// console.log(song)

// end

// start
// const movie = require('./movie')
// const turst = require('./movie')[1]
// const song = require('./song')
// const [, , favorites] = process.argv

// switch (favorites) {
//   case 'movie':
//     console.log(movies)
//     break
//   case 'turst':
//     console.log(turst)
//     break
//   case 'songs':
//     console.log(song)
//     break
// }

// end

// start
// How to create a file from nodejs
// Hi I am the iLLtech
// const fs = require('fs')

// fs.writeFile('NameOfFile', 'Content of file Hi I am the iLLtech', err => {
//   if (err) { console.log(err) }
// })
// now enter `node app.js` and your file will be created
// end

// start
// how to add to a file that is already with the appendFile method
const fs = require('fs')

fs.appendFile('NameOfFile', ' Hi I am the iLLtech, again, and I love JESUS', err => {
  if (err) { console.log(err) }
})
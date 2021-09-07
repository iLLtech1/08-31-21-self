//----------------------------------------------------------------------------------------------------------------------//

//Start
//Bring in the required NPMs for project
// const inquirer = require('inquirer')
// const axios = require('axios')
// const chalk = require('chalk')

// //prompt user for input using inquirer
// inquirer.prompt({
//   type: 'input',
//   name: 'title',
//   message: 'What movie would you like to look up?'
// })

// //now we need a .then statement to retrive the answers/ajax 
// .then(answers => {
// //if you console.log(answers) you will see it is linked to title because it is undefined. Below we will define it//
//   axios.get(`http://www.omdbapi.com/?apikey=trilogy&t=${answers.title}`)
//   .then(res => {
//     const movie = res.data
//     console.log(chalk.blue(movie.Title))
//     console.log(chalk.green('------------------'))
//     console.log(chalk.blue(`Directed by ${movie.Director}`))
//     console.log(chalk.redBright(movie.Plot))
//     console.log(chalk.yellowBright(movie.BoxOffice))
//     console.log(chalk.green('------------------'))
//     // console.log(res) //if you run this command at the end you will retrieve all data on the movie
//   })
//   .catch(err => console.log(err))
// })
// .catch(err => console.log(err))
//the above is the catch error statment should an error occur//

//end

//-----------------------------------------------------------------------------------------------------------------------//

//start
//object Destucturing
// const cat = {
//   name: 'Tasha',
//   age: 'unknown',
//   type: 'Calico',
//   kitten: {
//     name: 'Baby girl',
//     age: 3,
//     type: 'tabby'
//   }
// }

// const { kitten: {name: kittenName, age: kittenAge, type: kittenType }, type, name, age } = cat

// console.log(kittenName, kittenType, kittenAge, name, type, age)
//end

//------------------------------------------------------------------------------------------------------------------------//

//start
//Movie app with Object Destructuring
const { prompt } = require('inquirer')
const { get } = require('axios')
const {
  blue,
  green,
  redBright,
  yellowBright
} = require('chalk')

const { log } = console

//prompt user for input using inquirer
prompt({
  type: 'input',
  name: 'title',
  message: 'What movie would you like to look up?'
})

//now we need a .then statement to retrive the answers/ajax 
.then(({ title }) => get(`http://www.omdbapi.com/?apikey=trilogy&t=${title}`))
  .then(({ data: movie  }) => {
    log(blue(movie.Title))
    log(blue('------------------'))
    log(green(`Directed by ${movie.Director}`))
    log(redBright(movie.Plot))
    log(yellowBright(movie.BoxOffice))
    log(green('------------------'))
    // console.log(res) 
  })
  .catch(err => log(err))
//end

//---------------------------------------------------------------------------------------------------------------------//

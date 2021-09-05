//start
//Writing a favorites application that saves to txt files. Also able to read txt files from the Terminal with nodeJS
//cars.txt and women.txt are apart of the Command below
const fs = require ('fs')
const [, , action, type, item] = process.argv

const addFavorites = () => {
  let favorite = ''
  for (let i = 4; i < process.argv.length; i++) {
    favorite += `${process.argv[i]} `
  }
  
  fs.appendFile(`${type}.txt`, `${favorite}, `, err => {
    if (err) { console.log(err) }
  })
}

const viewFavorites = () => {
  fs.readFile(`${type}.txt`, 'utf8', (err, favorites) => {
    if (err) { console.log(err) }
    favorites = favorites.split(', ')
    favorites.pop()
    favorites.forEach((favorite, i) => {
      console.log(`#${i + 1}: ${favorite}`) //an S at the end of ${favorite} will produce an array strung together 4x
    })
  })
}

switch (action) {
  case 'add':
    addFavorites()
    break
  case 'view':
    viewFavorites()
    break    
}

//end
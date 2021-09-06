const axios = require('axios')

axios.get('https://swapi.dev/api/people/1/')
.then(res => {
  console.log(res)
})
.catch(err => console.log(err))

axios.get('https://swapi.dev/api/starships/12/')
  .then(res => {
    console.log(res)
  })
  .catch(err => console.log(err))
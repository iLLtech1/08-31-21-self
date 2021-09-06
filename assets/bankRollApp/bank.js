//start
//This is what a foundation for the bank app should look like
// const fs = require('fs')
// const [, , action, amount] = process.argv 

// const deposit = () => {

// }
// const withdraw = () => {

// }
// const balance = () => {

// }
// const lotto = () => {

// }

// switch (action) {
//   case 'deposit':
//     deposit()
//     break
//   case 'withdraw':
//     withdraw()
//     break 
//   case 'balance':
//     balance()
//     break 
//   case 'lotto':
//     lotto(
//       break
//     )      
// }
//end

//start
//The Bank app and Lotto function
const fs = require('fs')
const [, , action, amount] = process.argv

const deposit = () => {
  fs.appendFile('bank.txt', `${amount}, `, err => {
    if (err) { console.log(err) }
    console.log(`You deposited: $${amount}`)
  })
}
const withdraw = () => {
  fs.appendFile('bank.txt', `-${amount}, `, err => {
    if (err) { console.log(err) }
    console.log(`You withdrew: $${amount}`)
  })
}
const balance = () => {
  fs.readFile('bank.txt', 'utf8', (err, data) => {
    if (err) { console.log(err) }
    const transactions = data.split(', ')
    transactions.pop()
    const total = transactions.reduce((total, amount) => total + parseFloat(amount), 0)
    console.log(`Your balance: $${total}`)
  })
}  
const lotto = () => {
  const didWin = Math.floor(Math.random() * 100) > 50
  fs.appendFile('bank.txt', `-0.25, ${didWin ? '10, ' : ''}` , err => {
    if (err) { console.log(err) }
    console.log(didWin ? 'You won $10' : 'You lose')
  })
}

switch (action) {
  case 'deposit':
    deposit()
    break
  case 'withdraw':
    withdraw()
    break
  case 'balance':
    balance()
    break
  case 'lotto':
    lotto()
      break    
}
//end
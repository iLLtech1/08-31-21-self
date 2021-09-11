//Start
//Working Trivia App
// const { prompt } = require('inquirer')
// const { get }  = require('axios')
// const shuffle = require('shuffle-array')

// const beginQuiz = questions => {
//   console.log(JSON.stringify(questions))
//   prompt(questions)
//   .then(res => {
//     console.log(res)
//   })
//   .catch (err => console.log(err))
// }

// const buildQuestions = questions => {
//   questions = questions.map((question, i) => {
//     question.incorrect_answers.push(question.correct_answer)
//     question.incorrect_answers = shuffle(question.incorrect_answers)
//     return {
//       type: 'list',
//       name: `question${i + 1}`,
//       message: question.question,
//       choices: question.incorrect_answers.map(answer => {
//         return {
//           name: answer,
//           value: answer === question.correct_answer
//         }
//       })
//     }
//   })
//   beginQuiz(questions)
// }


// const loadQuestions = () => {
//   get('https://opentdb.com/api.php?amount=10')
//   .then(({ data: { results: questions } }) => buildQuestions(questions))
//   .catch (err => console.log(err))
// }

// loadQuestions()
//end

//Start
//Cleaned Up Version
const { prompt } = require('inquirer')
const { get } = require('axios')
const shuffle = require('shuffle-array')

const quizSettings = categories => {
  prompt([
    {
      type: 'list',
      name: 'category',
      message: 'Choose a category',
      choices: categories
    },
    {
      type: 'list',
      name: 'difficulty',
      message: 'Choose a difficulty',
      choices: [
        {
          name: 'Easy',
          value: 'easy'
        },
        {
          name: 'Medium',
          value: 'medium'
        },
        {
          name: 'Hard',
          value: 'hard'
        }
      ]
    }
  ])
    .then(({ category, difficulty }) => loadQuestions(category, difficulty))
    .catch (err => console.log(err))
}

const getCategories = () => {
  get('https://opentdb.com/api_category.php')
    .then(({ data: { trivia_categories } }) => quizSettings(trivia_categories.map(({ name, id }) => ({ name, value: id }))))
    .catch (err => console.log(err))
  }

const mainMenu = () => {
  prompt({
    type: 'list',
    name: 'action',
    message: 'What would you like to do?',
    choices: ['Take the Quiz', 'EXIT']
  })
    .then(({ action }) => {
      switch (action) {
        case 'Take the Quiz':
          getCategories()
          break
        case 'EXIT':
          process.exit()  
      }
    })
}

const beginQuiz = questions => {
  prompt(questions)
    .then(results => {
      let points = 0
      for (const value in results) {
        if (results[value]) {
          points++
        }
      }
      console.log(`Score: ${points} out of 10`)
    })  
    .catch(err => console.log(err))
}

const buildQuestions = questions => {
  questions = questions.map(({ incorrect_answers, correct_answer, question }, i) => {
    incorrect_answers.push(correct_answer)
    incorrect_answers = shuffle(incorrect_answers)
    return {
      type: 'list',
      name: `question${i + 1}`,
      message: question,
      choices: incorrect_answers.map(answer => {
        return {
          name: answer,
          value: answer === correct_answer
        }
      }) 
    }
  })
  beginQuiz(questions)
}


const loadQuestions = (category, difficulty) => {
  get(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}`)
    .then(({ data: { results: questions } }) => buildQuestions(questions))
    .catch(err => console.log(err))
}

// loadQuestions()
console.log('Welcome to the Trivia Game!')
mainMenu()
//end
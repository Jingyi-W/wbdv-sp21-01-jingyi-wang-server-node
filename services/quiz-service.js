let quizzes = require('./quizzes.json')

const createQuiz = () => {}

const findAllQuizzes = () => quizzes

const findQuizById = (quizId) => quizzes.find(quiz => quiz._id === quizId)

const updateQuiz = () => {}

const deleteQuiz = () => {}

module.exports = {
  createQuiz, findAllQuizzes, findQuizById, updateQuiz, deleteQuiz
}


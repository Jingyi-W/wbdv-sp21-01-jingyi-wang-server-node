const quizzesService = require('../services/quiz-service')

module.exports = (app) => {
  const createQuiz = (req, res) => {

  }
  const findAllQuizzes = (req, res) => {
    quizzesService.findAllQuizzes().then(allQuizzes => res.json(allQuizzes))
  }
  const findQuizById = (req, res) => {
    quizzesService.findQuizById(req.params['quizId']).then(quiz => res.json(quiz))
  }
  const updateQuiz = (req, res) => {

  }
  const deleteQuiz = (req, res) => {

  }

  app.get('/api/quizzes', findAllQuizzes)
  app.get('/api/quizzes/:quizId', findQuizById)
}
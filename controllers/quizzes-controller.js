const quizzesService = require('../services/quiz-service')

module.exports = (app) => {
  const createQuiz = (req, res) => {

  }
  const findAllQuizzes = (req, res) => {
    res.send(quizzesService.findAllQuizzes())
  }
  const findQuizById = (req, res) => {
    res.send(quizzesService.findQuizById(req.params['qid']))
  }
  const updateQuiz = (req, res) => {

  }
  const deleteQuiz = (req, res) => {

  }

  app.get('/api/quizzes', findAllQuizzes)
  app.get('/api/quizzes/:qid', findQuizById)
}
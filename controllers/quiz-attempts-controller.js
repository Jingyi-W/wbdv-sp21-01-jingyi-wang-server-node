const quizAttemptsService = require('../services/quiz-attempts-service')

module.exports = (app) => {
  const createAttempt = (req, res) => {
    quizAttemptsService.createAttempt(req.params['quizId'], req.body).then(attempt => res.send(attempt))
  }

  const findAttemptsForQuiz = (req, res) => {
    quizAttemptsService.findAttemptsForQuiz(req.params['quizId']).then(attempts => res.send(attempts))
  }

  app.post('/api/quizzes/:quizId/attempts', createAttempt)
  app.get('/api/quizzes/:quizId/attempts', findAttemptsForQuiz)
}
const quizAttemptsDao = require('../daos/quiz-attempts-dao')

const createAttempt = (quizId, attempt) => quizAttemptsDao.createAttempt(quizId, attempt)
const findAttemptsForQuiz = (quizId) => quizAttemptsDao.findAttemptsForQuiz(quizId)

module.exports = { createAttempt, findAttemptsForQuiz }
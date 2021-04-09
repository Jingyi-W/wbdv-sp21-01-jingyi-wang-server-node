
const questionService = require("../services/questions-service")

module.exports = (app) => {
  const findQuestionById = (req, res) => {
    res.send(questionService.findQuestionById(req.params['questionId']))
  }
  const findAllQuestions = (req, res) => {
    res.send(questionService.findAllQuestions())
  }
  const findQuestionsForQuiz = (req, res) => {
    const quizId = req.params['qid']
    const questions = questionService.findQuestionsForQuiz(quizId)
    res.json(questions)
  }

  app.get("/api/questions", findAllQuestions)
  app.get("/api/questions/:questionId", findQuestionById)
  app.get("/api/quizzes/:qid/questions", findQuestionsForQuiz)
}


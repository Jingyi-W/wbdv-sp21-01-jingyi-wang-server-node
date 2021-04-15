
const questionsService = require("../services/questions-service")

module.exports = (app) => {
  const findQuestionById = (req, res) => {
    questionsService.findQuestionById(req.params['questionId']).then(question => res.json(question))
  }
  const findAllQuestions = (req, res) => {
    questionsService.findAllQuestions().then(allQuestions => res.json(allQuestions))
  }
  const findQuestionsForQuiz = (req, res) => {
    questionsService.findQuestionsForQuiz(req.params['quizId']).then(questions => res.json(questions))
  }
  const updateQuestion = (req, res) => {
    questionsService.updateQuestion(req.params['questionId'], req.body).then(question => res.json(question))
  }

  const sayHello = (req, res) => {
    res.send("Hello")
  }

  app.get("/api/questions", findAllQuestions)
  app.get("/api/questions/:questionId", findQuestionById)
  app.put("/api/questions/:questionId", updateQuestion)
  app.get("/api/quizzes/:quizId/questions", findQuestionsForQuiz)

  app.get("/hello", sayHello)
}


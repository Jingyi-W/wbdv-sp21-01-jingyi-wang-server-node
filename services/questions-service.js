let questions = require('./questions.json')

const createQuestion = () => {}

const createQuestionForQuiz = (quizId) => {}

const findAllQuestions = () => questions

const findQuestionById = (questionId) => questions.find(question => question._id === questionId)

const findQuestionsForQuiz = (quizId) =>
    questions.filter(question => question.quizId === quizId)

const updateQuestion = () => {}

const deleteQuestion = () => {}

module.exports = {
  createQuestion, createQuestionForQuiz, findAllQuestions, findQuestionById, findQuestionsForQuiz, updateQuestion, deleteQuestion
}


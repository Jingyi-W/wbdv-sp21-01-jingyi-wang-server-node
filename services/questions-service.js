
const questionsDao = require('../daos/questions-dao')
const findAllQuestions = () => questionsDao.findAllQuestions()
const findQuestionById = (qid) => questionsDao.findQuestionById(qid)
const findQuestionsForQuiz = (quizId) => questionsDao.findQuestionsForQuiz(quizId)
const updateQuestion = (questionId, newQuestion) => {
  return questionsDao.updateQuestion(questionId, newQuestion)
}
module.exports = { findAllQuestions, findQuestionById, findQuestionsForQuiz, updateQuestion }




// let questions = require('./questions.json')
//
// const createQuestion = () => {}
//
// const createQuestionForQuiz = (quizId) => {}
//
// const findAllQuestions = () => questions
//
// const findQuestionById = (questionId) => questions.find(question => question._id === questionId)
//
// const findQuestionsForQuiz = (quizId) =>
//     questions.filter(question => question.quizId === quizId)
//
// const updateQuestion = () => {}
//
// const deleteQuestion = () => {}
//
// module.exports = {
//   createQuestion, createQuestionForQuiz, findAllQuestions, findQuestionById, findQuestionsForQuiz, updateQuestion, deleteQuestion
// }


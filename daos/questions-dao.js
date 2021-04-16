const questionsModel = require('../models/questions/questions-model')
const quizzesModel = require('../models/quizzes/quizzes-model')

const findAllQuestions = () => questionsModel.find()
const findQuestionById = (qid) => questionsModel.findById(qid)
// const findQuestionsForQuiz = (quizId) => questionsModel.find({quizId: quizId}).then(actualQuestions => actualQuestions)
const updateQuestion = (questionId, newQuestion) => {
  return questionsModel.findByIdAndUpdate(questionId, newQuestion, {new: true})
}

const findQuestionsForQuiz = (quizId) => quizzesModel.findById(quizId).populate('questions').then(quiz => quiz.questions)
module.exports = { findAllQuestions, findQuestionById, findQuestionsForQuiz, updateQuestion }
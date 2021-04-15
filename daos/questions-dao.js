const questionsModel = require('../models/questions/questions-model')
const quizzesModel = require('../models/quizzes/quizzes-model')

const findAllQuestions = () => questionsModel.find()
const findQuestionById = (qid) => questionsModel.findById(qid)
// const findQuestionsForQuiz = (quizId) => questionsModel.find({quizId: quizId}).then(actualQuestions => actualQuestions)
const updateQuestion = (questionId, newQuestion) => {
  console.log("id" + questionId)
  console.log("newQuestion" + newQuestion)

  return questionsModel.findByIdAndUpdate(questionId, newQuestion, {new: true},
      function (err, result) {
        if (err) {
          console.log("error!" + err);
        } else {
          console.log("success!" + result);
        }
      })
}

const findQuestionsForQuiz = (quizId) => quizzesModel.findById(quizId).populate('questions').then(quiz => quiz.questions)
module.exports = { findAllQuestions, findQuestionById, findQuestionsForQuiz, updateQuestion }
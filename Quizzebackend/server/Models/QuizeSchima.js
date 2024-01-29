const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const newQuize = new Schema({
    QuizeName: {
        type: String,
        required: true,
      },
      Question: {
        type: String,
        required: true,
      },
      options: {
        type: [{
          type: mongoose.Schema.Types.Mixed,
        }],
        
      },
      ImageUrls: {
        type: [String],
      },
      correctOption: {
        type: String,
        required: true,
      },
})

module.exports = mongoose.model("Quize", newQuize)
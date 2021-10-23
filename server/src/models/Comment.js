const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommentSchema = new Schema({
  content: String,
  authorId: String,
  post: {
    type: Schema.Types.ObjectId,
    ref: 'post'
  }
})

module.exports = Comment = mongoose.model('comment', CommentSchema)

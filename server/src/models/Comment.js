const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommentSchema = new Schema({
  content: String,
  authorId: String,
  author: {
    name: String,
    avatarUrl: String
  }
}, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }})

module.exports = Comment = mongoose.model('comment', CommentSchema)

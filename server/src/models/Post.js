const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
  title: String,
  thumbnailUrl: String,
  content: String,
  authorId: String,
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'comment'
  }]
})

module.exports = Post = mongoose.model('post', PostSchema)

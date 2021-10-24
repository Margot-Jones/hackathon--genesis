const express = require('express')
const Comment = require('../models/Comment')
const Post = require('../models/Post')
const { checkJwt, checkIfUserIsAdmin} = require("../utils");

const router = express.Router()

// POST /comments/:id (Creates new comment)
router.post('/:id', checkJwt, async (req, res) => {
  const doesExist = Post.exists({ _id: req.params.id })

  if (!doesExist) {
    return res.status(400).json({
      message: 'This comment does not exist!'
    })
  }

  console.log(req)

  // const newComment = new Comment({
  //   ...req.body,
  //   authorId: req.user.sub
  // })
  //
  // const savedComment = await newComment.save()
  //
  // await Post.findByIdAndUpdate(req.params.id, { $push: { comments: savedComment._id } })
  //
  // res.json({ comment: savedComment })
})

// GET api/comments/:postId
router.get('/:postId', async (req, res) => {
  const comments = await Comment.find({ postId: req.params.postId })

  console.log(req.params.postId)

  res.json({ comments })
})

// PUT api/posts/:id
router.put('/:id', checkJwt, async (req, res) => {
  const comment = await Comment.findById(req.params.id)

  if (!comment) {
    return res.status(404).json({
      message: 'This comment does not exist'
    })
  }

  const isAdmin = checkIfUserIsAdmin(req.user)
  const isAuthor = req.user.sub === comment.authorId

  if (!isAdmin && !isAuthor) {
    return res.status(403).json({
      message: 'You are not authorized for this'
    })
  }

  const updatedComment = await comment.update({ ...req.body })

  res.json({
    message: 'Updated',
    post: updatedComment
  });
});

// DELETE /comments/:id
router.delete('/:id', checkJwt, async (req, res) => {
  const comment = await Comment.findById(req.params.id)

  if (!comment) {
    return res.status(404).json({
      message: 'That comment does not exist'
    })
  }

  const isAdmin = checkIfUserIsAdmin(req.user)
  const isAuthor = req.user.sub === comment.authorId

  if (!isAdmin && !isAuthor) {
    return res.status(403).json({
      message: 'You are not authorized for this'
    })
  }

  const deletedPost = await comment.delete()

  res.json({
    message: 'Deleted',
    post: deletedPost
  });
})

module.exports = router

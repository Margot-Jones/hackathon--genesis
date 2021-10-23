const express = require('express')
const { checkJwt, checkIfUserIsAdmin} = require("../utils");
const Post = require('../models/Post')

const router = express.Router()

// GET api/posts (Get all posts)
router.get('/', async (req, res) => {
  const posts = await Post.find().populate({ path: 'comments', model: Comment }).exec()

  res.json({
    posts
  });
})

// POST api/posts (Add new post)
router.post('/', checkJwt, async (req, res) => {
  const newPost = new Post({
    ...req.body,
    authorId: req.user.sub
  })

  const post = await newPost.save()

  return res.json({ post })
})

// PUT api/posts/:id
router.put('/:id', checkJwt, async (req, res) => {
  const post = await Post.findById(req.params.id)

  if (!post) {
    return res.status(404).json({
      message: 'This post does not exist'
    })
  }

  const isAdmin = checkIfUserIsAdmin(req.user)
  const isAuthor = req.user.sub === post.authorId

  if (!isAdmin || !isAuthor) {
    return res.status(403).json({
      message: 'You are not authorized for this'
    })
  }

  const updatedPost = await post.update({ ...req.body })

  res.json({
    message: 'Updated',
    post: updatedPost
  });
});

// DELETE api/posts/:id
router.delete('/:id', checkJwt, async (req, res) => {
  const post = await Post.findById(req.params.id)

  if (!post) {
    return res.status(404).json({
      message: 'This post does not exist'
    })
  }

  const isAdmin = checkIfUserIsAdmin(req.user)
  const isAuthor = req.user.sub === post.authorId

  if (!isAdmin || !isAuthor) {
    return res.status(403).json({
      message: 'You are not authorized for this'
    })
  }

  const deletedPost = await post.delete()

  res.json({
    message: 'Deleted',
    post: deletedPost
  });
});


module.exports = router

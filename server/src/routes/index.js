const express = require('express')
const router = express.Router()

const postsRouter = require('./posts')
const commentsRouter = require('./comments')

router.use('/comments', commentsRouter)
router.use('/posts', postsRouter)

module.exports = router

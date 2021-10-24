import React from 'react'

const PostFormPagePresenter = ({ onCreatePost, formRef }) => (
  <form ref={formRef} onSubmit={onCreatePost}>
    <input name='title' type="text" placeholder='title'/>
    <br/>
    <input name='thumbnailUrl' type="text" placeholder='thumb url'/>
    <br/>
    <textarea name='content' placeholder='content' />
    <br/>
    <button type='submit'>Create post</button>
  </form>
)

export default PostFormPagePresenter

import React from 'react'
import { useDispatch } from "react-redux";
import PostFormPagePresenter from "./PostFormPagePresenter";

const PostFormPageContainer = () => {
  const dispatch = useDispatch()

  return <PostFormPagePresenter />
}

export default PostFormPageContainer

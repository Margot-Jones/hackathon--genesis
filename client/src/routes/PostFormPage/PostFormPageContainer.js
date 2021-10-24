import React, {useEffect} from 'react'
import { useDispatch } from "react-redux";
import PostFormPagePresenter from "./PostFormPagePresenter";
import {useLocation, useParams} from "react-router";

const PostFormPageContainer = () => {
  const dispatch = useDispatch()

  const createPost = (title, content, imageUrl) => dispatch()

  return <PostFormPagePresenter />
}

export default PostFormPageContainer

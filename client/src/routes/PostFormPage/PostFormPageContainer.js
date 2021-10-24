import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch } from "react-redux";
import PostFormPagePresenter from "./PostFormPagePresenter";
import {useLocation, useParams} from "react-router";
import { createPost } from "../../redux/posts/actions";
import { useAuth0 } from "@auth0/auth0-react";

const PostFormPageContainer = () => {
  const [accessToken, setAccessToken] = useState(null)
  const { getAccessTokenSilently } = useAuth0()
  const dispatch = useDispatch()
  const formRef = useRef(null)

  useEffect(() => {
    (async () => {
      const token = await getAccessTokenSilently()

      setAccessToken(token)
    })()
  }, [])

  const onCreatePost = useCallback(async event => {
    event.preventDefault()
    const post = {
      title: event.target.title.value,
      content: event.target.content.value,
      thumbnailUrl: event.target.thumbnailUrl.value
    }

    dispatch(createPost(post, accessToken))
  }, [accessToken, dispatch])

  const onFormSubmit = async e => {
    e.preventDefault()
  }

  return <PostFormPagePresenter formRef={formRef} onCreatePost={onCreatePost} />
}

export default PostFormPageContainer

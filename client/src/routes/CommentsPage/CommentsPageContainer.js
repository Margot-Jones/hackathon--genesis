import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import CommentsPagePresenter from "./CommentsPagePresenter";
import { fetchComments } from "../../redux/comments/actions";
import {selectComments, selectIsFetchCommentsError, selectIsFetchCommentsPending} from "../../redux/comments/selectors";
import { useParams } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";

const CommentsPageContainer = () => {
  const dispatch = useDispatch()
  const { postId } = useParams()
  const { getAccessTokenSilently } = useAuth0()

  const comments = useSelector(selectComments)
  const isLoading = useSelector(selectIsFetchCommentsPending)
  const isError = useSelector(selectIsFetchCommentsError)

  useEffect(() => {
    (async () => {
      const token = await getAccessTokenSilently()

      dispatch(fetchComments(postId, token))
    })()
  },[postId, getAccessTokenSilently])

  return (
    <CommentsPagePresenter
      comments={comments}
      isLoading={isLoading}
      isError={isError}
    />
  )
}

export default CommentsPageContainer

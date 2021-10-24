import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux";
import HomePagePresenter from "./HomePagePresenter";
import {selectIsFetchPostsError, selectIsFetchPostsPending, selectPosts} from "../../redux/posts/selectors";
import {fetchPosts} from "../../redux/posts/actions";

const HomePageContainer = () => {
  const dispatch = useDispatch()

  const posts = useSelector(selectPosts)
  const isLoading = useSelector(selectIsFetchPostsPending)
  const isError = useSelector(selectIsFetchPostsError)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  useEffect(() => {
    console.log(posts)
  }, [posts])

  return (
    <HomePagePresenter
      posts={posts}
      isLoading={isLoading}
      isError={isError}
    />
  )
}

export default HomePageContainer

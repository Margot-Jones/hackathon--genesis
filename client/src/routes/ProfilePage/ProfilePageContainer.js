import React, {useEffect} from 'react'
import ProfilePagePresenter from "./ProfilePagePresenter";
import {useAuth0} from "@auth0/auth0-react";
import {useSelector} from "react-redux";
import {selectIsFetchPostsError, selectIsRemovePostPending, selectPosts} from "../../redux/posts/selectors";
import { withAuthenticationRequired } from '@auth0/auth0-react'
import {Redirect} from "react-router";

const ProfilePageContainer = () => {
  const { user } = useAuth0()
  const posts = useSelector(selectPosts)
  const isLoading = useSelector(selectIsRemovePostPending)
  const isError = useSelector(selectIsFetchPostsError)

  useEffect(() => {
    console.log(user)
  }, [user])

  return <ProfilePagePresenter posts={posts} user={user}/>
}

export default withAuthenticationRequired(ProfilePageContainer, {
  onRedirecting: () => <Redirect to={'/'} />
})

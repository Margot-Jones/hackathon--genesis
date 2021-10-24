import React from 'react'
import { useDispatch } from "react-redux";
import ProfilePagePresenter from "./ProfilePagePresenter";

const ProfilePageContainer = () => {
  const dispatch = useDispatch()

  return <ProfilePagePresenter />
}

export default ProfilePageContainer

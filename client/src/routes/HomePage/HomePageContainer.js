import React from 'react'
import { useDispatch } from "react-redux";
import HomePagePresenter from "./HomePagePresenter";

const HomePageContainer = () => {
  const dispatch = useDispatch()

  return <HomePagePresenter />
}

export default HomePageContainer

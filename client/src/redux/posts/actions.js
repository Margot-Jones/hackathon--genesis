import { FETCH_POSTS_COMPLETED, FETCH_POSTS_ERROR, FETCH_POSTS_INIT } from "./constants";
import { POSTS_URL } from "../../constants";
import axios from "axios";

const fetchPostsInit = () => ({ type: FETCH_POSTS_INIT })

const fetchPostsComplete = posts => ({ type: FETCH_POSTS_COMPLETED, payload: { posts } })

const fetchPostsSetError = () => ({ type: FETCH_POSTS_ERROR })

export const fetchPosts = () => async dispatch => {
  dispatch(fetchPostsInit())

  try {
    const res = await axios.get(POSTS_URL)

    dispatch(fetchPostsComplete(res.data.posts))
  } catch (err) {
    dispatch(fetchPostsSetError())

    console.log(err)
  }
};

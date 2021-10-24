import {
  CREATE_POST_COMPLETED, CREATE_POST_ERROR,
  CREATE_POST_INIT,
  FETCH_POSTS_COMPLETED,
  FETCH_POSTS_ERROR,
  FETCH_POSTS_INIT
} from "./constants";
import { POSTS_URL } from "../../constants";
import axios from "axios";

const fetchPostsInit = () => ({ type: FETCH_POSTS_INIT })

const fetchPostsComplete = posts => ({ type: FETCH_POSTS_COMPLETED, payload: { posts } })

const fetchPostsSetError = () => ({ type: FETCH_POSTS_ERROR })

const createPostInit = () => ({ type: CREATE_POST_INIT })

const createPostComplete = posts => ({ type: CREATE_POST_COMPLETED, payload: { post } })

const createPostSetError = () => ({ type: CREATE_POST_ERROR })

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

export const createPost = (post, token) =>
  async dispatch => {
    dispatch(createPostInit())

    try {
      const res = await axios.post(`${POSTS_URL}/create`, {
        headers: {
          Authorization: `Bearer ${token}`
        },
        data: post
      })

      if (res.status !== 200) {
        return dispatch(createPostComplete())
      }

      return dispatch(createPostSetError())
    } catch {
      return dispatch(createPostSetError())
    }
}

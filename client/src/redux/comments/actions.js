import { FETCH_COMMENTS_COMPLETED, FETCH_COMMENTS_ERROR, FETCH_COMMENTS_INIT } from "./constants";
import { COMMENTS_URL } from "../../constants";
import axios from "axios";

const fetchCommentsInit = () => ({ type: FETCH_COMMENTS_INIT })

const fetchCommentsComplete = comments => ({ type: FETCH_COMMENTS_COMPLETED, payload: { comments } })

const fetchCommentsSetError = () => ({ type: FETCH_COMMENTS_ERROR })

export const fetchComments = (postId, token) => async dispatch => {
  dispatch(fetchCommentsInit())

  try {
    const res = await axios.get(`${COMMENTS_URL}/${postId}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    })

    dispatch(fetchCommentsComplete(res.data.comments))
  } catch (err) {
    dispatch(fetchCommentsSetError())

    console.log(err)
  }
};

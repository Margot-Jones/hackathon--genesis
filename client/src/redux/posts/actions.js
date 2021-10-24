import {
  FETCH_POSTS_COMPLETED,
  FETCH_POSTS_ERROR,
  FETCH_POSTS_INIT,
} from "./constants";
import { POSTS_URL } from "../../constants";
import axios from "axios";

const fetchPostsInit = () => ({ type: FETCH_POSTS_INIT });

const fetchPostsComplete = (posts) => ({
  type: FETCH_POSTS_COMPLETED,
  payload: { posts },
});

const fetchPostsSetError = () => ({ type: FETCH_POSTS_ERROR });

export const fetchPosts = () => async (dispatch) => {
  dispatch(fetchPostsInit());

  try {
    const res = await axios.get(POSTS_URL);
    const otherData = [
      { authorData: "browngorilla163", avatar: "https://randomuser.me/api/portraits/med/men/69.jpg", date: new Date(Date.UTC(2021, 1, 12, 3, 0, 0)) },
      { authorData: "Parker", avatar: "https://randomuser.me/api/portraits/med/men/93.jpg", date: new Date(Date.UTC(2020, 10, 5, 3, 0, 0)) },
      { authorData: "Leila8", avatar: "https://randomuser.me/api/portraits/med/women/93.jpg", date: new Date(Date.UTC(2018, 9, 5, 3, 0, 0)) },
      { authorData: "Cunningham", avatar: "https://randomuser.me/api/portraits/men/89.jpg", date: new Date(Date.UTC(2020, 6, 15, 3, 0, 0)) },
      { authorData: "Levi", avatar: "https://randomuser.me/api/portraits/women/89.jpg", date: new Date(Date.UTC(2021, 10, 5, 3, 0, 0)) },
      { authorData: "Olafk5", avatar: "https://randomuser.me/api/portraits/women/89.jpg", date: new Date(Date.UTC(2019, 11, 8, 3, 0, 0)) },
    ];
    const p = await res.data.posts.map((post, index) => ({
      ...post,
      ...otherData[index],
    }));
    console.log(p);
    // const user = await axios.get('https://randomuser.me/api/')

    dispatch(fetchPostsComplete(p));
  } catch (err) {
    dispatch(fetchPostsSetError());

    console.log(err);
  }
};

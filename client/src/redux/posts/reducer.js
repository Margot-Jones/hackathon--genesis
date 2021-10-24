import * as actionTypes from './constants'

const initialState = {
  posts: [],
  isFetchingPending: false,
  isFetchingError: false,
  isCreatingPending: false,
  isCreatingError: false,
  isUpdatingPending: false,
  isUpdatingError: false,
  isRemovePending: false,
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POSTS_INIT:
      return {
        ...state,
        isFetchingPending: true
      };
    case actionTypes.FETCH_POSTS_COMPLETED:
      return {
        ...state,
        isFetchingPending: false,
        posts: action.payload.posts
      };
    case actionTypes.FETCH_POSTS_ERROR:
      return {
        ...state,
        isFetchingPending: false,
        isFetchingError: true
      };
    case actionTypes.UPDATE_POST_INIT:
      return {
        ...state,
        isUpdatingPending: true,
      };
    case actionTypes.UPDATE_POST_COMPLETED:
      return {
        ...state,
        isUpdatingPending: false,
      };
    case actionTypes.UPDATE_POST_ERROR:
      return {
        ...state,
        isUpdatingError: true,
      };
    case actionTypes.REMOVE_POST_INIT:
      return {
        ...state,
        isRemovePending: true,
      };
    case actionTypes.REMOVE_POST_COMPLETED:
      return {
        ...state,
        isRemovePending: false,
      };
    case actionTypes.REMOVE_POST_ERROR:
      return {
        ...state,
        isRemoveError: true,
      };
    default:
      return state;
  }
};

export default commentsReducer;

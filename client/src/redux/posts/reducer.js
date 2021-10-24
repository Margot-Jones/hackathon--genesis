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
        isFetchingPending: true,
        isFetchingError: false
      };
    case actionTypes.FETCH_POSTS_COMPLETED:
      return {
        ...state,
        isFetchingPending: false,
        isFetchingError: false,
        posts: action.payload.posts
      };
    case actionTypes.CREATE_POST_INIT:
      return {
        ...state,
        isCreatingPending: true,
        isCreatingError: false
      };
    case actionTypes.CREATE_POST_COMPLETED:
      return {
        ...state,
        isCreatingPending: false,
        isCreatingError: false
      };
    case actionTypes.CREATE_POST_ERROR:
      return {
        ...state,
        isCreatingPending: false,
        isCreatingError: true
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
        isUpdatingError: false,
      };
    case actionTypes.UPDATE_POST_COMPLETED:
      return {
        ...state,
        isUpdatingPending: false,
        isUpdatingError: false
      };
    case actionTypes.UPDATE_POST_ERROR:
      return {
        ...state,
        isUpdatingError: true,
        isUpdatingPending: false
      };
    case actionTypes.REMOVE_POST_INIT:
      return {
        ...state,
        isRemovePending: true,
        isRemoveError: false,
      };
    case actionTypes.REMOVE_POST_COMPLETED:
      return {
        ...state,
        isRemovePending: false,
        isRemoveError: false,
      };
    case actionTypes.REMOVE_POST_ERROR:
      return {
        ...state,
        isRemovePending: false,
        isRemoveError: true,
      };
    default:
      return state;
  }
};

export default commentsReducer;

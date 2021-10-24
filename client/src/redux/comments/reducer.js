import * as actionTypes from './constants'

const initialState = {
  comments: [],
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
    case actionTypes.FETCH_COMMENTS_INIT:
      return {
        ...state,
        isFetchingPending: true
      };
    case actionTypes.FETCH_COMMENTS_COMPLETED:
      return {
        ...state,
        isFetchingPending: false,
        comments: action.payload
      };
    case actionTypes.FETCH_COMMENTS_ERROR:
      return {
        ...state,
        isFetchingPending: false,
        isFetchingError: true
      };
    case actionTypes.UPDATE_COMMENT_INIT:
      return {
        ...state,
        isUpdatingPending: true,
      };
    case actionTypes.UPDATE_COMMENT_COMPLETED:
      return {
        ...state,
        isUpdatingPending: false,
      };
    case actionTypes.UPDATE_COMMENT_ERROR:
      return {
        ...state,
        isUpdatingError: true,
      };
    case actionTypes.REMOVE_COMMENT_INIT:
      return {
        ...state,
        isRemovePending: true,
      };
    case actionTypes.REMOVE_COMMENT_COMPLETED:
      return {
        ...state,
        isRemovePending: false,
      };
    case actionTypes.REMOVE_COMMENT_ERROR:
      return {
        ...state,
        isRemoveError: true,
      };
    default:
      return state;
  }
};

export default commentsReducer;

import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import commentsReducer from './comments/reducer';
import postsReducer from './posts/reducer';

const rootReducer = combineReducers({
  comments: commentsReducer,
  posts: postsReducer,
})

export default function configureStore () {
  return createStore(rootReducer, applyMiddleware(thunk));
}

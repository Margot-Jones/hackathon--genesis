import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import commentsReducer from './comments/reducer';

const rootReducer = combineReducers({
  comments: commentsReducer,
})

export default function configureStore () {
  return createStore(rootReducer, applyMiddleware(thunk));
}

import { combineReducers } from 'redux'
import books from './books'

const reducers = {
  books,
};

export default combineReducers(reducers)

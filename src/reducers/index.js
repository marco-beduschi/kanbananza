import { combineReducers } from 'redux';
import lists from './ListsReducer';
import cards from './CardsReducer';

export default combineReducers({
  lists,
  cards,
});

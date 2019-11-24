import {fromJS} from 'immutable'
import * as actionTypes from './actionTypes'
const INITIAL_STATE = fromJS({
  title:'',
  content:''
});

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_DETAIL:
      return state.merge({
        title:action.title,
        content:action.content
      });
    default:
      return state;
  }
};
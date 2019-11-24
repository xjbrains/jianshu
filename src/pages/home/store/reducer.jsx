import {fromJS} from 'immutable'
import * as actionTypes from './actionTypes'
const INITIAL_STATE = fromJS({
  topicList:[],
  articleList:[],
  recommendList:[],
  articlePage:1,
  showScroll:false
});

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_HOME_DATA:
      return state.merge({
        topicList:fromJS(action.topicList),
        articleList:fromJS(action.articleList),
        recommendList:fromJS(action.recommendList)
      });
    case actionTypes.ADD_ARTICLE_LIST:
      return state.merge({
        articleList:state.get('articleList').concat(fromJS(action.list)),
        articlePage:action.page
      })
    case actionTypes.TOGGLE_SCROLL_TOP:
      return state.merge({
        showScroll:action.show
      })
    default:
      return state;
  }
};
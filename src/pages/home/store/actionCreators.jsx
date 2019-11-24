import axios from 'axios'
import * as actionTypes  from './actionTypes'

const _changeHomeData = result => ({
  type: actionTypes.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList
})
const _addHomeList = (list,page) =>({
  type:actionTypes.ADD_ARTICLE_LIST,
  list,
  page
})
export const getHomeInfo = _ => {
  return async dispatch => {
    const res = await axios.get('/api/home.json')
    dispatch(_changeHomeData(res.data.data))
  }
}

export const getMoreList = page => {
  return async dispatch => {
    const res = await axios.get(`/api/homeList.json?page`+page)
    dispatch(_addHomeList(res.data.data,page+1))
  }
}

export const toggleTopShow = show=>({
  type:actionTypes.TOGGLE_SCROLL_TOP,
  show
})
import * as actionTypes from './actionTypes'
import axios from 'axios'
const _changeDetail = (res)=>({
  type:actionTypes.CHANGE_DETAIL,
  title:res.title,
  content:res.content
})
export const getDetail = (id)=>{
  return async dispatch=>{
    const res = await axios.get('/api/detail.json?id='+id)
    dispatch(_changeDetail(res.data.data))
  }
}
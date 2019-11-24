import axios from 'axios'
import * as actionTypes from './actionTypes'
export const logout = ()=>({
  type:actionTypes.LOGOUT,
  value:false
})
const _changeLogin =()=>({
  type:actionTypes.CHANGE_LOGIN,
  value:true
})
export const login = (act, pwd) => {
  return async dispatch => {
    const res = await axios.get(`/api/login.json?account=${act}&password=${pwd}`)
    const result = res.data.data
    if(result){
      dispatch(_changeLogin())
    }else{
      alert('登录失败')
    }
  }
}
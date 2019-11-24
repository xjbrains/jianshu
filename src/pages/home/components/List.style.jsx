import styled from 'styled-components'

export const ListWrapper = styled.div`

`
export const ListItem = styled.div`
  padding:20px 0;
  border-bottom:1px solid #dcdcdc;
  overflow:hidden;
  .Pic{
    float:right;
    width:125px;
    height:100px;
    border-radius:10px;
  }
`
export const ListInfo = styled.div`
  width:500px;
  float:left;
  .Title{
    font-size:18px;
    line-height:27px;
    font-weight:bold;
    color:#333;
  }
  .Desc{
    line-height:24px;
    font-size:13px;
    color:#999;
  }
`
export const LoadMore = styled.div`
  height:40px;
  line-height:40px;
  margin:30px 0;
  background:#a5a5a5;
  border-radius:20px;
  color:#fff;
  cursor: pointer;
  text-align:center;
`
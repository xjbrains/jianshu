import styled from 'styled-components'
export const RecommendWrapper = styled.div`
  margin:30px 0;
  width:280px;

`
export const RecommendItem = styled.div`
  width:280px;
  height:50px;
  background:url(${(props)=>props.imgUrl});
  background-size:contain;
`
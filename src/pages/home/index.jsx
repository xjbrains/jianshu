import React, { PureComponent } from 'react';
import {connect} from 'react-redux'
import {actionCreators} from './store'
import { HomeWrapper, HomeLeft, HomeRight ,BackTop} from './style'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {showScroll} = this.props
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="BannerImg" src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="" />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {showScroll&&<BackTop onClick={this.handleScrollTop}>顶部</BackTop>}
      </HomeWrapper>
    );
  }
  componentDidMount(){
    this.props.changeHomeData()
    window.addEventListener('scroll',this.props.changeScrollTopShow)
  }
  componentWillMount(){
    window.removeEventListener('scroll',this.props.changeScrollTopShow)
  }
  handleScrollTop(){
    window.scrollTo(0,0)
  }
}
const mapStateToProps = state=>({
  showScroll:state.getIn(['home','showScroll'])
})
const mapDispatchToProps = dispatch=>({
  changeHomeData(){
    dispatch(actionCreators.getHomeInfo())
  },
  changeScrollTopShow(){
    if(document.documentElement.scrollTop>100){
      dispatch(actionCreators.toggleTopShow(true))
    }else{
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(index);
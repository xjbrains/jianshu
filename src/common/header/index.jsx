import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList } from './style'
import { actionCreators } from './store'
import { Link } from 'react-router-dom'
import { actionCreators as loginActionCreators } from '@/pages/login/store'
class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { focused, handleInputFocus, handleInputBlur, list, login, logout } = this.props
    return (
      <HeaderWrapper>
        <Link to="/home">
          <Logo />
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          {
            login ?
              <NavItem onClick={logout} className="right">退出</NavItem> :
              <Link to="/login"><NavItem className="right">登录</NavItem></Link>
          }
          <NavItem className="right">
            <i className="iconfont iconAa"></i>
          </NavItem>

          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={handleInputFocus.bind(this, list)}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i
              className={`${focused ? 'focused' : ''} iconfont iconMagnifier zoom`}
            ></i>
            {this.getListArea()}
          </SearchWrapper>

        </Nav>
        <Addition>
          <Link to="/write">
            <Button className="writting">
              <i className="iconfont iconicon-checkin"></i>
              <span>写文章</span>
            </Button>
          </Link>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
  getListArea = () => {
    const { focused, list, page, mouseIn, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props
    const newList = list.toJS()
    const pageList = []
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            <span>热门搜索</span>
            <SearchInfoSwitch onClick={handleChangePage.bind(this, page, totalPage, this.spinIcon)}>
              <i ref={node => { this.spinIcon = node }} className="iconfont iconspin spin"></i>
              <span>换一批</span>
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
}
const mapStateToProps = (state) => ({
  focused: state.getIn(['header', 'focused']),
  list: state.getIn(['header', 'list']),
  page: state.getIn(['header', 'page']),
  mouseIn: state.getIn(['header', 'mouseIn']),
  totalPage: state.getIn(['header', 'totalPage']),
  login: state.getIn(['login', 'login'])
})
const mapDispatchToProps = (dispatch) => ({
  handleInputFocus(list) {
    list.size === 0 && dispatch(actionCreators.getList())
    dispatch(actionCreators.searchFocus())
  },
  handleInputBlur() {
    dispatch(actionCreators.searchBlur())
  },
  handleMouseEnter() {
    dispatch(actionCreators.mouseEnter())
  },
  handleMouseLeave() {
    dispatch(actionCreators.mouseLeave())
  },
  handleChangePage(page, totalPage, spinIcon) {
    let originAngle = spinIcon.style.transform.replace(/[^0-9]/ig, '')
    if (originAngle) {
      originAngle = parseInt(originAngle, 10)
    } else {
      originAngle = 0;
    }
    spinIcon.style.transform = `rotate(${originAngle + 360}deg)`

    if (page < totalPage) {
      page++
      dispatch(actionCreators.changePage(page))
    } else {
      dispatch(actionCreators.changePage(1))
    }
  },
  logout() {
    dispatch(loginActionCreators.logout())
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(index);
import React, { PureComponent } from 'react';
import { LoginWrapper, LoginBox, Input, Btn } from './style'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { actionCreators } from './store'
import {Redirect} from 'react-router-dom'
class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { a: 1 };
  }
  render() {
    const { loginState } = this.props
    if (!loginState) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder="账号" ref={(input) => { this.account = input }}></Input>
            <Input placeholder="密码" ref={(input) => { this.pwd = input }} type='password'></Input>
            <Btn onClick={_ => this.props.login(this.account.value, this.pwd.value)}>登录</Btn>
          </LoginBox>
        </LoginWrapper>
      );
    }else{
      return <Redirect to="/home"></Redirect>
    }
  }
}
const mapStateToProps = state => ({
  loginState: state.getIn(['login', 'login'])
})
const mapDispatchToProps = dispatch => ({
  login(act, pwd) {
    dispatch(actionCreators.login(act, pwd))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(index));
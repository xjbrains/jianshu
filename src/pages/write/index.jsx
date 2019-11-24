import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { loginState } = this.props
    if (loginState) {
      return (
        <div>写文章</div>
      );
    }else{
      return <Redirect to="/login"></Redirect>
    }

  }
}
const mapStateToProps = state => ({
  loginState: state.getIn(['login', 'login'])
})
const mapDispatchToProps = dispatch => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(index);
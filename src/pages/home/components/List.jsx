import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { ListWrapper, ListItem, ListInfo, LoadMore } from './List.style'
import { Link } from 'react-router-dom'
class List extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { articleList, getMoreList, page } = this.props
    return (
      <ListWrapper>
        {
          articleList.map(item => {
            return (
              <Link key={item.get('id')} to={`/detail/${item.get('id')}`}>
                <ListItem>
                  <img
                    className="Pic"
                    src={item.get('imgUrl')} alt="" />
                  <ListInfo>
                    <h3 className="Title">{item.get('title')}</h3>
                    <p className="Desc">{item.get('desc')}</p>
                  </ListInfo>
                </ListItem>
              </Link>
            )
          })
        }
        <LoadMore
          onClick={getMoreList.bind(this, page)}
        >更多文字</LoadMore>
      </ListWrapper>
    );
  }
}
const mapStateToProps = (state) => ({
  articleList: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'articlePage'])
})
const mapDispatchToProps = (dispatch) => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(List);
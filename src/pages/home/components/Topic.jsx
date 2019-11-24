import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { TopicWrapper, TopicItem } from './Topic.style'
class Topic extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { topicList } = this.props
    return (
      <TopicWrapper>
        {
          topicList.map((item) => {
            return (
              <TopicItem key={item.get('id')}>
                <img
                  className="TopicPic"
                  src={item.get('imgUrl')} alt="" />
                <span>{item.get('title')}</span>
              </TopicItem>
            )
          })
        }
      </TopicWrapper>
    );
  }
}
const mapStateToProps = (state) => ({
  topicList: state.getIn(['home', 'topicList'])
})
export default connect(mapStateToProps, null)(Topic);
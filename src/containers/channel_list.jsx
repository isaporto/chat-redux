import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setChannels } from '../actions';

class ChannelList extends Component {
  componentWillMount() {
    this.props.setChannels();
  }

  render() {
    const { channels } = this.props;
    return (
      <div className="channel-content">
        <div className="channel-title">
          <span>Redux Chat</span>
        </div>
        <div className="channels-list">
          <ul>
            {channels.map(channel => <li><span>#{channel}</span></li>)}
          </ul>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { setChannels },
    dispatch
  );
};

const mapStateToProps = (state) => {
  return {
    channels: state.channels,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);

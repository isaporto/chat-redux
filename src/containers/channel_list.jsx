import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setChannels, selectChannel } from '../actions';

class ChannelList extends Component {
  componentWillMount() {
    this.props.setChannels();
  }

  handleClick = (e) => {
    e.preventDefault();
    const { channels } = this.props;
    this.props.selectChannel(channels[e.currentTarget.id]);
  }

  render() {
    const { channels, selectedChannel } = this.props;
    return (
      <div className="channel-content">
        <div className="channel-title">
          <span>Redux Chat</span>
        </div>
        <div className="channels-list">
          <ul>
            {channels.map((channel, index) => {
              if (channel === selectedChannel) {
                return <li key={index} className="active"><button id={index} remote="true" onClick={this.handleClick}>#{channel}</button></li>;
              }
              return <li key={index}><button id={index} remote="true" onClick={this.handleClick}>#{channel}</button></li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { setChannels, selectChannel },
    dispatch
  );
};

const mapStateToProps = (state) => {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);

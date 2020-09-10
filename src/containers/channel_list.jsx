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
      channels.map(channel => <button remote="true">{channel}</button>)
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

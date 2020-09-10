import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Message from '../components/message';
import MessageForm from './message_form';
import { setMessages } from '../actions';


class MessageList extends Component {
  componentWillMount() {
    const { selectedChannel } = this.props;
    this.props.setMessages(selectedChannel);
  }

  render() {
    return (
      <div className="message-list">
        {this.props.messages}
        <MessageForm />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { setMessages },
    dispatch
  );
};

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);

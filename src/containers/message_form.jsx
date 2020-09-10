import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { createMessage, setUsername, fetchMessages } from '../actions';

class MessageForm extends Component {
  constructor(props) {
    super(props);

    this.messageBox = React.createRef();
  }

  componentWillMount() {
    this.props.setUsername();
  }

  componentDidMount() {
    this.messageBox.current.focus();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const content = document.getElementById('new-message');
    const { currentUsername, selectedChannel } = this.props;
    this.props.createMessage(selectedChannel, currentUsername, content.value);
    e.currentTarget.reset();
    this.fetchMessages();
  }

  fetchMessages = () => {
    const { selectedChannel } = this.props;
    this.props.fetchMessages(selectedChannel);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="message-form">
        <input id="new-message" type="text" ref={this.messageBox} />
        <button type="submit">Send</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { createMessage, setUsername, fetchMessages },
    dispatch
  );
};

const mapStateToProps = (state) => {
  return {
    currentUsername: state.currentUsername,
    selectedChannel: state.selectedChannel
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);

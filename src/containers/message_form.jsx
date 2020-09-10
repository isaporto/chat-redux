import React, { Component } from 'react';

class MessageForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    return undefined;
  }

  render() {
    return (
      <div className="message-form">
        <input type="text" onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default MessageForm;

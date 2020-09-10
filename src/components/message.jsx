import React from 'react';

const Message = (props) => {
  const { message } = props;
  return (
    <div className="message">
      <p><i>{message.author} <em>{message.created_at}</em></i></p>
      <p>{message.content}</p>
    </div>
  );
};

export default Message;

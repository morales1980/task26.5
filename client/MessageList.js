import React from 'react';

import styles from './MessageList';

const Message = props => (
  <div className={styles.Message}>
    <strong>{props.from} :</strong>
    <span>{props.text}</span>
  </div>
);

const MessageList = props => (
  <div className={styles.MessageList}>
    {
      props.messages.map((message, index) => {
        return (
          <Message
            key={index}
            from={message.from}
            text={message.text}
          />
        );
      })
    }
  </div>
);

export default MessageList;

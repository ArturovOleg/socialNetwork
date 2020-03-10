import React from 'react'
import classes from './dialogs.module.scss'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {

  const dialogs = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
  const messages = props.messages.map(message => <Message message={message.message} />)

  let messageText = React.createRef()
  let updateMessageText = () => {
    let text = messageText.current.value
    props.updateMessageText(text)
  }

  let sendMessage = () => {
    props.sendMessage()
  }

  return (
    <div className={classes.dialogsWrapper}>
      <div className={`main-block ${classes.mainBlock}`}>
        <div className={classes.dialogList}>
          <nav>
            {dialogs}
          </nav>
        </div>
        <div className={classes.messages}>
          {messages}
        </div>
      </div>
      <div className='main-block'>
        <div className={classes.newMessage}>
            <textarea ref={messageText} onChange={updateMessageText} value={props.defaultMessageText}></textarea>
            <button className={classes.addButton} onClick={sendMessage}>Send Message</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
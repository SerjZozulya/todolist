import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = ({sendMessage, onNewMessageUpdate, messages, contacts, newMessageText}: any) => {
  let newMessage: any = React.createRef();

  let onNewMessageBodyChange = () => {
    let text = newMessage.current.value;
    onNewMessageUpdate(text);
  };

  let contactsElements = contacts.map((el: any) => (
    <DialogItem id={el.id} name={el.name} key={el.id} />
  ));

  let messageItems = messages
    .map((m: any) => (
      <Message id={m.id} text={m.text} dateAndTime={m.dateAndTime} key={m.id} />
    ))
    .reverse();

  return (
    <div className={s.dialogsPage}>
      <div className={s.dialogs}>
        <div className={s.contacts}>Контакты</div>
        {contactsElements}
      </div>
      <div className={s.messages}>{messageItems}</div>
      <div className={s.newMessage}>
        <textarea
          placeholder={"Напишите    сообщение..."}
          className={s.newMessageTA}
          ref={newMessage}
          value={newMessageText}
          onChange={onNewMessageBodyChange}
        />
        <div className={s.buttonsBlock}>
          <button className={s.sendMessage} onClick={sendMessage}>
            Отправить
          </button>
          <button className={s.addFile}>Прикрепить</button>
          <button className={s.recordVoice}>Записать голосовое</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;

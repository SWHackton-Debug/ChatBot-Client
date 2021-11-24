import React, { useState, useRef } from "react";
import Chat from "./Chat";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../modules/chat";

function Chatting() {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const scrollRef = useRef();
  const { chat } = useSelector(({ chat }) => ({
    chat,
  }));

  const onChage = (e) => setMessage(e.target.value);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!message.replace(" ", "")) return;

    await dispatch(add({ name: "나의 말", comment: message }));
    setMessage("");
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  };

  return (
    <S.ChattingWrapper>
      <section>
        <article className="text">
          <h1>
            안녕하세요 인공지능 상담사 지민이입니다
            <br />
            대화을 시작해보세요
          </h1>
          <p>명령어 ex) 오늘 기분 어때?</p>
        </article>
        <article ref={scrollRef} className="chat">
          {chat.map((comment, i) => (
            <Chat key={i} name={comment.name} comment={comment.comment} />
          ))}
        </article>
        <form onSubmit={onSubmit}>
          <input
            value={message}
            onChange={onChage}
            placeholder="메세지를 보내보세요!"
            className="input"
            type="text"
          />
        </form>
      </section>
    </S.ChattingWrapper>
  );
}

export default Chatting;

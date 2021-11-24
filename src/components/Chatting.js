import React, { useState } from "react";
import Chat from "./Chat";
import * as S from "./styles";

function Chatting() {
  const [message, setMessage] = useState("");
  const onChage = (e) => setMessage(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    setMessage("");
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
        <article className="chat">
          <Chat name="지민이" comment="안녕하세요!" />
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

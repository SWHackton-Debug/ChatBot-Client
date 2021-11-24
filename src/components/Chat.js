import React from "react";
import * as S from "./styles";

function Chat({ name, comment }) {
  return (
    <S.ChatWrapper name={name}>
      <article className="user">
        {name === "지민이" && <img src="./AI_image.png" alt="AI_Image" />}
        <p>{name}</p>
      </article>
      <article className="comment">{comment}</article>
    </S.ChatWrapper>
  );
}

export default Chat;

import React from "react";
import * as S from "./styles";

function LoadingChat() {
  return (
    <S.ChatWrapper name="지민이">
      <article className="user">
        <img src="./AI_image.png" alt="AI_Image" />
        <p>지민이</p>
      </article>
      <article className="comment">
        <S.Dot className="dot1" />
        <S.Dot className="dot2" />
        <S.Dot className="dot3" />
      </article>
    </S.ChatWrapper>
  );
}

export default LoadingChat;

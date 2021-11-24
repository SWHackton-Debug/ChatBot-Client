import React from "react";
import * as S from "./styles";

function Start({ setStart }) {
  return (
    <S.StartWrapper>
      <img src="./AI_image.png" alt="AI_Image" />
      <p>
        안녕하세요! 인공지능 상담사
        <br />
        <span>지민이</span>입니다!
        <br />
        언제든지 편하게 상담해주세요~~
      </p>
      <button onClick={() => setStart(true)}>지금 대화 시작하기 🖐️</button>
    </S.StartWrapper>
  );
}

export default Start;

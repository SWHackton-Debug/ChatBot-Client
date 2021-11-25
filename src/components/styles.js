import styled, { keyframes } from "styled-components";

const BallAni = keyframes`
  0% {
    transform: scale(1)
  }
  50% {
    transform: scale(0)
  }
  100% {
    transform: scale(1)
  }
`;

export const StartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  p {
    color: #ffffff;
    text-align: center;
    margin: 30px 0;

    span {
      color: #6bffdb;
    }
  }
  button {
    font-size: 1.2rem;
    padding: 10px 60px;
    border: none;
    outline: none;
    background-color: #436dff;
    color: #ffffff;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      background-color: #2e5af7;
    }
  }
`;

export const ChattingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  text-align: center;
  color: #ffffff;

  section {
    width: 50%;
    padding: 100px;
    margin: 0 auto;
    vertical-align: middle;

    .text p {
      margin: 50px 0;
    }

    .chat {
      max-height: 420px;
      overflow-y: scroll;
    }

    form .input {
      padding: 10px 20px;
      width: 80%;
      outline: none;
      border: none;
      background: #2c2c2c;
      color: #ffffff;
      border-radius: 10px;
      font-size: 1rem;
      box-shadow: 0px 0px 10px 10px rgba(110, 35, 146, 0.25);
    }
  }
`;

export const ChatWrapper = styled.div`
  width: 80%;
  display: flex;
  margin: 20px auto;
  flex-direction: column;
  align-items: ${(props) =>
    props.name === "지민이" ? "flex-start" : "flex-end"};

  .user {
    display: flex;
    align-items: center;

    img {
      width: 40px;
      height: 40px;
      margin-right: 10px;
    }
  }
  .comment {
    display: flex;
    margin-top: 10px;
    background: linear-gradient(
      ${(props) =>
        props.name === "지민이"
          ? "180deg,rgba(222, 127, 255, 0.8) 0%,rgba(105, 138, 255, 0.8) 100%"
          : "180deg, rgba(51, 0, 158, 0.8) 0%, rgba(89, 30, 255, 0.8) 0.01%, rgba(125, 93, 255, 0.8) 100%"}
    );
    box-shadow: 0px 4px 10px rgba(74, 74, 74, 0.25);
    border-radius: 25px;
    padding: 10px 20px;

    .dot1 {
      animation: ${BallAni} 1s infinite linear alternate;
    }
    .dot2 {
      animation: ${BallAni} 1s infinite linear alternate;
      animation-delay: 0.4s;
    }
    .dot3 {
      animation: ${BallAni} 1s infinite linear alternate;
      animation-delay: 0.7s;
    }
  }
`;

export const Dot = styled.div`
  width: 5px;
  height: 5px;
  background: #ffffff;
  border-radius: 100px;
  margin-right: 5px;
`;

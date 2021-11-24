import styled from "styled-components";

export const IntroduceWrapper = styled.div`
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

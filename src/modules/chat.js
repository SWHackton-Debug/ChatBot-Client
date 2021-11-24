const ADD = "chat/ADD";

export const add = ({ name, comment }) => ({
  type: ADD,
  payload: { name, comment },
});

const initialState = [{ name: "지민이", comment: "안녕하세요!" }];

function chat(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          ...action.payload,
        },
      ];
    default:
      return state;
  }
}

export default chat;

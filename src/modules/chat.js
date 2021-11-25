import produce from "immer";

const ADD = "chat/ADD";
const ADD_COUNSEL = "chat/ADD_COUNSEL";
const START_LOADING = "chat/START_LOADING";
const FINISH_LOADING = "chat/FINISH_LOGING";
const FAILURE_LOADING = "FAILURE_LOADING";

export const add = ({ name, comment }) => ({
  type: ADD,
  payload: { name, comment },
});

export const add_counsel = ({ comment }) => ({
  type: ADD_COUNSEL,
  payload: { name: "지민이", comment },
});

export const start = () => ({
  type: START_LOADING,
});

export const finish = () => ({
  type: FINISH_LOADING,
});

export const error = ({ error }) => ({
  type: FAILURE_LOADING,
  error,
});

const initialState = {
  data: [{ name: "지민이", comment: "안녕하세요!" }],
  loading: false,
  error: "",
};

function chat(state = initialState, action) {
  switch (action.type) {
    case ADD_COUNSEL:
    case ADD:
      return produce(state, (draft) => {
        draft.data.push({ ...action.payload });
      });
    case START_LOADING:
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case FINISH_LOADING:
      return produce(state, (draft) => {
        draft.loading = false;
      });

    case FAILURE_LOADING:
      return produce(state, (draft) => {
        draft.error = action.error;
      });

    default:
      return state;
  }
}

export default chat;

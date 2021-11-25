const INIT = "auth/INIT";
const GET_INIT = "auth/GET_INIT";

export const init = () => ({
  type: INIT,
});

export const getInit = ({ conversationId, token }) => ({
  type: GET_INIT,
  payload: { conversationId, token },
});

const initialState = {
  conversationId: "",
  token: "",
};

function auth(state = initialState, action) {
  switch (action.type) {
    case GET_INIT:
      console.log(action.payload);
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

export default auth;

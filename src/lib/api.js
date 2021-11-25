import axios from "axios";

export const send = (message) => {
  // axios.get('어딘가로', )
  return { data: { comment: message } };
};

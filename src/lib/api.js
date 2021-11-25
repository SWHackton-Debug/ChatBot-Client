import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const token = process.env.REACT_APP_TOKEN;

const user = axios.create({
  baseURL: "https://directline.botframework.com",
  headers: { Authorization: `Bearer ${token}` },
});

export const send = async (message) => {
  // axios.get('어딘가로', )
  return { data: { comment: message } };
};

export const init = async () => {
  const res = await user.post("/v3/directline/tokens/generate");
  return res.data;
};

import axios from "axios";

export async function signUp(body) {
  const res = await axios.post(`/auth/signup`, body);
  return res.data;
}

export async function signIn({ email, password }) {
  const res = await axios.post(`/auth`, {
    email,
    password,
  });
  return res.data;
}

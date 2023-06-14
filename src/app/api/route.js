import axios from "axios";

export async function signUp(body) {
  const res = await axios.post(`${process.env.NEXT_PUBLIC_DB_PORT}/auth/signup`, body);
  return res.data;
}

export async function signIn({ email, password }) {
  const res = await axios.post(`${process.env.NEXT_PUBLIC_DB_PORT}/auth`, {
    email,
    password,
  });
  return res.data;
}

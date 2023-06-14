import axios from "axios";

export async function submitPost(body, token) {
  const res = await axios.post(`${process.env.NEXT_PUBLIC_DB_PORT}/post`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}

export async function getAllPosts(token, id) {
  if (id) {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_DB_PORT}/post/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } else {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_DB_PORT}/post`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  }
}

export async function getUserData(token) {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_DB_PORT}/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}

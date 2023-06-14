import axios from "axios";

export async function submitPost(body, token) {
  const res = await axios.post(`/post`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}

export async function getAllPosts(token, id) {
  if (id) {
    const res = await axios.get(`/post/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } else {
    const res = await axios.get(`/post`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  }
}

export async function getUserData(token) {
  const res = await axios.get(`/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}

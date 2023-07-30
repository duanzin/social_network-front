import api from "./api";

export async function submitPost(body, token) {
  const res = await api.post(`/post`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}

export async function getPosts(token, id) {
  let url = "/post";
  if (id) url += `/${id}`;
  const res = await api.get(`${url}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}

export async function getHomePosts(token) {
  const res = await api.get(`/post/followed`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}

export async function getUserData(token, id) {
  let url = "/user";
  if (id) url += `/${id}`;
  const res = await api.get(`${url}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}

export async function getAllUsers(token) {
  const res = await api.get(`/user/all`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}

export async function getRelationship(token, id) {
  const res = await api.get(`/relationship/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}

export async function followOrUnfollow(token, id) {
  const res = await api.post(`/relationship`, id, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}

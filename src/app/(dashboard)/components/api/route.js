import axios from "axios";

export async function submitPost(body, token) {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_DB_PORT}/post`,
    body,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
}

export async function getPosts(token, id) {
  let url = "/post";
  if (id) url += `/${id}`;
  const res = await axios.get(`${process.env.NEXT_PUBLIC_DB_PORT}${url}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}

export async function getHomePosts(token) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_DB_PORT}/post/followed`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
}

export async function getUserData(token, id) {
  let url = "/user";
  if (id) url += `/${id}`;
  const res = await axios.get(`${process.env.NEXT_PUBLIC_DB_PORT}${url}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}

export async function getAllUsers(token) {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_DB_PORT}/user/all`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}

export async function getRelationship(token, id) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_DB_PORT}/relationship/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
}

export async function followOrUnfollow(token, id) {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_DB_PORT}/relationship`,
    id,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
}

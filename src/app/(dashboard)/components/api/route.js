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

export async function getAllPosts(token, id) {
  let url = "/post";
  if (id) url += `/${id}`;
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_DB_PORT}${url}`,
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

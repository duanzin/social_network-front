import axios from "axios";

export async function submitPost(body, token) {
  const res = await axios.post(`/post`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}

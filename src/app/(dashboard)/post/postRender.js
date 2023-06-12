"use client";
import { useState, useEffect } from "react";
import { ProfileImg, StyledH3 } from "../../styleIndex";
import { useGlobalContext } from "@/app/Context/context";
import { getAllPosts } from "./api/route";

export default function PostRender() {
  const { token } = useGlobalContext();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (token) {
      const fetchData = async () => {
        try {
          const postArray = await getAllPosts(token);
          setPosts(postArray);
        } catch (error) {
          alert(error);
        }
      };
      fetchData();
    }
  }, []);

  return (
    <>
      {posts.map((post) => (
        <article
          key={post.id}
          className="flex flex-row bg-white w-full px-4 py-2.5 gap-x-2.5"
        >
          <ProfileImg src={post.users.pfp} alt="profile picture" />
          <div className="flex flex-col">
            <StyledH3>{post.users.name}</StyledH3>
            <p className="text-base font-medium">{post.content}</p>
          </div>
        </article>
      ))}
    </>
  );
}

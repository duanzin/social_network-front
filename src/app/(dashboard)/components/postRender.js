"use client";
import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { ProfileImg } from "../../styleIndex";
import { useGlobalContext } from "@/app/Context/context";
import { getAllPosts } from "./api/route";
import Link from "next/link";
import TimePassed from "./timePassed";

export default function PostRender() {
  const { token } = useGlobalContext();
  const url = usePathname();
  const hasProfileSubstring = url.includes("profile");
  const userId = hasProfileSubstring ? parseInt(url.split("/")[2], 10) : null;
  const [posts, setPosts] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      let postArray;
      if (userId) {
        postArray = await getAllPosts(token, userId);
      } else {
        postArray = await getAllPosts(token);
      }
      setPosts(postArray);
    } catch (error) {
      alert(error);
    }
  }, [token, userId]);

  useEffect(() => {
    if (token) {
      fetchData();
    }
  }, [token, fetchData]);

  return (
    <>
      {posts.map((post) => (
        <article
          key={post.id}
          className="flex flex-row bg-white w-full px-4 py-2.5 gap-x-2.5"
        >
          <ProfileImg src={post.users.pfp} alt="profile picture" />
          <div className="flex flex-col">
            <Link
              href={`/profile/${post.users.id}`}
              className="font-bold text-base text-[#0F1419] w-fit"
            >
              {post.users.name}
              <TimePassed dateTime={post.createdAt} />
            </Link>
            <p className="text-base font-medium break-all">{post.content}</p>
          </div>
        </article>
      ))}
    </>
  );
}

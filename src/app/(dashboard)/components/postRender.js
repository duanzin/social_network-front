"use client";
import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { ProfileImg } from "../../styleIndex";
import { useGlobalContext } from "@/app/Context/context";
import { getPosts, getHomePosts } from "./api/route";
import Link from "next/link";
import TimePassed from "./timePassed";
import Loading from "./postLoading";

export default function PostRender() {
  const { token } = useGlobalContext();
  const url = usePathname();
  const userId = url.includes("profile")
    ? parseInt(url.split("/")[2], 10)
    : null;
  const home = url.includes("home");
  const [posts, setPosts] = useState([]);
  const [shouldRender, setShouldRender] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      let postArray;
      if (home) {
        postArray = await getHomePosts(token);
      } else if (userId) {
        postArray = await getPosts(token, userId);
      } else {
        postArray = await getPosts(token);
      }
      setPosts(postArray);
      setShouldRender(true);
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
      {shouldRender ? (
        posts.length === 0 ? (
          <div className="bg-white w-full py-2.5 text-center text-xl text-[#5B7083]">
            Nothing has been posted yet :(
          </div>
        ) : (
          posts.map((post) => (
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
                  {post.users.name} <TimePassed dateTime={post.createdAt} />
                </Link>
                <p className="text-base font-medium break-all">
                  {post.content}
                </p>
              </div>
            </article>
          ))
        )
      ) : (
        <>{Array(6).fill(<Loading />)}</>
      )}
    </>
  );
}

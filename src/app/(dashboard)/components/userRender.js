"use client";
import { useState, useEffect } from "react";
import { getAllUsers } from "./api/route";
import { useGlobalContext } from "@/app/Context/context";
import { StyledH2, ProfileImg } from "@/app/styleIndex";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

export default function UserRender() {
  const { token } = useGlobalContext();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (token) {
      const fetchData = async () => {
        try {
          const usersData = await getAllUsers(token);
          setUsers(usersData);
        } catch (error) {
          toast.error(error.response.data.message);
        }
      };
      fetchData();
    }
  }, [token]);

  return (
    <>
      <ToastContainer />
      {users.length === 0 ? (
        <div className="bg-white w-full py-2.5 mb-px text-center text-xl text-[#5B7083]">
          There's no one here :(
        </div>
      ) : (
        users.map((user) => (
          <article
            key={user.id}
            className="flex justify-start items-center bg-white w-full px-4 py-2.5"
          >
            <Link
              href={`/profile/${user.id}`}
              className="flex flex-row items-center w-fit gap-x-2.5"
            >
              <ProfileImg src={user.pfp} alt="profile picture" />
              <StyledH2>{user.name}</StyledH2>
            </Link>
          </article>
        ))
      )}
    </>
  );
}

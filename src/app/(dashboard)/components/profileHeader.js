"use client";
import { useState, useEffect } from "react";
import { StyledH1, StyledH2 } from "@/app/styleIndex";
import { useGlobalContext } from "@/app/Context/context";
import { getUserData } from "./api/route";

export default function ProfileHeader({ id }) {
  const { token } = useGlobalContext();
  const [profile, setProfile] = useState({});

  useEffect(() => {
    if (token) {
      const fetchData = async () => {
        try {
          const userInfo = await getUserData(token, id);
          setProfile(userInfo);
        } catch (error) {
          alert(error);
        }
      };
      fetchData();
    }
  }, [token, id]);

  return (
    <section className="relative flex flex-col w-full h-auto bg-white">
      <header className="flex justify-start items-center w-full h-14 px-4">
        <StyledH1>{profile.name}</StyledH1>
      </header>
      <div className="w-full">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJwebMHlKXrA1Xig_Mk1EXRELjDMfD4LaVCA&usqp=CAU"
          className="w-full h-52"
        ></img>
        <img
          src={profile.pfp}
          className="absolute bottom-24 left-3 w-[139px] h-[139px] rounded-full border-4 border-solid border-white"
        ></img>
      </div>
      <div className="h-40 w-full pt-16 px-3.5">
        <StyledH1>{profile.name}</StyledH1>
      </div>
    </section>
  );
}

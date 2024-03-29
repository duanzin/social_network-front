"use client";
import { useState, useEffect } from "react";
import { StyledH1, PageHeader } from "@/app/styleIndex";
import { useGlobalContext } from "@/app/Context/context";
import { getUserData } from "./api/route";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Follow from "./followButton";

export default function ProfileHeader({ id }) {
  const { token } = useGlobalContext();
  const [profile, setProfile] = useState({});
  const [showFollow, setShowFollow] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: "long", day: "numeric", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  useEffect(() => {
    if (token) {
      const fetchData = async () => {
        try {
          const userInfo = await getUserData(token, id);
          const formattedDate = formatDate(userInfo.createdAt);
          if (!userInfo.profileOwner) setShowFollow(true);
          setProfile({ ...userInfo, createdAt: formattedDate });
        } catch (error) {
          toast.error(error.response.data.message);
        }
      };
      fetchData();
    }
  }, [token, id]);

  return (
    <>
      <ToastContainer />
      <section className="relative flex flex-col w-full h-auto bg-white">
        <PageHeader>
          <StyledH1>{profile.name}</StyledH1>
        </PageHeader>
        <div className="w-full">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJwebMHlKXrA1Xig_Mk1EXRELjDMfD4LaVCA&usqp=CAU"
            className="w-full h-52"
          ></img>
          <img
            src={
              profile.pfp ||
              "https://pbs.twimg.com/media/FRynXImUcAAGFWk?format=png&name=360x360"
            }
            className="absolute bottom-24 left-3 w-[139px] h-[139px] rounded-full border-4 border-solid border-white"
          ></img>
        </div>
        <div className="flex flex-row justify-between h-40 w-full pt-2.5 px-3.5">
          <div className="flex flex-col mt-12 h-fit w-fit">
            <StyledH1>{profile.name}</StyledH1>
            <span className="text-base text-[#5B7083] font-medium">
              Joined {profile.createdAt}
            </span>
            <span className="text-base text-[#5B7083] font-medium">
              {profile.following} Following {profile.followers} Followers
            </span>
          </div>
          {showFollow && <Follow token={token} id={id} />}
        </div>
      </section>
    </>
  );
}

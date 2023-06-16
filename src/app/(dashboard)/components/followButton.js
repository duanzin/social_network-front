"use client";
import { useState } from "react";
import { Button } from "@/app/styleIndex";
import { followOrUnfollow } from "./api/route";

export default function Follow({ token, id }) {
  const [followed, setFollowed] = useState(false);

  const handleClick = async () => {
    await followOrUnfollow(token, { id: id });
    setFollowed((prevFollowed) => !prevFollowed);
  };

  return (
    <Button
      type="button"
      size="small"
      color={followed ? "transparent" : "blue"}
      onClick={handleClick}
    >
      {followed ? "Unfollow" : "Follow"}
    </Button>
  );
}

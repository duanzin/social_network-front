"use client";
import { useState, useEffect } from "react";
import { Button } from "@/app/styleIndex";
import { followOrUnfollow, getRelationship } from "./api/route";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Follow({ token, id }) {
  const [followed, setFollowed] = useState(false);
  const [disable, setDisable] = useState(false);

  const handleClick = async () => {
    try {
      setDisable(true);
      const { relationship: relationId } = await followOrUnfollow(token, {
        id: id,
      });
      if (relationId) {
        setFollowed(relationId);
        setDisable(false);
      } else {
        setFollowed(false);
        setDisable(false);
      }
    } catch (error) {
      setDisable(false);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    if (token) {
      const fetchData = async () => {
        try {
          const { relationship: isFollowing } = await getRelationship(
            token,
            id
          );
          if (isFollowing) setFollowed(isFollowing);
        } catch (error) {
          alert(error);
        }
      };
      fetchData();
    }
  }, [token, id]);

  return (
    <>
      <ToastContainer />
      <Button
        type="button"
        size="small"
        color={followed ? "transparent" : "blue"}
        onClick={handleClick}
        disabled={disable}
      >
        {followed ? "Unfollow" : "Follow"}
      </Button>
    </>
  );
}

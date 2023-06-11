"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { submitPost } from "./api/route";
import { ProfileImg, Button } from "../../styleIndex";
import { useGlobalContext } from "@/app/Context/context";

export default function PostCreation() {
  const { push } = useRouter();
  const { token } = useGlobalContext();
  const [content, setContent] = useState("");
  const [disable, setDisable] = useState(true);

  const handleChange = (e) => {
    setContent(e.target.value);
    if (e.target.value.trim().length === 0) {
      setDisable(true);
    } else {
      setDisable(false);
    }
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setDisable(true);
      await submitPost({content: content}, token);
      setContent("");
      push("/home");
    } catch (error) {
      alert(error);
      setDisable(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-row bg-white px-4 py-2.5 gap-x-2.5 w-full min-h-32 h-auto"
    >
      <ProfileImg
        src="https://image.api.playstation.com/vulcan/img/cfn/11307uYG0CXzRuA9aryByTHYrQLFz-HVQ3VVl7aAysxK15HMpqjkAIcC_R5vdfZt52hAXQNHoYhSuoSq_46_MT_tDBcLu49I.png"
        alt="user profile picture"
      />
      <div className="flex flex-col flex-wrap w-full h-full gap-y-2 items-end justify-between">
        <textarea
          name="content"
          placeholder="What’s happening?"
          maxLength="150"
          required
          value={content}
          onChange={handleChange}
          className="resize-none w-full h-auto text-base font-medium placeholder:text-xl placeholder:text-[#5B7083] focus:outline-none"
        ></textarea>
        <Button type="submit" size="small" disabled={disable}>
          post
        </Button>
      </div>
    </form>
  );
}

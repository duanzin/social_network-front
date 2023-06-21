"use client";
import { useState } from "react";
import { submitPost } from "./api/route";
import { Button } from "../../styleIndex";
import { useGlobalContext } from "@/app/Context/context";

export default function PostCreation() {
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
      await submitPost({ content: content }, token);
      setContent("");
      window.location.reload();
    } catch (error) {
      alert(error);
      setDisable(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col flex-wrap items-end justify-between bg-white px-4 py-2.5 gap-y-2 w-full min-h-32 h-auto"
    >
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
        Post
      </Button>
    </form>
  );
}

import { StyledH1 } from "@/app/styleIndex";
import PostCreation from "../components/postForm";

export default function Post() {
  return (
    <>
      <header className="flex justify-start items-center bg-white h-14 px-4">
        <StyledH1>Create a Post</StyledH1>
      </header>
      <PostCreation />
    </>
  );
}
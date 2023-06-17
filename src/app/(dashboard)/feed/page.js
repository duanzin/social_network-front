import { StyledH1 } from "@/app/styleIndex";
import PostRender from "../components/postRender";
import PostCreation from "../components/postForm";

export default function Feed() {
  return (
    <>
      <header className="flex justify-start items-center bg-white h-14 px-4">
        <StyledH1>My Feed</StyledH1>
      </header>
      <PostCreation />
      <PostRender />
    </>
  );
}
import { StyledH2, StyledH3, ProfileImg } from "@/app/styleIndex";
import PostCreation from "../post/postForm";
import PostRender from "../post/postRender";

export default function Home() {
  return (
    <>
      <header className="flex justify-start items-center bg-white h-14 px-4">
        <StyledH2>Home</StyledH2>
      </header>
      <PostCreation />
      <PostRender />
    </>
  );
}

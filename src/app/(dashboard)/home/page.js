import { StyledH1 } from "@/app/styleIndex";
import PostCreation from "../components/postForm";
import PostRender from "../components/postRender";

export default function Home() {
  return (
    <>
      <header className="flex justify-start items-center bg-white h-14 px-4">
        <StyledH1>Home</StyledH1>
      </header>
      <PostCreation />
      <PostRender />
    </>
  );
}

import { StyledH1 } from "@/app/styleIndex";
import PostRender from "../components/postRender";

export default function OwnProfile() {
  return (
    <>
      <header className="flex justify-start items-center bg-white h-14 px-4">
        <StyledH1>Profile</StyledH1>
      </header>
      <PostRender />
    </>
  );
}
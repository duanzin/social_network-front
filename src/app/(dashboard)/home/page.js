import { StyledH1, PageHeader } from "@/app/styleIndex";
import PostCreation from "../components/postForm";
import PostRender from "../components/postRender";

export default function Home() {
  return (
    <>
      <PageHeader>
        <StyledH1>Home</StyledH1>
      </PageHeader>
      <PostCreation />
      <PostRender />
    </>
  );
}

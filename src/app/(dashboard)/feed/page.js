import { StyledH1, PageHeader } from "@/app/styleIndex";
import PostRender from "../components/postRender";
import PostCreation from "../components/postForm";

export default function Feed() {
  return (
    <>
      <PageHeader>
        <StyledH1>Global Feed</StyledH1>
      </PageHeader>
      <PostCreation />
      <PostRender />
    </>
  );
}
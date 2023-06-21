import { StyledH1, PageHeader } from "@/app/styleIndex";
import PostCreation from "../components/postForm";

export default function Post() {
  return (
    <>
      <PageHeader>
        <StyledH1>Create a Post</StyledH1>
      </PageHeader>
      <PostCreation />
    </>
  );
}
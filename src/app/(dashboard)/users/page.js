import { StyledH1, PageHeader } from "@/app/styleIndex";
import UserRender from "../components/userRender";

export default function UsersList() {
  return (
    <>
      <PageHeader>
        <StyledH1>Meet New People</StyledH1>
      </PageHeader>
      <UserRender />
    </>
  );
}

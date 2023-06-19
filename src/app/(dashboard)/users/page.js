import { StyledH1 } from "@/app/styleIndex";
import UserRender from "../components/userRender";

export default function UsersList() {
  return (
    <>
      <header className="flex justify-start items-center bg-white h-14 px-4">
        <StyledH1>Meet New People</StyledH1>
      </header>
      <UserRender />
    </>
  );
}

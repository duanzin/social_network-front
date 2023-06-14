import Link from "next/link";
import { Button } from "../styleIndex";
import ProfileLink from "./components/profileLink";

export default function DashboardLayout({ children }) {
  return (
    <>
      <nav className="flex flex-col gap-y-7 pt-4">
        <p className="flex items-center text-lg font-semibold gap-x-1">
          inspired by
          <ion-icon name="logo-twitter" className="text-3xl"></ion-icon>
        </p>
        <Link
          href="/home"
          className="flex gap-x-5 items-center font-bold text-lg text-[#0F1419] w-fit"
        >
          <ion-icon name="home-outline" className="text-3xl"></ion-icon>
          Home
        </Link>
        <ProfileLink />
        <Button type="button" size="medium">
          Post
        </Button>
      </nav>
      <main className="flex flex-col gap-y-px w-[600px] h-fit bg-[#EBEEF0] mr-7 ml-7 px-px">
        {children}
      </main>
    </>
  );
}

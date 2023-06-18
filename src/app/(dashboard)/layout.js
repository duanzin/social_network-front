import Link from "next/link";
import { Button } from "../styleIndex";
import ProfileLink from "./components/profileLink";
import { HomeIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

export default function DashboardLayout({ children }) {
  return (
    <>
      <nav className="flex flex-col gap-y-7 pt-4">
        <p className="flex items-center text-lg font-semibold gap-x-1">
          inspired by Twitter
        </p>
        <Link
          href="/home"
          className="flex gap-x-5 items-center font-bold text-lg text-[#0F1419] w-fit"
        >
          <HomeIcon className="h-8 w-8"></HomeIcon>
          Home
        </Link>
        <ProfileLink />
        <Link
          href="/feed"
          className="flex gap-x-5 items-center font-bold text-lg text-[#0F1419] w-fit"
        >
          <GlobeAltIcon className="h-8 w-8"></GlobeAltIcon>
          Feed
        </Link>
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

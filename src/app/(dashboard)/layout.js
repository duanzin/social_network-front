import Link from "next/link";
import { Button, LinkText } from "../styleIndex";
import ProfileLink from "./components/profileLink";
import {
  HomeIcon,
  GlobeAltIcon,
  UsersIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";
import { Suspense } from "react";
import Loading from "./loading";

export default function DashboardLayout({ children }) {
  return (
    <>
      <aside className="mr-7 ml-5 max-[571px]:hidden">
        <nav className="sticky top-0 flex flex-col gap-y-7 pt-4">
          <p className="flex items-center text-lg font-semibold">
            inspired by Twitter
          </p>
          <Link href="/home" className="flex gap-x-5 items-center w-fit">
            <HomeIcon className="h-8 w-8"></HomeIcon>
            <LinkText>Home</LinkText>
          </Link>
          <ProfileLink />
          <Link href="/feed" className="flex gap-x-5 items-center w-fit">
            <GlobeAltIcon className="h-8 w-8"></GlobeAltIcon>
            <LinkText>Feed</LinkText>
          </Link>
          <Link href="/users" className="flex gap-x-5 items-center w-fit">
            <UsersIcon className="h-8 w-8"></UsersIcon>
            <LinkText>Users</LinkText>
          </Link>
          <Link href="/post" className="flex items-center w-fit">
            <Button type="button" size="medium">
              Create Post
            </Button>
          </Link>
        </nav>
      </aside>
      <main className="flex flex-col gap-y-px w-[600px] h-fit bg-[#EBEEF0] px-px pb-px mb-14 min-[572px]:mr-5">
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </main>
      <footer className="fixed bottom-0 z-10 bg-white border-t min-[572px]:hidden">
        <nav className="flex flex-row justify-between w-screen h-14 px-4">
          <Link href="/home" className="flex items-center w-fit">
            <HomeIcon className="h-8 w-8"></HomeIcon>
          </Link>
          <ProfileLink />
          <Link href="/post" className="flex items-center w-fit">
            <PencilIcon className="h-8 w-8"></PencilIcon>
          </Link>
          <Link href="/feed" className="flex items-center w-fit">
            <GlobeAltIcon className="h-8 w-8"></GlobeAltIcon>
          </Link>
          <Link href="/users" className="flex items-center w-fit">
            <UsersIcon className="h-8 w-8"></UsersIcon>
          </Link>
        </nav>
      </footer>
    </>
  );
}

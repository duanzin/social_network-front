"use client";
import { useState, useEffect } from "react";
import { useGlobalContext } from "@/app/Context/context";
import Link from "next/link";
import { getUserData } from "./api/route";

export default function ProfileLink() {
  const { token } = useGlobalContext();
  const [userId, setUserId] = useState([]);

  useEffect(() => {
    if (token) {
      const fetchData = async () => {
        try {
          const { id } = await getUserData(token);
          setUserId(id);
        } catch (error) {
          alert(error);
        }
      };
      fetchData();
    }
  }, [token]);
  return (
    <Link
      href={`/profile/${userId}`}
      className="flex gap-x-5 items-center font-bold text-lg text-[#0F1419] w-fit"
    >
      <ion-icon name="person-outline" className="text-3xl"></ion-icon>
      Profile
    </Link>
  );
}

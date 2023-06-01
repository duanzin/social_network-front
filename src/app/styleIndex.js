import { w } from "windstitch";

export const AuthForm = w.form(
  `flex flex-col justify-center items-center m-auto mt-[130px] gap-y-6`
);
export const AuthInput = w.input(
  `w-[450px] h-[70px] pl-5 bg-white border border-solid rounded-md
    border-gray-500 placeholder:text-lg placeholder:text-black/60 placeholder:font-normal`
);
export const AuthButton = w.button(
  `w-[450px] h-[60px] pl-5 bg-[#1DA1F2] border-none rounded-[76px] font-bold
    text-lg text-white text-center`
);
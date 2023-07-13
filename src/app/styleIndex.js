import { w } from "windstitch";

export const AuthForm = w.form(
  `flex flex-col justify-center items-center mt-[10vmin] gap-y-6`
);
export const AuthInput = w.input(
  `w-96 max-[413px]:w-4/5 h-14 pl-5 bg-white border border-solid rounded-md
    border-gray-500 placeholder:text-lg placeholder:text-black/60
    placeholder:font-normal focus:outline-none`
);
export const Button = w.button(
  ` rounded-[76px] font-bold text-lg text-center disabled:opacity-50`,
  {
    variants: {
      size: {
        big: `w-96 max-[413px]:w-4/5 h-14`,
        medium: `w-56 h-12 px-4 leading-none max-[768px]:w-full`,
        small: `w-auto px-4 h-10`,
      },
      color: {
        blue: `bg-[#1DA1F2] border-none text-white`,
        transparent: `bg-transparent text-[#1DA1F2] border border-[#1DA1F2] border-solid`,
      },
    },
    defaultVariants: {
      size: "big",
      color: "blue",
    },
  }
);
export const StyledH1 = w.h1(`font-bold text-xl text-[#0F1419]`);
export const StyledH2 = w.h2(`font-bold text-base text-[#0F1419]`);
export const ProfileImg = w.img(`w-12 h-12 rounded-full`);
export const PageHeader = w.header(`sticky top-0 z-10 flex justify-start max-[571px]:justify-center items-center bg-white h-14 px-4`);
export const LinkText = w.p(`font-bold text-lg text-[#0F1419] max-[571px]:hidden`);
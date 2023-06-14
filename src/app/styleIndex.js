import { w } from "windstitch";

export const AuthForm = w.form(
  `flex flex-col justify-center items-center m-auto mt-[130px] gap-y-6`
);
export const AuthInput = w.input(
  `w-[450px] h-[70px] pl-5 bg-white border border-solid rounded-md
    border-gray-500 placeholder:text-lg placeholder:text-black/60
    placeholder:font-normal focus:outline-none`
);
export const Button = w.button(
  `bg-[#1DA1F2] border-none rounded-[76px] font-bold
    text-lg text-white text-center disabled:opacity-50`,
  {
    variants: {
      size: {
        big: `w-[450px] h-[60px]`,
        medium: `w-56 h-12`,
        small: `w-20 h-10`,
      },
    },
    defaultVariants: {
      size: "big",
    },
  }
);
export const StyledH1 = w.h1(`font-bold text-xl text-[#0F1419]`);
export const StyledH2 = w.h2(`font-bold text-base text-[#0F1419]`);
export const ProfileImg = w.img(`w-12 h-12 rounded-full`);

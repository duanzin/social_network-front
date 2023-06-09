import Link from "next/link";
import { Button, ProfileImg, StyledH3, StyledH2 } from "../styleIndex";

export default function DashboardLayout({ children }) {
  return (
    <>
      <nav className="flex flex-col gap-y-7 pt-4">
        <p className="flex items-center text-lg font-semibold gap-x-1">
          inspired by{" "}
          <ion-icon
            name="logo-twitter"
            className="text-3xl text-[#1DA1F2]"
          ></ion-icon>
        </p>
        <Link
          href="/home"
          className="flex gap-x-5 items-center font-bold text-lg text-[#0F1419] w-fit"
        >
          <ion-icon name="home-outline" className="text-3xl"></ion-icon>
          Home
        </Link>
        <Link
          href="/profile"
          className="flex gap-x-5 items-center font-bold text-lg text-[#0F1419] w-fit"
        >
          <ion-icon name="person-outline" className="text-3xl"></ion-icon>
          Profile
        </Link>
        <Button type="button" size="medium">
          Post
        </Button>
      </nav>
      <main className="flex flex-col gap-y-px w-[600px] h-fit bg-[#EBEEF0] mr-7 ml-7 px-px">
        {children}
      </main>
      <aside className="w-[350px] flex flex-col items-start bg-[#F7F9FA] rounded-2xl p-4">
        <StyledH2>You might like</StyledH2>
        <ul className="flex flex-col w-full my-5 gap-y-5">
          <li className="flex flex-row justify-between items-center">
            <div className="flex flex-row items-center gap-x-3">
              <ProfileImg
                src="https://img.elo7.com.br/product/main/3B06B23/imagem-digital-jesus-e-leao-foto-para-quadro.jpg"
                alt="profile picture"
              />
              <StyledH3>leon</StyledH3>
            </div>
            <button
              className="w-20 h-8 border border-solid border-[#1DA1F2] rounded-[50px] 
                bg-transparent text-[#1DA1F2] font-bold text-sm text-center"
            >
              Follow
            </button>
          </li>
          <li className="flex flex-row justify-between items-center">
            <div className="flex flex-row items-center gap-x-3">
              <ProfileImg
                src="https://ufsb.edu.br/progepe/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png"
                alt="profile picture"
              />
              <StyledH3>penguim</StyledH3>
            </div>
            <button
              className="w-20 h-8 border border-solid border-[#1DA1F2] rounded-[50px] 
                bg-transparent text-[#1DA1F2] font-bold text-sm text-center"
            >
              Follow
            </button>
          </li>
          <li className="flex flex-row justify-between items-center">
            <div className="flex flex-row items-center gap-x-3">
              <ProfileImg
                src="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg"
                alt="profile picture"
              />
              <StyledH3>lente</StyledH3>
            </div>
            <button
              className="w-20 h-8 border border-solid border-[#1DA1F2] rounded-[50px] 
                bg-transparent text-[#1DA1F2] font-bold text-sm text-center"
            >
              Follow
            </button>
          </li>
        </ul>
        <p className="font-medium text-sm text-[#1DA1F2]">Show more</p>
      </aside>
    </>
  );
}

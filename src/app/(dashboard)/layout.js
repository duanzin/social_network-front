import Link from "next/link";
import { Button, ProfileImg, StyledH3, StyledH2 } from "../styleIndex";

export default function DashboardLayout({ children }) {
  return (
    <>
      <nav class="flex flex-col">
        <Link href="/home" class="font-bold text-lg text-[#0F1419]">
          Home
        </Link>
        <Link href="/profile" class="font-bold text-lg text-[#0F1419]">
          Profile
        </Link>
        <Button type="button" size="medium">
          Post
        </Button>
      </nav>
      {children}
      <aside class="w-[350px] flex flex-col items-start bg-gray-100 rounded-2xl p-4">
        <StyledH2>You might like</StyledH2>
        <ul class="flex flex-col w-full my-5 gap-y-5">
          <li class="flex flex-row justify-between items-center">
            <div class="flex flex-row items-center gap-x-3">
              <ProfileImg
                src="https://img.elo7.com.br/product/main/3B06B23/imagem-digital-jesus-e-leao-foto-para-quadro.jpg"
                alt="profile picture"
              />
              <StyledH3>leon</StyledH3>
            </div>
            <button
              class="w-20 h-8 border border-solid border-[#1DA1F2] rounded-[50px] 
                bg-transparent text-[#1DA1F2] font-bold text-sm text-center"
            >
              Follow
            </button>
          </li>
          <li class="flex flex-row justify-between items-center">
            <div class="flex flex-row items-center gap-x-3">
              <ProfileImg
                src="https://ufsb.edu.br/progepe/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png"
                alt="profile picture"
              />
              <StyledH3>penguim</StyledH3>
            </div>
            <button
              class="w-20 h-8 border border-solid border-[#1DA1F2] rounded-[50px] 
                bg-transparent text-[#1DA1F2] font-bold text-sm text-center"
            >
              Follow
            </button>
          </li>
          <li class="flex flex-row justify-between items-center">
            <div class="flex flex-row items-center gap-x-3">
              <ProfileImg
                src="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg"
                alt="profile picture"
              />
              <StyledH3>lente</StyledH3>
            </div>
            <button
              class="w-20 h-8 border border-solid border-[#1DA1F2] rounded-[50px] 
                bg-transparent text-[#1DA1F2] font-bold text-sm text-center"
            >
              Follow
            </button>
          </li>
        </ul>
        <p class="font-medium text-sm text-[#1DA1F2]">Show more</p>
      </aside>
    </>
  );
}

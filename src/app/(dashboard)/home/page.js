import { StyledH2, StyledH3, ProfileImg } from "@/app/styleIndex";
import PostCreation from "../post/postCreation";

const array = [
  {
    id: 1,
    username: "michael jackson",
    pfp: "https://media.gettyimages.com/id/3231394/pt/foto/portrait-of-american-pop-star-michael-jackson-wearing-a-red-leather-jacket-at-the-opening-of-the.jpg?s=612x612&w=gi&k=20&c=cavqimzNBBoqwnVfZJHMzWQ3vugETzmm72wkViFmW9E=",
    content: "any adiwoki adiwoki adiwoki annie",
  },
  {
    id: 2,
    username: "o tal do punk",
    pfp: "https://image.api.playstation.com/vulcan/ap/rnd/202111/3013/cKZ4tKNFj9C00giTzYtH8PF1.png",
    content:
      "sei quem é esse david n, nunca nem ouvi falar, mlk anda com jaqueta de gari tmnc mó inutil, vontade é de tomar um sorvete",
  },
  {
    id: 3,
    username: "lets go",
    pfp: "https://assetsio.reedpopcdn.com/grand-theft-auto-5-1647623589100.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
    content: "cade o baiano, baiano cade",
  },
];

export default function Home() {
  return (
    <>
      <header className="flex justify-start items-center bg-white h-14 px-4">
        <StyledH2>Home</StyledH2>
      </header>
      <PostCreation />
      {array.map((post) => (
        <article
          key={post.id}
          className="flex flex-row bg-white px-4 py-2.5 gap-x-2.5"
        >
          <ProfileImg src={post.pfp} alt="profile picture" />
          <div className="flex flex-col">
            <StyledH3>{post.username}</StyledH3>
            <p className="text-base font-medium">{post.content}</p>
          </div>
        </article>
      ))}
    </>
  );
}

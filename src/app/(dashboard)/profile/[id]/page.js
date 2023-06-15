import PostRender from "../../components/postRender";
import ProfileHeader from "../../components/profileHeader";

export default function Profile({ params }) {
  return (
    <>
      <ProfileHeader id={params.id} />
      <PostRender />
    </>
  );
}

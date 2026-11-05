import ProfilePage from "@/components/ProfilePage";
import { profile } from "@/data/profile";

export default function Home() {
  return <ProfilePage profile={profile} />;
}

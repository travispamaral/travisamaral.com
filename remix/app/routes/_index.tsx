import type { MetaFunction } from "@remix-run/node";
import Header from "../components/Header";
import Hero from "../components/Hero";
// import profilePicture from "../../public/profile.jpg";
// import { GitHubIcon, LinkedInIcon } from "~/components/SocialIcons";

export const meta: MetaFunction = () => {
  return [
    { title: "Travis Amaral" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="px-4 relative rounded-xl bg-white">
      <Header />
      <Hero />
    </div>
  );
}

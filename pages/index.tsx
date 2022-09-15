import type { GetServerSideProps, NextPage } from "next";
import { Header, Bio, Contact, Url, Interests, Details } from "../components";

const social = [
  {
    href: "https://www.linkedin.com/in/travis-amaral-42383222/",
    name: "LinkedIn",
  },
  {
    href: "https://twitter.com/travispamaral",
    name: "Twitter",
  },
  {
    href: "https://codepen.io/travispamaral",
    name: "Codepen",
  },
  {
    href: "https://www.github.com/travispamaral",
    name: "GitHub",
  },
];

const Home: NextPage = ({}) => {
  return (
    <>
      <Header />
      <main className="grid grid-cols-[300px,1fr] gap-5 mx-6">
        <div>
          <Bio />
          <div className="mt-4">
            <Contact />
          </div>
          <Url />
          <Interests />
          <Details />
        </div>
        <div>
          <div className="border-2 border-black h-20 flex flex-col items-center justify-center mt-4 font-bold">
            <span className="font-bold">Add me to your extended network</span>
            <div className="flex gap-3 font-normal text- mt-2 text-sm">
              {social.map((item) => (
                <a
                  href={item.href}
                  key={item.name}
                  className="text-blue-700 hover:underline"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

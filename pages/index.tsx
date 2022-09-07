import type { NextPage } from "next";
import { Header, Bio, Contact, Url, Interests } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main className="grid grid-cols-[300px,1fr] gap-5 mx-6">
        <div>
          <Bio />
          <Contact />
          <Url />
          <Interests />
        </div>
        <div>right</div>
      </main>
    </>
  );
};

export default Home;

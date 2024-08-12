import { FC } from "react";
import Projects from "../components/sections/Projects";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Contacts from "../components/sections/Contacts";
import Hero from "../components/sections/Hero";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <main className="flex-1 flex flex-col gap-[80px] lg:gap-[200px]">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contacts />
    </main>
  );
};

export default Home;

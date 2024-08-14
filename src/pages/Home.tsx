import { FC } from "react";
import Projects from "../components/sections/Projects";
import About from "../components/sections/About";
import Contacts from "../components/sections/Contacts";
import Hero from "../components/sections/Hero";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Contacts />
    </main>
  );
};

export default Home;

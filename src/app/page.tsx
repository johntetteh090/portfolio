import Hero from "../components/Hero";
import WhatDoIHelp from "../components/WhatDoIHelp";
import About from "../components/About";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="home" className="flex flex-col gap-24 py-16">
        <Hero />
        <WhatDoIHelp />
        <About />
        
      </main>
    </>
  );
}

import Hero from "../components/Hero";
import WhatDoIHelp from "../components/WhatDoIHelp";
import AboutUs from "../components/AboutUs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="home" className="flex flex-col pt-16">
        <Hero />
        <WhatDoIHelp />
        <AboutUs />
        {/* <About /> */}
      </main>
      <Footer />
    </>
  );
}

import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import Testimonials from "./components/sections/Testimonials";
import GetInTouch from "./components/sections/GetInTouch";
import Footer from "./components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <GetInTouch />
      </main>
      <Footer />
    </>
  );
}

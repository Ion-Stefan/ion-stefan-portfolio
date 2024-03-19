import NavBar from "./components/NavBar";
import { Cursor } from "./components/Cursor";
import { HeroSection } from "./components/HeroSection";
import { TextSection } from "./components/TextSection";
import { GetInTouch } from "./components/GetInTouch";
import { FeaturedProjectsSection } from "./components/FeaturedProjectsSection";

export default function App() {
  return (
    <>
      <section className="min-h-[100vh]" id="about">
        <Cursor />
        <NavBar />
        <HeroSection />
        <div className="flex items-center px-[2vw]">
          <TextSection />
        </div>
      </section>
      <section id="work">
        <div className="flex items-center px-[2vw]">
          <FeaturedProjectsSection />
        </div>
      </section>
      <section id="contact">
        <GetInTouch />
      </section>
    </>
  );
}

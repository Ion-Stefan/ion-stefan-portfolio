import NavBar from "./components/NavBar";
import { Cursor } from "./components/Cursor";
import { HeroSection } from "./components/HeroSection";
import { TextSection } from "./components/TextSection";
import { GetInTouch } from "./components/GetInTouch";
import { WorkShowcase } from "./components/WorkShowcase";

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
        <WorkShowcase />
      </section>
      <section id="contact">
        <GetInTouch />
      </section>
    </>
  );
}

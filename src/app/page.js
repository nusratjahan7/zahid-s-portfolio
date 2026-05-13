import About from "@/Components/About/About";
import Banner from "@/Components/Banner/Banner";
import Education from "@/Components/Education/Education";
import Experience from "@/Components/Experience/Experience";
import Navbar from "@/Components/Navbar/Navbar";
import Contact from "@/Components/Skill/Contact/Contact";
import Skill from "@/Components/Skill/Skill";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <Experience />
      <Education />
      <Skill />
      <Contact />
    </div>
  );
}

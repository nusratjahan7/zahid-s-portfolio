import About from "@/Components/About/About";
import Banner from "@/Components/Banner/Banner";
import Education from "@/Components/Education/Education";
import Experience from "@/Components/Experience/Experience";
import Navbar from "@/Components/Navbar/Navbar";
import Contact from "@/Components/Contact/Contact";
import Skill from "@/Components/Skill/Skill";
import Footer from "@/Components/Footer/Footer";

export default async function Home() {
  await new Promise(r => setTimeout(r, 800));
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <Experience />
      <Education />
      <Skill />
      <Contact />
      <Footer />
    </div>
  );
}

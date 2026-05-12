import About from "@/Components/About/About";
import Banner from "@/Components/Banner/Banner";
import Experience from "@/Components/Experience/Experience";
import Navbar from "@/Components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <Experience />
    </div>
  );
}

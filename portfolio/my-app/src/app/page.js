import Image from "next/image";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Skill from "./Components/Skill";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <>
    <Navbar/>
    <About/>
    <Skill/>
    <Projects/>
    <Footer/>
    </>
  );
}

import NavBar from "@/components/nav/NavBar";
import Projects from "@/components/projects/Projects";
import Home from "@/components/home/Home";
import Skills from "@/components/skills/Skills";
import Achievements from "@/components/achievements/Achievements";
import Contact from "@/components/contact/Contact";
import { Toaster } from "@/components/ui/toaster";
import Experience from "./components/experience/Experience";
export default function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Projects />
      <Experience />
      <Skills />
      <Achievements />
      <Contact />
      <Toaster />
    </>
  );
}

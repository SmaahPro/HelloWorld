import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import EduQualification from "@/components/EduQualification";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main className="mt-16">
      <Navbar />
      <HeroSection />
      <AboutMe />
      <TechStack />
      <Project />
      <EduQualification />
      <Contact />
      <Footer />
    </main>
  );
}
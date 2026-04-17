
import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import AssistantSection from "./components/homepage/assistant";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

async function getData() {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`, { next: { revalidate: 3600 } });
  if (!res.ok) return [];
  const data = await res.json();
  return data.filter((item: any) => item?.cover_image).sort(() => Math.random() - 0.5);
}

export default async function Home() {

  return (
    <div suppressHydrationWarning>
      
      <AboutSection />
      <HeroSection />
      <Experience />
      <Skills />
      <Projects />
      <AssistantSection />
      <Education />
      <ContactSection />
    </div>
  );
}

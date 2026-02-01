import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Works from "@/components/sections/Works";
import Skills from "@/components/sections/Skills";
import Links from "@/components/sections/Links";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="flex flex-col mx-auto max-w-5xl px-6 py-24 gap-30">
        <About />
        <Works/>
        <Skills/>
        <Links />
      </div>
    </>
  );
}

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { Experience } from "@/components/sections/experience";
import { Quotes } from "@/components/sections/quotes";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Experience />
        <About />
        <Quotes />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}

"use client";

import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { MinistrationsSection } from "@/components/sections/ministrations";
import { ContactsSection } from "@/components/sections/contacts";
import { InformationSection } from "@/components/sections/informations";

export default function Home() {
  return (
    <main className="font-sans" id="home">
      <HeroSection />

      <AboutSection />

      <MinistrationsSection />

      <ContactsSection />

      <InformationSection />
    </main>
  );
}

"use client";

import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { MinistrationsSection } from "@/components/sections/ministrations";
import { ContactsSection } from "@/components/sections/contacts";
import { InformationSection } from "@/components/sections/informations";
import { useEffect, useState } from "react";
import LoadingScreen from "./loading";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

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

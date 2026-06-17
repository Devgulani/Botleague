import { Navbar } from "@/components/Navbar/Navbar";
import { Hero } from "@/components/Hero/Hero";
import { EventsSection } from "@/components/Events/EventsSection";
import { JourneySection } from "@/components/Journey/JourneySection";
import { WhatIsBotLeague } from "@/components/About/WhatIsBotLeague";
import { CategoriesSection } from "@/components/Catagories/CategoriesSection";
import { DisciplinesSection } from "@/components/Disciplines/DisciplinesSection";
import { AdvantageSection } from "@/components/Advantage/AdvantageSection";
import { EcosystemSection } from "@/components/Ecosystem/EcosystemSection";
import { SponsorsSection } from "@/components/Sponsors/SponsorsSection";
import { Footer } from "@/components/Footer/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <EventsSection />
        <JourneySection />
        <WhatIsBotLeague />
        <CategoriesSection />
        <DisciplinesSection />
        <AdvantageSection />
        <EcosystemSection />
        <SponsorsSection />
      </main>
      <Footer />
    </div>
  );
}

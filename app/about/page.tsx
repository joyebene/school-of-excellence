import AboutCTA from "@/components/about/AboutCTA";
import AboutHero from "@/components/about/AboutHero";
import ExcellenceFramework from "@/components/about/ExcellenceFramework";
import FounderPreview from "@/components/about/FounderPreview";
import ImpactSection from "@/components/about/ImpactSection";
import OurStory from "@/components/about/OurStory";
import VisionMission from "@/components/about/VissionMission";
import WhyDifferent from "@/components/about/WhyDifferent";


export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <AboutHero />
      <OurStory />
      <VisionMission />
      <ExcellenceFramework />
      <WhyDifferent />
      <ImpactSection />
      <FounderPreview />
      <AboutCTA />
    </main>
  );
}
import Achievements from "@/components/founder/Achievements";
import AreasOfImpact from "@/components/founder/AreaOfImpact";
import ConnectFounder from "@/components/founder/ConnectFounder";
import FounderCTA from "@/components/founder/FounderCTA";
import FounderHero from "@/components/founder/FounderHero";
import FounderStory from "@/components/founder/FounderStory";
import JourneyTimeline from "@/components/founder/JourneyTimeline";
import Philosophy from "@/components/founder/Philosophy";

export default function FounderPage() {
  return (
    <main className="overflow-hidden">
      <FounderHero />
      <FounderStory />
      <JourneyTimeline />
      <Achievements />
      <AreasOfImpact />
      <Philosophy />
      <ConnectFounder />
      <FounderCTA />
    </main>
  );
}
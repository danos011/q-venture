import { Activities } from "@/components/Activities";
import { BackgroundVideo } from "@/components/BackgroundVideo";
import { Contacts } from "@/components/Contacts";
import { Hero } from "@/components/Hero";
import { IntroGate } from "@/components/IntroGate";
import { KnowledgeBase } from "@/components/KnowledgeBase";
import { Nav } from "@/components/Nav";
import { Portfolio } from "@/components/Portfolio";

export default function Home() {
  return (
    <IntroGate>
      <BackgroundVideo />
      <Nav />
      <main className="flex flex-col gap-[10vh]">
        <Hero />
        <Activities />
        <KnowledgeBase />
        <Portfolio />
        <Contacts />
      </main>
    </IntroGate>
  );
}

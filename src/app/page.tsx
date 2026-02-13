import HeroSection from '@/components/eternal-hearts/hero-section';
import LoveTimeline from '@/components/eternal-hearts/love-timeline';
import LoveNotes from '@/components/eternal-hearts/love-notes';
import SpecialMessage from '@/components/eternal-hearts/special-message';
import ValentineQuestion from '@/components/eternal-hearts/valentine-question';
import Footer from '@/components/eternal-hearts/footer';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <HeroSection />
      <LoveTimeline />
      <LoveNotes />
      <SpecialMessage />
      <ValentineQuestion />
      <Footer />
    </main>
  );
}

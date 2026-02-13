import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="h-screen w-full flex flex-col items-center justify-center text-center p-4 relative z-10"
    >
      <div className="animate-fade-in-up">
        <h1 className="font-headline text-7xl md:text-9xl text-primary animate-glow">
          Our Love Story ❤️
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-foreground/80">
          Every moment with you is magic
        </p>
      </div>
      <a href="#timeline" className="mt-12 animate-fade-in [animation-delay:0.5s]">
        <Button size="lg" className="rounded-full bg-primary/90 hover:bg-primary text-primary-foreground text-lg shadow-lg shadow-primary/30 transition-transform duration-300 hover:scale-105">
          Start Our Journey ✨
        </Button>
      </a>
    </section>
  );
};

export default HeroSection;

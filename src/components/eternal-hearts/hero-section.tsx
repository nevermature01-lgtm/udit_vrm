"use client";

import { Heart } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

// Helper component for particles
const Sparkle = ({ id, style }: { id: number, style: React.CSSProperties }) => (
  <div
    key={id}
    className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full z-50 pointer-events-none animate-cursor-trail"
    style={style}
  />
);

const HeroSection = () => {
  const [sparkles, setSparkles] = useState<{ id: number, style: React.CSSProperties }[]>([]);
  const heroRef = useRef<HTMLDivElement>(null);
  const [glowShift, setGlowShift] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth < 768) {
        if (heroRef.current) {
          heroRef.current.style.setProperty('--x-tilt', `0deg`);
          heroRef.current.style.setProperty('--y-tilt', `0deg`);
        }
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768 || !heroRef.current) return;
      
      requestAnimationFrame(() => {
        if (!heroRef.current) return;
        const { clientX, clientY } = e;
        const { offsetWidth, offsetHeight } = heroRef.current;
        const xTilt = (clientY / offsetHeight - 0.5) * -15;
        const yTilt = (clientX / offsetWidth - 0.5) * 15;

        heroRef.current.style.setProperty('--x-tilt', `${xTilt}deg`);
        heroRef.current.style.setProperty('--y-tilt', `${yTilt}deg`);
      });
    };
    
    const handleScroll = () => {
        const scrollY = window.scrollY;
        const newGlowShift = Math.min(scrollY / 10, 50);
        setGlowShift(newGlowShift);
    }

    const handleClick = (e: MouseEvent) => {
      let newSparkles: { id: number; style: React.CSSProperties; }[] = [];
      for (let i = 0; i < 15; i++) {
        const id = Date.now() + i;
        const style = {
          left: `${e.clientX}px`,
          top: `${e.clientY}px`,
          transform: `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(${Math.random()})`,
          opacity: Math.random(),
        };
        newSparkles.push({ id, style });
      }
      setSparkles(prev => [...prev, ...newSparkles]);
      setTimeout(() => setSparkles([]), 1000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      {sparkles.map(s => <Sparkle key={s.id} id={s.id} style={s.style} />)}
      
      <section
        id="home"
        className="h-screen w-full flex flex-col items-center justify-center text-center px-6 py-4 relative z-10 perspective-1000"
      >
        {/* Layer 1: Animated Background */}
        <div className="absolute inset-0 w-full h-full animated-gradient animate-background-pan" />
        <div className="absolute inset-0 bg-black/20 dark:bg-black/50" />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl animate-subtle-glow transition-transform duration-500" 
          style={{ transform: `translateY(${glowShift}px)` }}
        />
        <div className="absolute inset-0 aurora-container">
            <div className="aurora-blob one"></div>
            <div className="aurora-blob two"></div>
            <div className="aurora-blob three"></div>
        </div>
        <div className="absolute inset-0 vignette pointer-events-none" />

        {/* Layer 2: Decorative Elements */}
        <Heart className="absolute -top-10 -left-20 w-80 h-80 text-primary/5 opacity-50 -rotate-12 pointer-events-none" fill="currentColor" />
        <Heart className="absolute -bottom-20 -right-20 w-96 h-96 text-primary/5 opacity-50 rotate-12 pointer-events-none" fill="currentColor" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[500px] md:h-[500px] border-2 border-primary/10 rounded-full animate-slow-spin pointer-events-none" />
        {[...Array(10)].map((_, i) => (
            <div key={i} className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full animate-sparkle pointer-events-none" style={{animationDelay: `${i * 0.3}s`}}/>
        ))}

        {/* Layer 3: Main Content */}
        <div 
          ref={heroRef}
          className="relative z-10 flex flex-col items-center justify-center transform-style-3d transition-transform duration-300 ease-out"
          style={{ transform: 'rotateX(var(--x-tilt, 0)) rotateY(var(--y-tilt, 0))' }}
        >
            <p className="tracking-widest text-sm text-foreground/70 mb-2 opacity-0 animate-fade-in [animation-delay:1.5s]">
                For the one who changed my world
            </p>

            <div className="relative animate-float-up-down opacity-0 animate-scale-bounce [animation-delay:0.2s]">
                <Heart 
                    className="w-40 h-40 md:w-48 md:h-48 text-primary animate-heart-pulse"
                    fill="currentColor"
                    style={{ filter: 'drop-shadow(0 0 40px hsl(var(--primary) / 0.8))' }} 
                />
            </div>

            <h1 className="font-headline text-[clamp(2.5rem,8vw,6rem)] leading-tight max-w-[95%] text-primary mt-4 relative opacity-0 animate-fade-in-up [animation-delay:0.5s] shimmer-text"
                style={{ textShadow: '0 0 10px hsl(var(--primary) / 0.7), 0 0 20px hsl(var(--primary) / 0.4)' }}
            >
                Our Love Story
            </h1>
            
            <div className="relative w-32 h-px bg-primary/30 my-6 opacity-0 animate-fade-in [animation-delay:1s]">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full" style={{boxShadow: '0 0 10px hsl(var(--primary))'}}/>
              <Heart className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-primary" fill="currentColor"/>
            </div>

            <a href="#timeline" className="opacity-0 animate-glow-pop [animation-delay:2s] [animation-fill-mode:forwards]">
                <Button 
                    size="lg" 
                    className="group rounded-full bg-white/10 hover:bg-white/20 text-primary-foreground text-lg backdrop-blur-[10px] border border-white/20 shadow-[0_10px_30px_rgba(255,77,109,0.25),0_0_40px_rgba(255,77,109,0.15)] transition-all duration-300 hover:scale-105"
                >
                    Start Our Journey
                </Button>
            </a>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

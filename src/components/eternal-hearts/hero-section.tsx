"use client";

import { Heart, Music, VolumeX } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { differenceInDays, parseISO } from 'date-fns';
import { cn } from '@/lib/utils';

// Helper component for particles
const Sparkle = ({ id, style }: { id: number, style: React.CSSProperties }) => (
  <div
    key={id}
    className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full z-50 pointer-events-none animate-cursor-trail"
    style={style}
  />
);

const HeroSection = () => {
  const [days, setDays] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [sparkles, setSparkles] = useState<{ id: number, style: React.CSSProperties }[]>([]);
  const heroRef = useRef<HTMLDivElement>(null);
  const heartbeatAudioRef = useRef<HTMLAudioElement>(null);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  // --- CONFIG ---
  const firstMeetDate = "2020-02-14"; // YYYY-MM-DD
  const heartbeatSoundSrc = "data:audio/mpeg;base64,SUQzBAAAAAABEVRYWFgAAAAtAAADY29tbWVudABCaWdTb3VuZEJhbmsuY29tIC8gTGFTb25vdGhlcXVlLm9yZwBURU5DAAAAHQAAA1N3aXRjaCBQbHVzIMKpIE5DSCBTb2Z0d2FyZQBUSVQyAAAACAAAA2hvb2RseQBUU1NFAAAACgAAAzEwNDEyMDA2AAAAAP/zDEAAAAAAMP////8AAAAAACAAADCoAAAA9AAAAREAAAFgAECBAgECBwYFCw0TFxklKy0yMzU3ODlBQlJERUZISUpMT1JUVVdZW1xdXl9fYGFiY2RlZmdoaWtsbm9wcXJ0dXZ3eHl6e3x9fn+AgYKDhIWEh4aHiImKi4yNjo+QkZKTlJWWl5iZmpucnZ6foKGio6SlpqeoqaqrrK2ur7CxsrO0tba3uLm6u7y9vr/AwcLDxMXGx8jJysvMzc7P0NHS09TV1tfa2drb3N3e3+Dh4uPk5ebn6Onq6+zt7u/w8fLz9PX29/j5+vv8/f7//P3/AAMFDhIUGBoeIiYqLjg4Oz4+QkZKTlJWXmJmam5ydnp+goaKjpKWmp6ipqqusra6vsLGys7S1tre4ubq7vL2+v8DBwsPExcZHycjLzM3Oz9DR0tPU1dbX2Nna29zd3t/g4eLj5OXm5+jp6uvs7e7v8PHy8/T19vf4+fr7/P3+/wAAAACAAADSAAAAEgQAAQWACQAA/////+f//u8AAAAADWCSCAADwAAACAAACgAAAAgAAAAgADABIAABk4gAAAQ0AAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq-w==";

  useEffect(() => {
    // Calculate days since first meet
    try {
      setDays(differenceInDays(new Date(), parseISO(firstMeetDate)));
    } catch(e) {
      console.error("Invalid date for firstMeetDate");
      setDays(0);
    }
    
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768 || !heroRef.current) return;
      
      requestAnimationFrame(() => {
        if (!heroRef.current) return;
        const { clientX, clientY } = e;
        const { offsetWidth, offsetHeight } = heroRef.current;
        const xPos = (clientX / offsetWidth - 0.5) * 40;
        const yPos = (clientY / offsetHeight - 0.5) * 40;
        const xTilt = (clientY / offsetHeight - 0.5) * -20;
        const yTilt = (clientX / offsetWidth - 0.5) * 20;

        heroRef.current.style.setProperty('--x', `${xPos}px`);
        heroRef.current.style.setProperty('--y', `${yPos}px`);
        heroRef.current.style.setProperty('--x-tilt', `${xTilt}deg`);
        heroRef.current.style.setProperty('--y-tilt', `${yTilt}deg`);
      });
    };

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
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, [firstMeetDate]);

  const toggleMusic = () => {
    if (heartbeatAudioRef.current) {
        if(isMusicPlaying) {
            heartbeatAudioRef.current.pause();
        } else {
            heartbeatAudioRef.current.play().catch(console.error);
        }
        setIsMusicPlaying(!isMusicPlaying);
    }
  };

  const handleHeartbeat = () => {
    if (isMusicPlaying && heartbeatAudioRef.current) {
      heartbeatAudioRef.current.currentTime = 0;
      heartbeatAudioRef.current.play().catch(console.error);
    }
  };

  return (
    <>
      <audio ref={heartbeatAudioRef} src={heartbeatSoundSrc} loop />
      {sparkles.map(s => <Sparkle key={s.id} id={s.id} style={s.style} />)}
      
      <div className="fixed top-4 right-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleMusic}
          className="rounded-full bg-white/50 backdrop-blur-sm border-primary/20 hover:bg-primary/10"
        >
          {isMusicPlaying ? (
            <Music className="h-5 w-5 text-primary" />
          ) : (
            <VolumeX className="h-5 w-5 text-primary/70" />
          )}
          <span className="sr-only">Toggle Heartbeat Sound</span>
        </Button>
      </div>

      <section
        id="home"
        ref={heroRef}
        className="h-screen w-full flex flex-col items-center justify-center text-center p-4 relative z-10 overflow-hidden perspective-1000"
      >
        <div 
          className="absolute inset-0 animated-gradient animate-background-pan transition-transform duration-500 ease-out"
          style={{ transform: 'translate(var(--x, 0), var(--y, 0))' }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_hsl(var(--background))_90%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />

        <div className="relative z-10 flex flex-col items-center justify-center">
            {days > 0 && (
                 <p className="mb-4 text-foreground/80 opacity-0 animate-fade-in [animation-delay:4s]">
                    {days} Days of Loving You ❤️
                </p>
            )}

            <div 
                className="relative animate-scale-bounce [animation-delay:0.5s] transition-transform duration-500 ease-out"
                style={{ transform: 'rotateX(var(--x-tilt, 0)) rotateY(var(--y-tilt, 0))' }}
            >
                <Heart 
                    className="w-48 h-48 md:w-64 md:h-64 text-primary animate-heartbeat [animation-duration:1.5s]" 
                    fill="currentColor"
                    style={{ filter: 'drop-shadow(0 0 25px hsl(var(--primary) / 0.6))' }} 
                    onAnimationIteration={handleHeartbeat}
                />
            </div>

            <h1 className="font-headline text-7xl md:text-9xl text-primary mt-8 relative overflow-hidden whitespace-nowrap opacity-0 animate-handwriting [animation-delay:1.5s] [animation-fill-mode:forwards] shimmer-text"
                style={{ filter: 'drop-shadow(0 0 10px hsl(var(--primary) / 0.8))' }}
            >
                Our Love Story
            </h1>
            
            <p className="mt-4 text-xl md:text-2xl text-foreground/80 opacity-0 animate-fade-in [animation-delay:3.5s] animate-soft-float">
                Every moment with you is magic ✨
            </p>

            <a href="#timeline" className="mt-12 opacity-0 animate-glow-pop [animation-delay:4s] [animation-fill-mode:forwards]">
                <Button 
                    size="lg" 
                    className="rounded-full bg-white/10 hover:bg-white/20 text-primary-foreground text-lg backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-primary/40"
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

    
"use client";

import Image from 'next/image';
import { Heart, MessageCircle, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages, type ImagePlaceholder } from "@/lib/placeholder-images";
import { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

const StatCard = ({ icon, value, label }: { icon: React.ReactNode, value: string, label: string }) => (
  <div className="text-center">
    <div className="flex items-center justify-center gap-2">
      {icon}
      <p className="text-3xl md:text-4xl font-bold text-primary">{value}</p>
    </div>
    <p className="text-sm text-foreground/70 mt-1">{label}</p>
  </div>
);

const FloatingCard = ({ image, className, rotation, title, icon }: { image: ImagePlaceholder, className?: string, rotation: string, title: string, icon: React.ReactNode }) => (
  <div
    className={cn(
      "absolute bg-black/10 backdrop-blur-lg rounded-xl p-2 border border-white/20 shadow-2xl transition-transform duration-300 hover:scale-105",
      className
    )}
    style={{ transform: rotation }}
  >
    <div className="relative w-40 h-52 md:w-48 md:h-60">
      <Image
        src={image.imageUrl}
        alt={image.description}
        fill
        className="rounded-lg object-cover"
        data-ai-hint={image.imageHint}
      />
      <div className="absolute bottom-2 left-2 right-2 p-2 bg-black/30 backdrop-blur-sm rounded-md text-white text-xs flex items-center gap-1.5">
        {icon}
        {title}
      </div>
    </div>
  </div>
);

export default function HeroSection() {
    const firstMeetDate = new Date('2021-02-14'); // Example date
    const [days, setDays] = useState(0);
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const today = new Date();
        const differenceInTime = today.getTime() - firstMeetDate.getTime();
        const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
        setDays(differenceInDays);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current || window.innerWidth < 1024) return;
            
            requestAnimationFrame(() => {
              if (!containerRef.current) return;
              const { clientX, clientY } = e;
              const { offsetWidth, offsetHeight } = containerRef.current;
              const xPercent = (clientX / offsetWidth - 0.5) * 2;
              const yPercent = (clientY / offsetHeight - 0.5) * 2;
              
              containerRef.current.style.setProperty('--x-mouse', `${xPercent * 10}px`);
              containerRef.current.style.setProperty('--y-mouse', `${yPercent * 10}px`);
            });
        };
        
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const image1 = PlaceHolderImages[0];
    const image2 = PlaceHolderImages[1];
    const image3 = PlaceHolderImages[2];

  return (
    <section ref={containerRef} id="home" className="relative min-h-screen w-full flex items-center justify-center bg-background pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-visible">
        {/* Background Elements */}
        <div className="absolute inset-0 w-full h-full animated-gradient animate-background-pan -z-10" />
        <div className="absolute inset-0 bg-grainy -z-10 opacity-[0.03] dark:opacity-[0.01]"/>
        <div className="absolute -left-1/4 -top-1/4 w-full h-full bg-primary/5 rounded-full blur-3xl animate-aurora-one -z-10" />
        <div className="absolute -right-1/4 -bottom-1/4 w-full h-full bg-accent/5 rounded-full blur-3xl animate-aurora-two -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto z-10">
            {/* Left Column */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <p className="text-sm uppercase tracking-widest text-primary/80 font-semibold opacity-0 animate-fade-in [animation-delay:200ms]">
                    Because you changed my world 💫
                </p>
                <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground opacity-0 animate-fade-in-up [animation-delay:400ms]">
                    Falling for you was the <span className="text-primary">best thing</span> that ever happened to me.
                </h1>
                <p className="mt-6 text-lg text-foreground/70 max-w-lg opacity-0 animate-fade-in-up [animation-delay:600ms]">
                    Every day is an adventure, every moment a treasure. Our story is my favorite.
                </p>

                <a href="#timeline" className="mt-8 opacity-0 animate-fade-in-up [animation-delay:800ms]">
                    <Button size="lg" className="rounded-full px-8 py-6 text-lg shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 hover:scale-105">
                        Start Our Love Journey
                    </Button>
                </a>
                
                <div className="mt-12 w-full border-t border-border pt-8 opacity-0 animate-fade-in-up [animation-delay:1000ms]">
                    <div className="grid grid-cols-3 gap-4">
                        <StatCard icon={<Heart className="text-primary/70"/>} value={days.toLocaleString()} label="Days Loving You"/>
                        <StatCard icon={<MessageCircle className="text-primary/70"/>} value="10k+" label="Messages Sent"/>
                        <StatCard icon={<MapPin className="text-primary/70"/>} value="5" label="Cities Visited"/>
                    </div>
                </div>
            </div>

            {/* Right Column */}
            <div className="relative w-full flex items-center justify-center animate-fade-in [animation-delay:200ms] order-first lg:order-last mb-8 lg:mb-0">
                <div 
                    className="relative w-full h-[500px] max-w-sm transition-transform duration-500 ease-out" 
                    style={{transform: 'translate(var(--x-mouse, 0px), var(--y-mouse, 0px))'}}
                >
                    <FloatingCard 
                        image={image1} 
                        rotation="rotate(-8deg)"
                        title="First Meet 💕"
                        icon={<Heart className="w-3 h-3"/>}
                        className="opacity-0 animate-float-item [animation-delay:800ms] top-[40px] left-[40px]"
                    />
                    <FloatingCard 
                        image={image2} 
                        rotation="rotate(5deg) scale(1.1)"
                        title="Proposal Day 💍"
                        icon={<Heart className="w-3 h-3"/>}
                        className="z-10 opacity-0 animate-float-item [animation-delay:600ms] top-[120px] left-[90px]"
                    />
                    <FloatingCard 
                        image={image3} 
                        rotation="rotate(12deg)"
                        title="Still Mine ❤️"
                        icon={<Heart className="w-3 h-3"/>}
                        className="opacity-0 animate-float-item [animation-delay:1000ms] top-[200px] left-[140px]"
                    />
                </div>
            </div>
        </div>
    </section>
  );
}

"use client";

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

const ValentineQuestion = () => {
  const [yesClicked, setYesClicked] = useState(false);
  const [noPosition, setNoPosition] = useState({ top: '50%', right: ' calc(50% - 8rem)' });
  const [noCount, setNoCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hearts, setHearts] = useState<{ id: number; style: React.CSSProperties }[]>([]);

  useEffect(() => {
    if (yesClicked) {
      const newHearts = Array.from({ length: 30 }).map((_, i) => {
        const size = Math.random() * 40 + 20;
        const duration = Math.random() * 8 + 5; // Slower, more majestic
        const delay = Math.random() * 10;
        const left = Math.random() * 100;

        return {
          id: i,
          style: {
            width: `${size}px`,
            height: `${size}px`,
            left: `${left}vw`,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
          },
        };
      });
      setHearts(newHearts);
    }
  }, [yesClicked]);


  const handleYesClick = () => {
    setYesClicked(true);
  };

  const handleNoHover = () => {
    if (containerRef.current) {
      setNoCount(prev => prev + 1);
      const containerWidth = containerRef.current.offsetWidth;
      const containerHeight = containerRef.current.offsetHeight;
      const buttonWidth = 100;
      const buttonHeight = 40;

      const newTop = Math.random() * (containerHeight - buttonHeight);
      const newLeft = Math.random() * (containerWidth - buttonWidth);

      setNoPosition({ top: `${newTop}px`, right: `${newLeft}px` });
    }
  };

  const getYesButtonSize = () => {
    const scale = 1 + noCount * 0.2;
    return { transform: `scale(${scale})` };
  };

  if (yesClicked) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-pink-200 to-rose-200 z-50 flex flex-col items-center justify-center text-center p-4 overflow-hidden">
        {hearts.map((heart) => (
          <Heart
            key={heart.id}
            className="absolute bottom-[-50px] text-primary animate-float-heart"
            style={heart.style}
            fill="currentColor"
          />
        ))}
        <div className="animate-fade-in-up [animation-delay:0.5s] z-10">
          <h2 className="font-headline text-5xl md:text-7xl text-primary animate-glow">
            You just made me the happiest person alive!
          </h2>
          <p className="mt-4 text-xl text-black">I love you, Nisha! ❤️</p>
        </div>
      </div>
    );
  }

  return (
    <section
      ref={containerRef}
      className="w-full max-w-2xl mx-auto py-20 px-4 z-10 text-center relative min-h-[300px] flex flex-col items-center justify-center"
    >
      <h2 className="text-5xl md:text-7xl font-headline text-primary mb-12 animate-heartbeat">
        Will You Be My Valentine?
      </h2>
      <div className="flex items-center justify-center gap-4 relative w-full h-24">
         <Button
            size="lg"
            onClick={handleYesClick}
            className="text-xl px-8 py-6 transition-transform duration-300"
            style={getYesButtonSize()}
        >
            YES 💖
        </Button>
        <Button
            variant="destructive"
            size="lg"
            className="text-xl px-8 py-6 absolute transition-all duration-300 ease-in-out"
            style={{ top: noPosition.top, right: noPosition.right }}
            onMouseEnter={handleNoHover}
        >
            No 🙈
        </Button>
      </div>
    </section>
  );
};

export default ValentineQuestion;

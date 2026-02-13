"use client";

import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<
    { id: number; style: React.CSSProperties }[]
  >([]);

  useEffect(() => {
    const createHeart = () => {
      const newHearts = Array.from({ length: 20 }).map((_, i) => {
        const size = Math.random() * 20 + 10;
        const duration = Math.random() * 5 + 5;
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
            animationName: `float-heart`,
          },
        };
      });
      setHearts(newHearts);
    };

    createHeart();
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart) => (
        <Heart
          key={heart.id}
          className="absolute bottom-[-50px] text-primary/20 animate-[float-heart]"
          style={heart.style}
          fill="currentColor"
        />
      ))}
    </div>
  );
};

export default FloatingHearts;

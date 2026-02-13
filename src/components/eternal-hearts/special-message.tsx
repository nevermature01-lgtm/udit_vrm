"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

const SpecialMessage = () => {
  const [ref, isInView] = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <section
      ref={ref}
      className="w-full py-24 md:py-32 flex items-center justify-center bg-primary/10 z-10"
    >
      <div className="text-center px-4">
        {isInView && (
          <h2 className="font-headline text-5xl md:text-7xl text-primary overflow-hidden whitespace-nowrap mx-auto animate-typewriter">
            You are my today and all of my tomorrows.
          </h2>
        )}
      </div>
    </section>
  );
};

export default SpecialMessage;

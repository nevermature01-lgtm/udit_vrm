"use client";

import { useState } from "react";
import { Heart } from "lucide-react";

const initialNotes = [
  {
    title: "Why I Love You",
    content:
      "I love your laugh, the way your eyes sparkle, and how you make even the most ordinary days feel extraordinary. You're my everything.",
  },
  {
    title: "My Favorite Memory",
    content:
      "That time we danced in the rain without a care in the world. It was the moment I knew I was completely and utterly in love with you.",
  },
  {
    title: "My Promise to You",
    content:
      "I promise to always be your biggest fan, your shoulder to lean on, and to fill our lives with endless laughter and adventure. Forever and always.",
  },
  {
    title: "You're My Sunshine",
    content:
      "On my cloudiest days, you are the sunshine that breaks through. Your warmth and light guide me and make my world a brighter place.",
  },
  {
    title: "A Glimpse of Our Future",
    content:
      "I see us, old and gray, still holding hands, still laughing at the same silly jokes. The best is yet to come, my love.",
  },
  {
    title: "My Perfect Partner",
    content:
      "You're not just my love, you're my partner in crime, my confidant, and my best friend. Life is an amazing adventure with you by my side.",
  },
];

const FlipCard = ({
  front,
  back,
}: {
  front: React.ReactNode;
  back: React.ReactNode;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div
      className="group perspective-1000 w-full h-64"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full transform-style-3d transition-transform duration-700 ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        <div className="absolute w-full h-full backface-hidden">{front}</div>
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          {back}
        </div>
      </div>
    </div>
  );
};

export default function LoveNotes() {
  return (
    <section id="love-notes" className="w-full max-w-6xl mx-auto py-20 px-4 z-10">
      <h2 className="text-5xl md:text-7xl font-headline text-primary text-center mb-4">
        Love Notes Cards
      </h2>
      <p className="text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
        Click a card to flip it and reveal a message.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {initialNotes.map((note, index) => (
          <FlipCard
            key={index}
            front={
              <div className="w-full h-full p-6 flex flex-col items-center justify-center text-center rounded-lg shadow-xl bg-white/80 dark:bg-card/80 backdrop-blur-md border border-primary/20 transition-transform duration-300 group-hover:scale-105 cursor-pointer">
                <Heart className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-primary">{note.title}</h3>
              </div>
            }
            back={
              <div className="w-full h-full p-6 flex items-center justify-center text-center rounded-lg shadow-xl bg-white/80 dark:bg-card/80 backdrop-blur-md border border-primary/20 transition-transform duration-300 group-hover:scale-105 cursor-pointer">
                <p className="text-foreground/90">{note.content}</p>
              </div>
            }
          />
        ))}
      </div>
    </section>
  );
}

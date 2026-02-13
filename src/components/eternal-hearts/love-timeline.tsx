"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { Heart, Plane, Ring, Smartphone, Speech, ThumbsUp } from "lucide-react";
import React from "react";

const timelineEvents = [
  {
    icon: <Heart />,
    date: "A Magical Day",
    title: "First Meet",
    description: "Our eyes met, and in that single moment, a new story began.",
    side: "left",
  },
  {
    icon: <Speech />,
    date: "A Few Days Later",
    title: "First Chat",
    description: "Hours felt like minutes as we talked about everything and nothing.",
    side: "right",
  },
  {
    icon: <Smartphone />,
    date: "That Unforgettable Night",
    title: "First Call",
    description: "Hearing your voice for the first time was music to my ears.",
    side: "left",
  },
  {
    icon: <ThumbsUp />,
    date: "A Silly Argument",
    title: "First Fight",
    description: "We survived it! And it only made us stronger and closer.",
    side: "right",
  },
  {
    icon: <Ring />,
    date: "A Day to Remember",
    title: "Proposal Day",
    description: "The beginning of our forever. A 'yes' that changed our lives.",
    side: "left",
  },
  {
    icon: <Plane />,
    date: "Our First Adventure",
    title: "First Trip Together",
    description: "Exploring new places, hand in hand, making memories for a lifetime.",
    side: "right",
  },
  {
    icon: <Heart />,
    date: "Today & Always",
    title: "Still Falling For You",
    description: "Every single day, I find a new reason to fall in love with you all over again.",
    side: "left",
  },
];

const TimelineItem = ({ event }: { event: (typeof timelineEvents)[0] }) => {
  const [ref, isInView] = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center w-full my-4 transition-all duration-1000",
        event.side === "left" ? "justify-start" : "justify-end"
      )}
    >
      <div className="w-1/2 px-4">
        <div
          className={cn(
            "p-6 rounded-lg shadow-2xl bg-white/20 dark:bg-black/10 backdrop-blur-md border border-white/30 transition-opacity transform duration-700",
            isInView ? "opacity-100" : "opacity-0",
            event.side === "left"
              ? "translate-x-[-20px] text-right"
              : "translate-x-[20px] text-left",
            isInView && "translate-x-0"
          )}
        >
          <p className="text-primary/80 font-semibold text-sm mb-1">{event.date}</p>
          <h3 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2" style={{justifyContent: event.side === 'left' ? 'flex-end' : 'flex-start'}}>
            {event.side === 'right' && React.cloneElement(event.icon, {className: "w-6 h-6"})}
            {event.title}
            {event.side === 'left' && React.cloneElement(event.icon, {className: "w-6 h-6"})}
          </h3>
          <p className="text-foreground/70">{event.description}</p>
        </div>
      </div>
    </div>
  );
};

export default function LoveTimeline() {
  return (
    <section id="timeline" className="w-full max-w-4xl mx-auto py-20 px-4 z-10">
      <h2 className="text-5xl md:text-7xl font-headline text-primary text-center mb-12">
        Our Beautiful Timeline
      </h2>
      <div className="relative">
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-primary/20 rounded-full" />
        {timelineEvents.map((event, index) => (
          <div key={index} className="relative flex justify-center">
            <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-background rounded-full border-4 border-primary shadow-md mt-[calc(4rem+1.5rem)] animate-pulse"></div>
            <TimelineItem event={event} />
          </div>
        ))}
      </div>
    </section>
  );
}

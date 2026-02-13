"use client";

import Image from "next/image";
import { useState } from "react";
import { PlaceHolderImages, type ImagePlaceholder } from "@/lib/placeholder-images";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

export default function MemoryGallery() {
  const [selectedImage, setSelectedImage] = useState<ImagePlaceholder | null>(null);
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="gallery" className="w-full max-w-6xl mx-auto py-20 px-4 z-10">
      <h2 className="text-5xl md:text-7xl font-headline text-primary text-center mb-12">
        Memory Gallery
      </h2>
      <div
        ref={ref}
        className="grid grid-cols-2 md:grid-cols-3 gap-4"
      >
        {PlaceHolderImages.map((image, index) => (
          <div
            key={image.id}
            className={cn(
              "overflow-hidden rounded-lg shadow-lg cursor-pointer transition-all duration-500 hover:shadow-primary/30 hover:scale-105",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
            style={{ transitionDelay: `${index * 100}ms` }}
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image.imageUrl}
              alt={image.description}
              width={600}
              height={800}
              className="w-full h-full object-cover"
              data-ai-hint={image.imageHint}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-3xl bg-white/80 dark:bg-card/80 backdrop-blur-lg">
          {selectedImage && (
            <>
              <DialogHeader>
                <DialogTitle className="font-headline text-4xl text-primary">A Moment We Shared</DialogTitle>
                <DialogDescription>
                  {selectedImage.description}
                </DialogDescription>
              </DialogHeader>
              <div className="relative aspect-[4/3] w-full mt-4">
                <Image
                  src={selectedImage.imageUrl}
                  alt={selectedImage.description}
                  fill
                  className="rounded-md object-contain"
                  data-ai-hint={selectedImage.imageHint}
                />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

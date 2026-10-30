"use client";

import React, { useEffect, useRef, useState } from "react";

import Image from "next/image";

interface Hobby {
  title: string;
  label: string;
  imgpath: string;
}

const hobby: Hobby[] = [
  {
    title: "Granblue Fantasy",
    label:
      "My favorite game right now, i have playing this game since 2017. Very simple game but it is so addicting and the characters design is so great",
    imgpath: "/gbf.jpeg",
  },
  {
    title: "Blue Lock",
    label:
      "My favorite manga of all times, i have reread this so many times. The psychology battle, clashing ideas, egoist concept, and so many amazing moments feels amazing to me !!!",
    imgpath: "/bluelock.jpeg",
  },
  {
    title: "Rubber Duck",
    label:
      "My favorite childhood game, i have reread this so many times. The psychology battle, clashing ideas, egoist concept, and so many amazing moments feels amazing to me !!!",
    imgpath: "/keyboard.jpeg",
  },
  {
    title: "About You - The 1975",
    label:
      "Goated song ever fr fr. The melody, the lyrics, and the memories everything remind me of her. I listen to this every single day since the first time i heard it.",
    imgpath: "/aboutyou.jpeg",
  },
  {
    title: "Granblue Fantasy",
    label:
      "My favorite game right now, i have reread this so many times. The psychology battle, clashing ideas, egoist concept, and so many amazing moments feels amazing to me !!!",
    imgpath: "/gbf.jpeg",
  },
  {
    title: "Granblue Fantasy",
    label:
      "My favorite game right now, i have reread this so many times. The psychology battle, clashing ideas, egoist concept, and so many amazing moments feels amazing to me !!!",
    imgpath: "/gbf.jpeg",
  },
  {
    title: "Blue Lock",
    label:
      "My favorite manga of all times, i have reread this so many times. The psychology battle, clashing ideas, egoist concept, and so many amazing moments feels amazing to me !!!",
    imgpath: "/bluelock.jpeg",
  },
];

const HOBBY_INTERVAL_MS = 5000;

const HobbyCarousel = () => {
  const [active, setActive] = useState(0);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % hobby.length);
    }, HOBBY_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [active]);

  // Manually scroll ONLY the row container, not the page/ancestors
  useEffect(() => {
    const container = containerRef.current;
    const el = itemRefs.current[active];
    if (!container || !el) return;

    const containerWidth = container.clientWidth;
    const elLeft = el.offsetLeft;
    const elWidth = el.offsetWidth;

    const targetScrollLeft = elLeft - containerWidth / 2 + elWidth / 2;

    container.scrollTo({
      left: targetScrollLeft,
      behavior: "smooth",
    });
  }, [active]);

  return (
    <div>
      {/* Hobby carousel */}
      <div
        ref={containerRef}
        className="flex flex-nowrap items-start gap-6 overflow-x-auto pt-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {hobby.map((m, i) => {
          const isActive = i === active;
          return (
            <button
              key={`${m.title}-${i}`}
              ref={(node) => {
                itemRefs.current[i] = node;
              }}
              onClick={() => setActive(i)}
              className={`flex flex-shrink-0 flex-col gap-4 text-left transition-all duration-500 ${
                isActive
                  ? "w-[280px] scale-100 opacity-100"
                  : "w-[180px] scale-95 opacity-40"
              }`}
            >
              <div className="relative overflow-hidden rounded-xl">
                {isActive && (
                  <div className="absolute inset-0 z-0 translate-x-3 translate-y-3 rounded-xl bg-[#3d6bff]" />
                )}
                <Image
                  width={280}
                  height={400}
                  src={m.imgpath}
                  alt={m.title}
                  className={`relative z-10 w-full object-cover transition-all duration-500 rounded-xl h-[400px] ${
                    isActive ? "" : "grayscale"
                  }`}
                />
              </div>

              {/* Fixed-height reserved space — no layout shift on toggle */}
              <div className="h-[160px] overflow-hidden">
                <div
                  className={`transition-all ${
                    isActive
                      ? "translate-y-0 opacity-100 w-[280px]"
                      : "pointer-events-none -translate-y-2 opacity-0 w-[180px]"
                  }`}
                >
                  <h3 className="text-2xl font-bold leading-snug sm:text-2xl uppercase">
                    {m.title}
                  </h3>
                  <span className="mt-2 line-clamp-3 block text-sm font-medium tracking-wide text-neutral-400 text-justify md:text-start">
                    {m.label}
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Dots */}
      <div className="flex gap-2">
        {hobby.map((m, i) => (
          <button
            key={`${m.title}-${i}-dot`}
            onClick={() => setActive(i)}
            aria-label={`Show ${m.title}`}
            className={`h-1.5 rounded-full transition-all ${
              i === active
                ? "w-8 bg-[#3d6bff]"
                : "w-1.5 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HobbyCarousel;

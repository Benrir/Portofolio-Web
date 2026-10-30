"use client";

import React from "react";
import Image from "next/image";

interface DetailsProps {
  name: string;
  time: string;
  role: string;
  work: string;
  image: string;
  link?: string;
}

const Details: React.FC<DetailsProps> = ({
  name,
  time,
  role,
  work,
  image,
  link,
}) => {
  return (
    <li className="group grid grid-cols-1 gap-6 border-b border-white/10 py-10 first:pt-0 last:border-b-0 last:pb-0 sm:grid-cols-[180px_1fr]">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-white/5 sm:aspect-square">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col">
        <span className="text-sm font-medium uppercase tracking-wide text-[#3d6bff]">
          {time} · {role}
        </span>

        <h3 className="mt-2 text-xl font-bold leading-snug text-white sm:text-2xl">
          {name}
        </h3>

        <p className="mt-3 max-w-2xl text-neutral-400">{work}</p>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[#266CA9]"
          >
            Read paper
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        )}
      </div>
    </li>
  );
};

const Publication = () => {
  return (
    <section
      id="publications"
      className="bg-[#0a0a0a] px-6 py-10 text-white sm:px-10 md:py-14"
    >
      <div className="mx-auto max-w-[92rem]">
        <h2 className="text-4xl font-black leading-[0.9] tracking-tight sm:text-5xl">
          PUBLICATIONS
        </h2>

        <ul className="mt-14">
          <Details
            name="Chess Piece Image Recognition Using Transfer Learning, Simple Neural Network, and Convolutional Neural Network"
            time="2023"
            role="Bina Nusantara University"
            image="/MLPAPER.png"
            work="Group paper accepted at AIDAS Conference 2023, comparing transfer learning against simple neural network and CNN approaches for classifying chess pieces from images."
            link="https://ieeexplore.ieee.org/document/10284718"
          />
        </ul>
      </div>
    </section>
  );
};

export default Publication;

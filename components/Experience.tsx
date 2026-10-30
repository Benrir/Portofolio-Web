"use client";

import React from "react";
import Image from "next/image";

interface DetailsProps {
  name: string;
  time: string;
  role: string;
  image: string;
}

const Details: React.FC<DetailsProps> = ({ name, time, role, image }) => {
  return (
    <li className="gap-6 py-10">
      <Image src={image} alt={name} width={200} height={400} />

      <div className="flex flex-col">
        <span className="text-sm font-medium uppercase tracking-wide text-[#3d6bff]">
          {role} · {time}
        </span>

        <h3 className="mt-2 text-xl font-bold leading-snug text-white sm:text-2xl">
          {name.toUpperCase()}
        </h3>
      </div>
    </li>
  );
};

const Experience = () => {
  return (
    <section id="experiences" className="bg-[#0a0a0a] px-6 mt-14 text-white">
      <div className="mx-auto max-w-[92rem]">
        <h2 className="text-4xl font-black leading-[0.9] tracking-tight sm:text-5xl">
          EXPERIENCE
        </h2>

        <ul className="align-center">
          <Details
            name="Application Developer · Intern"
            time="Feb 2024 - Jan 2025"
            role="PT Mayora Indah Tbk"
            image="/MLPAPER.png"
          />
          <Details
            name="Application Developer · Contract"
            time="Mar 2025 - Mar 2026"
            role="PT Mayora Indah Tbk"
            image="/MLPAPER.png"
          />
          <Details
            name="Application Developer"
            time="April 2026 - Present"
            role="PT Mayora Indah Tbk"
            image="/MLPAPER.png"
          />
        </ul>
      </div>
    </section>
  );
};

export default Experience;

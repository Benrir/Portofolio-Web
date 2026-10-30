"use client";

import React, { useState } from "react";

interface ExpertiseGroup {
  label: string;
  skills: string[];
}

const expertise: ExpertiseGroup[] = [
  {
    label: "Languages",
    skills: ["Dart", "JavaScript", "SQL", "TypeScript", "Java", "Python"],
  },
  {
    label: "Frameworks",
    skills: ["Flutter", "React", "NextJS", "NodeJS"],
  },
  {
    label: "Databases",
    skills: ["PostgreSQL", "Oracle", "MySQL"],
  },
  {
    label: "Tools",
    skills: ["DBeaver", "Postman", "Github", "Figma"],
  },
];

const Expertise = () => {
  return (
    <section id="expertise">
      <div className="mx-auto max-w-[92rem]">
        <div className="mt-14">
          {expertise.map((group, i) => (
            <div
              key={group.label}
              className="grid grid-cols-1 gap-4 border-t border-white/10 py-8 first:border-t-0 first:pt-0 last:pb-0 sm:grid-cols-[200px_1fr] sm:gap-8"
            >
              <div className="flex items-center gap-12">
                <span className="font-mono text-xs text-white/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium uppercase tracking-wide text-white">
                  {group.label}
                </span>
              </div>

              <div className="flex flex-wrap gap-x-12 gap-y-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`cursor-default text-sm transition-colors duration-300 text-neutral-400`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;

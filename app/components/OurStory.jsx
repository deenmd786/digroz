"use client";
import { LightBulbIcon, ArrowUpTrayIcon, ShareIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import SectionGlow from "./SectionGlow";

const coreValues = [
  {
    name: "Innovation",
    description:
      "We constantly embrace creativity and cutting-edge ideas to drive progress.",
    icon: LightBulbIcon,
  },
  {
    name: "Results-Driven",
    description:
      "Our focus is always on delivering measurable outcomes for our clients.",
    icon: ArrowUpTrayIcon,
  },
  {
    name: "Collaboration",
    description:
      "We believe great things happen when passionate people work together.",
    icon: ShareIcon,
  },
];

export default function OurStory() {
  return (
    <section id="our-story" className="bg-gray-950 text-gray-300 py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <h2 className="text-base mb-8 text-center font-semibold leading-7 text-cyan-400">
            About Us / Our Story
          </h2>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Our Journey to{" "}
            <span className="text-cyan-400">Digital Excellence.</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Since 2023, we&apos;ve been at the forefront of digital innovation—
            helping brands grow, evolve, and connect with their audiences in
            meaningful ways.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="mt-20 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          {/* Left Column: Philosophy & Core Values */}
          <div className="space-y-12">
            {/* Philosophy */}
            <div>
              <h3 className="text-2xl font-semibold leading-9 text-white">
                Our Philosophy
              </h3>
              <p className="mt-4 text-base leading-7 text-gray-400">
                We believe that innovation, integrity, and collaboration form
                the foundation for every successful digital journey. Our
                philosophy revolves around empowering businesses to unlock their
                potential through smart, modern solutions.
              </p>
            </div>

            {/* Core Values */}
            <div>
              <h3 className="text-2xl font-semibold leading-9 text-white">
                Core Values
              </h3>
              <ul role="list" className="mt-6 space-y-6">
                {coreValues.map((value) => (
                  <li
                    key={value.name}
                    className="flex items-start gap-x-4"
                  >
                    <div className="shrink-0 p-3 bg-gray-800 rounded-lg">
                      <value.icon
                        className="h-6 w-6 text-cyan-400"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold leading-6 text-white">
                        {value.name}
                      </h4>
                      <p className="mt-1 text-sm text-gray-400">
                        {value.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Timeline Graphic */}
          <div className="flex items-center justify-center relative">
            <div className="relative w-full max-w-lg aspect-square">
              <Image
                src="/assets/our-story.png"
                alt="Our company timeline from 2018 to present"
                fill
                unoptimized
                className="object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
        
      </div>
<SectionGlow />
    </section>
  );
}

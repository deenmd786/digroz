"use client";

import Image from "next/image";

export default function TabContent({
  title,
  desc,
  items = [],
  price,
  images = [],
}) {
  return (
    <section
      className="bg-gray-900 p-6 mt-8 rounded-xl shadow-md border border-cyan-500/20
                 hover:border-cyan-400/60 transition-all duration-300
                 hover:shadow-cyan-400/20"
    >
      {/* --- Title --- */}
      {title && <h3 className="text-xl font-bold text-cyan-400">{title}</h3>}
      {desc && <p className="text-gray-400 mt-2">{desc}</p>}

      {/* --- Feature List --- */}
      {items.length > 0 && (
        <ul className="list-none mt-4 space-y-3">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <li key={i} className="flex items-start text-gray-300">
                {Icon && <Icon className="text-cyan-400 text-lg mt-1" />}
                <span className="ml-2">{item.text}</span>
              </li>
            );
          })}
        </ul>
      )}

      {/* --- Image Gallery --- */}
      {images.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
          {images.map((src, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-lg shadow-md group
                         hover:shadow-cyan-400/20 transition-all duration-300"
            >
              <Image
                src={src}
                alt={`example-${i + 1}`}
                width={400}
                height={300}
                className="object-cover rounded-lg w-full h-32 sm:h-40
                           transform group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                unoptimized={src.includes("googleusercontent") || src.includes("drive.google.com")}
              />
            </div>
          ))}
        </div>
      )}

      {/* --- Pricing --- */}
      {price && (
        <p className="mt-6 font-semibold text-gray-200">
          Pricing:{" "}
          <span className="text-cyan-400 text-lg font-bold">{price}</span>
        </p>
      )}
    </section>
  );
}

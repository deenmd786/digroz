"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { posts, categories } from "../data/knowledgeData";
import SectionGlow from "./SectionGlow";

export default function KnowledgeHub() {
  const scrollRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  return (
    <section
      id="blog"
      className="bg-gray-950 text-gray-300 py-12 sm:py-24 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-sm mb-6 font-semibold tracking-widest text-cyan-400 uppercase">
            Insights / Updates
          </h2>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Digital Knowledge Hub
          </h1>
          <p className="mt-4 text-lg text-gray-400 leading-relaxed">
            Stay ahead with our latest blogs, strategies, and insights that fuel
            your digital success and innovation.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 relative">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`relative rounded-full px-6 py-2 text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat.name
                  ? "bg-linear-to-r from-cyan-400 to-blue-500 text-gray-900 shadow-lg"
                  : "bg-gray-800/60 text-gray-400 hover:text-cyan-300 hover:bg-gray-800/80"
              }`}
            >
              {cat.name}
              {activeCategory === cat.name && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 rounded-full animate-pulse"></span>
              )}
            </button>
          ))}
        </div>

        {/* Scrollable Blog Row */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto no-scrollbar gap-8 sm:p-4 scroll-smooth pb-10 px-4 sm:px-10"
        >
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex-none w-80 sm:w-96 p-8 bg-gray-900/80 border border-gray-700/30 hover:border-cyan-400/40 rounded-xl transition duration-300 ease-in-out"
            >
              {/* Glowing effect background */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-linear-to-br from-cyan-500 via-blue-500 to-purple-500 blur-3xl transition-opacity"></div>

              {/* Card Header */}
              <div className="flex justify-between items-center relative z-10">
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                  {post.category}
                </span>
                <post.headerIcon className="h-6 w-6 text-gray-600 group-hover:text-cyan-400 transition-colors" />
              </div>

              {/* Icon */}
              <div className="mt-8 flex h-24 w-24 items-center justify-center rounded-xl bg-gray-800/70 mx-auto group-hover:scale-110 transition-transform duration-300 relative z-10">
                <post.mainIcon className="h-12 w-12 text-cyan-400 group-hover:text-cyan-300" />
              </div>

              {/* Text */}
              <div className="mt-6 text-center relative z-10">
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                  {post.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <SectionGlow />
    </section>
  );
}

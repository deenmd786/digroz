"use client";

export default function ServiceButton({ icon: Icon, title, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-gray-900 border border-cyan-500/20 hover:border-cyan-400/60  text-gray-200 hover:text-white transition-all duration-300 shadow-md hover:shadow-cyan-400/20 hover:scale-[1.03]"
    >
      <span className="text-3xl text-cyan-400 group-hover:scale-110 transition-transform duration-300">
        <Icon /> {/* Render dynamically */}
      </span>
      <span>{title}</span>
    </button>
  );
}

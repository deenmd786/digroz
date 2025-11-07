'use client';
import React from "react";
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { faqs } from '../data/faqData';

function FaqItem({ question, answer, isOpen, onToggle }) {

  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          onToggle?.();
        }}
        className="flex w-full items-center justify-between py-6 text-left"
      >
        <span className="text-lg font-medium text-white">
          {question}
          </span>
        <ChevronDownIcon
          className={`h-6 w-6 text-cyan-400 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[999px] opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-base text-gray-400">
          {answer}
          </p>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="bg-gray-950 text-gray-300 py-20 sm:py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-base mb-8 text-center font-semibold leading-7 text-cyan-400">
            FAQ
          </h2>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            HAVE QUESTIONS? WE HAVE ANSWERS.
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-400">
            Find quick answers to common queries
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mt-12 p-8 bg-gray-900 border border-cyan-700/30 rounded-lg shadow-lg">
          <div className="flex items-center justify-center mb-6">
            <h2 className="text-2xl font-semibold text-white">FAQ</h2>
            <div className="ml-4 h-0.5 flex-1 bg-cyan-400"></div>
          </div>

          <div className="divide-y divide-white/10">
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
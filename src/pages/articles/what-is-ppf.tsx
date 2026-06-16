import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function WhatIsPPFArticle() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'What Is Paint Protection Film? The Complete Guide for Australian Car Owners | Avero';
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="bg-white min-h-screen">
      <div className="bg-black text-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-[0.2rem] text-gray-400 mb-4 font-michroma">Paint Protection Film</p>
          <h1 className="text-3xl sm:text-5xl font-bold font-michroma leading-tight mb-6">
            What Is Paint Protection Film? The Complete Guide for Australian Car Owners
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Everything you need to know about PPF - what it is, how it works, how long it lasts, and whether it is right for your vehicle.
          </p>
          <div className="mt-8 flex items-center gap-4 text-sm text-gray-400">
            <span>By Avero</span>
            <span>·</span>
            <span>8 min read</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16 text-gray-800">
        <p className="text-xl leading-relaxed mb-8 text-gray-600 font-medium">
          If you have bought a new car - or are about to - you have probably heard the term "Paint Protection Film" thrown around. But what exactly is it, what does it do, and is it actually worth the investment? This guide covers everything Australian car owners need to know.
        </p>

        <h2 className="text-2xl font-bold font-michroma text-black mt-12 mb-4">What Is Paint Protection Film (PPF)?</h2>
        <p className="leading-relaxed mb-4">
          Paint Protection Film - commonly known as PPF, clear bra, or clear wrap - is a thin, optically clear thermoplastic urethane (TPU) film applied directly to a vehicle's painted surfaces. Think of it as a near-invisible second skin that absorbs the punishment your paint would otherwise take from daily driving.
        </p>
        <p className="leading-relaxed mb-4">
          Originally developed in the 1970s for military use (protecting helicopter blades from shrapnel and debris), the technology was adapted for the automotive market and has since become the gold standard in paint protection for enthusiasts and everyday drivers alike.
        </p>
        <p className="leading-relaxed mb-8">
          Modern PPF is miles ahead of its early predecessors - today's films are optically clear, self-healing, hydrophobic, and rated for up to a decade of Australian sun, heat, and road conditions.
        </p>

        <h2 className="text-2xl font-bold font-michroma text-black mt-12 mb-4">What Does PPF Protect Against?</h2>
        <p className="leading-relaxed mb-4">PPF creates a tough, flexible barrier between your vehicle's paint and the outside world. In Australian driving conditions specifically, that means protection from:</p>
        <ul className="space-y-3 mb-8 ml-4">
          {[
            'Stone chips and road debris - the number one cause of paint damage on highways',
            'Scratches from car washes, keys, and light abrasions',
            'Bug splatter and bird droppings, which are highly acidic and etch into clear coat',
            'UV radiation - Australia has some of the highest UV levels in the world, causing paint fading and oxidation over time',
            'Minor parking lot scuffs and door dings',
            'Sand, grit, and dust common on Australian roads',
            'Tree sap, industrial fallout, and environmental contaminants',
          ].map((item, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="mt-1 w-2 h-2 min-w-[8px] bg-black rounded-full"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold font-michroma text-black mt-12 mb-4">How Does Self-Healing PPF Work?</h2>
        <p className="leading-relaxed mb-4">
          One of the most remarkable features of modern PPF is its self-healing capability. The top coat of quality TPU films contains elastomeric polymers that, when exposed to heat - either from sunlight or warm water - flow back into their original shape, causing light swirl marks and fine scratches to literally disappear.
        </p>
        <p className="leading-relaxed mb-8">
          This means the minor scuffs from a brush against a hedge or a stray shopping trolley will not permanently scar the surface. Apply heat, and the film heals itself within minutes. It is not magic - it is materials science - but the results speak for themselves.
        </p>

        <h2 className="text-2xl font-bold font-michroma text-black mt-12 mb-4">Is PPF Visible on the Car?</h2>
        <p className="leading-relaxed mb-4">
          A quality PPF installation by an experienced technician is essentially invisible. The film is optically clear and, when applied correctly, conforms seamlessly to every curve, panel edge, and contour of the vehicle with no bubbles, lifting edges, or visible seams.
        </p>
        <p className="leading-relaxed mb-8">
          There is also a satin or matte PPF available - known as "stealth" film - which can give your vehicle a distinctive flat finish without the need for an expensive matte respray. This has become increasingly popular on darker coloured vehicles.
        </p>

        <h2 className="text-2xl font-bold font-michroma text-black mt-12 mb-4">How Long Does PPF Last?</h2>
        <p className="leading-relaxed mb-4">
          Premium PPF films come with a manufacturer's warranty of up to 10 years, covering yellowing, cracking, blistering, and delamination. In practice, a high-quality film professionally installed and properly maintained can look excellent well beyond that period.
        </p>
        <p className="leading-relaxed mb-8">
          Longevity depends on a few factors:

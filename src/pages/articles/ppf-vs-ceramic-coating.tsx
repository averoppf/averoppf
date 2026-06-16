import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PPFvsCeramicArticle() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'PPF vs Ceramic Coating: Which Does Your Car Actually Need? | Avero';
    window.scrollTo(0, 0);
  }, []);

  const comparisonRows = [
    { feature: 'Stone chip protection', ppf: 'Excellent', ceramic: 'Minimal' },
    { feature: 'Scratch resistance', ppf: 'Excellent (self-healing)', ceramic: 'Light only' },
    { feature: 'Hydrophobic properties', ppf: 'Moderate', ceramic: 'Excellent' },
    { feature: 'UV protection', ppf: 'Good', ceramic: 'Good' },
    { feature: 'Gloss enhancement', ppf: 'Moderate', ceramic: 'Excellent' },
    { feature: 'Ease of cleaning', ppf: 'Moderate', ceramic: 'Excellent' },
    { feature: 'Longevity', ppf: 'Up to 10 years', ceramic: '2-5 years (varies)' },
    { feature: 'Suitable for high-impact zones', ppf: 'Yes', ceramic: 'Not recommended alone' },
    { feature: 'Cost', ppf: 'Higher upfront', ceramic: 'More accessible' },
  ];

  return (
    <article className="bg-white min-h-screen">
      <div className="bg-black text-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-[0.2rem] text-gray-400 mb-4 font-michroma">Paint Protection</p>
          <h1 className="text-3xl sm:text-5xl font-bold font-michroma leading-tight mb-6">
            PPF vs Ceramic Coating: Which Does Your Car Actually Need?
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Two of the most effective forms of vehicle protection - but they do very different jobs. Here is how to decide what is right for your car, your budget, and how you drive.
          </p>
          <div className="mt-8 flex items-center gap-4 text-sm text-gray-400">
            <span>By Avero</span>
            <span>.</span>
            <span>7 min read</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16 text-gray-800">

        <p className="text-xl leading-relaxed mb-8 text-gray-600 font-medium">
          Walk into any professional detailing workshop in Sydney and two products dominate the conversation: Paint Protection Film (PPF) and Ceramic Coating. Both are presented as essential. Both are genuinely useful. But they are not the same thing - and choosing one over the other (or combining them) comes down to understanding exactly what each one does.
        </p>

        <h2 className="text-2xl font-bold font-michroma text-black mt-12 mb-4">The Core Difference</h2>
        <p className="leading-relaxed mb-4">
          The simplest way to understand the difference: PPF is physical protection, ceramic coating is chemical protection.
        </p>
        <p className="leading-relaxed mb-4">
          PPF is a thick, flexible film physically bonded to your paintwork. When a stone hits it, the film absorbs the impact. When a scratch occurs, the self-healing polymer structure fills it back in. It is a physical barrier that sits between the world and your paint.
        </p>
        <p className="leading-relaxed mb-8">
          Ceramic coating, by contrast, is a liquid polymer that chemically bonds with your vehicle's clear coat at a molecular level. It does not add thickness or impact resistance - instead, it creates a slick, hydrophobic, UV-resistant surface that repels water, dirt, and contaminants, and dramatically improves the ease of cleaning and depth of gloss.
        </p>

        <h2 className="text-2xl font-bold font-michroma text-black mt-12 mb-4">What PPF Does Well</h2>
        <ul className="space-y-3 mb-8 ml-4">
          {[
            'Stops stone chips and road debris dead - no other product does this',
            'Self-heals light scratches and swirl marks with heat exposure',
            'Protects against door dings, car park scuffs, and minor impacts',
            'Guards the front end (bumper, bonnet, guards) from highway punishment',
            'Lasts up to 10 years with manufacturer warranty backing',
            'Preserves resale value by keeping paint in original condition',
          ].map((item, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="mt-1 w-2 h-2 min-w-[8px] bg-black rounded-full"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold font-michroma text-black mt-12 mb-4">What Ceramic Coating Does Well</h2>
        <ul className="space-y-3 mb-8 ml-4">
          {[
            'Creates a hydrophobic surface - water and dirt bead off effortlessly',
            'Significantly easier to wash and maintain',
            'Enhances gloss and colour depth, making paint look richer',
            'Resists chemical stains, bird droppings, and industrial fallout',
            'Provides UV protection against fading and oxidation',
            'More cost-effective than full PPF coverage for budget-conscious owners',
          ].map((item, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="mt-1 w-2 h-2 min-w-[8px] bg-black rounded-full"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold font-michroma text-black mt-12 mb-4">What Each One Cannot Do</h2>
        <p className="leading-relaxed mb-4">
          This is where the marketing often misleads car owners. A ceramic coating will not stop stone chips. The coating is measured in microns - it is far too thin to absorb any meaningful physical impact. Claiming otherwise is a common misrepresentation.
        </p>
        <p className="leading-relaxed mb-8">
          Conversely, PPF alone - without a ceramic coating on top - is not especially hydrophobic. The film surface is somewhat self-cleaning, but it is nowhere near as slick or water-repellent as a properly applied ceramic. It can also be slightly more prone to water spotting and minor contamination sticking to the surface if left uncoated.
        </p>

        <h2 className="text-2xl font-bold font-michroma text-black mt-12 mb-6">Side-by-Side Comparison</h2>
        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-black text-white">
                <th className="text-left py-3 px-4 font-michroma font-normal tracking-wider">Feature</th>
                <th className="text-left py-3 px-4 font-michroma font-normal tracking-wider">PPF</th>
                <th className="text-left py-3 px-4 font-michroma font-normal tracking-wider">Ceramic Coating</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="py-3 px-4 font-medium text-gray-800">{row.feature}</td>
                  <td className="py-3 px-4 text-gray-700">{row.ppf}</td>
                  <td className="py-3 px-4 text-gray-700">{row.ceramic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold font-michroma text-black mt-12 mb-4">The Best Outcome: Combining Both</h2>
        <p className="leading-relaxed mb-4">
          The most common recommendation from professional detailers - and for good reason - is to apply PPF first and then layer a ceramic coating over the top. This combination delivers protection that neither product can achieve alone.
        </p>
        <p className="leading-relaxed mb-8">
          The PPF handles every physical threat: chips, scratches, impacts. The ceramic coating sits on top of the PPF surface, adding slickness, hydrophobics, UV resistance, and gloss - while also making the PPF itself much easier to maintain and keep clean. The result is a vehicle that is protected on every front and looks exceptional for years.
        </p>

        <h2 className="text-2xl font-bold font-michroma text-black mt-12 mb-4">Which Should You Choose?</h2>
        <div className="space-y-4 mb-12">
          <div className="border-l-4 border-black pl-5 py-2">
            <h3 className="font-bold text-black mb-1">Choose PPF if:</h3>
            <p className="text-gray-600 text-sm leading-relaxed">You drive significant highway or motorway kilometres, own a new or prestige vehicle, want long-term protection with a strong warranty, or care primarily about preserving paint condition and resale value.</p>
          </div>
          <div className="border-l-4 border-gray-300 pl-5 py-2">
            <h3 className="font-bold text-black mb-1">Choose Ceramic Coating if:</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Your priority is low-maintenance upkeep, a showroom gloss finish, UV protection, or you mostly drive in suburban conditions where stone chip risk is lower and budget is a consideration.</p>
          </div>
          <div className="border-l-4 border-gray-300 pl-5 py-2">
            <h3 className="font-bold text-black mb-1">Choose Both if:</h3>
            <p className="text-gray-600 text-sm leading-relaxed">You want the best possible outcome for a new or valued vehicle and want it to look and perform as new for as long as possible. This is the approach most commonly chosen by enthusiasts, luxury car owners, and daily drivers who value their vehicle condition.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold font-michroma text-black mt-12 mb-4">A Note on Australian Conditions</h2>
        <p className="leading-relaxed mb-8">
          Sydney roads in particular combine the worst of several worlds: suburban stop-start traffic with gravel and debris risks, regular motorway driving at speed, coastal salt air, and UV levels that are among the highest on earth. For most Sydney car owners, PPF on the front end at minimum - with ceramic coating over the top - is the sensible default. The investment pays for itself in preserved paint condition alone.
        </p>

        <div className="bg-black text-white rounded-2xl p-8 mt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold font-michroma mb-2">Not sure what is right for your car?</h3>
            <p className="text-gray-300 text-sm">Talk to the team at Avero. We will assess your vehicle and recommend the right solution for your usage and budget.</p>
          </div>
          <a href="/contact" className="whitespace-nowrap bg-white text-black font-michroma text-sm tracking-[0.15rem] px-6 py-4 hover:opacity-80 transition-opacity font-bold">
            GET A QUOTE
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <button
            onClick={() => navigate('/articles')}
            className="text-sm uppercase tracking-[0.15rem] font-semibold text-gray-500 hover:text-black transition-colors"
          >
            Back to Articles
          </button>
        </div>
      </div>
    </article>
  );
}

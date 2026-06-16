import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NewCarPPFArticle() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'New Car PPF: Why You Should Protect It Before the First Drive | Avero';
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="bg-white min-h-screen">
      <div className="bg-black text-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-[0.2rem] text-gray-400 mb-4 font-michroma">New Cars</p>
          <h1 className="text-3xl sm:text-5xl font-bold font-michroma leading-tight mb-6">
            New Car PPF: Why You Should Protect It Before the First Drive
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            The best time to apply Paint Protection Film is before your car sees a single kilometre on the road. Here is why - and what to do as soon as you take delivery.
          </p>
          <div className="mt-8 flex items-center gap-4 text-sm text-gray-400">
            <span>By Avero</span>
            <span>.</span>
            <span>6 min read</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16 text-gray-800">

        <p className="text-xl leading-relaxed mb-8 text-gray-600 font-medium">
          You have just picked up your new car. The paint is perfect - every panel unmarked, the gloss deep and even, not a chip in sight. This is the moment that matters most for protection. Here is why protecting it now, rather than after the first trip down the motorway, makes all the difference.
        </p>

        <h2 className="text-2xl font-bold font-michroma text-black mt-12 mb-4">The First Chip Happens Fast</h2>
        <p className="leading-relaxed mb-4">
          Most new car owners are surprised by how quickly stone chip damage appears. A single motorway trip - particularly on Sydney's M1 or M5, where trucks and road debris are a constant presence - can result in multiple chips on the bonnet and front bumper. And that first chip is often the hardest. Once it is there, every subsequent one is somehow less distressing, and the standard of care gradually shifts.
        </p>
        <p className="leading-relaxed mb-8">
          Applying PPF before the first drive means that standard never shifts. The film absorbs every chip, scratch, and road impact instead. Your paint remains exactly as the factory delivered it.
        </p>

        <h2 className="text-2xl font-bold font-michroma text-black mt-12 mb-4">Why New Paint Is Ideal for PPF</h2>
        <p className="leading-relaxed mb-4">
          PPF performs best - and looks best - when applied to paint in perfect condition. New factory paint is precisely that: clean, fully cured, and free of imperfections. The film bonds cleanly and conforms to every panel without needing any prior paint correction.
        </p>
        <p className="leading-relaxed mb-4">
          When PPF is applied to a vehicle that has already accumulated chips, scratches, or swirl marks, one of two things must happen: either the paint is corrected first (adding cost and time), or the imperfections are sealed beneath the film permanently. Neither outcome is as good as starting clean.
        </p>
        <p className="leading-relaxed mb-8">
          This is the single most compelling argument for new-car PPF timing: you only get one chance to protect the original factory finish. Every week you wait increases the probability that something happens to that perfect paint.
        </p>

        <h2 className="text-2xl font-bold font-michroma text-black mt-12 mb-4">What to Do When You Take Delivery</h2>
        <p className="leading-relaxed mb-4">The ideal process for a new vehicle:</p>
        <div className="space-y-4 mb-10">
          {[
            { step: '1', title: 'Book a PPF assessment before or immediately after delivery', desc: 'Contact your installer as soon as you know your delivery date so they can schedule the appointment without a long wait.' },
            { step: '2', title: 'Inspect the vehicle on delivery', desc: 'Before accepting the vehicle, inspect the paint carefully under good lighting. Note any existing chips, scratches, or paint defects - even from transport or the dealership lot. These should be addressed by the dealer before your PPF goes on.' },
            { step: '3', title: 'Drive carefully until the appointment', desc: 'If there is a gap between delivery and your PPF appointment, minimise highway driving and avoid routes with heavy truck traffic or loose gravel. The film is the protection - until it is on, treat the car accordingly.' },
            { step: '4', title: 'Consider a light decontamination wash first', desc: 'Transport and storage can leave industrial fallout, dust, or contaminants on the paint. A professional wash and decontamination before PPF application ensures the film bonds to clean, bare paint.' },
          ].map((item) => (
            <div key={item.step} className="flex gap-5 items-start">
              <span className="text-2xl font-bold font-michroma text-gray-200 min-w-[2rem]">{item.step}</span>
              <div>
                <h3 className="font-bold text-black mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold font-michroma text-black mt-12 mb-4">What Coverage Makes Sense for a New Car?</h2>
        <p className="leading-relaxed mb-4">
          The right package depends on how you will use the vehicle and your appetite for protection. The most common approach for new car owners:
        </p>
        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          {[
            {
              title: 'Full Front Package',
              desc: 'The most popular choice for new car owners. Covers the full bonnet, bumper, front guards, mirrors, and headlights - every surface at risk from road debris. Strongly recommended for anyone with any motorway commuting.',
            },
            {
              title: 'Complete Vehicle',
              desc: 'The definitive option for prestige vehicles, performance cars, and owners who want total coverage. Protects every painted surface - including door edges, rocker panels, and rear bumper - from day one.',
            },
          ].map((pkg, i) => (
            <div key={i} className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold font-michroma text-black mb-2 text-sm uppercase tracking-wider">{pkg.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{pkg.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold font-michroma text-black mt-12 mb-4">The Dealership PPF Option - And Why to Think Twice</h2>
        <p className="leading-relaxed mb-4">
          Most dealerships will offer PPF as part of their delivery package, often bundled with other protection products. While convenient, dealership-applied PPF comes with some trade-offs worth understanding.
        </p>
        <p className="leading-relaxed mb-4">
          Dealerships typically outsource PPF installation or use a single preferred supplier - meaning the quality, the film brand, and the installation standard may not be what you would get from a specialist workshop. The environment matters enormously in PPF installation: dust and contamination trapped under the film during application creates imperfections that are visible for the life of the film.
        </p>
        <p className="leading-relaxed mb-8">
          A dedicated PPF specialist workshop - with a climate-controlled, dust-free bay, experienced technicians, and the ability to choose your film and package - consistently produces a superior result. The peace of mind from seeing the process and understanding exactly what is being applied is worth the extra step.
        </p>

        <h2 className="text-2xl font-bold font-michroma text-black mt-12 mb-4">Adding Ceramic Coating Over the PPF</h2>
        <p className="leading-relaxed mb-8">
          For new vehicle owners, the combination of PPF followed immediately by a ceramic coating is the optimum setup. The PPF handles all physical protection; the ceramic layer on top provides hydrophobics, UV resistance, and enhanced gloss - while making the film surface dramatically easier to maintain. Starting this protection stack from new means the vehicle effectively never loses its showroom condition.
        </p>

        <div className="bg-black text-white rounded-2xl p-8 mt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold font-michroma mb-2">Picking up a new car soon?</h3>
            <p className="text-gray-300 text-sm">Book your PPF assessment before delivery. Avero works with new car owners across South Sydney to get protection in place from day one.</p>
          </div>
          <a href="/contact" className="whitespace-nowrap bg-white text-black font-michroma text-sm tracking-[0.15rem] px-6 py-4 hover:opacity-80 transition-opacity font-bold">
            BOOK NOW
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

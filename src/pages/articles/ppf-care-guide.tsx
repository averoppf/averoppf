import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PPFCareArticle() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'How to Care for Your PPF: The Complete Maintenance Guide | Avero';
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="bg-white min-h-screen">
      <div className="bg-black text-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-[0.2rem] text-gray-400 mb-4 font-michroma">Maintenance</p>
          <h1 className="text-3xl sm:text-5xl font-bold font-michroma leading-tight mb-6">
            How to Care for Your PPF: The Complete Maintenance Guide
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            PPF is tough - but it still needs the right care to perform at its best and reach its full lifespan. Here is exactly what to do (and what to avoid).
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
          One of the biggest advantages of Paint Protection Film is that it dramatically reduces the maintenance burden on your vehicle's paint. But PPF is not zero-maintenance. Caring for it correctly means it will look great and perform at full effectiveness for the duration of its life - neglecting it means you are shortchanging an investment that was meant to last a decade.
        </p>

        <h2 className="text-2xl font-bold font-michroma text-black mt-12 mb-4">The First 48-72 Hours After Installation</h2>
        <p className="leading-relaxed mb-4">
          The period immediately after installation is the most critical for the film's long-term performance. The installation process uses a slip solution and water to position and press the film, and the film needs time to fully cure and bond to the surface.
        </p>
        <ul className="space-y-3 mb-8 ml-4">
          {[
            'Do not wash the vehicle for at least 48-72 hours after installation',
            'Avoid high-pressure water of any kind during this period',
            'Keep the vehicle out of rain if possible - a garage or undercover area is ideal',
            'Small water bubbles under the film are completely normal and will disappear as the film cures - do not attempt to press or work them out',
            'Do not apply any wax, sealant, or product to the film during this time',
          ].map((item, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="mt-1 w-2 h-2 min-w-[8px] bg-black rounded-full"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold font-michroma text-black mt-12 mb-4">Washing Your PPF-Protected Vehicle</h2>
        <p className="leading-relaxed mb-4">
          Once the film has cured, regular washing is fine and encouraged - keeping the surface clean reduces the chance of contaminants bonding to the film over time.
        </p>

        <h3 className="text-lg font-bold text-black mt-8 mb-3">What to do:</h3>
        <ul className="space-y-3 mb-6 ml-4">
          {[
            'Hand wash with a pH-neutral car wash soap and a quality microfibre wash mitt',
            'Rinse the vehicle thoroughly before washing to remove loose debris first',
            'Wash in straight lines rather than circular motions to minimise swirl mark risk',
            'Use a separate, clean mitt for the lower sections of the vehicle where grime accumulates',
            'Rinse with clean water and dry with a soft, clean microfibre towel',
            'A contactless or touchless automatic car wash is generally safe once the film has cured',
          ].map((item, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="mt-1 w-2 h-2 min-w-[8px] bg-black rounded-full"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h3 className="text-lg font-bold text-black mt-8 mb-3">What to avoid:</h3>
        <ul className="space-y-3 mb-8 ml-4">
          {[
            'Avoid brushed automatic car washes - the brushes can cause swirl marks and lift film edges over time',
            'Do not use degreasers, solvent-based cleaners, or products containing alcohol near the film edges',
            'Avoid pressure washing directly at film edges, particularly around mirrors and bumper edges - keep the wand at a reasonable distance and angle',
            'Do not use abrasive polishes or cutting compounds on PPF',
          ].map((item, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="mt-1 w-2 h-2 min-w-[8px] bg-black rounded-full"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold font-michroma text-black mt-12 mb-4">Dealing With Contaminants</h2>
        <p className="leading-relaxed mb-4">
          Bird droppings and bug splatter are acidic and can bond to and stain PPF if left too long. Remove them as soon as you notice them - ideally with a damp microfibre and a gentle wiping motion. Do not allow these to bake on in the heat.
        </p>
        <p className="leading-relaxed mb-8">
          Tree sap should be softened with a dedicated sap remover that is safe for PPF - check with your installer before using any specialist product. Industrial fallout (iron particles that appear as tiny orange or brown dots) can be removed with a pH-neutral iron fallout remover spray.
        </p>

        <h2 className="text-2xl font-bold font-michroma text-black mt-12 mb-4">Using the Self-Healing Properties</h2>
        <p className="leading-relaxed mb-4">
          If you notice fine swirl marks or light surface scratches on the film, exposure to heat will trigger the self-healing properties of the polymer top coat. Options include:
        </p>
        <ul className="space-y-3 mb-8 ml-4">
          {[
            'Parking the vehicle in direct sunlight on a warm Australian day - typically effective within 20-30 minutes',
            'Rinsing the affected area with warm (not hot) water',
            'Using a heat gun on a low setting, held at a safe distance - best left to professionals',
          ].map((item, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="mt-1 w-2 h-2 min-w-[8px] bg-black rounded-full"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="leading-relaxed mb-8">
          Note that self-healing works on the film's surface - not on deep cuts or scratches that penetrate through the film. Those would require patch repairs or film replacement on the affected panel.
        </p>

        <h2 className="text-2xl font-bold font-michroma text-black mt-12 mb-4">Products You Can and Cannot Use on PPF</h2>
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-green-700 mb-3 text-sm uppercase tracking-wider">Safe to Use</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>pH-neutral car wash soaps</li>
              <li>PPF-specific quick detailer sprays</li>
              <li>Ceramic spray coatings formulated for PPF</li>
              <li>Soft microfibre cloths and mitts</li>
              <li>Iron fallout removers (pH neutral)</li>
              <li>PPF-specific sealants and toppers</li>
            </ul>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-red-700 mb-3 text-sm uppercase tracking-wider">Avoid</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>Carnauba wax (can cause discolouration)</li>
              <li>Solvent-based cleaners near film edges</li>
              <li>Abrasive polishes or cutting compounds</li>
              <li>High-pressure spray directly at film edges</li>
              <li>Brushed automatic car washes</li>
              <li>Alcohol-based products near edges</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold font-michroma text-black mt-12 mb-4">Annual Maintenance</h2>
        <p className="leading-relaxed mb-4">
          Once or twice a year, it is worth having a professional inspect the film - particularly around edges, mirrors, and areas that see the most stress. Early identification of any lifting or edge issues means they can be addressed before they become larger problems.
        </p>
        <p className="leading-relaxed mb-8">
          If a ceramic coating was applied over the PPF, that coating may need to be refreshed or topped up every 12-24 months depending on usage and the specific product used. This maintains the hydrophobic properties and keeps the surface performing at its best.
        </p>

        <h2 className="text-2xl font-bold font-michroma text-black mt-12 mb-4">Signs It Is Time to Replace the Film</h2>
        <p className="leading-relaxed mb-4">Quality PPF lasts up to 10 years - but eventually it will show signs of age. Indicators that it is time to consider replacing the film include:</p>
        <ul className="space-y-3 mb-8 ml-4">
          {[
            'Yellowing or discolouration, particularly on the bonnet and bumper',
            'Persistent haze or cloudiness that does not clear with cleaning',
            'Edges that have lifted and no longer bond to the surface',
            'Bubbling or delamination beneath the film surface',
            'Loss of hydrophobic properties (water no longer beads effectively)',
          ].map((item, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="mt-1 w-2 h-2 min-w-[8px] bg-black rounded-full"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="leading-relaxed mb-8">
          When removed professionally, quality PPF comes off cleanly without damaging the underlying paint - provided the vehicle's paint was in good condition at the time of installation and the film has not been left well beyond its serviceable life.
        </p>

        <div className="bg-black text-white rounded-2xl p-8 mt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold font-michroma mb-2">Questions about your existing PPF?</h3>
            <p className="text-gray-300 text-sm">The team at Avero is happy to inspect your film and advise on care or replacement. South Sydney PPF specialists.</p>
          </div>
          <a href="/contact" className="whitespace-nowrap bg-white text-black font-michroma text-sm tracking-[0.15rem] px-6 py-4 hover:opacity-80 transition-opacity font-bold">
            CONTACT US
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

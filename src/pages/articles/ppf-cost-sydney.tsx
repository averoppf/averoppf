import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PPFCostSydneyArticle() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'How Much Does PPF Cost in Sydney? (2026 Pricing Guide) | Avero';
    window.scrollTo(0, 0);
  }, []);

  const packages = [
    {
      name: 'High Impact Package',
      coverage: 'Front bumper, partial bonnet, partial front guards, mirrors, headlights',
      who: 'Drivers wanting smart entry-level protection on the highest-risk zones without overcommitting budget.',
    },
    {
      name: 'Full Front Package',
      coverage: 'Full front bumper, full bonnet, complete front guards, mirrors, headlights',
      who: 'The most popular choice - covers all front-end surfaces fully. Ideal for motorway and highway drivers.',
    },
    {
      name: 'Complete Vehicle Package',
      coverage: 'Every exterior painted surface on the vehicle',
      who: 'New car owners, prestige and luxury vehicles, enthusiasts who want total peace of mind.',
    },
  ];

  return (
    <article className="bg-white min-h-screen">
      <div className="bg-black text-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-[0.2rem] text-gray-400 mb-4 font-michroma">Pricing Guide</p>
          <h1 className="text-3xl sm:text-5xl font-bold font-michroma leading-tight mb-6">
            How Much Does PPF Cost in Sydney? (2026 Pricing Guide)
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            What to expect from PPF pricing in Sydney, what drives the cost, and how to make sure you are getting real value - not just the lowest quote.
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
          Cost is usually the first question people ask about Paint Protection Film - and it is a fair one. PPF is a meaningful investment. But understanding what drives pricing, and what separates a quality job from a cheap one, is essential before you commit.
        </p>

        <h2 className="text-2xl font-bold font-michroma text-black mt-12 mb-4">Why PPF Pricing Varies So Much</h2>
        <p className="leading-relaxed mb-4">
          You will encounter a wide range of PPF pricing across Sydney - and the difference is not arbitrary. Several key factors determine the final cost of a PPF installation:
        </p>

        <h3 className="text-lg font-bold text-black mt-8 mb-3">1. Coverage Area</h3>
        <p className="leading-relaxed mb-6">
          The single biggest driver of cost is how much of the vehicle you are wrapping. A partial front - just the bumper and partial bonnet - requires a fraction of the film and labour compared to a complete vehicle wrap. Packages range from targeted high-impact zone coverage through to full-body protection.
        </p>

        <h3 className="text-lg font-bold text-black mt-8 mb-3">2. The Film Brand and Grade</h3>
        <p className="leading-relaxed mb-6">
          Not all PPF is created equal. Entry-level films are cheaper to buy and apply, but they yellow faster, are more prone to lifting at edges, lack self-healing capability, and carry little to no warranty. Premium films - such as those used at Avero - are self-healing TPU with a 10-year manufacturer warranty covering yellowing, cracking, blistering, and delamination. The film itself represents a significant portion of the total cost, and choosing a premium film is non-negotiable if you want results that last.
        </p>

        <h3 className="text-lg font-bold text-black mt-8 mb-3">3. Vehicle Size and Complexity</h3>
        <p className="leading-relaxed mb-6">
          A compact hatchback takes considerably less film and labour than a large SUV or dual-cab ute. More complex body shapes with tight curves, deep panel lines, and unusual geometry also take longer to apply correctly - particularly if the installer is cutting custom pieces to avoid seams in visible areas.
        </p>

        <h3 className="text-lg font-bold text-black mt-8 mb-3">4. Paint Condition Prior to Installation</h3>
        <p className="leading-relaxed mb-6">
          PPF must be applied to paint in good condition. If the vehicle has existing scratches, swirl marks, or light oxidation, a paint correction stage is required before the film goes on. Applying film over damaged paint permanently locks in those imperfections - a quality installer will always flag this and quote for correction if needed.
        </p>

        <h3 className="text-lg font-bold text-black mt-8 mb-3">5. Installation Environment and Skill</h3>
        <p className="leading-relaxed mb-6">
          The workshop environment has a direct impact on the quality of the result. PPF applied in a dusty, uncontrolled environment will pick up contamination during installation - resulting in imperfections trapped beneath the film. A professional, climate-controlled workshop is essential. Experienced technicians who have worked on your specific vehicle model also produce significantly cleaner results, particularly around mirrors, bumper vents, and complex body lines.
        </p>

        <h2 className="text-2xl font-bold font-michroma text-black mt-16 mb-6">Avero PPF Packages</h2>
        <p className="leading-relaxed mb-8">
          At Avero, we structure our PPF offerings into three clear packages - each designed to deliver genuine value at its coverage level. Every package uses the same premium self-healing TPU film with a 10-year warranty, and is installed in our controlled South Sydney workshop.
        </p>

        <div className="space-y-6 mb-12">
          {packages.map((pkg, i) => (
            <div key={i} className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold font-michroma text-black text-lg mb-2">{pkg.name}</h3>
              <p className="text-sm text-gray-500 mb-1"><span className="font-semibold text-gray-700">Coverage:</span> {pkg.coverage}</p>
              <p className="text-sm text-gray-600 mt-3 leading-relaxed">{pkg.who}</p>
            </div>
          ))}
        </div>

        <p className="leading-relaxed mb-8 bg-gray-50 border border-gray-200 rounded-xl p-5 text-sm text-gray-600">
          <strong className="text-gray-800">Note on pricing:</strong> Every vehicle is different - in size, shape, paint condition, and installation complexity. We do not publish fixed prices because quoting a number without seeing the vehicle would be doing you a disservice. Instead, we provide personalised quotes after inspecting the vehicle, so you know exactly what you are getting with no surprises. Contact us to arrange a no-obligation assessment.
        </p>

        <h2 className="text-2xl font-bold font-michroma text-black mt-12 mb-4">What a PPF Quote Should Include</h2>
        <p className="leading-relaxed mb-4">When comparing quotes from different workshops, make sure each one covers:</p>
        <ul className="space-y-3 mb-8 ml-4">
          {[
            'The specific film brand and grade being used - and whether it includes a manufacturer warranty',
            'Exactly which panels and areas are covered',
            'Whether paint correction is included or quoted separately if needed',
            'Installation timeframe and what that looks like for your schedule',
            'What the warranty covers and how claims are handled',
            'Whether ceramic coating is included or can be added',
          ].map((item, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="mt-1 w-2 h-2 min-w-[8px] bg-black rounded-full"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold font-michroma text-black mt-12 mb-4">How to Think About the Cost</h2>
        <p className="leading-relaxed mb-4">
          It helps to frame the cost of PPF against what it is protecting you from. A single respray on one panel in Sydney can cost $600-$1,200 or more depending on colour, complexity, and workshop. A full front-end respray on a premium vehicle can exceed $5,000. Stone chips on a bonnet can mean multiple panel repairs across the life of the car.
        </p>
        <p className="leading-relaxed mb-4">
          PPF eliminates those costs entirely for the duration of the film's life. For drivers who cover significant kilometres - particularly on highways, motorways, or regional roads - the maths often work out firmly in PPF's favour, even before accounting for the uplift in resale value.
        </p>
        <p className="leading-relaxed mb-12">
          For new car owners in particular, the logic is straightforward: the best time to apply PPF is before the first stone chip happens. Every chip that lands on unprotected paint is a reminder of why it would have been worth doing sooner.
        </p>

        <h2 className="text-2xl font-bold font-michroma text-black mt-12 mb-4">Why Choosing the Cheapest Option Usually Costs More</h2>
        <p className="leading-relaxed mb-4">
          A low PPF quote almost always means one or more of the following: cheaper film with no self-healing and a short or no warranty; cutting corners on the installation environment; less experienced technicians; or coverage that does not extend cleanly to the panel edges.
        </p>
        <p className="leading-relaxed mb-8">
          The results show within 12-18 months: yellowing, lifting edges, bubbling under the film, or a finish that looks noticeably worse than the vehicle deserves. At that point, the film has to be removed and the process started again - costing more in total than a quality job the first time would have.
        </p>

        <div className="bg-black text-white rounded-2xl p-8 mt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold font-michroma mb-2">Get a personalised PPF quote</h3>
            <p className="text-gray-300 text-sm">We inspect your vehicle and provide an exact, no-surprise quote. South Sydney premium PPF specialists.</p>
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

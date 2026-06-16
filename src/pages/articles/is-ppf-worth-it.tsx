import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function IsPPFWorthItArticle() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Is PPF Worth It? What Sydney Car Owners Need to Know | Avero';
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="bg-white min-h-screen">
      <div className="bg-black text-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-[0.2rem] text-gray-400 mb-4 font-michroma">Worth It?</p>
          <h1 className="text-3xl sm:text-5xl font-bold font-michroma leading-tight mb-6">
            Is PPF Worth It? What Sydney Car Owners Need to Know
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            The honest answer to the most common question we hear - including who it makes the most sense for, and when you might be better off without it.
          </p>
          <div className="mt-8 flex items-center gap-4 text-sm text-gray-400">
            <span>By Avero</span>
            <span>·</span>
            <span>7 min read</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16 text-gray-800">
        <p className="text-xl leading-relaxed mb-8 text-gray-600 font-medium">
          "Is it actually worth it?" It is the question we hear most often, and it deserves a straight answer - not a sales pitch. The truth is that PPF is worth it for most Sydney drivers who care about their vehicle, but it is not the right call for everyone. Here is how to think through it honestly.
        </p>

        <h2 className="text-2xl font-bold font-michroma text-black mt-12 mb-4">What You Are Actually Paying For</h2>
        <p className="leading-relaxed mb-4">
          PPF is not a luxury accessory. At its core, it is an insurance policy for your vehicle's paint - with the unique quality that it actually makes the underlying asset look better rather than just less damaged.
        </p>
        <p className="leading-relaxed mb-8">
          When you invest in PPF, you are buying: prevention of stone chip and scratch damage that would otherwise require costly panel repairs; preservation of the vehicle's original factory paint (which always commands a premium at resale); and the peace of mind of driving without wincing every time gravel hits the front end on the highway.
        </p>

        <h2 className="text-2xl font-bold font-michroma text-black mt-12 mb-4">The Sydney-Specific Case for PPF</h2>
        <p className="leading-relaxed mb-4">
          Sydney presents a specific combination of conditions that make PPF more compelling than in many other cities:
        </p>
        <ul className="space-y-3 mb-8 ml-4">
          {[
            'High-speed motorways (M1, M2, M5, M7) where stone chip risk is significant at 100-110km/h',
            'Dense urban traffic with narrow car parks, high door ding risk, and tight street parking',
            'Coastal salt air that accelerates corrosion on any exposed paint chip',
            'UV levels among the highest in the world, causing accelerated paint oxidation and fading on unprotected surfaces',
            'High vehicle values - Sydney has one of the highest concentrations of prestige and performance vehicles in Australia, where protecting resale value matters more',
          ].map((item, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="mt-1 w-2 h-2 min-w-[8px] bg-black rounded-full"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold font-michroma text-black mt-12 mb-4">The Real Cost Comparison</h2>
        <p className="leading-relaxed mb-4">
          Think of it this way. Without PPF, a vehicle driven on Sydney's highways will typically accumulate stone chip damage on the bonnet, bumper, and front guards within months. Over several years, that damage compounds - and so do the repair costs.
        </p>
        <p className="leading-relaxed mb-4">
          A single panel repair in Sydney - for example a bonnet with chips and minor scratches - runs between $600-$1,500 depending on size, colour complexity, and the workshop. A two-tone paint or metallic finish costs more. Full front-end repair on a prestige vehicle can exceed $4,000-$6,000.
        </p>
        <p className="leading-relaxed mb-8">
          Set against these figures, the maths of PPF come into focus quickly - particularly for drivers covering above-average annual kilometres, or those who plan to sell or trade the vehicle within the next 5-7 years.
        </p>

        <h2 className="text-2xl font-bold font-michroma text-black mt-12 mb-4">PPF and Resale Value</h2>
        <p className="leading-relaxed mb-4">
          Original factory paint in excellent condition is one of the highest-value attributes a used vehicle can have. Buyers - and dealerships making trade-in assessments - price this premium in clearly. A vehicle with a chipped, scratched bonnet and faded paint will be discounted accordingly, regardless of how well the mechanical side has been maintained.
        </p>
        <p className="leading-relaxed mb-8">
          PPF preserves that original paint in essentially new condition for the life of the film. When you go to sell, you are presenting a vehicle with paintwork that tells the story of a car that was genuinely cared for - and that affects both the price you can ask and how quickly it sells.
        </p>

        <h2 className="text-2xl font-bold font-michroma text-black mt-12 mb-4">Who PPF Makes the Most Sense For</h2>
        <div className="space-y-4 mb-12">
          {[
            {
              title: 'New car buyers',
              desc: 'The best time to apply PPF is before the first chip. Protecting factory paint from day one is significantly more valuable than trying to preserve paint that already has a season of highway damage on it.',
            },
            {
              title: 'Highway and motorway commuters',
              desc: 'If you regularly drive at 80-110km/h, stone chip risk is constant. Front-end PPF pays for itself quickly for anyone putting serious kilometres on in these conditions.',
            },
            {
              title: 'Prestige and performance vehicle owners',
              desc: 'The higher the vehicle value and the more complex the paint (pearlescent, two-tone, custom colours), the more PPF makes sense. Repair costs on these vehicles are substantial, and resale value is closely tied to paint condition.',
            },
            {
              title: 'People who keep their cars long-term',
              desc: 'If you tend to run a vehicle for 8-12 years, PPF ensures it still looks excellent at the 10-year mark - not like a decade of Australian roads have happened to it.',
            },
            {
              title: 'Lease vehicle drivers',
              desc: 'End-of-lease damage assessments can result in significant charges for paint damage. PPF eliminates that risk entirely.',
            },
          ].map((item, i) => (
            <div key={i} className="border-l-4 border-black pl-5 py-2">
              <h3 className="font-bold text-black mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold font-michroma text-black mt-12 mb-4">When PPF Might Not Be the Priority</h2>
        <p className="leading-relaxed mb-4">
          In the interest of a straight answer: PPF is not the right call in every situation.
        </p>
        <ul className="space-y-3 mb-8 ml-4">
          {[
            'If the vehicle already has significant paint damage, that needs to be corrected first - and the cost of correction plus PPF may not be justified on a vehicle of lower value',
            'For very short-term ownership (less than 2 years), the return on investment is harder to justify unless the vehicle is high-value',
            'For vehicles that rarely leave suburban streets and car parks, the stone chip risk is lower - though a ceramic coating may still be worthwhile for UV and maintenance benefits',
          ].map((item, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="mt-1 w-2 h-2 min-w-[8px] bg-black rounded-full"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold font-michroma text-black mt-12 mb-4">The Bottom Line</h2>
        <p className="leading-relaxed mb-4">
          For most Sydney drivers who care about their vehicle - and particularly for anyone with a new car, a valued vehicle, or a regular highway commute - PPF is worth it. The combination of damage prevention, preserved resale value, and genuine peace of mind adds up to a compelling case.
        </p>
        <p className="leading-relaxed mb-12">
          The question is not really "is PPF worth it" - it is "what level of coverage makes sense for my vehicle and how I use it?" That is a question we are well placed to help you answer.
        </p>

        <div className="bg-black text-white rounded-2xl p-8 mt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold font-michroma mb-2">See if PPF makes sense for your car</h3>
            <p className="text-gray-300 text-sm">Chat with the Avero team - we will give you an honest assessment and a personalised quote.</p>
          </div>
          
            href="/contact"
            className="whitespace-nowrap bg-white text-black font-michroma text-sm tracking-[0.15rem] px-6 py-4 hover:opacity-80 transition-opacity font-bold"
          >
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

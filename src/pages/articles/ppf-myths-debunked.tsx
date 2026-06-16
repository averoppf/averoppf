import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PPFMythsArticle() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Common PPF Myths - Debunked | Avero';
    window.scrollTo(0, 0);
  }, []);

  const myths = [
    {
      myth: 'PPF is only for luxury cars',
      truth: 'PPF is a smart investment for any vehicle where the owner cares about the paint condition. Stone chips happen regardless of what you drive - the physics of a gravel road do not discriminate based on badge. Daily commuter vehicles, family SUVs, dual-cabs, and utes all benefit from front-end PPF coverage. The question is whether protecting the paint is a priority for you, not whether the car is prestigious enough to deserve it.',
    },
    {
      myth: 'PPF is visible and looks like a sticker',
      truth: 'This describes poor-quality PPF or poor-quality installation from a decade or more ago. Modern premium TPU films are optically clear, conform to panel curves without distortion, and are installed without visible seams in most areas. A professional installation by an experienced technician on a quality film is effectively invisible - guests can stand next to the car and have no idea it is there.',
    },
    {
      myth: 'PPF will damage the paint when removed',
      truth: 'Quality PPF, installed on properly prepared paint and removed professionally at the end of its life, comes off cleanly without affecting the underlying paint. The key caveats are film quality and paint condition at the time of installation. Cheap films can become brittle over time and be difficult to remove cleanly. PPF applied over paint with adhesion issues (previous poor repairs) can cause problems on removal. This is exactly why film quality and paint prep matter.',
    },
    {
      myth: 'PPF turns yellow in Australian sun',
      truth: 'Older generation PPF films, and current low-quality films, can yellow over time due to UV exposure. Premium TPU films include UV stabilisers in both the film and the top coat that prevent this. Quality PPF with UV-resistant construction remains optically clear for the life of the film - typically 10 years with manufacturer warranty coverage against yellowing. If a film is yellowing early, it is a film quality issue, not an inherent PPF issue.',
    },
    {
      myth: 'Ceramic coating does the same job as PPF',
      truth: 'These products protect against entirely different things. Ceramic coating provides chemical resistance, UV protection, and dramatically improved hydrophobics - but it has negligible thickness and cannot stop stone chips or absorb physical impacts. PPF provides physical protection against chips, scratches, and impacts. Comparing them as alternatives is like comparing a seatbelt to sunscreen. Both are useful; neither replaces the other.',
    },
    {
      myth: 'PPF is maintenance-free',
      truth: 'PPF significantly reduces paint maintenance burden - but it still needs care. The film should be washed regularly with pH-neutral car wash products, kept free of bird droppings and bug splatter (which can stain if left to bake on), and have its edges inspected periodically. A ceramic coating applied over the film dramatically reduces the maintenance required. Neglecting the film accelerates wear and can void manufacturer warranties.',
    },
    {
      myth: 'Any installer can do PPF',
      truth: 'PPF installation requires specific skills, tools, and an appropriate environment that most general detailers and bodyshops simply do not have. The installation environment must be dust-controlled - even small particles trapped under the film during installation create permanent imperfections. Technicians need experience with your specific vehicle panel shapes and common problem areas. And the film must be cut correctly - ideally from precise digital templates rather than manually near your paint. The quality gap between specialist and non-specialist installers is significant and immediately visible in the result.',
    },
  ];

  return (
    <article className="bg-white min-h-screen">
      <div className="bg-black text-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-[0.2rem] text-gray-400 mb-4 font-michroma">Myth vs Reality</p>
          <h1 className="text-3xl sm:text-5xl font-bold font-michroma leading-tight mb-6">
            Common PPF Myths - Debunked
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Paint Protection Film has a lot of misinformation attached to it. Here are the most common myths we hear - and what the reality actually looks like.
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
          PPF has been around for decades, but it is still surrounded by misconceptions - some from outdated experiences with early-generation films, some from marketing overreach, and some from well-meaning but misinformed friends and mechanics. Let us clear the air.
        </p>

        <div className="space-y-10 mb-16">
          {myths.map((item, i) => (
            <div key={i} className="border-b border-gray-100 pb-10">
              <div className="flex gap-4 items-start mb-4">
                <span className="text-red-500 font-bold text-sm uppercase tracking-wider mt-1 min-w-[60px]">Myth</span>
                <h2 className="text-xl font-bold text-black font-michroma leading-snug">"{item.myth}"</h2>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-green-600 font-bold text-sm uppercase tracking-wider mt-1 min-w-[60px]">Reality</span>
                <p className="text-gray-700 leading-relaxed">{item.truth}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold font-michroma text-black mt-12 mb-4">The Bottom Line on PPF Myths</h2>
        <p className="leading-relaxed mb-4">
          Most PPF misconceptions come down to one of two things: experiences with early, lower-quality films; or confusion between what PPF does and what other products (like ceramic coating) do. Modern premium PPF from a quality installer is a genuinely excellent product - optically clear, durable, self-healing, and backed by strong manufacturer warranties.
        </p>
        <p className="leading-relaxed mb-12">
          The best way to cut through the noise is to talk to someone who installs the product professionally - not a parts counter, a forum, or a detailing guru on social media. If you have questions, we are always happy to give you a straight answer.
        </p>

        <div className="bg-black text-white rounded-2xl p-8 mt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold font-michroma mb-2">Have a question about PPF?</h3>
            <p className="text-gray-300 text-sm">We will give you straight answers and an honest assessment for your specific vehicle and situation.</p>
          </div>
          
            href="/contact"
            className="whitespace-nowrap bg-white text-black font-michroma text-sm tracking-[0.15rem] px-6 py-4 hover:opacity-80 transition-opacity font-bold"
          >
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

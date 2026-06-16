import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SelfHealingPPFArticle() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Self-Healing PPF: How Does It Actually Work? | Avero';
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="bg-white min-h-screen">
      <div className="bg-black text-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-[0.2rem] text-gray-400 mb-4 font-michroma">Technology</p>
          <h1 className="text-3xl sm:text-5xl font-bold font-michroma leading-tight mb-6">
            Self-Healing PPF: How Does It Actually Work?
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Scratches that disappear in sunlight sound like marketing magic. Here is the science behind self-healing Paint Protection Film - and what it can and cannot do.
          </p>
          <div className="mt-8 flex items-center gap-4 text-sm text-gray-400">
            <span>By Avero</span>
            <span>·</span>
            <span>5 min read</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16 text-gray-800">
        <p className="text-xl leading-relaxed mb-8 text-gray-600 font-medium">
          If you have ever brushed your car against a hedge and then parked in the sun only to find the scratches gone an hour later, you have experienced self-healing PPF firsthand. It is one of the film's most impressive features - but also one of the most misunderstood. Here is what is actually happening.
        </p>

        <h2 className="text-2xl font-bold font-michroma text-black mt-12 mb-4">The Material Behind the Magic</h2>
        <p className="leading-relaxed mb-4">
          Modern Paint Protection Film is constructed from thermoplastic polyurethane (TPU) - a material chosen specifically for its combination of toughness, optical clarity, and flexibility. But what makes self-healing films special is the top coat: a layer of elastomeric polymer applied over the TPU base film.
        </p>
        <p className="leading-relaxed mb-8">
          Elastomeric refers to materials with elastic properties - they can be deformed and then return to their original shape. In the context of PPF, this means that when the surface is scratched or scuffed, the polymer chains in the top coat are displaced but not permanently broken. Given the right conditions, they flow back into their original configuration, effectively erasing the damage.
        </p>

        <h2 className="text-2xl font-bold font-michroma text-black mt-12 mb-4">The Role of Heat</h2>
        <p className="leading-relaxed mb-4">
          Heat is the catalyst. At ambient temperature, the elastomeric top coat is stable - it holds its shape, including any scratches or swirl marks that have been introduced. But when heat is applied, the polymer chains gain enough energy to move. The natural tension in the material causes them to flow back toward their resting state, smoothing the surface and eliminating visible scratches in the process.
        </p>
        <p className="leading-relaxed mb-4">In practice, this means:</p>
        <ul className="space-y-3 mb-8 ml-4">
          {[
            'Parking in direct sunlight on a warm day (common in Sydney) will typically heal light surface scratches within 20-40 minutes',
            'Rinsing with warm water accelerates the process and can heal minor scratches in a matter of minutes',
            'A careful application of low heat from a heat gun - best left to professionals - can address more stubborn surface marks',
          ].map((item, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="mt-1 w-2 h-2 min-w-[8px] bg-black rounded-full"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold font-michroma text-black mt-12 mb-4">What Self-Healing PPF Can Fix</h2>
        <p className="leading-relaxed mb-4">It is important to be precise about what this technology handles - and what it does not. Self-healing PPF is designed to address:</p>
        <ul className="space-y-3 mb-8 ml-4">
          {[
            'Light swirl marks from improper washing or contact with brushes',
            'Fine surface scratches from hedge brushes, light abrasion, and similar',
            'Minor scuffs that affect only the very surface of the film top coat',
          ].map((item, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="mt-1 w-2 h-2 min-w-[8px] bg-black rounded-full"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold font-michroma text-black mt-12 mb-4">What Self-Healing PPF Cannot Fix</h2>
        <p className="leading-relaxed mb-4">
          Self-healing has its limits, and overselling it does buyers a disservice. The technology does not repair:
        </p>
        <ul className="space-y-3 mb-8 ml-4">
          {[
            'Deep cuts or gouges that penetrate through the film entirely',
            'Stone chips that have cracked or penetrated the film layer',
            'Damage that has reached the underlying paint',
            'Permanent creases from a significant impact',
          ].map((item, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="mt-1 w-2 h-2 min-w-[8px] bg-black rounded-full"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="leading-relaxed mb-8">
          In those cases, the film has done its job - it absorbed the damage that would otherwise have gone into your paint. The affected section of film would then need to be replaced, which is straightforward and significantly cheaper than a panel repair on the underlying paint.
        </p>

        <h2 className="text-2xl font-bold font-michroma text-black mt-12 mb-4">Why This Matters in Australian Conditions</h2>
        <p className="leading-relaxed mb-4">
          Australia's climate is, in many ways, ideal for maximising the benefits of self-healing PPF. Sydney's warm temperatures and abundant sunshine mean the film spends a significant portion of its life at temperatures that naturally trigger the healing process - without any intervention from the owner.
        </p>
        <p className="leading-relaxed mb-8">
          The practical result is a vehicle that, over time, is remarkably resistant to the surface-level wear that normally makes paint look tired and aged. Light scratches that would accumulate and dull the finish on unprotected paint simply do not persist on self-healing PPF.
        </p>

        <h2 className="text-2xl font-bold font-michroma text-black mt-12 mb-4">Does the Self-Healing Ability Wear Out?</h2>
        <p className="leading-relaxed mb-4">
          Over many years, the elastomeric top coat gradually loses some of its flexibility and recovery speed. An older film may still heal, but more slowly and less completely than a new one. This is a natural part of the film's lifecycle and is one of the factors considered in the 10-year lifespan of premium PPF.
        </p>
        <p className="leading-relaxed mb-8">
          A film that is approaching end-of-life will show slower or incomplete healing of surface marks - which, combined with other signs like slight haze or edge lifting, is a signal that it is time to replace the film and start the protection cycle again.
        </p>

        <div className="bg-black text-white rounded-2xl p-8 mt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold font-michroma mb-2">Protect your car with self-healing PPF</h3>
            <p className="text-gray-300 text-sm">Avero installs premium self-healing TPU film with a 10-year manufacturer warranty. South Sydney's PPF specialists.</p>
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

import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from "react";
import { CheckCircle } from "lucide-react";
import ContactComponent from "../../components/misc/ContactComponent";
import { VisitMapComponent } from "../../components/misc/VisitMapComponent";

export function ColourWrapsPage() {
  const titleRef = useRef(null);
  const titleAnimationControls = useAnimation();
  const textVariants = {
      hidden: {
          opacity: 0,
          x: -150,
      },
      visible: {
          opacity: 1,
          x: 0,
      },
  };
  const titleInView = useInView(titleRef, { once: true });
  useEffect(() => {
      if (titleInView) {
          titleAnimationControls.start("visible");
      }
  }, [titleInView, titleAnimationControls]);

  useEffect(() => {
      document.title = "Colour Wraps & Coloured PPF Sydney | Vinyl Wraps | Avero PPF";

      const metaDescription = document.querySelector('meta[name="description"]');
      const descText = "Colour wraps and coloured PPF in Sydney. Transform your vehicle with AveroPRO Spectral coloured paint protection film or a vinyl wrap - style and protection in one. Get a quote.";
      if (metaDescription) {
          metaDescription.setAttribute('content', descText);
      } else {
          const meta = document.createElement('meta');
          meta.name = 'description';
          meta.content = descText;
          document.head.appendChild(meta);
      }

      if (!document.getElementById('colourwraps-service-jsonld')) {
          const script = document.createElement('script');
          script.type = 'application/ld+json';
          script.id = 'colourwraps-service-jsonld';
          script.text = JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Colour Wraps and Coloured PPF",
              "serviceType": "Vehicle Colour Wrap and Coloured Paint Protection Film",
              "provider": {
                  "@type": "AutoBodyShop",
                  "name": "Avero PPF",
                  "telephone": "+61415081546",
                  "email": "info@averoppf.com.au",
                  "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "Caringbah",
                      "addressRegion": "NSW",
                      "addressCountry": "AU"
                  }
              },
              "areaServed": "Sydney, New South Wales",
              "description": "AveroPRO Spectral coloured paint protection film and vinyl colour wraps in South Sydney - colour transformation with the option of full paint protection."
          });
          document.head.appendChild(script);
      }

      window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black border-gray-900 border-t-1">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] overflow-hidden">
          <img src="/SpectralPPF.png" alt="Coloured PPF and vinyl colour wrap in Sydney by Avero" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
          <motion.div
              ref={titleRef}
              animate={titleAnimationControls}
              variants={textVariants}
              initial="hidden"
              transition={{ delay: 0.4, duration: 0.4 }}
              className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
              <p className="text-lg text-neutral-300 font-michroma mb-3">Services</p>
              <h1 className="text-white font-michroma text-4xl sm:text-5xl md:text-6xl font-bold mb-8">Colour Wraps in Sydney</h1>
              <a className="block text-black bg-white font-michroma text-[0.7rem] sm:text-[0.9rem] tracking-[0.15rem] border-2 px-6 py-4 transition-opacity hover:opacity-60 hover:cursor-pointer font-bold" href="/contact">ENQUIRE NOW</a>
          </motion.div>
      </section>

      {/* Coloured PPF */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <img src="/Colour PPF.avif" alt="AveroPRO Spectral coloured paint protection film on a vehicle" className='shadow-2xl w-full object-cover max-w-[35vw] min-w-[400px] min-h-[600px] max-h-[800px]' />
                <div>
                    <h2 className="text-4xl font-bold mb-6 text-white font-michroma">Coloured PPF</h2>
                    <p className='text-2xl font-medium mb-6 italic'>Coloured PPF combines the same protection you would expect from clear paint protection film with a unique colour finish.</p>
                    <p className="text-lg leading-relaxed mb-6">
                        Available in smooth matte, satin, or high-gloss, coloured PPF gives you both style and durability in a single product. It guards against stone chips, scratches, swirl marks, and fading, while transforming the appearance of your car in a way that still looks factory fresh.
                    </p>
                    <p className="text-lg leading-relaxed">
                        At Avero, we install <a href="/averopro" className="text-white underline hover:opacity-70">AveroPRO Spectral PPF</a>, our own coloured paint protection film engineered for Australian conditions and backed by a 10-year warranty. Spectral lets you personalise your vehicle's colour while preserving the original paint beneath, and remains fully removable down the track.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* Vinyl Wraps */}
      <section className="py-20 border-t-1 border-neutral-800">
          <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="text-white md:order-2">
                      <h2 className="text-4xl font-bold mb-6 font-michroma">Vinyl Wraps</h2>
                      <p className='text-2xl font-medium mb-6 italic'>A vinyl wrap is the fastest way to give your car a whole new look.</p>
                      <p className="text-lg leading-relaxed mb-6">
                          From bold colour changes to clean, subtle tones, vinyl wraps let you customise your vehicle without the cost or permanence of a respray. Whether you want a striking statement colour, a matte finish, or a fully personalised design, a vinyl wrap is a versatile and reversible way to express your style.
                      </p>
                      <p className="text-lg leading-relaxed">
                          Vinyl wraps are an excellent choice for those who like to change their look from time to time, or who want a distinctive finish on a budget. When you are ready for something new, the wrap can be removed and the original paint revealed underneath.
                      </p>
                  </div>
                  <img src="/Vinyl Wrap.avif" alt="Vinyl colour wrap applied to a car in Sydney" className='shadow-2xl w-full object-cover max-w-[35vw] min-w-[400px] min-h-[600px] max-h-[800px] md:order-1' />
              </div>
          </div>
      </section>

      {/* Vinyl Wrap vs Coloured PPF Comparison */}
      <section className="py-20 bg-black text-white border-t-1 border-neutral-800">
        <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-4xl font-bold mb-4 text-center font-michroma">Vinyl Wrap or Coloured PPF?</h2>
            <p className="text-center text-gray-300 mb-12 text-lg">Which colour change is right for your vehicle</p>

            <p className="text-lg leading-relaxed text-gray-300 mb-10">
                Both vinyl wraps and coloured PPF change the colour of your car, but they are very different products. A vinyl wrap is purely cosmetic - it changes the look of the vehicle at a more accessible price point, making it a great option for budget-conscious colour changes or short-term styling. Coloured PPF does everything a wrap does aesthetically, but with the added benefit of genuine paint protection underneath.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="border border-gray-800 p-8">
                    <h3 className="text-2xl font-bold font-michroma mb-4">Vinyl Wrap</h3>
                    <ul className="space-y-3 text-gray-300">
                        <li className="flex gap-3 items-start"><span className="mt-1 w-2 h-2 min-w-[8px] bg-white rounded-full"></span><span>More affordable colour change</span></li>
                        <li className="flex gap-3 items-start"><span className="mt-1 w-2 h-2 min-w-[8px] bg-white rounded-full"></span><span>Huge range of colours and finishes</span></li>
                        <li className="flex gap-3 items-start"><span className="mt-1 w-2 h-2 min-w-[8px] bg-white rounded-full"></span><span>Fully reversible</span></li>
                        <li className="flex gap-3 items-start"><span className="mt-1 w-2 h-2 min-w-[8px] bg-white rounded-full"></span><span>Primarily cosmetic - limited protective benefit</span></li>
                    </ul>
                </div>
                <div className="border-2 border-white p-8 relative">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-1 rounded-full text-sm font-semibold">RECOMMENDED</div>
                    <h3 className="text-2xl font-bold font-michroma mb-4">Coloured PPF</h3>
                    <ul className="space-y-3 text-gray-300">
                        <li className="flex gap-3 items-start"><CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" /><span>Full colour change with a premium finish</span></li>
                        <li className="flex gap-3 items-start"><CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" /><span>Genuine protection from chips, scratches and fading</span></li>
                        <li className="flex gap-3 items-start"><CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" /><span>Self-healing surface and 10-year warranty</span></li>
                        <li className="flex gap-3 items-start"><CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" /><span>Preserves and protects the original paint</span></li>
                    </ul>
                </div>
            </div>

            <p className="text-lg leading-relaxed text-gray-300">
                Our recommendation for most owners is <span className="font-semibold text-white">Coloured PPF</span>. While it sits at a slightly higher price point than a standard vinyl wrap, it does far more for the value: you get the same striking aesthetic transformation, plus the impact resistance, self-healing properties, and long-term paint preservation of a genuine paint protection film. In other words, a vinyl wrap only changes how your car looks - coloured PPF upgrades how it looks while actively protecting what is underneath. For anyone who values their vehicle and plans to keep it looking its best for years, it is the superior choice.
            </p>

            <div className="flex justify-center mt-12">
                <a href="/contact" className="inline-block bg-white text-black font-michroma text-sm tracking-[0.15rem] px-8 py-4 hover:opacity-80 transition-opacity font-bold">
                    GET A QUOTE
                </a>
            </div>
        </div>
      </section>

      <section id="location" className="py-20 bg-black border-gray-900 border-t-1">
          <VisitMapComponent />
      </section>

      <section className="py-20 bg-black border-gray-900 border-t-1">
          <div className="container mx-auto px-6">
              <ContactComponent />
          </div>
      </section>
    </div>
  )
}

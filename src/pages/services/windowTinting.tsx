import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from "react";
import { CheckCircle } from "lucide-react";
import ContactComponent from "../../components/misc/ContactComponent";
import { VisitMapComponent } from "../../components/misc/VisitMapComponent";

export function WindowTintingPage() {
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
      document.title = "Car Window Tinting Sydney | Ceramic Tint Specialists | Avero PPF";

      const metaDescription = document.querySelector('meta[name="description"]');
      const descText = "Car window tinting in Sydney. Premium ceramic tint films that cut heat and glare, block 99% of UV, and protect your interior - professionally fitted in South Sydney. Get a quote.";
      if (metaDescription) {
          metaDescription.setAttribute('content', descText);
      } else {
          const meta = document.createElement('meta');
          meta.name = 'description';
          meta.content = descText;
          document.head.appendChild(meta);
      }

      if (!document.getElementById('windowtint-service-jsonld')) {
          const script = document.createElement('script');
          script.type = 'application/ld+json';
          script.id = 'windowtint-service-jsonld';
          script.text = JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Car Window Tinting",
              "serviceType": "Automotive Window Tinting",
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
              "description": "Premium ceramic car window tinting in South Sydney - heat rejection, glare reduction, UV protection and a sleek finish, fitted to Australian standards."
          });
          document.head.appendChild(script);
      }

      window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black border-gray-900 border-t-1">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] overflow-hidden">
          <img src="/DSC08214.jpg" alt="Car window tinting in Sydney by Avero" className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/60" />
          <motion.div
              ref={titleRef}
              animate={titleAnimationControls}
              variants={textVariants}
              initial="hidden"
              transition={{ delay: 0.4, duration: 0.4 }}
              className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
              <p className="text-lg text-neutral-300 font-michroma mb-3">Services</p>
              <h1 className="text-white font-michroma text-4xl sm:text-5xl md:text-6xl font-bold mb-8">Window Tinting in Sydney</h1>
              <a className="block text-black bg-white font-michroma text-[0.7rem] sm:text-[0.9rem] tracking-[0.15rem] border-2 px-6 py-4 transition-opacity hover:opacity-60 hover:cursor-pointer font-bold" href="/contact">ENQUIRE NOW</a>
          </motion.div>
      </section>

      {/* Window Tinting */}
      <section className="py-20">
          <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="text-white">
                      <h2 className="text-4xl font-bold mb-6 font-michroma">Window Tinting</h2>
                      <p className='text-2xl font-medium mb-6 italic'>Window tinting adds more than just a sleek look to your car.</p>
                      <p className="text-lg leading-relaxed mb-6">
                          A quality tint reduces glare, blocks harmful UV rays, and keeps your cabin noticeably cooler on hot Australian days. It improves comfort on every drive, protects you and your passengers from sun exposure, and adds a layer of privacy and security to your vehicle.
                      </p>
                      <p className="text-lg leading-relaxed">
                          High-quality films also help protect your interior from fading and cracking, extending the life of your dash, trim, and upholstery. At Avero, we use premium ceramic tint films that balance clarity with comfort, and we fit every tint to Australian legal standards so your car stays road-legal.
                      </p>
                  </div>
                  <img src="/Window Tinting (1).avif" alt="Professional car window tint film applied in Sydney" className='shadow-2xl w-full object-cover h-[500px]' />
              </div>
          </div>
      </section>

      {/* Headlight & Taillight Tinting */}
      <section className="py-20 bg-black text-white border-t-1 border-neutral-800">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <img src="/Headlight_Taillight Tinting.avif" alt="Headlight and taillight tinting on a car in Sydney" className='shadow-2xl w-full object-cover h-[500px] md:order-1' />
                <div className="md:order-2">
                    <h2 className="text-4xl font-bold mb-6 text-white font-michroma">Headlight and Taillight Tinting</h2>
                    <p className='text-2xl font-medium mb-6 italic'>A simple way to add character to your vehicle while protecting these surfaces from scratches and UV damage.</p>
                    <p className="text-lg leading-relaxed mb-6">
                        With a choice of shades, you can go for a bold, aggressive look or a subtle factory-style finish to match your car. Tinting your lights ties the whole exterior together and gives your vehicle a clean, custom appearance.
                    </p>
                    <p className="text-lg leading-relaxed">
                        Our films are durable, road-safe, and removable, so you can update or restore your car's look whenever you like without affecting the lights underneath.
                    </p>
                </div>
            </div>
        </div>
    </section>

      {/* Why Choose Avero Window Tinting */}
      <section className="py-20 bg-black text-white border-t-1 border-neutral-800">
        <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-4xl font-bold mb-4 text-center font-michroma">Why Tint With Avero</h2>
            <p className="text-center text-gray-300 mb-12 text-lg">Premium films, expert fitting, Australian standards</p>
            <div className="grid sm:grid-cols-2 gap-8">
                <div className="flex gap-4 items-start">
                    <CheckCircle className="w-7 h-7 text-white flex-shrink-0 mt-1" />
                    <div>
                        <h3 className="text-xl font-bold mb-2">Superior Heat Rejection</h3>
                        <p className="text-gray-300 leading-relaxed">Our ceramic films block a high percentage of infrared heat, keeping your cabin cooler and reducing reliance on air conditioning.</p>
                    </div>
                </div>
                <div className="flex gap-4 items-start">
                    <CheckCircle className="w-7 h-7 text-white flex-shrink-0 mt-1" />
                    <div>
                        <h3 className="text-xl font-bold mb-2">99% UV Protection</h3>
                        <p className="text-gray-300 leading-relaxed">Tinting blocks the vast majority of harmful UV rays, protecting your skin and preventing your interior from fading and cracking.</p>
                    </div>
                </div>
                <div className="flex gap-4 items-start">
                    <CheckCircle className="w-7 h-7 text-white flex-shrink-0 mt-1" />
                    <div>
                        <h3 className="text-xl font-bold mb-2">Reduced Glare</h3>
                        <p className="text-gray-300 leading-relaxed">Cut down on harsh sunlight and headlight glare for a safer, more comfortable drive in all conditions.</p>
                    </div>
                </div>
                <div className="flex gap-4 items-start">
                    <CheckCircle className="w-7 h-7 text-white flex-shrink-0 mt-1" />
                    <div>
                        <h3 className="text-xl font-bold mb-2">Legal and Compliant</h3>
                        <p className="text-gray-300 leading-relaxed">We fit every tint to NSW legal limits, so your vehicle looks great and stays fully road-legal.</p>
                    </div>
                </div>
            </div>
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

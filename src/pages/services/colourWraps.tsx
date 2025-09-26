// import { Helmet } from "react-helmet";
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from "react";
import ContactComponent from "../../components/misc/ContactComponent";
import { VisitMapComponent } from "../../components/misc/VisitMapComponent";

export function ColourWrapsPage() {
  const titleRef = useRef(null);
  const containerRef = useRef(null);
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


  return (
    <div className="bg-black border-gray-900 border-t-1">
      {/* <Helmet>
          <title>Avero | Quality PPF & Ceramic Coating in Sydney</title>
          <link rel='canonical' href={ "https://www.averoppf.com.au" } />
          <meta name="description" content={"Protect your car with Sydney’s car care experts in PPF & ceramic coating. Get unbeatable shine, increased vehicle value & long-lasting protection. Trusted by locals across NSW."} />
      </Helmet> */}
      {/* Hero Section */}
      <motion.h1
          ref={titleRef}
          animate={titleAnimationControls}
          variants={textVariants}
          initial="hidden"
          transition={{ delay: 0.4, duration: 0.4 }}
          className="mt-[25vh] text-4xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-wider flex flex-col items-center justify-center">
          <p className="text-lg w-full text-neutral-400 font-michroma text-center">Services</p>
          <p className="block text-white font-michroma mb-[5%] text-4xl sm:text-5xl">Coloured Wraps In Sydney</p>
          <a
              className="block text-black bg-white font-michroma text-[0.7rem] sm:text-[0.9rem] tracking-[0.15rem] border-2 px-6 py-4 transition-opacity hover:opacity-60 hover:cursor-pointer"
              href="/contact"
          >ENQUIRE NOW</a>
      </motion.h1>

      <section
          ref={containerRef}
          className="py-20">
          <div
              className="container mx-auto px-6 ">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="text-white">
                      <h2 className="text-4xl font-bold mb-6 font-michroma">Vinyl Wraps</h2>
                      <p className='text-2xl font-medium mb-6  italic'>A vinyl wrap is the fastest way to give your car a whole new look.</p>
                      <p className="text-lg leading-relaxed">
                          From bold colour changes to clean, subtle tones, vinyl wraps let you customise without the cost or permanence of a respray.
                      </p>
                      <p className="text-lg leading-relaxed mb-6">
                           They also act as an extra layer of protection for your paintwork, keeping it safe from light scratches and daily wear.
                      </p>
                  </div>
                  <img src="/Vinyl Wrap.avif" className='shadow-2xl rounded-4xl w-full object-cover max-w-[35vw] min-w-[400px] min-h-[600px] max-h-[800px] ' />
              </div>
          </div>
      </section>

      <section
        ref={containerRef}
        className="py-20 bg-black text-white border-t-1 border-neutral-800">
        <div
            className="container mx-auto px-6 ">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <img src="/Colour PPF.avif" className='shadow-2xl rounded-4xl w-full object-cover max-w-[35vw] min-w-[400px] min-h-[600px] max-h-[800px] ' />
                <div>
                    <h2 className="text-4xl font-bold mb-6 text-white font-michroma">Coloured PPF</h2>
                    <p className='text-2xl font-medium mb-6 italic'>Coloured PPF combines the same protection you’d expect from clear paint protection film with a unique finish.</p>
                    <p className="text-lg leading-relaxed mb-6">
                        Smooth matte, satin, or high-gloss — coloured PPF gives you both style and durability. 
                    </p>
                    <p className="text-lg leading-relaxed">
                        It guards against chips, scratches, and fading, while transforming the appearance of your car in a way that still looks factory fresh.
                    </p>
                </div>
            </div>
        </div>
    </section>

      <section id="location" className="py-20 bg-black border-gray-900 border-t-1">
          <VisitMapComponent />
      </section>

      <section id="location" className="py-20 bg-black border-gray-900 border-t-1">
          <div className="container mx-auto px-6">
              <ContactComponent />
          </div>
      </section>
    </div>
  )
}
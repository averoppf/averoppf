// import { Helmet } from "react-helmet";
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from "react";
import ContactComponent from "../../components/misc/ContactComponent";
import { VisitMapComponent } from "../../components/misc/VisitMapComponent";

export function WindowTintingPage() {
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
          <p className="block text-white font-michroma mb-[5%] text-4xl sm:text-5xl">Window Tinting In Sydney</p>
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
                      <h2 className="text-4xl font-bold mb-6 font-michroma">Window Tinting</h2>
                      <p className='text-2xl font-medium mb-6  italic'>Window tinting adds more than just a sleek look to your car.</p>
                      <p className="text-lg leading-relaxed">
                           It reduces glare, blocks harmful UV rays, and keeps the cabin cooler on hot days.
                      </p>
                      <p className="text-lg leading-relaxed mb-6">
                           High-quality films also help protect your interior from fading and cracking, extending the life of your trim and upholstery. At Avero, we use premium tint films that balance clarity with comfort.
                      </p>
                  </div>
                  <img src="/Window Tinting (1).avif" className='shadow-2xl rounded-4xl w-full object-cover max-w-[35vw] min-w-[400px] min-h-[600px] max-h-[800px] ' />
              </div>
          </div>
      </section>

      <section
        ref={containerRef}
        className="py-20 bg-black text-white border-t-1 border-neutral-800">
        <div
            className="container mx-auto px-6 ">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <img src="/Headlight_Taillight Tinting.avif" className='shadow-2xl rounded-4xl w-full object-cover max-w-[35vw] min-w-[400px] min-h-[600px] max-h-[800px] ' />
                <div>
                    <h2 className="text-4xl font-bold mb-6 text-white font-michroma">Headlight & Taillight Tinting</h2>
                    <p className='text-2xl font-medium mb-6 italic'>Headlight and taillight tinting is a simple way to add character to your vehicle while protecting these surfaces from scratches and UV damage.</p>
                    <p className="text-lg leading-relaxed mb-6">
                        With a choice of shades, you can go for a bold or subtle finish to match your style.
                    </p>
                    <p className="text-lg leading-relaxed">
                        Our films are durable, road-safe, and removable, so you can update or restore your car’s look whenever you like.
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
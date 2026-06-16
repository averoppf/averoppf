export function BenefitsSection(): React.ReactElement {
  const cardImages = [
    "bg-[url('/home-PPf.avif')]",
    "bg-[url('/ceramicHome.avif')]",
    "bg-[url('/home-wraps.avif')]",
    "bg-[url('/home-tint.avif')]",
  ];
  const cards = [
    {
      title: "PPF Protection",
      link: "/services/ppf",
    },
    {
      title: "Ceramic Coating",
      link: "/services/ceramic",
    },
    {
      title: "Colour Wraps",
      link: "/services/colour-wraps",
    },
    {
      title: "Window Tinting",
      link: "/services/window-tinting",
    },
  ];
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-black text-center font-michroma mb-10">
          How We Enhance your Vehicle
        </h2>
        <p className="mt-4 text-lg text-gray-500 text-center mb-[7%]">
          At Avero, we specialise in premium automotive care services including Paint Protection Film (PPF), Colour Wraps, Ceramic Coating, and Window Tinting. Every service is delivered with precision, using industry-leading materials and techniques. Our goal is to protect, enhance, and personalise your vehicle while providing the highest standard of craftsmanship and attention to detail.
        </p>
        
        <div className="mt-10 flex flex-wrap justify-center gap-8">
          {cards.map(({ title, link }, i) => (
            <a href={link} key={i}>
              <div
                className={`
                  basis-full        /* 1 per row on xs */
                  sm:basis-1/2      /* 2 per row on sm+ */
                  lg:basis-1/4      /* 3 per row on lg+ */
                  backdrop-blur-lg
                  rounded-2xl
                  p-10
                  text-center
                  hover:scale-105
                  transition-transform
                  duration-300
                  border
                  border-neutral-300
                  shadow-md
                  ${cardImages[i]}
                  min-w-[400px]
                  min-h-[40vh]
                  flex
                  flex-col
                  justify-end
                  bg-cover
                  bg-center
                `}
              >
                <h3 className="mt-4 text-xl font-semibold text-black bg-white/70 p-2 rounded-2xl font-michroma">
                  {title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

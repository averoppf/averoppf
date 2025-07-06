import { ShieldCheck, Droplet, Sun } from 'lucide-react';

export function BenefitsSection(): React.ReactElement {
  const cards = [
    {
      Icon: ShieldCheck,
      title: "Ultimate Protection",
      text: "Our premium film shields against scratches, chips, and abrasions, keeping your paint flawless.",
    },
    {
      Icon: Droplet,
      title: "Hydrophobic Barrier",
      text: "Repels water, dirt, and grime for crystal clear visibility and easier washing.",
    },
    {
      Icon: Sun,
      title: "UV Defense & Gloss",
      text: "Blocks harmful UV rays to prevent fading, while enhancing shine for that showroom finish.",
    },
    {
      Icon: Droplet,
      title: "Self Healing",
      text: "Enjoy premium vehicle protection through heat-activated healing—no more scratches.",
    },
  ];
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-black text-center font-michroma mb-10">
          Why Choose Our Paint Protection Film?
        </h2>
        <p className="mt-4 text-lg text-gray-500 text-center mb-[7%]">
          Engineered to safeguard, enhance, and preserve your vehicle's finish.
        </p>
        
        <div className="mt-10 flex flex-wrap justify-center gap-8">
          {cards.map(({ Icon, title, text }, i) => (
            <div
              key={i}
              className="
                basis-full        /* 1 per row on xs */
                sm:basis-1/2      /* 2 per row on sm+ */
                lg:basis-1/3      /* 3 per row on lg+ */
                bg-white/50
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
              "
            >
              <Icon className="w-12 h-12 mx-auto text-gray-400" />
              <h3 className="mt-4 text-xl font-semibold text-black font-michroma">
                {title}
              </h3>
              <p className="mt-2 text-gray-500">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

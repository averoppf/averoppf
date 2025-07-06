import React from 'react';
import { ShieldCheck, Star, Heart, Clock, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

interface Value {
  title: string;
  description: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const values: Value[] = [
  {
    title: 'Unmatched Protection',
    description: 'Our advanced PPF shields your paint from chips, scratches, and UV damage, preserving your car’s flawless finish.',
    Icon: ShieldCheck,
  },
  {
    title: 'Premium Quality',
    description: 'We use only the highest-grade films for long-lasting clarity and durability that exceeds industry standards.',
    Icon: Star,
  },
  {
    title: 'Passionate Craftsmanship',
    description: 'Our team treats every vehicle as their own, infusing passion and precision into every installation.',
    Icon: Heart,
  },
  {
    title: 'Reliable Service',
    description: 'From consultation to installation, we deliver timely and consistent service you can depend on.',
    Icon: Clock,
  },
  {
    title: 'Sustainable Approach',
    description: 'We choose eco-friendly materials and practices to protect both your car and the planet.',
    Icon: Globe,
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const ValuesSection: React.FC = () => (
  <section className="py-20 ">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-12 font-michroma text-white">Our Core Values</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {values.map((value, index) => (
          <motion.div
            key={value.title}
            className={
              "relative flex flex-col items-center text-center \
               rounded-2xl shadow-2xl p-6 min-w-[75%] max-w-[75%] lg:min-w-[60%] sm:max-w-[60%] \
               ring-1 ring-dotted ring-gray-600 ring-inset \
               hover:scale-105 transition-transform duration-300 ease-out overflow-hidden"
            }
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
          >
            <value.Icon className="w-12 h-12 text-neutral-400 mb-4 drop-shadow-lg animate-pulse" />
            <h3 className="text-xl font-semibold mb-2 font-michroma text-white tracking-wide">
              {value.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {value.description}
            </p>
            {/* Decorative inset dots */}
            <div className="pointer-events-none absolute inset-1 rounded-2xl border border-dashed border-gray-700"></div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ValuesSection;

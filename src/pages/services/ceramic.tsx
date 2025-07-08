import { useEffect, useRef, useState } from "react";
import '../../App.css'
import { ChevronDown, ChevronUp, PaintBucket } from "lucide-react";
import ContactComponent from "../../components/misc/ContactComponent";
import { VisitMapComponent } from "../../components/misc/VisitMapComponent";
import { motion, useAnimation, useInView, type Variants } from 'framer-motion';
import CountUp from "react-countup";

export const ContactButton = ({ text }: { text: any }) => (
        <a href="/contact" className="inline-flex items-center px-4 py-2 bg-neutral-500 text-white text-sm font-medium rounded-md hover:opacity-80 transition-opacity duration-200 focus:outline-none hover:cursor-pointer">
            {text}
        </a>
    );

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: 'Long-Lasting Protection',
    description:
      'Forms a semi-permanent bond with your paint or PPF, protecting it for years — not weeks or months.',
  },
  {
    title: 'Hydrophobic Effect',
    description:
      "Water, dirt, and grime slide right off the coated surface, reducing water spots and streaks.",
  },
  {
    title: 'UV and Chemical Resistance',
    description:
      "Shields against sun damage, oxidation, bird droppings, tree sap, and harsh detergents.",
  },
  {
    title: 'Easier Maintenance',
    description:
      'Less washing. No waxing. Just rinse and go.',
  },
  {
    title: 'Improved Appearance',
    description:
      'Enhances colour depth, clarity, and overall gloss — keeping your vehicle looking like new.',
  },
  {
    title: 'Synergy with PPF',
    description:
      'When applied over Paint Protection Film, ceramic coating adds an extra layer of slickness, stain resistance, and visual enhancement — making the protected surface even easier to clean and maintain.',
  },
];

interface Step {
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    title: 'Surface Preparation',
    description:
      'Your vehicle is thoroughly decontaminated and inspected. If needed, we coordinate paint correction with trusted specialists to remove swirl marks and imperfections, ensuring the coating bonds perfectly to a clean, smooth surface.',
  },
  {
    title: 'Coating Application',
    description:
      'We apply the ceramic coating evenly by hand in a controlled environment, ensuring every panel receives uniform coverage. The product is left to cure and harden fully before vehicle delivery.',
  },
  {
    title: 'Final Inspection & Handover',
    description:
      "We perform a full visual inspection to ensure streak-free coverage and optimal results. You'll receive care instructions and warranty information to help you maintain the coating for its full lifespan.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
};

export function CeramicPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [openItems, setOpenItems] = useState<any>({});

    const toggleItem = (index: number) => {
        setOpenItems((prev: any) => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const faqData = [
        {
            category: "Ceramic Coating FAQs",
            questions: [
                {
                    question: "How long does ceramic coating last?",
                    answer: [
                        "Ceramic coatings form a strong, long-term chemical bond with your vehicle's paintwork, offering years of protection — not weeks or months. However, the actual lifespan of the coating depends on environmental exposure and how well the vehicle is maintained. ",
                        "Our coatings offer excellent chemical resistance and are not easily broken down by standard cleaning products, unlike many waxes or sealants on the market. With proper care, such as regular hand washing and avoiding abrasive brushes or automatic car washes, your coating can maintain its performance and appearance for the full duration of its rated warranty. ",
                        "Neglect — including infrequent washing, use of abrasive tools, or harsh cleaning methods — can reduce the coating's effectiveness and shorten its lifespan. We recommend following our care guidelines to ensure you get the most out of your investment."
                    ]
                },
                {
                    question: "Does ceramic coating prevent scratches?",
                    answer: "Ceramic coating helps resist light scratches and swirl marks, but it won't prevent deep impacts. For physical protection, we recommend pairing with Paint Protection Film."
                },
                {
                    question: "Can ceramic coating be applied over PPF?",
                    answer: "Absolutely. In fact, we highly recommend applying ceramic coating over PPF for added slickness, gloss, and stain resistance.",
                    hasContactButton: true,
                    buttonText: "Contact us for a quote"
                },
                {
                    question: "Do I still need to wash my car?",
                    answer: "Yes — but less often. Dirt and grime don't stick easily to coated surfaces, and a gentle hand wash is usually enough to restore shine. However, we still recommend hand washing the car frequently to ensure coat effectiveness."
                }
            ]
        },
    ];

    let questionIndex = 0;

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
    const titleRef = useRef(null);
    const titleInView = useInView(titleRef, { once: true });
    const titleAnimationControls = useAnimation();

    useEffect(() => {
        if (titleInView) {
            titleAnimationControls.start("visible");
        }
    }, [titleInView, titleAnimationControls]);

    return (
        <section id="packages" className="bg-black border-gray-900 border-t-1">
            {/* Hero Section */}
            <section className="relative lg:h-[calc(90vh)] sm:h-full flex items-center justify-center bg-cover bg-center bg-[url('/squidgie.avif')] py-[5%]">
                <div className="absolute inset-0 bg-black/80 h-full"></div>
                <div className="relative z-10 text-center max-w-6xl flex flex-col items-center mx-auto px-6 pt-[15vh]">
                    <motion.h1
                        ref={titleRef}
                        animate={titleAnimationControls}
                        variants={textVariants}
                        initial="hidden"
                        transition={{ delay: 0.4, duration: 0.4 }}
                        className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-wider flex flex-col items-center mt-15">
                        <p className="text-lg w-full text-neutral-400 font-michroma">Services</p>
                        <p className="block text-white font-michroma mb-[5%] text-4xl sm:text-5xl">Ceramic Coating in Sydney</p>
                        <p className="mb-[3%] text-neutral-300 font-light tracking-normal text-base sm:text-lg">At Avero, your vehicle is in expert hands. Our ceramic coating technicians are trained by leaders in automotive surface protection, ensuring consistent, high-standard application on every job. Using high-grade ceramic products and professional techniques, we apply the coating in a clean, controlled environment — allowing the formula to bond correctly with your paintwork or PPF. The result: a durable, ultra-slick finish that resists the elements and enhances visual depth.</p>
                        <a
                            className="block text-black bg-white font-michroma text-[0.7rem] sm:text-[0.9rem] tracking-[0.15rem] border-2 px-6 py-4 transition-opacity hover:opacity-60 hover:cursor-pointer"
                            href="/contact"
                        >ENQUIRE NOW</a>
                    </motion.h1>
                </div>
            </section>

            <section className="w-full px-[10%] text-center py-[5%] flex flex-col items-center justify-center gap-8">
                <PaintBucket className="text-white" style={{ width: '7%', height: '7%', objectFit: 'contain'}} />
                <p className="text-neutral-300 text-base font-light tracking-normal">Ceramic coating is a liquid polymer that chemically bonds with your vehicle's paint, forming a transparent, long-lasting layer of protection. Once cured, it acts as a barrier against water, UV rays, oxidation, chemical contaminants, and light surface abrasions. Unlike wax, which wears off quickly, a professional ceramic coating can last for years with proper care — making your vehicle easier to clean and harder to damage.</p>
                <p className="text-neutral-300 text-base font-light tracking-normal">At Avero, we use only premium-grade coatings compatible with both painted surfaces and Paint Protection Film. Whether your vehicle has raw paintwork or is already wrapped in PPF, we apply the right formulation to deliver a flawless, slick finish. Our coatings enhance gloss levels, colour richness, and surface slickness — creating a hydrophobic, stain-resistant barrier that beads water and repels dirt with ease.</p>
                <p className="text-neutral-300 text-base font-light tracking-normal">Ceramic coating doesn't just keep your car looking cleaner — it locks in the condition of your vehicle's finish, helping prevent oxidation, fading, and dullness over time. By protecting against environmental damage and reducing the frequency of washes or detailing, ceramic coating helps your car retain a well-kept appearance for longer. This makes it easier to maintain resale value — without the need for repeated polishing or repainting down the track.</p>
            </section>

            <div className="flex flex-col text-white gap-1 justify-center gap-10 py-16 px-4 items-center">
                <div
                    className="container mx-auto px-6 ">
                    <h2 className="text-center text-5xl font-bold  mb-4 text-white font-michroma">Ceramic Coating Packages</h2>
                    <p className=" text-center text-gray-300 mb-12 text-base">Choose the perfect package for your vehicle</p>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-black p-8 rounded-2xl border border-gray-800 hover:border-white/50 transition-all duration-300  flex flex-col justify-between">
                            <div>
                                <div className=" mb-2 flex flex-col items-center">
                                    <h3 className="text-2xl font-bold mb-2 text-white text-center font-michroma">Exterior Ceramic Protection</h3>
                                    <div className="text-3xl font-bold text-white mb-2">
                                        <span className='font-light text-xl'>From </span>
                                        $
                                        <CountUp enableScrollSpy scrollSpyOnce className='text-white' end={850} duration={3} />
                                    </div>
                                    
                                </div>
                                <div className="mb-4">
                                    <p className="text-gray-400 mb-2">Perfect for newly purchased vehicles or paintwork in excellent condition, this package includes a high-quality ceramic coating applied to all painted surfaces for long-lasting shine and protection.</p>
                                    {/* <p className="text-gray-400">Our High Impact Coverage is designed for drivers looking to protect the most vulnerable impact zones without overextending their budget. It's a smart, effective introduction to PPF — perfect for those who want peace of mind on the road.</p> */}
                                </div>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                        <span className="text-gray-300">Full exterior wash</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                        <span className="text-gray-300">Paint decontamination (iron fallout removal + clay bar treatment)</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                        <span className="text-gray-300">Gloss-enhancing machine polish</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                        <span className="text-gray-300">Ceramic coating applied to all painted surfaces</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                        <span className="text-gray-300">Wheel face detailing</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                        <span className="text-gray-300">Long-lasting tyre dressing</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-white/10 to-transparent p-8 rounded-2xl border-2 border-white relative group">
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-1 rounded-full text-sm font-semibold">
                                POPULAR
                            </div>
                            <div className=" mb-2 flex flex-col items-center">
                                    <h3 className="text-2xl font-bold mb-2 text-white text-center font-michroma">Endurance Package</h3>
                                    <div className="text-3xl font-bold text-white mb-2">
                                        <span className='font-light text-xl'>From </span>
                                        $
                                        <CountUp enableScrollSpy scrollSpyOnce className='text-white' end={1000} duration={3} />
                                    </div>
                                    
                                </div>
                                <div className="mb-4">
                                    <p className="text-gray-400 mb-2">Ideal for those wanting increased longevity and surface resilience for their new car, this package includes a more advanced ceramic formula for enhanced durability and environmental resistance.</p>
                                    {/* <p className="text-gray-400">Full Front Protection offers extensive PPF coverage to shield the entire front end of your vehicle. Ideal for performance vehicles, daily drivers, and long-distance travellers who want to maintain a flawless finish.</p> */}
                                </div>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-gray-300">Full exterior wash</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-gray-300">Paint decontamination (iron fallout removal + clay bar treatment)</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-gray-300">Gloss-enhancing machine polish</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-gray-300">Advanced ceramic coating using graphene-enhanced or SiC technology</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-gray-300">Wheel face detailing</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-gray-300">Long-lasting tyre dressing</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-black p-8 rounded-2xl border border-gray-800 hover:border-white/50 transition-all duration-300 group">
                            <div className=" mb-2 flex flex-col items-center">
                                    <h3 className="text-2xl font-bold mb-2 text-white text-center font-michroma">Elite Package</h3>
                                    <div className="text-3xl font-bold text-white mb-2">
                                        <span className='font-light text-xl'>From </span>
                                        $
                                        <CountUp enableScrollSpy scrollSpyOnce className='text-white' end={1200} duration={3} />
                                    </div>
                                    
                                </div>
                                <div className="mb-4">
                                    <p className="text-gray-400 mb-2">Our most comprehensive ceramic protection package, covering both the exterior and high-contact interior surfaces for all-around peace of mind.</p>
                                    {/* <p className="text-gray-400">For those who want nothing but the best, this full-body PPF package protects every painted surface on your vehicle. From road debris to parking mishaps, the complete vehicle package ensures your paint remains untouched and showroom-fresh.</p> */}
                                </div>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-gray-300">Full exterior wash</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-gray-300">Paint decontamination (iron fallout removal + clay bar treatment)</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-gray-300">Gloss-enhancing machine polish</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-gray-300">Advanced ceramic coating</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-gray-300">Interior protection applied to leather, vinyl, plastics, and fabrics</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-gray-300">Headlights and exterior plastics ceramic coated</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-gray-300">Wheel face detailing</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-gray-300">Long-lasting tyre dressing</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex items-center justify-center my-10'>
                        <a
                            className=" text-black bg-white font-michroma text-[0.9rem] tracking-[0.15rem] border-2 px-6 py-4 transition-opacity hover:opacity-60 hover:cursor-pointer font-bold"
                            href="/contact"
                        >GET A QUOTE</a>
                    </div>
                </div>
                

                <section className="bg-black text-white py-12 px-4">
                    <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center font-michroma">Why Choose Ceramic Coating?</h2>
                    <p className="mt-10 mb-4 text-center text-gray-300 max-w-2xl mx-auto text-base">
                        Whether you’re preserving a collector car or protecting your daily driver,
                        Ceramic Coating is the ultimate combination of performance, style, and peace of mind to protect your pride and joy.
                    </p>
                    {/* <p className="text-gray-300 mb-8 text-center max-w-2xl mx-auto">
                        Paint Protection Film offers more than just surface-level shine — it’s a smart,
                        long-term investment in your vehicle’s condition and value. Here’s why more
                        drivers are turning to PPF:
                    </p> */}
                    {/* Flex container to wrap and center cards */}
                    <div className="flex flex-wrap justify-center gap-6">
                        {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="w-full sm:w-1/2 lg:w-1/3 bg-neutral-800 rounded-2xl shadow-lg p-6 flex flex-col hover:shadow-2xl transition-shadow duration-300"
                        >
                            <h3 className="text-xl font-semibold mb-2 font-michroma tracking-wider">{feature.title}</h3>
                            <p className="text-gray-200 flex-grow">{feature.description}</p>
                        </div>
                        ))}
                    </div>
                    </div>
                </section>

                    
                <section className="bg-black text-white py-12 px-4">
                    <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-8 font-michroma tracking-wider">
                        The Avero Paint Protection Film (PPF) Process
                    </h2>
                    <p className="mb-4 mt-12 text-center text-gray-300 max-w-2xl mx-auto text-base">
                        Ready to protect your vehicle with Avero’s professional Paint Protection Film
                        service? Book your appointment today and drive away with confidence.
                    </p>
                    <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto text-base">
                        At Avero, we ensure flawless PPF application with careful preparation,
                        precise installation, and a finish you'll be proud of. Each step is
                        crafted with the same care we'd expect for our own vehicle.
                    </p>

                    <motion.div
                        className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Timeline line for large screens */}
                        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gray-500 transform -translate-y-1/2"></div>

                        {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            className="bg-neutral-800 rounded-2xl p-6 flex-1 relative z-10"
                            variants={cardVariants}
                        >
                            <div className="flex items-center mb-4">
                            <div className="flex items-center justify-center h-10 w-10 bg-neutral-600 rounded-full font-bold">
                                {idx + 1}
                            </div>
                            <h3 className="text-xl font-semibold ml-4 font-michroma">{step.title}</h3>
                            </div>
                            <p className="text-gray-300">{step.description}</p>
                        </motion.div>
                        ))}
                    </motion.div>
                    </div>
                </section>

                <div className="w-10/12 space-y-2">
                    <h1 className="text-3xl font-bold mb-8 text-white font-michroma tracking-wider">Avero Ceramic Coating FAQs</h1>

                    {faqData.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="mb-8">

                            <div className="space-y-4">
                                {section.questions.map((item, itemIndex) => {
                                    const currentIndex = questionIndex++;
                                    const isOpen = openItems[currentIndex];

                                    return (
                                        <div
                                            key={itemIndex}
                                            className="border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200"
                                        >
                                            <button
                                                onClick={() => toggleItem(currentIndex)}
                                                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:bg-gray-100"
                                            >
                                                <div className="flex items-center justify-between">
                                                    <h3 className="text-lg font-semibold text-gray-900 pr-4">{item.question}</h3>
                                                    <div className="flex-shrink-0">
                                                        {isOpen ? (
                                                            <ChevronUp className="w-5 h-5 text-gray-600" />
                                                        ) : (
                                                            <ChevronDown className="w-5 h-5 text-gray-600" />
                                                        )}
                                                    </div>
                                                </div>
                                            </button>

                                            <div
                                                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'max-h-0 opacity-0'
                                                    }`}
                                            >
                                                <div className="px-6 py-4 bg-white border-t border-gray-100">
                                                    <p className="text-gray-700 leading-relaxed">
                                                        {item.answer}
                                                        {(currentIndex === 5 || currentIndex === 6) && (
                                                            <span className="block mt-3">
                                                                <ContactButton text={currentIndex === 5 ? "Contact us for accurate quote" : "Contact us for more information"} />
                                                            </span>
                                                        )}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                <section id="location" className=" w-full py-20 bg-black border-gray-900 border-t-1">
                    <VisitMapComponent />
                </section>

                <section>
                    <ContactComponent />
                </section>
            </div>
        </section >
    )
}
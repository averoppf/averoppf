import { useEffect, useRef, useState } from "react";
import '../../App.css'
import { ChevronDown, ChevronUp, PaintBucket } from "lucide-react";
import ContactComponent from "../../components/misc/ContactComponent";
import { ContactButton } from "./ceramic";
import { VisitMapComponent } from "../../components/misc/VisitMapComponent";
import { motion, useAnimation, useInView, type Variants } from 'framer-motion';
import CountUp from "react-countup";
import Carousel from "../../components/misc/FramerCarousel";

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: 'Shields Against Road Debris',
    description:
      'PPF provides a tough, self-healing barrier that protects your paint from stone chips, gravel, and debris kicked up during everyday driving.',
  },
  {
    title: 'UV & Weather Resistance',
    description:
      "Avery Dennison's advanced film technology helps block harmful UV rays while offering protection from acidic elements and environmental fallout — keeping your paintwork from fading or staining.",
  },
  {
    title: 'Reduces Everyday Wear',
    description:
      "From car wash swirls to accidental scratches and door dings, PPF absorbs the impact so your factory paint doesn't have to.",
  },
  {
    title: 'Enhances Visual Appeal',
    description:
      'Choose from a range of finishes to elevate your car’s look — from deep gloss to stealth matte — all while preserving clarity and colour depth.',
  },
  {
    title: 'Supports Long-Term Value',
    description:
      'A well-maintained exterior makes a strong impression. Vehicles protected by full or partial PPF generally retain better resale value due to the pristine condition of their original paintwork.',
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
      'Your vehicle undergoes a detailed inspection and cleansing process. We decontaminate the surface and prepare the paintwork for optimal film bonding.',
  },
  {
    title: 'Paintwork Refinement',
    description:
      'We coordinate professional correction for swirl marks, light scratches, or minor imperfections to ensure the best possible outcome.',
  },
  {
    title: 'Precision PPF Installation',
    description:
      'Using software-cut patterns and industry-grade equipment, we install your chosen film seamlessly—no stretch marks, bubbles, or lifted edges.',
  },
  {
    title: 'Final Inspection & Delivery',
    description:
      'Vehicles stay overnight for film setting, then receive a thorough quality review. You get back a spotless, protected vehicle with care instructions.',
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

export function PpfPage() {
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
            category: "Paint Protection Film FAQs",
            questions: [
                {
                    question: "How does the self-healing property actually work?",
                    answer: "The film we use is engineered with a heat-activated top layer that can \"heal\" minor swirl marks and fine scratches over time. When exposed to warm temperatures — either from the sun or warm water — the surface relevels itself, restoring a smooth, clear finish."
                },
                {
                    question: "Will the film become yellow or cloudy over time?",
                    answer: "We use high-quality, non-yellowing PPF from trusted brands like Avery Dennison, which are designed to remain optically clear for years. When installed and maintained properly, your film will retain its transparency and gloss throughout the life of its warranty."
                },
                {
                    question: "Will my car's paint fade at different rates under the film?",
                    answer: "No — our films are UV-stable and allow light to pass through evenly, meaning the paint underneath will age naturally at the same rate as the exposed areas. The film acts as a filter, not a blocker."
                },
                {
                    question: "Is Paint Protection Film visible once installed?",
                    answer: "PPF is designed to be as discreet as possible. Our precise, software-cut patterns and edge-wrapping techniques create a nearly invisible barrier. In most lighting conditions, you'll hardly notice it's there — but you'll definitely notice what it protects against."
                },
                {
                    question: "How should I wash my car after PPF is installed?",
                    answer: "You can wash your vehicle as usual — though we recommend the touchless or hand-wash method for best results. Avoid using high-pressure hoses near film edges, and wait around 7 days after installation before the first wash to allow the film to cure fully."
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
            <section className="h-[calc(80dvh)] flex items-center justify-center bg-cover bg-center bg-[url('/contact-back.png')]">
                <div className="absolute inset-0 bg-black/80 h-[calc(81dvh)]"></div>
                <div className="relative z-10 text-center max-w-6xl flex flex-col items-center mx-auto px-6">
                    <motion.h1
                        ref={titleRef}
                        animate={titleAnimationControls}
                        variants={textVariants}
                        initial="hidden"
                        transition={{ delay: 0.4, duration: 0.4 }}
                        className="text-4xl md:text-7xl font-bold mb-6 tracking-wider flex flex-col items-center">
                        <p className="text-lg w-full text-neutral-400 font-michroma">Services</p>
                        <p className="block text-white font-michroma mb-[5%]">Paint Protection Film (PPF) in Sydney</p>
                        <p className="mb-[3%] text-neutral-300 text-lg font-light tracking-normal">At Avero, our technicians are professionally trained by some of the most respected names in the industry — including Avery Dennison, 3M, and XPEL. We bring expert-level knowledge and care to every installation, ensuring each film is applied with absolute precision. Our workshop is fitted with top-tier, industrial-grade equipment, allowing us to cut and apply film without the use of blades on the vehicle itself — eliminating the risk of damage to your paintwork.</p>
                        <a
                            className="block text-black bg-white font-michroma text-[0.9rem] tracking-[0.15rem] border-2 px-6 py-4 transition-opacity hover:opacity-60 hover:cursor-pointer"
                            href="/contact"
                        >ENQUIRE NOW</a>
                    </motion.h1>
                </div>
            </section>

            <section className="w-full px-[10%] text-center py-[5%] flex flex-col items-center justify-center gap-8">
                <PaintBucket className="text-white" style={{ width: '7%', height: '7%', objectFit: 'contain'}} />
                <p className="text-neutral-300 text-lg font-light tracking-normal">Paint Protection Film (PPF) is an invisible polyurethane film applied to the surface of your vehicle to shield it from the hazards of everyday driving — including stone chips, scratches, yellowing, swirl marks, and harsh weather conditions. PPF preserves the appearance and integrity of your paintwork without altering your vehicle's design or colour. Whether you're navigating busy streets or open highways, PPF acts as a durable, self-healing barrier between your car and the elements.</p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 w-10/12 mx-auto">
                {/* Large image on the left */}
                <div className="row-span-2">
                    <img
                        src="/hyundai-black.jpg"
                        alt="Professional car detailing work"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {/* Top right image */}
                    <div>
                        <img
                            src="/man-on-lathe.jpg"
                            alt="Car detailing process"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>

                    {/* Top far right image */}
                    <div>
                        <img
                            src="/black-mustang.jpg"
                            alt="Luxury sports car in garage"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>

                    {/* Bottom middle image */}
                    <div>
                        <img
                            src="/man-applying-ppf.webp"
                            alt="Car interior detailing"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>

                    {/* Bottom right image */}
                    <div>
                        <img
                            src="/nissan-suv.jpg"
                            alt="Car paint protection application"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col text-white gap-1 justify-center gap-10 py-16 px-2 items-center">
                <div
                    className="container mx-auto px-6 ">
                    <h2 className="text-center text-5xl font-bold  mb-4 text-white font-michroma">PPF Service Packages</h2>
                    <p className=" text-center text-gray-300 mb-12 text-lg">Choose the perfect package for your vehicle</p>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-black p-8 rounded-2xl border border-gray-800 hover:border-white/50 transition-all duration-300  flex flex-col justify-between">
                            <div>
                                <div className=" mb-2 flex flex-col items-center">
                                    <h3 className="text-2xl font-bold mb-2 text-white text-center font-michroma">High Impact Package</h3>
                                    <div className="text-3xl font-bold text-white mb-2">
                                        <span className='font-light text-xl'>From </span>
                                        $
                                        <CountUp enableScrollSpy scrollSpyOnce className='text-white' end={1450} duration={3} />
                                    </div>
                                    
                                </div>
                                <div className="mb-4">
                                    <p className="text-gray-400 mb-2">Entry-level protection for everyday driving.</p>
                                    <p className="text-gray-400">Our High Impact Coverage is designed for drivers looking to protect the most vulnerable impact zones without overextending their budget. It's a smart, effective introduction to PPF — perfect for those who want peace of mind on the road.</p>
                                </div>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                        <span className="text-gray-300">Full front bumper</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                        <span className="text-gray-300">Partial bonnet</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                        <span className="text-gray-300">Partial front fenders</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                        <span className="text-gray-300">Mirrors</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                        <span className="text-gray-300">Headlights</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                        <span className="text-gray-300">24 Hour Turnaround *</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-white/10 to-transparent p-8 rounded-2xl border-2 border-white relative group">
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-1 rounded-full text-sm font-semibold">
                                POPULAR
                            </div>
                            <div className=" mb-2 flex flex-col items-center">
                                    <h3 className="text-2xl font-bold mb-2 text-white text-center font-michroma">Full Front Package</h3>
                                    <div className="text-3xl font-bold text-white mb-2">
                                        <span className='font-light text-xl'>From </span>
                                        $
                                        <CountUp enableScrollSpy scrollSpyOnce className='text-white' end={2350} duration={3} />
                                    </div>
                                    
                                </div>
                                <div className="mb-4">
                                    <p className="text-gray-400 mb-2">Our most popular package — complete front-end coverage.</p>
                                    <p className="text-gray-400">Full Front Protection offers extensive PPF coverage to shield the entire front end of your vehicle. Ideal for performance vehicles, daily drivers, and long-distance travellers who want to maintain a flawless finish.</p>
                                </div>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-gray-300">Full front bumper</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-gray-300">Full bonnet</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-gray-300">Full front guards</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-gray-300">Mirrors</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-gray-300">Headlights</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-gray-300">24 Hour Turnaround *</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-black p-8 rounded-2xl border border-gray-800 hover:border-white/50 transition-all duration-300 group">
                            <div className=" mb-2 flex flex-col items-center">
                                    <h3 className="text-2xl font-bold mb-2 text-white text-center font-michroma">Complete Vehicle Package</h3>
                                    <div className="text-3xl font-bold text-white mb-2">
                                        <span className='font-light text-xl'>From </span>
                                        $
                                        <CountUp enableScrollSpy scrollSpyOnce className='text-white' end={6500} duration={3} />
                                    </div>
                                    
                                </div>
                                <div className="mb-4">
                                    <p className="text-gray-400 mb-2">All-over protection for your entire vehicle.</p>
                                    <p className="text-gray-400">For those who want nothing but the best, this full-body PPF package protects every painted surface on your vehicle. From road debris to parking mishaps, the complete vehicle package ensures your paint remains untouched and showroom-fresh.</p>
                                </div>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-gray-300">All exterior painted surfaces</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-gray-300">5-day turnaround *</span>
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
                    <div className='text-white text-xs w-full text-center'>
                        * The specified turnaround times are tentative and offered on most services. However, completion times may vary depending on vehicle complexity, the extent of work required, and workshop scheduling.
                    </div>
                </div>

                <div className="w-11/12 mt-[5%]">
                    <p className="font-bold text-2xl mb-4 font-michroma italic">We offer a range of high-performance PPF finishes to suit your vehicle's aesthetic.</p>
                    <p className=" text-xl mb-4 w-full items-center justify-center text-center font-michroma text-neutral-400">Choose From:</p>
                    <div className="w-full flex items-center justify-center mb-[3%]">
                        <Carousel
                            items={[
                                { title: "Clear Gloss", description: "For a glass-like shine that enhances depth and colour", id: 1, icon: <p className="text-5xl font-bold">1</p> },
                                { title: "Matte", description: "For a bold, sleek finish that transforms your paintwork", id: 2, icon: <p className="text-5xl font-bold">2</p> },
                            ]}
                        />
                    </div>
                    <div className="w-full flex flex-col items-center justify-center">
                        <p className="mb-6 max-w-[80%] text-center">Every PPF installation at Avero is backed by a limited manufacturer's warranty of 10 years, depending on the film selected. These warranties, offered by Avery Dennison, cover key concerns such as cracking, bubbling, and yellowing, giving you long-term confidence in the protection you're investing in. </p>
                        <p className="mb-6 max-w-[80%] text-center">We exclusively use premium-grade films which are rigorously tested for durability and optical clarity. Whether you choose a satin, gloss, matte, or high gloss black finish, your vehicle is protected with a product designed to last.</p>
                        <p className="mb-6 max-w-[80%] text-center">We exclusively use premium-grade films which are rigorously tested for durability and optical clarity. Whether you choose a satin, gloss, matte, or high gloss black finish, your vehicle is protected with a product designed to last.</p>
                        <p className="mb-2 max-w-[80%] text-center">PPF is one of the most effective ways to maintain the longevity of your vehicle's factory paintwork. By preventing paint damage before it starts, you avoid costly resprays or touch-ups down the line. For many car owners, the investment in PPF is reflected in the long-term preservation of their vehicle's resale value — keeping your paint in top condition and your vehicle looking newer for longer. It's not just protection — it's peace of mind every time you hit the road.</p>
                    </div>
                </div>
                            
                <section className="bg-black text-white py-12 px-4">
                    <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold mb-4 text-center font-michroma">Why Choose Paint Protection Film?</h2>
                    <p className="mt-10 mb-4 text-center text-gray-300 max-w-2xl mx-auto">
                        Whether you’re preserving a collector car or protecting your daily driver,
                        Paint Protection Film is the ultimate combination of performance, style, and peace of mind.
                    </p>
                    <p className="text-gray-300 mb-8 text-center max-w-2xl mx-auto">
                        Paint Protection Film offers more than just surface-level shine — it’s a smart,
                        long-term investment in your vehicle’s condition and value. Here’s why more
                        drivers are turning to PPF:
                    </p>
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
                    <p className="mb-4 mt-12 text-center text-gray-300 max-w-2xl mx-auto">
                        Ready to protect your vehicle with Avero’s professional Paint Protection Film
                        service? Book your appointment today and drive away with confidence.
                    </p>
                    <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
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
                    <h1 className="text-3xl font-bold mb-8 text-white font-michroma tracking-wider">Avero Paint Protection Film FAQs</h1>

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
                                                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
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
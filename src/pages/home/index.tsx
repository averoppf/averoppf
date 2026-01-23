import React, { useRef, useEffect, useState } from 'react';
import { ChevronRight, ChevronUp, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import { motion, useAnimation, useInView } from 'framer-motion';
import CountUp from 'react-countup';
import { BenefitsSection } from '../../components/misc/BenefitsComponent';
import { VideoHero } from '../../components/misc/VideoOverlay'; // Ensure this path is correct
import ContactComponent from '../../components/misc/ContactComponent';
import { ContactButton } from '../services/ceramic';
import { VisitMapComponent } from '../../components/misc/VisitMapComponent';

const CARS = [
    { label: "Land Rover", img: "/logos/landrover.png" },
    { label: "BMW", img: "/logos/bmw.png" },
    { label: "Audi", img: "/logos/au.png" },
    { label: "Lexus", img: "/logos/lexus.png" },
    { label: "Volvo", img: "/logos/volvo.png" },
    { label: "Mercedes-Benz", img: "/logos/mercedes.png" },
    { label: "Porsche", img: "/logos/porsche.png" },
    { label: "Ferrari", img: "/logos/ferrari.png" },
    { label: "Lamborghini", img: "/logos/lambo.png" },
    { label: "Jaguar", img: "/logos/jaguar.png" },
    { label: "Tesla", img: "/logos/tesla.png" },
    { label: "Ford", img: "/logos/ford.png" },
    { label: "Holden", img: "/logos/holden.png" },
    { label: "Toyota", img: "/logos/toyota.png" },
    { label: "Kia", img: "/logos/kia.png" },
    { label: "Hyundai", img: "/logos/hyundai.png" },
    { label: "Volkswagen", img: "/logos/volks.png" }
];

const faqData = [
    {
        category: "General FAQs",
        questions: [
            {
                question: "Is there warranty?",
                answer: "Yes. We offer ceramic coatings with warranty attached. Each warranty covers durability, performance, and hydrophobic function. Warranty information is provided upon vehicle pickup.",
                hasContactButton: true,
                buttonText: "Contact us for warranty information"
            },
            {
                question: "Why do I need to bring the car to your workshop?",
                answer: "We apply all coatings in a controlled, dust-free environment to ensure proper curing and optimal results. Mobile applications often compromise longevity."
            },
            {
                question: "Why are your prices listed as 'From'?",
                answer: "Each car is different in size, shape, paint and complexity. The listed starting price reflects the base rate for a standard installation. After inspecting your vehicle and confirming any specific needs, we'll provide a personalized quote with no surprises.",
                hasContactButton: true,
                buttonText: "Contact us for accurate quote"
            }
        ]
    }
];

const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const [openItems, setOpenItems] = useState<Record<number, boolean>>({});
    
    const toggleItem = (index: number) => {
        setOpenItems((prev) => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const textVariants = {
        hidden: { opacity: 0, x: -150 },
        visible: { opacity: 1, x: 0 },
    };

    const titleRef = useRef(null);
    const titleInView = useInView(titleRef, { once: true });
    const titleAnimationControls = useAnimation();

    useEffect(() => {
        if (titleInView) {
            titleAnimationControls.start("visible");
        }
    }, [titleInView, titleAnimationControls]);

    const servicesRef = useRef(null);
    const servicesInView = useInView(servicesRef, { once: true });
    const servicesAnimationControls = useAnimation();

    useEffect(() => {
        if (servicesInView) {
            servicesAnimationControls.start("visible");
        }
    }, [servicesInView, servicesAnimationControls]);

    const benefitsRef = useRef(null);
    const benefitsInView = useInView(benefitsRef, { once: true });
    const benefitsAnimationControls = useAnimation();

    useEffect(() => {
        if (benefitsInView) {
            benefitsAnimationControls.start("visible");
        }
    }, [benefitsInView, benefitsAnimationControls]);

    const equippedRef = useRef(null);
    const equippedInView = useInView(equippedRef, { once: true });
    const equippedAnimationControls = useAnimation();

    useEffect(() => {
        if (equippedInView) {
            equippedAnimationControls.start("visible");
        }
    }, [equippedInView, equippedAnimationControls]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Helper to track FAQ indices correctly
    let questionCounter = 0;

    return (
        <div>
            {/* Main Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src="/banner.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                {/* Updated Overlay: Lighter top, clear bottom */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent h-full"></div>

                <div className="relative z-10 text-center max-w-6xl px-6 pt-[10vh]">
                    <motion.h1
                        ref={titleRef}
                        animate={titleAnimationControls}
                        variants={textVariants}
                        initial="hidden"
                        transition={{ delay: 0.4, duration: 0.4 }}
                        className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-wider flex flex-col items-center"
                    >
                        <span className="block mb-2 text-white font-michroma">Equipped to Protect.</span>
                        <span className="block text-white font-michroma mb-12">Driven by Detail.</span>
                        <a
                            className="text-black bg-white font-michroma text-sm tracking-widest border-2 px-8 py-4 hover:opacity-80 transition-opacity"
                            href="/contact"
                        >
                            GET A QUOTE
                        </a>
                    </motion.h1>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 bg-neutral-100" id="benefits">
                <motion.div
                    ref={benefitsRef}
                    animate={benefitsAnimationControls}
                    initial="hidden"
                    variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
                    className="container mx-auto px-6"
                >
                    <BenefitsSection />
                </motion.div>
            </section>

            {/* PPF Section */}
            <section className="py-20 bg-neutral-100">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6 font-michroma">Paint Protection Film (PPF)</h2>
                            <p className="text-lg text-gray-600 mb-6">Premium self-healing TPU film designed to preserve your vehicle's original finish.</p>
                            <button onClick={() => navigate("/services/ppf")} className="border-2 border-black px-6 py-2 font-bold hover:bg-black hover:text-white transition-all">
                                LEARN MORE
                            </button>
                        </div>
                        <img src="/frontShot.avif" className="rounded-3xl shadow-xl" alt="PPF" />
                    </div>
                </div>
            </section>

            {/* Ceramic Section */}
            <section className="py-20 bg-black text-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <img src="/frontShot1.avif" className="rounded-3xl shadow-xl" alt="Ceramic" />
                        <div>
                            <h2 className="text-4xl font-bold mb-6 font-michroma">Ceramic Coating</h2>
                            <p className="text-lg text-gray-400 mb-6">Durable high-gloss layer that resists dirt, UV rays, and water spots.</p>
                            <button onClick={() => navigate("/services/ceramic")} className="border-2 border-white px-6 py-2 font-bold hover:bg-white hover:text-black transition-all">
                                LEARN MORE
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mid-Page Video Hero Component */}
            <section>
                <VideoHero source="/carVid.mp4" isCeramic={false} />
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-black">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-bold text-white mb-12 font-michroma">Avero FAQs</h2>
                    {faqData[0].questions.map((item) => {
                        const idx = questionCounter++;
                        const isOpen = openItems[idx];
                        return (
                            <div key={idx} className="mb-4 border border-zinc-800 rounded-lg overflow-hidden">
                                <button 
                                    onClick={() => toggleItem(idx)}
                                    className="w-full flex justify-between items-center p-6 bg-zinc-900 text-white text-left"
                                >
                                    <span className="font-bold">{item.question}</span>
                                    {isOpen ? <ChevronUp /> : <ChevronDown />}
                                </button>
                                {isOpen && (
                                    <div className="p-6 bg-zinc-900 text-gray-400 border-t border-zinc-800">
                                        {item.answer}
                                        {item.hasContactButton && (
                                            <div className="mt-4">
                                                <ContactButton text={item.buttonText} />
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Map and Contact */}
            <VisitMapComponent />
            <section className="py-20 bg-black text-white">
                <div className="container mx-auto px-6">
                    <ContactComponent />
                </div>
            </section>
        </div>
    );
};

export default HomePage;

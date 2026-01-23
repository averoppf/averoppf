import React, { useRef, useEffect, useState } from 'react';
import { ChevronRight, ChevronUp, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../../App.css'
import { motion, useAnimation, useInView } from 'framer-motion';
import CountUp from 'react-countup';
import { BenefitsSection } from '../../components/misc/BenefitsComponent';
import { VideoHero } from '../../components/misc/VideoOverlay';
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
    const navigate = useNavigate()
    let questionIndex = 0;
    const [openItems, setOpenItems] = useState<any>({});
    const toggleItem = (index: any) => {
        setOpenItems((prev: any) => ({
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

    const containerRef = useRef(null);
    const container2Ref = useRef(null);

    const servicesVariants = {
        hidden: { opacity: 0, y: 150 },
        visible: { opacity: 1, y: 0 },
    };

    const servicesRef = useRef(null);
    const servicesInView = useInView(servicesRef, { once: true });
    const servicesAnimationControls = useAnimation();

    useEffect(() => {
        if (servicesInView) {
            servicesAnimationControls.start("visible");
        }
    }, [servicesInView, servicesAnimationControls]);

    const benefitsVariants = {
        hidden: { opacity: 0, y: 150 },
        visible: { opacity: 1, y: 0 },
    };
    const benefitsRef = useRef(null);
    const benefitsInView = useInView(benefitsRef, { once: true });
    const benefitsAnimationControls = useAnimation();

    useEffect(() => {
        if (benefitsInView) {
            benefitsAnimationControls.start("visible");
        }
    }, [benefitsInView, benefitsAnimationControls]);

    const equippedVariants = {
        hidden: { opacity: 0, y: -150 },
        visible: { opacity: 1, y: 0 },
    };

    const equippedRef = useRef(null);
    const equippedInView = useInView(equippedRef, { once: true });
    const equippedAnimationControls = useAnimation();

    useEffect(() => {
        if (equippedInView) {
            equippedAnimationControls.start("visible");
        }
    }, [equippedInView, equippedAnimationControls]);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            {/* Main Hero Section */}
            <section className="relative h-[calc(100vh)] flex items-center justify-center bg-cover bg-center py-[5%]">
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src="/banner.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                
                {/* NEW CHANGE: Replaced solid bg-black/65 with a lighter gradient.
                  This ensures the car (Midnight Purple/Matte Black) is bright while
                  keeping the top text readable.
                */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent h-full"></div>

                <div className="relative z-10 text-center max-w-6xl flex flex-col items-center mx-auto px-6 pt-[15vh]">
                    <motion.h1
                        ref={titleRef}
                        animate={titleAnimationControls}
                        variants={textVariants}
                        initial="hidden"
                        transition={{ delay: 0.4, duration: 0.4 }}
                        className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-wider flex flex-col items-center mt-15">
                        <span className="block mb-2 text-white font-michroma drop-shadow-lg">Equipped to Protect.</span>
                        <span className="block text-white font-michroma mb-24 drop-shadow-lg">Driven by Detail.</span>
                        <a
                            className="block text-black bg-white font-michroma text-[0.9rem] tracking-[0.15rem] border-2 px-6 py-4 transition-opacity hover:opacity-60 hover:cursor-pointer"
                            href="/contact"
                        >GET A QUOTE</a>
                    </motion.h1>
                </div>

                <div onClick={() => navigate("/#about")} className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <ChevronRight className="w-10 h-10 rotate-90 text-white" />
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-neutral-100" id="benefits">
                <motion.div
                    ref={benefitsRef}
                    animate={benefitsAnimationControls}
                    initial="hidden"
                    variants={benefitsVariants}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="container mx-auto px-[5%] "
                >
                    <BenefitsSection />
                </motion.div>
            </section>

            {/* PPF Section */}
            <section ref={containerRef} className="py-20 bg-neutral-100">
                <div className="container mx-auto px-6 ">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6 text-black font-michroma">Paint Protection Film (PPF)</h2>
                            <p className='text-2xl font-medium mb-6 text-gray-500 italic'>Keep your car looking brand new — no matter where the road takes you.</p>
                            <p className="text-lg text-gray-500 leading-relaxed mb-6">
                                At Avero, our Paint Protection Film service provides long-lasting defence against stone chips, scratches, and the wear and tear of everyday driving.
                            </p>
                            <div className='text-black border-2 text-xl p-3 mt-4 w-fit cursor-pointer hover:opacity-80 transition-opacity' onClick={() => navigate("/services/ppf")}>LEARN MORE</div>
                        </div>
                        <img src="/frontShot.avif" className='shadow-2xl rounded-4xl w-full object-cover min-w-full h-full min-h-full ' alt="PPF Front Shot" />
                    </div>
                </div>
            </section>

            {/* Ceramic Coating Section */}
            <section ref={container2Ref} className="py-30 bg-black border-black text-white border-t-1">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <img src="/frontShot1.avif" className='shadow-2xl rounded-4xl w-full min-w-full h-full min-h-full object-cover' alt="Ceramic Coating Shot" />
                        <div>
                            <h2 className="text-4xl font-bold mb-6 text-white font-michroma">Ceramic Coating</h2>
                            <p className='text-2xl font-medium mb-6 text-gray-300 italic'>Long-term shine. Effortless maintenance. Serious protection.</p>
                            <div className='text-white border-2 text-xl p-3 mt-4 w-fit cursor-pointer hover:opacity-80 transition-opacity' onClick={() => navigate("/services/ceramic")}>LEARN MORE</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Colour Wraps Section */}
            <section ref={containerRef} className="py-20 bg-neutral-100">
                <div className="container mx-auto px-6 ">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6 text-black font-michroma">Colour Wraps</h2>
                            <p className='text-2xl font-medium mb-6 text-gray-500 italic'>At Avero, we’re all about helping you express your personality through your vehicle.</p>
                            <div className='text-black border-2 text-xl p-3 mt-4 w-fit cursor-pointer hover:opacity-80 transition-opacity' onClick={() => navigate("/services/colour-wraps")}>LEARN MORE</div>
                        </div>
                        <img src="/DSC04018.avif" className='shadow-2xl rounded-4xl w-full object-cover max-w-[35vw] min-w-[400px] min-h-[600px] max-h-[800px] ' alt="Colour Wrap Sample" />
                    </div>
                </div>
            </section>

            {/* Window Tinting Section */}
            <section ref={containerRef} className="py-20 bg-black border-black text-white border-t-1">
                <div className="container mx-auto px-6 ">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <img src="/DSC04104.avif" className='shadow-2xl rounded-4xl w-full object-cover max-w-[35vw] min-w-[400px] min-h-[600px] max-h-[800px] ' alt="Window Tinting Sample" />
                        <div>
                            <h2 className="text-4xl font-bold mb-6 text-white font-michroma">Window Tinting</h2>
                            <div className='text-white border-2 text-xl p-3 mt-4 w-fit cursor-pointer hover:opacity-80 transition-opacity' onClick={() => navigate("/services/window-tinting")}>LEARN MORE</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PPF Packages Section */}
            <section id="packages" className="py-20 bg-black border-gray-900 border-t-1">
                <motion.div
                    ref={servicesRef}
                    animate={servicesAnimationControls}
                    variants={servicesVariants}
                    initial="hidden"
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="container mx-auto px-6 ">
                    <h2 className="text-4xl font-bold text-center mb-4 text-white font-michroma tracking-[0.2rem]">Paint Protection Film (PPF) Packages</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* High Impact */}
                        <div className="bg-black p-8 rounded-2xl border border-gray-800 flex flex-col justify-between">
                            <h3 className="text-xl font-bold mb-2 text-white font-michroma">High Impact Package</h3>
                            <div className="text-3xl font-bold text-white mb-2">From $<CountUp enableScrollSpy scrollSpyOnce end={1450} duration={3} /></div>
                        </div>
                        {/* Full Front */}
                        <div className="bg-gradient-to-br from-white/10 to-transparent p-8 rounded-2xl border-2 border-white relative group">
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-1 rounded-full text-sm font-semibold">POPULAR</div>
                            <h3 className="text-xl font-bold mb-2 text-white font-michroma">Full Front Package</h3>
                            <div className="text-3xl font-bold text-white mb-2">From $<CountUp enableScrollSpy scrollSpyOnce end={2350} duration={3} /></div>
                        </div>
                        {/* Complete Vehicle */}
                        <div className="bg-black p-8 rounded-2xl border border-gray-800 flex flex-col justify-between">
                            <h3 className="text-xl font-bold mb-2 text-white font-michroma">Complete Vehicle Package</h3>
                            <div className="text-3xl font-bold text-white mb-2">From $<CountUp enableScrollSpy scrollSpyOnce end={6500} duration={3} /></div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Mid-Page Video Hero Component */}
            <section>
                <VideoHero source={"/carVid.mp4"} isCeramic={false} />
            </section>

            {/* Car Makes Grid */}
            <section id="makes" className="py-20 bg-black border-gray-900 border-t-1">
                <motion.div
                    ref={equippedRef}
                    animate={equippedAnimationControls}
                    variants={equippedVariants}
                    initial="hidden"
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center text-white mb-10 font-michroma tracking-wider">Prestige Protection for Every Make and Model</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 text-white'>
                        {[...CARS.sort((a, b) => a.label.localeCompare(b.label))].map((car) => (
                            <div key={car.label} className='border-1 border-gray-900 flex flex-col items-center gap-5 p-4 rounded-xl'>
                                <img className='h-14' src={car.img} alt={car.label} />
                                <p>{car.label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* FAQs Section */}
            <section className='flex flex-col items-center justify-center pb-20 bg-black'>
                <div className="w-10/12 space-y-2">
                    <h1 className="text-3xl font-bold mb-8 text-white font-michroma tracking-wider">Avero FAQs</h1>
                    {faqData.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="mb-8">
                            <div className="space-y-4">
                                {section.questions.map((item, itemIndex) => {
                                    const currentIndex = questionIndex++;
                                    const isOpen = openItems[currentIndex];
                                    return (
                                        <div key={itemIndex} className="border border-gray-800 rounded-lg shadow-sm overflow-hidden bg-zinc-900">
                                            <button
                                                onClick={() => toggleItem(currentIndex)}
                                                className="w-full px-6 py-4 text-left hover:bg-zinc-800 transition-colors duration-200"
                                            >
                                                <div className="flex items-center justify-between">
                                                    <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                                                    {isOpen ? <ChevronUp className="text-white" /> : <ChevronDown className="text-white" />}
                                                </div>
                                            </button>
                                            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                                                <div className="px-6 py-4 text-gray-300">{item.answer}</div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Map and Contact Sections */}
            <section id="location" className="py-20 bg-black border-gray-900 border-t-1">
                <VisitMapComponent />
            </section>
            <section id="contact" className="py-20 bg-black border-gray-900 border-t-1">
                <div className="container mx-auto px-6">
                    <ContactComponent />
                </div>
            </section>
        </div>
    );
};

export default HomePage;

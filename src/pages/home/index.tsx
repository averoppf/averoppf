import React, { useRef, useEffect, useState } from 'react';
import { ChevronRight, ChevronUp, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../../App.css'
import { motion, useAnimation, useInView } from 'framer-motion';
import { BenefitsSection } from '../../components/misc/BenefitsComponent';
import { VideoHero } from '../../components/misc/VideoOverlay';
import ContactComponent from '../../components/misc/ContactComponent';
import { ContactButton } from '../services/ceramic';
import { VisitMapComponent } from '../../components/misc/VisitMapComponent';

const faqData = [
    {
        category: "General FAQs",
        questions: [
            {
                question: "Is there warranty?",
                answer: "All PPF film that we use comes with 10 Years warranty that covers durability, performance, and hydrophobic function. Warranty information is provided upon vehicle pickup.",
                hasContactButton: true,
                buttonText: "Contact us for warranty information"
            },
            {
                question: "How long is installation?",
                answer: "Installation time depends on the job. Generally speaking, a full car PPF can take anywhere from 4-7 days depending on the difficulty and size of the vehicle. Ceramic coating jobs generally take 1 day max. All work is performed in our controlled, dust-free environment to ensure proper curing and optimal results."
            },
            {
                question: "How much are your services?",
                answer: "Each car is different in size, shape, paint and complexity. Upon vehicle inspection and confirmation on specific needs, we can provide a personalized quote with no surprises.",
                hasContactButton: true,
                buttonText: "Contact us for a quote"
            }
        ]
    }
];

const articlePreviews = [
    {
        slug: 'what-is-ppf',
        category: 'Paint Protection Film',
        title: 'What Is Paint Protection Film? The Complete Guide for Australian Car Owners',
        excerpt: 'Everything you need to know about PPF - what it is, how it works, how long it lasts, and whether it is right for your vehicle.',
        readTime: '8 min read',
    },
    {
        slug: 'ppf-vs-ceramic-coating',
        category: 'Paint Protection',
        title: 'PPF vs Ceramic Coating: Which Does Your Car Actually Need?',
        excerpt: 'Two of the most effective forms of vehicle protection - but they do very different jobs. Here is how to decide what is right for your car.',
        readTime: '7 min read',
    },
    {
        slug: 'is-ppf-worth-it',
        category: 'Worth It?',
        title: 'Is PPF Worth It? What Sydney Car Owners Need to Know',
        excerpt: 'The honest answer to the most common question we hear - including who it makes the most sense for, and when you might be better off without it.',
        readTime: '7 min read',
    },
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
        if (titleInView) titleAnimationControls.start("visible");
    }, [titleInView, titleAnimationControls]);

    const servicesVariants = {
        hidden: { opacity: 0, y: 150 },
        visible: { opacity: 1, y: 0 },
    };

    const servicesRef = useRef(null);
    const servicesInView = useInView(servicesRef, { once: true });
    const servicesAnimationControls = useAnimation();

    useEffect(() => {
        if (servicesInView) servicesAnimationControls.start("visible");
    }, [servicesInView, servicesAnimationControls]);

    const benefitsVariants = {
        hidden: { opacity: 0, y: 150 },
        visible: { opacity: 1, y: 0 },
    };
    const benefitsRef = useRef(null);
    const benefitsInView = useInView(benefitsRef, { once: true });
    const benefitsAnimationControls = useAnimation();

    useEffect(() => {
        if (benefitsInView) benefitsAnimationControls.start("visible");
    }, [benefitsInView, benefitsAnimationControls]);

    useEffect(() => {
        document.title = "Avero PPF | Paint Protection Film South Sydney";
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <section className="relative h-[calc(100vh)] flex items-center justify-center bg-cover bg-center py-[5%]">
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src="/banner.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute inset-0 bg-black/20 h-full"></div>
                <div className="relative z-10 text-center max-w-6xl flex flex-col items-center mx-auto px-6 pt-[15vh]">
                    <motion.h1
                        ref={titleRef}
                        animate={titleAnimationControls}
                        variants={textVariants}
                        initial="hidden"
                        transition={{ delay: 0.4, duration: 0.4 }}
                        className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-wider flex flex-col items-center mt-15">
                        <span className="block mb-2 text-white font-michroma">Powerful Protection.</span>
                        <span className="block text-white font-michroma mb-24">Expert Execution.</span>
                        
                            className="block text-black bg-white font-michroma text-[0.9rem] tracking-[0.15rem] border-2 px-6 py-4 transition-opacity hover:opacity-60 hover:cursor-pointer"
                            href="/contact"
                        >GET A QUOTE</a>
                    </motion.h1>
                </div>
                <div onClick={() => navigate("/#about")} className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <ChevronRight className="w-10 h-10 rotate-90 text-white" />
                </div>
            </section>

            <section className="py-20 bg-neutral-100" id="benefits">
                <motion.div
                    ref={benefitsRef}
                    animate={benefitsAnimationControls}
                    initial="hidden"
                    variants={benefitsVariants}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="container mx-auto px-[5%]"
                >
                    <BenefitsSection />
                </motion.div>
            </section>

            <section className="py-20 bg-neutral-100">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6 text-black font-michroma">Paint Protection Film (PPF)</h2>
                            <p className='text-2xl font-medium mb-6 text-gray-500 italic'>Keep your car looking brand new - no matter where the road takes you.</p>
                            <p className="text-lg text-gray-500 leading-relaxed mb-6">
                                At Avero, our Paint Protection Film service provides long-lasting defence against stone chips, scratches, and the wear and tear of everyday driving. We use premium, self-healing TPU film designed to preserve your vehicle's original finish without altering its appearance.
                            </p>
                            <p className="text-lg text-gray-500 leading-relaxed">
                                Our expert technicians and innovative application methods ensure the film is applied with exacting precision - conforming seamlessly to every curve and panel with no bubbles, stretch marks, or lifted edges. The result is a clean-finish that accentuates the car's colours and is built to last in Australian climate.
                            </p>
                            <div className='text-black border-2 text-xl p-3 mt-4 w-fit cursor-pointer hover:opacity-80 transition-opacity' onClick={() => navigate("/services/ppf")}>LEARN MORE</div>
                        </div>
                        <img src="/frontShot.jpg" className='shadow-2xl rounded-4xl w-full object-cover min-w-full h-full min-h-full' />
                    </div>
                </div>
            </section>

            <section className="py-30 bg-black border-black text-white border-t-1">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <img src="/frontShot1.jpg" className='shadow-2xl rounded-4xl w-full min-w-full h-full min-h-full object-cover' />
                        <div>
                            <h2 className="text-4xl font-bold mb-6 text-white font-michroma">Ceramic Coating</h2>
                            <p className='text-2xl font-medium mb-6 text-gray-300 italic'>Long-term shine. Effortless maintenance. Serious protection.</p>
                            <p className="text-2xl font-medium mb-6 text-gray-300 italic leading-normal">
                                Our ceramic coating service locks in your vehicle's finish with a durable, high-gloss layer that resists dirt, UV rays, water spots, and environmental contaminants. Applied over paintwork or Paint Protection Film, it enhances depth, clarity, and surface slickness - making your car easier to clean and harder to damage.
                            </p>
                            <p className="text-lg leading-relaxed mt-[8%]">
                                At Avero, we use professional-grade ceramic coatings formulated to bond at the molecular level, providing long term protection. The coating creates a hydrophobic surface that repels water and grime, reducing the need for constant washing and detailing. Perfect for enthusiasts and everyday drivers alike, ceramic coating is the ultimate low-maintenance solution for keeping your vehicle looking pristine, day after day.
                            </p>
                            <div className='text-white border-2 text-xl p-3 mt-4 w-fit cursor-pointer hover:opacity-80 transition-opacity' onClick={() => navigate("/services/ceramic")}>LEARN MORE</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-neutral-100">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6 text-black font-michroma">Colour Wraps</h2>
                            <p className='text-2xl font-medium mb-6 text-gray-500 italic'>At Avero, we're all about helping you express your personality through your vehicle.</p>
                            <p className="text-lg text-gray-500 leading-relaxed">
                                Whether you want something bold, subtle, or completely unique, a vinyl wrap or colour PPF is the perfect way to make your car stand out without committing to a permanent respray.
                            </p>
                            <p className="text-lg text-gray-500 leading-relaxed mb-6">
                                Our colour wrap options integrate style, protection, and personalisation all in one.
                            </p>
                            <div className='text-black border-2 text-xl p-3 mt-4 w-fit cursor-pointer hover:opacity-80 transition-opacity' onClick={() => navigate("/services/colour-wraps")}>LEARN MORE</div>
                        </div>
                        <img src="/DSC04018.avif" className='shadow-2xl rounded-4xl w-full object-cover max-w-[35vw] min-w-[400px] min-h-[600px] max-h-[800px]' />
                    </div>
                </div>
            </section>

            <section className="py-20 bg-black border-black text-white border-t-1">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <img src="/DSC04104.avif" className='shadow-2xl rounded-4xl w-full object-cover max-w-[35vw] min-w-[400px] min-h-[600px] max-h-[800px]' />
                        <div>
                            <h2 className="text-4xl font-bold mb-6 text-white font-michroma">Window Tinting</h2>
                            <p className='text-2xl font-medium mb-6 italic'>At Avero, we use only high-performance tint films that meet Australian standards, ensuring durability, clarity, and long-lasting results.</p>
                            <p className="text-lg leading-relaxed mb-6">
                                Our team applies each tint with precision to avoid bubbles or peeling, giving your windows a smooth, factory-quality look.
                            </p>
                            <p className="text-lg leading-relaxed">
                                Whether you want a subtle tint or maximum privacy, we've got options to suit your style and needs.
                            </p>
                            <div className='text-white border-2 text-xl p-3 mt-4 w-fit cursor-pointer hover:opacity-80 transition-opacity' onClick={() => navigate("/services/window-tinting")}>LEARN MORE</div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="packages" className="py-20 bg-black border-gray-900 border-t-1">
                <motion.div
                    ref={servicesRef}
                    animate={servicesAnimationControls}
                    variants={servicesVariants}
                    initial="hidden"
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-4 text-white font-michroma tracking-[0.2rem]">Paint Protection Film (PPF) Packages</h2>
                    <p className="text-center text-gray-300 mb-12 text-lg">Choose the perfect package for your vehicle</p>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-black p-8 rounded-2xl border border-gray-800 hover:border-white/50 transition-all duration-300 flex flex-col justify-between">
                            <div>
                                <div className="text-center mb-6">
                                    <h3 className="text-xl font-bold mb-2 text-white font-michroma">High Impact Package</h3>
                                    <p className="text-start text-gray-400 mb-2">Entry-level protection for everyday driving.</p>
                                    <p className="text-start text-gray-400">Our High Impact Coverage is designed for drivers looking to protect the most vulnerable impact zones without overextending their budget. It's a smart, effective introduction to PPF - perfect for those who want peace of mind on the road.</p>
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
                                </ul>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br items-center from-white/10 to-transparent p-8 rounded-2xl border-2 border-white relative group">
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-1 rounded-full text-sm font-semibold">
                                POPULAR
                            </div>
                            <div className="text-center mb-6">
                                <h3 className="text-xl font-bold mb-2 text-white font-michroma">Full Front Package</h3>
                                <p className="text-start text-gray-400 mb-2">Complete front-end coverage.</p>
                                <p className="text-start text-gray-400">Full Front Protection offers extensive PPF coverage to shield the entire front end of your vehicle. Ideal for performance vehicles, daily drivers, and long-distance travellers who want to maintain a flawless finish.</p>
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
                            </ul>
                        </div>
                        <div className="bg-black p-8 rounded-2xl border border-gray-800 hover:border-white/50 transition-all duration-300 group">
                            <div className="text-center mb-6">
                                <h3 className="text-xl font-bold mb-2 text-white font-michroma">Complete Vehicle Package</h3>
                                <p className="text-start text-gray-400 mb-2">
                                    All-over protection for your entire vehicle.
                                </p>
                                <p className="text-start text-gray-400">
                                    For those who want nothing but the best, this full-body PPF package protects every painted surface on your vehicle. From road debris to parking mishaps, the complete vehicle package ensures your paint remains untouched and showroom-fresh.
                                </p>
                            </div>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-gray-300">All exterior painted surfaces</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex items-center justify-center my-10'>
                        
                            className="text-black bg-white font-michroma text-[0.9rem] tracking-[0.15rem] border-2 px-6 py-4 transition-opacity hover:opacity-60 hover:cursor-pointer font-bold"
                            href="/contact"
                        >GET A QUOTE</a>
                    </div>
                </motion.div>
            </section>

            <section>
                <VideoHero source={"/carVid.mp4"} isCeramic={false} />
            </section>

            <section className="py-20 bg-black border-gray-900 border-t-1">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-4 text-white font-michroma tracking-[0.2rem]">Articles</h2>
                    <p className="text-center text-gray-300 mb-12 text-lg">Guides and insights from the Avero team</p>
                    <div className="grid md:grid-cols-3 gap-6">
                        {articlePreviews.map((article) => (
                            <div
                                key={article.slug}
                                onClick={() => navigate(`/articles/${article.slug}`)}
                                className="group border border-gray-800 cursor-pointer hover:border-white transition-all duration-300 flex flex-col bg-black p-6"
                            >
                                <span className="text-xs uppercase tracking-[0.2rem] text-gray-500 font-semibold mb-4 font-michroma">
                                    {article.category}
                                </span>
                                <h3 className="text-base font-bold text-white font-michroma leading-snug mb-4 group-hover:opacity-70 transition-opacity">
                                    {article.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                                    {article.excerpt}
                                </p>
                                <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-800">
                                    <span className="text-xs text-gray-600">{article.readTime}</span>
                                    <span className="text-xs uppercase tracking-[0.2rem] font-semibold text-white font-michroma group-hover:opacity-60">
                                        Read
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center justify-center mt-10">
                        
                            className="text-white border-2 border-white font-michroma text-[0.9rem] tracking-[0.15rem] px-6 py-4 transition-opacity hover:opacity-60 hover:cursor-pointer font-bold"
                            href="/articles"
                        >VIEW ALL ARTICLES</a>
                    </div>
                </div>
            </section>

            <section id="location" className="py-20 bg-black border-gray-900 border-t-1">
                <VisitMapComponent />
            </section>

            <section id="contact" className="py-20 bg-black border-gray-900 border-t-1">
                <div className="container mx-auto px-6">
                    <ContactComponent />
                </div>
            </section>

            <section className='flex flex-col items-center justify-center bg-black py-20 border-gray-900 border-t-1'>
                <div className="w-10/12 space-y-2">
                    <h1 className="text-3xl font-bold mb-8 text-white font-michroma tracking-wider">Avero FAQs</h1>
                    {faqData.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="mb-8">
                            <div className="space-y-4">
                                {section.questions.map((item, itemIndex) => {
                                    const currentIndex = questionIndex++;
                                    const isOpen: any = openItems[currentIndex];
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
                                                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                                                        {item.question}
                                                    </h3>
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
                                                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
                                            >
                                                <div className="px-6 py-4 bg-white border-t border-gray-100">
                                                    <div className="text-gray-700 leading-relaxed">
                                                        {Array.isArray(item.answer) ? (
                                                            item.answer.map((paragraph, pIndex) => (
                                                                <p key={pIndex} className={pIndex > 0 ? "mt-4" : ""}>
                                                                    {paragraph}
                                                                </p>
                                                            ))
                                                        ) : (
                                                            <p>{item.answer}</p>
                                                        )}
                                                        {item.hasContactButton && (
                                                            <div className="mt-4">
                                                                <ContactButton text={item.buttonText} />
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default HomePage;

import { useEffect, useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const faqs = [
    {
        question: "Is there a warranty on PPF?",
        answer: "Yes. All PPF film that we use comes with a 10-year warranty that covers durability, performance, and hydrophobic function. Warranty information is provided upon vehicle pickup.",
    },
    {
        question: "How long does installation take?",
        answer: "Installation time depends on the job. Generally speaking, a full car PPF can take anywhere from 4-7 days depending on the difficulty and size of the vehicle. Ceramic coating jobs generally take 1 day max. All work is performed in our controlled, dust-free environment to ensure proper curing and optimal results.",
    },
    {
        question: "How much do your services cost?",
        answer: "Each car is different in size, shape, paint and complexity. Upon vehicle inspection and confirmation of your specific needs, we can provide a personalised quote with no surprises. For a general overview of what drives PPF pricing in Sydney, see our PPF cost guide.",
        link: { href: "/articles/ppf-cost-sydney", text: "PPF cost guide" },
    },
    {
        question: "How long does PPF last?",
        answer: "Premium PPF comes with a manufacturer warranty of up to 10 years, covering yellowing, cracking, blistering and delamination. With correct care and storage, quality film professionally installed can look excellent for the full lifespan of the film.",
    },
    {
        question: "Will PPF damage my paint when it is removed?",
        answer: "No. Quality PPF, installed on properly prepared paint and removed professionally at the end of its life, comes off cleanly without affecting the underlying paint. This is one of the reasons film quality and correct installation matter so much.",
    },
    {
        question: "Does PPF turn yellow over time?",
        answer: "Older and lower-quality films can yellow with UV exposure, but the premium TPU film we use includes UV stabilisers that keep it optically clear for the life of the film. Our film is warranted against yellowing.",
    },
    {
        question: "What is the difference between PPF and ceramic coating?",
        answer: "PPF is physical protection - a thick, self-healing film that absorbs stone chips, scratches and impacts. Ceramic coating is chemical protection - a thin layer that adds hydrophobics, gloss and UV resistance but cannot stop chips. The two work best together. We cover this in detail in our PPF vs ceramic coating guide.",
        link: { href: "/articles/ppf-vs-ceramic-coating", text: "PPF vs ceramic coating guide" },
    },
    {
        question: "Can I get ceramic coating applied over PPF?",
        answer: "Yes, and we recommend it for maximum protection. PPF handles physical damage while a ceramic coating layered on top adds hydrophobics, gloss and easier cleaning - and makes the film surface much lower maintenance.",
    },
    {
        question: "Should I get PPF on a brand new car?",
        answer: "Ideally yes. The best time to apply PPF is before the first stone chip, while the factory paint is in perfect condition. Applying film to new paint gives the cleanest result and preserves the original finish from day one. See our new car PPF guide for more.",
        link: { href: "/articles/new-car-ppf", text: "new car PPF guide" },
    },
    {
        question: "Do you do PPF for Teslas?",
        answer: "Yes. We are dedicated Tesla PPF specialists and work on every Tesla model including the Model 3, Model Y, Model S and Model X, using precision-cut templates tailored to each model.",
        link: { href: "/tesla-ppf", text: "Tesla PPF page" },
    },
    {
        question: "How do I look after my PPF?",
        answer: "Wash regularly with pH-neutral car wash products, avoid brushed automatic car washes, and remove bird droppings and bug splatter promptly. The film is low-maintenance but not maintenance-free. Our PPF care guide covers everything in detail.",
        link: { href: "/articles/ppf-care-guide", text: "PPF care guide" },
    },
    {
        question: "What areas do you service?",
        answer: "We are based in Caringbah and service Tesla and PPF customers across South Sydney and greater NSW, including Miranda, Cronulla, Sutherland, Hurstville, Sylvania Waters, Gymea, Taren Point, Sans Souci and the wider Sydney region.",
    },
];

export default function FAQsPage() {
    const navigate = useNavigate();
    const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({});

    const toggleItem = (index: number) => {
        setOpenItems((prev) => ({ ...prev, [index]: !prev[index] }));
    };

    useEffect(() => {
        document.title = "PPF & Ceramic Coating FAQs | Avero PPF South Sydney";

        const metaDescription = document.querySelector('meta[name="description"]');
        const descText = 'Answers to common questions about paint protection film and ceramic coating in Sydney - warranty, cost, installation time, durability, maintenance and more.';
        if (metaDescription) {
            metaDescription.setAttribute('content', descText);
        } else {
            const meta = document.createElement('meta');
            meta.name = 'description';
            meta.content = descText;
            document.head.appendChild(meta);
        }

        const existing = document.getElementById('faq-jsonld');
        if (!existing) {
            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.id = 'faq-jsonld';
            script.text = JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": faqs.map((f) => ({
                    "@type": "Question",
                    "name": f.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": f.answer
                    }
                }))
            });
            document.head.appendChild(script);
        }

        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-black min-h-screen">
            <div className="bg-black text-white py-24 px-6 border-b border-gray-800">
                <div className="max-w-3xl mx-auto">
                    <p className="text-sm uppercase tracking-[0.2rem] text-gray-400 mb-4 font-michroma">Help Centre</p>
                    <h1 className="text-4xl sm:text-6xl font-bold font-michroma leading-tight mb-6 text-white">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        Everything you need to know about paint protection film and ceramic coating with Avero in South Sydney.
                    </p>
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-6 py-16">
                <div className="space-y-4">
                    {faqs.map((item, index) => {
                        const isOpen = openItems[index];
                        return (
                            <div key={index} className="border border-gray-800 overflow-hidden">
                                <button
                                    onClick={() => toggleItem(index)}
                                    className="w-full px-6 py-5 text-left bg-black hover:bg-gray-900 transition-colors duration-200 focus:outline-none"
                                >
                                    <div className="flex items-center justify-between gap-4">
                                        <h2 className="text-lg font-semibold text-white pr-4">{item.question}</h2>
                                        <div className="flex-shrink-0">
                                            {isOpen ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                                        </div>
                                    </div>
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="px-6 py-5 border-t border-gray-800">
                                        <p className="text-gray-300 leading-relaxed">
                                            {item.answer}
                                            {item.link && (
                                                <> <a href={item.link.href} className="text-white underline hover:opacity-70">{item.link.text}</a>.</>
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="border-t border-gray-800 py-16 px-6">
                <div className="max-w-3xl mx-auto text-center text-white">
                    <h2 className="text-3xl font-bold font-michroma mb-4">Still have a question?</h2>
                    <p className="text-gray-300 mb-8 text-lg">
                        Get in touch with the Avero team and we will give you a straight answer.
                    </p>
                    <button
                        onClick={() => navigate('/contact')}
                        className="inline-block bg-white text-black font-michroma text-sm tracking-[0.15rem] px-8 py-4 hover:opacity-80 transition-opacity font-bold"
                    >
                        CONTACT US
                    </button>
                </div>
            </div>
        </div>
    );
}

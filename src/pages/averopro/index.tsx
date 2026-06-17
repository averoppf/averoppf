import { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

const products = [
    {
        name: "AveroPRO Clear PPF",
        image: "/ClearPPF.png",
        description: "AveroPRO Clear PPF is our flagship paint protection film engineered for Australian conditions. It is designed for owners who want maximum protection without altering the look of their vehicle. The film absorbs impact from stone chips and road debris while shielding against Australian UV, swirl marks, and everyday wear. With exceptional optical clarity, it preserves the factory colour and finish with no visual compromise.",
    },
    {
        name: "AveroPRO Matte PPF",
        image: "/MattePPF.jpg",
        description: "AveroPRO Matte PPF is designed for drivers who want a refined satin finish with the confidence of full paint protection. It transforms gloss paint into a smooth matte appearance while maintaining sharp body lines and uniform texture. The film protects against stone chips, road debris, Australian UV, and surface marking, keeping the matte finish consistent over time.",
    },
    {
        name: "AveroPRO Spectral PPF",
        image: "/SpectralPPF.png",
        description: "AveroPRO Spectral PPF combines colour change and paint protection in a single solution. It allows you to personalise your vehicle's appearance while preserving the original paint beneath the surface. The film protects against stone chips, road debris, Australian UV, swirl marks, and daily wear, delivering a durable colour finish that is fully removable.",
    },
];

const features = [
    {
        title: "Advanced Self-Healing Technology",
        description: "Our film is engineered with a self-healing top coat that helps remove light surface scratches when exposed to heat. Everyday wash marks and minor abrasions fade over time, keeping the surface looking smooth and consistent without polishing or repainting.",
    },
    {
        title: "Hydrophobic Surface for Easier Maintenance",
        description: "AveroPRO PPF features a hydrophobic top layer that repels water, dirt, and contaminants. This reduces buildup on the surface, makes washing easier, and helps the paint stay cleaner for longer while maintaining clarity and gloss.",
    },
    {
        title: "Designed for Australian Conditions",
        description: "Our film is developed and tested to handle harsh Australian environments. From intense UV exposure to high temperatures and rough road conditions, AveroPRO PPF is built to protect against fading, oxidation, stone chips, and daily wear common on Australian roads.",
    },
    {
        title: "Anti-Yellowing and Long-Term Clarity",
        description: "AveroPRO PPF uses advanced stabilisers to resist yellowing and discolouration over time. This ensures the film stays clear and visually invisible, even on light coloured vehicles, while preserving the original paint finish underneath.",
    },
    {
        title: "Backed by a 10-Year Warranty",
        description: "Our film is backed by a comprehensive 10-year warranty for peace of mind. This covers manufacturing defects such as cracking, bubbling, peeling, and yellowing when installed and maintained correctly, ensuring long-term confidence in your investment.",
    },
];

const pillars = [
    { title: "Engineered to Protect", description: "Designed to shield your paint from impact, wear, and the elements." },
    { title: "Built to Last", description: "Advanced materials for long-term clarity, strength, and durability with a 10-year warranty." },
    { title: "Proven on the Road", description: "Tested in real conditions, not just in the lab." },
];

export default function AveroProPage() {
    useEffect(() => {
        document.title = "AveroPRO Paint Protection Film | Wholesale PPF Supplier Australia";

        const metaDescription = document.querySelector('meta[name="description"]');
        const descText = 'AveroPRO Paint Protection Film is engineered by installers for Australian conditions - self-healing, hydrophobic, anti-yellowing and backed by a 10-year warranty. Become an authorised AveroPRO dealer.';
        if (metaDescription) {
            metaDescription.setAttribute('content', descText);
        } else {
            const meta = document.createElement('meta');
            meta.name = 'description';
            meta.content = descText;
            document.head.appendChild(meta);
        }

        const existing = document.getElementById('averopro-jsonld');
        if (!existing) {
            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.id = 'averopro-jsonld';
            script.text = JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Product",
                "name": "AveroPRO Paint Protection Film",
                "description": "Premium paint protection film engineered for Australian conditions. Self-healing, hydrophobic, anti-yellowing, with a 10-year warranty. Available in Clear, Matte and Spectral finishes.",
                "brand": { "@type": "Brand", "name": "AveroPRO" },
                "manufacturer": { "@type": "Organization", "name": "Avero PPF" }
            });
            document.head.appendChild(script);
        }

        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-black min-h-screen">
            {/* Hero */}
            <section className="relative w-full h-[70vh] overflow-hidden">
                <img src="/Hero%20Banner.jpg" alt="AveroPRO Paint Protection Film" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-michroma mb-4">
                        AveroPRO Paint Protection Film
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-200 font-michroma">
                        Engineered Protection. Enduring Finish.
                    </p>
                </div>
            </section>

            {/* Intro */}
            <section className="py-20 bg-black border-t-1 border-gray-900">
                <div className="container mx-auto px-6 max-w-3xl text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white font-michroma mb-6">Premium PPF, Engineered by Installers</h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        AveroPRO is our own line of premium paint protection film, developed and tested by professional installers for the demands of Australian roads. From intense UV to gravel highways and coastal salt air, AveroPRO delivers long-lasting protection against stone chips, scratches, and harsh weather, backed by a comprehensive 10-year warranty.
                    </p>
                </div>
            </section>

            {/* Pillars */}
            <section className="py-20 bg-black border-t-1 border-gray-900">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        {pillars.map((pillar, i) => (
                            <div key={i} className="border border-gray-800 p-8 text-center">
                                <h3 className="text-xl font-bold text-white font-michroma mb-3">{pillar.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{pillar.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Range */}
            <section className="py-20 bg-black border-t-1 border-gray-900">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white font-michroma text-center mb-4">The AveroPRO Range</h2>
                    <p className="text-center text-gray-300 mb-16 text-lg">Three premium films for every requirement</p>
                    <div className="space-y-16">
                        {products.map((product, i) => (
                            <div key={i} className="grid lg:grid-cols-2 gap-12 items-center">
                                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                                    <img src={product.image} alt={product.name} className="shadow-2xl w-full object-cover h-[400px]" />
                                </div>
                                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                                    <h3 className="text-3xl font-bold text-white font-michroma mb-4">{product.name}</h3>
                                    <p className="text-gray-300 leading-relaxed text-lg">{product.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technical overlay image */}
            <section className="py-20 bg-black border-t-1 border-gray-900">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white font-michroma text-center mb-12">Engineered for Performance</h2>
                    <div className="relative max-w-5xl mx-auto">
                        <img src="/behindoverlay.png" alt="AveroPRO PPF technical performance" className="w-full object-cover" />
                        <img src="/overlay.png" alt="AveroPRO PPF technical specifications" className="absolute inset-0 w-full h-full object-contain" />
                    </div>
                </div>
            </section>

            {/* What Sets AveroPRO Apart */}
            <section className="py-20 bg-black border-t-1 border-gray-900">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white font-michroma text-center mb-12">What Sets AveroPRO Apart</h2>
                    <div className="space-y-8">
                        {features.map((feature, i) => (
                            <div key={i} className="flex gap-4 items-start border-b border-gray-800 pb-8">
                                <CheckCircle className="w-7 h-7 text-white flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Become an Authorised Dealer */}
            <section className="py-20 bg-black border-t-1 border-gray-900">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto border-2 border-white p-10 text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white font-michroma mb-4">Become an Authorised Dealer</h2>
                        <p className="text-gray-300 leading-relaxed text-lg mb-8">
                            Are you a workshop, detailer, or installer looking to stock premium paint protection film? Join the growing network of AveroPRO authorised dealers and offer your customers a film engineered for Australian conditions and backed by a 10-year warranty. Get in touch to discuss dealer pricing and becoming an authorised AveroPRO installer.
                        </p>
                        
                            href="mailto:info@averoppf.com.au?subject=AveroPRO%20Authorised%20Dealer%20Enquiry"
                            className="inline-block bg-white text-black font-michroma text-sm tracking-[0.15rem] px-8 py-4 hover:opacity-80 transition-opacity font-bold"
                        >
                            BECOME A DEALER
                        </a>
                        <p className="text-gray-400 mt-6 text-sm">
                            Or email us directly at <a href="mailto:info@averoppf.com.au" className="text-white underline hover:opacity-70">info@averoppf.com.au</a>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

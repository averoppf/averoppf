import React, { useEffect, useState } from 'react';
import { CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import '../../App.css'
import ContactComponent from '../../components/misc/ContactComponent';

const galleryImages = [
    "/tesla1_box.jpg",
    "/tesla2_box.jpg",
    "/tesla3_box.jpg",
    "/tesla4_box.jpg",
    "/teslagrid1.jpg",
    "/teslagrid2.jpg",
    "/teslagrid3.jpg",
    "/teslagrid4.jpg",
    "/teslagrid5.jpg",
    "/teslagrid6.jpg",
    "/teslagrid7.JPG",
    "/teslagrid8.JPG",
    "/teslagrid9.jpg",
    "/teslagrid10.jpg",
    "/teslagrid11.jpg",
    "/teslagrid12.jpg",
    "/teslagrid13.jpg",
    "/teslagrid14.jpg",
];

const TeslaPPFPage: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

    useEffect(() => {
        // Set page title
        document.title = "Tesla PPF Specialist | Caringbah | South Sydney | Avero PPF";
        
        // Set meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Premium Tesla Paint Protection Film (PPF) in Caringbah, South Sydney. Protect your Model 3, Model Y, Model S, Model X with expert PPF installation. Advanced self-healing technology.');
        } else {
            const meta = document.createElement('meta');
            meta.name = 'description';
            meta.content = 'Premium Tesla Paint Protection Film (PPF) in Caringbah, South Sydney. Protect your Model 3, Model Y, Model S, Model X with expert PPF installation. Advanced self-healing technology.';
            document.head.appendChild(meta);
        }
        
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="bg-black min-h-screen border-gray-900 border-t-1">
            {/* Video Banner Section */}
            <section className="relative w-full h-[70vh] overflow-hidden">
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src="/tesla-banner-video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-michroma">
                        Sydney's Tesla PPF Specialists
                    </h1>
                </div>
            </section>

            {/* Section 1 */}
            <section className="pt-20 pb-20 bg-black">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-4xl font-bold mb-8 text-white font-michroma text-center">
                            Protect Your New Tesla with Premium Paint Protection Film (PPF)
                        </h2>
                        <div className="space-y-6 text-lg text-gray-300 leading-relaxed mb-8">
                            <p className="text-base text-neutral-300">
                                Your Tesla deserves more than basic protection. From the moment you drive it home, keeping that clean, factory finish looking flawless should be a priority. Our premium Paint Protection Film (PPF) provides an almost invisible barrier that defends against everyday damage such as scratches, stone chips, road debris and harsh weather, so your paint stays looking new for longer.
                            </p>
                            <p className="text-base text-neutral-300">
                                Whether you've just taken delivery of a Model 3, Model Y or Model YL, our experienced installers use precision cut film and careful application techniques to achieve seamless coverage that blends perfectly with your Tesla's design. The result is long lasting protection without changing the look of the car, helping maintain its value and that fresh showroom shine for years to come.
                            </p>
                        </div>

                        {/* Checkmarks */}
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                                <span className="text-base text-neutral-300">Advanced self-healing technology</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                                <span className="text-base text-neutral-300">UV-resistant and stain-repellent film</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                                <span className="text-base text-neutral-300">Custom coverage options for full or partial wraps</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                                <span className="text-base text-neutral-300">Trusted by Tesla owners across Sydney</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Gloss PPF Section */}
            <section className="py-20 bg-black border-t-1 border-gray-900">
                <div className="grid lg:grid-cols-2 items-center">
                    <img
                        src="/teslan1.png"
                        className="w-full h-[300px] lg:h-[400px] object-contain"
                        alt="Tesla Gloss PPF"
                    />
                    <div className="px-6 py-10 lg:px-16">
                        <h2 className="text-4xl font-bold mb-6 text-white font-michroma">
                            Gloss PPF
                        </h2>
                        <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                            <p className="text-base text-neutral-300">
                                Preserve your Tesla's factory finish with our premium Gloss Paint Protection Film. Designed to provide near-invisible protection, Gloss PPF helps defend your paint against stone chips, swirl marks, road debris, bug splatter and daily wear while enhancing depth and shine.
                            </p>
                            <p className="text-base text-neutral-300">
                                At <span className="font-semibold text-white">Avero PPF</span>, we use AveroPRO 10-Year HyperGloss PPF, engineered for exceptional clarity, self-healing performance and long-term durability. The ultra-gloss finish gives your Tesla a deep, wet-look appearance while maintaining the original colour and design of the vehicle. Perfect for owners wanting maximum protection without changing the look of their Tesla.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Matte PPF Section */}
            <section className="py-20 bg-black border-t-1 border-gray-900">
                <div className="grid lg:grid-cols-2 items-center">
                    <div className="lg:order-2">
                        <img
                            src="/teslan2.png"
                            className="w-full h-[300px] lg:h-[400px] object-contain"
                            alt="Tesla Matte PPF"
                        />
                    </div>
                    <div className="lg:order-1 px-6 py-10 lg:px-16">
                        <h2 className="text-4xl font-bold mb-6 text-white font-michroma">
                            Matte PPF
                        </h2>
                        <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                            <p className="text-base text-neutral-300">
                                Transform your Tesla with a sleek satin finish while protecting it from everyday damage. Matte PPF converts gloss paint into a smooth satin appearance that stands out while still offering premium protection against chips, scratches and environmental contaminants.
                            </p>
                            <p className="text-base text-neutral-300">
                                We install AveroPRO 10-Year Matte PPF, developed to deliver a consistent satin finish with excellent self-healing and stain-resistant properties. Whether you want a subtle stealth aesthetic or already own a factory matte Tesla, our Matte PPF provides long-lasting protection without compromising the finish.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Colour PPF Section */}
            <section className="py-20 bg-black border-t-1 border-gray-900">
                <div className="grid lg:grid-cols-2 items-center">
                    <img
                        src="/teslan3.png"
                        className="w-full h-[300px] lg:h-[400px] object-contain"
                        alt="Tesla Colour PPF"
                    />
                    <div className="px-6 py-10 lg:px-16">
                        <h2 className="text-4xl font-bold mb-6 text-white font-michroma">
                            Colour PPF
                        </h2>
                        <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                            <p className="text-base text-neutral-300">
                                Give your Tesla a completely new look while adding the benefits of Paint Protection Film. Colour PPF combines colour transformation and surface protection into one solution, offering the styling flexibility of a wrap with the durability and self-healing properties of premium PPF.
                            </p>
                            <p className="text-base text-neutral-300">
                                We use AveroPRO 10-Year Spectral PPF, available in a range of finishes and colours designed to elevate the appearance of your Tesla while protecting it from chips, scratches and UV exposure. Ideal for owners wanting a unique finish without permanently altering the factory paint.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interior PPF Section */}
            <section className="py-20 bg-black border-t-1 border-gray-900">
                <div className="grid lg:grid-cols-2 items-center">
                    <div className="lg:order-2">
                        <img
                            src="/teslan4.png"
                            className="w-full h-[300px] lg:h-[400px] object-contain"
                            alt="Tesla Interior PPF"
                        />
                    </div>
                    <div className="lg:order-1 px-6 py-10 lg:px-16">
                        <h2 className="text-4xl font-bold mb-6 text-white font-michroma">
                            Interior PPF
                        </h2>
                        <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                            <p className="text-base text-neutral-300">
                                Tesla interiors are modern and minimal, but high-contact surfaces can quickly pick up scratches, fingerprints and wear. Our Interior PPF solutions are designed to protect delicate interior trims including gloss black panels, centre consoles, touchscreens and infotainment displays.
                            </p>
                            <p className="text-base text-neutral-300">
                                Using precision-cut templates tailored specifically for Tesla models, our Interior PPF maintains the clean OEM appearance of your interior while reducing the risk of scratches and swirl marks caused by daily use. It's the perfect way to keep your Tesla cabin looking brand new.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ceramic Tint Section */}
            <section className="py-20 bg-black border-t-1 border-gray-900">
                <div className="grid lg:grid-cols-2 items-center">
                    <img
                        src="/teslan5.png"
                        className="w-full h-[300px] lg:h-[400px] object-contain"
                        alt="Tesla Ceramic Tint"
                    />
                    <div className="px-6 py-10 lg:px-16">
                        <h2 className="text-4xl font-bold mb-6 text-white font-michroma">
                            Ceramic Tint
                        </h2>
                        <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                            <p className="text-base text-neutral-300">
                                Enhance comfort, privacy and heat rejection with our premium Nano Ceramic Tint solutions for Tesla vehicles. Our ceramic tint helps reduce interior heat build-up while blocking 98% of harmful UV rays, protecting both passengers and interior surfaces from sun damage.
                            </p>
                            <p className="text-base text-neutral-300">
                                We install our lifetime warranty Nano Ceramic Tint, engineered for superior clarity, heat rejection and long-term durability without interfering with signals or visibility. Multiple darkness options are available, allowing you to customise the appearance and privacy level of your Tesla to suit your preference.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Past Work Gallery */}
            <section className="py-20 bg-black border-t-1 border-gray-900">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12 text-white font-michroma">
                        Check out our past work
                    </h2>

                    {/* Mobile Carousel */}
                    <div className="sm:hidden">
                        <div className="relative overflow-hidden rounded-2xl border border-gray-800">
                            <img
                                src={galleryImages[currentSlide]}
                                className="w-full h-64 object-cover"
                                alt={`Past Tesla PPF work ${currentSlide + 1}`}
                            />
                            <button
                                onClick={prevSlide}
                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full p-2 hover:bg-black/80 transition"
                                aria-label="Previous photo"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full p-2 hover:bg-black/80 transition"
                                aria-label="Next photo"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="text-center text-neutral-400 mt-4 text-sm">
                            {currentSlide + 1} / {galleryImages.length}
                        </div>
                    </div>

                    {/* Desktop Grid */}
                    <div className="hidden sm:grid sm:grid-cols-3 gap-4">
                        {galleryImages.map((src, idx) => (
                            <div key={idx} className="overflow-hidden rounded-2xl border border-gray-800 hover:border-white/50 transition-all duration-300">
                                <img src={src} className="w-full h-64 object-cover" alt={`Past Tesla PPF work ${idx + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 3 - Contact Form */}
            <section className="py-20 bg-black border-t-1 border-gray-900">
                <div className="container mx-auto px-6">
                    <ContactComponent />
                </div>
            </section>
        </div>
    );
};

export default TeslaPPFPage;

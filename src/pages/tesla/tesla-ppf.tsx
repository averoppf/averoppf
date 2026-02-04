import React, { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import '../../App.css'
import ContactComponent from '../../components/misc/ContactComponent';

const TeslaPPFPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="bg-black min-h-screen border-gray-900 border-t-1">
            {/* Section 1 */}
            <section className="py-20 bg-black">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Large Image on Left */}
                        <img 
                            src="/tesla_main.jpg" 
                            className="shadow-2xl rounded-4xl w-full h-full object-cover"
                            alt="Tesla PPF Protection"
                        />

                        {/* Text Content on Right */}
                        <div>
                            <h1 className="text-4xl font-bold mb-8 text-white font-michroma">
                                Protect Your New Tesla with Premium Paint Protection Film (PPF)
                            </h1>
                            <div className="space-y-6 text-lg text-gray-300 leading-relaxed mb-8">
                                <p className="text-base text-neutral-300">
                                    Your Tesla deserves more than basic protection. From the moment you drive it home, keeping that clean, factory finish looking flawless should be a priority. Our premium Paint Protection Film (PPF) provides an almost invisible barrier that defends against everyday damage such as scratches, stone chips, road debris and harsh weather, so your paint stays looking new for longer.
                                </p>
                                <p className="text-base text-neutral-300">
                                    Whether you've just taken delivery of a Model 3, Model Y, Model S or Model X, our experienced installers use precision cut film and careful application techniques to achieve seamless coverage that blends perfectly with your Tesla's design. The result is long lasting protection without changing the look of the car, helping maintain its value and that fresh showroom shine for years to come.
                                </p>
                            </div>

                            {/* Checkmarks */}
                            <ul className="space-y-4 text-white">
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
                </div>
            </section>

            {/* Section 2 */}
            <section className="py-20 bg-black border-t-1 border-gray-900">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12 text-white font-michroma">
                        Tesla Paint Protection Film Options
                    </h2>

                    {/* 4 Boxes Side by Side */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Box 1 */}
                        <div className="bg-neutral-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-white/50 transition-all duration-300">
                            <img 
                                src="/tesla1_box.jpg" 
                                className="w-full h-64 object-cover"
                                alt="Tesla Colour PPF"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white text-center font-michroma">
                                    Tesla: Colour PPF
                                </h3>
                            </div>
                        </div>

                        {/* Box 2 */}
                        <div className="bg-neutral-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-white/50 transition-all duration-300">
                            <img 
                                src="/tesla2_box.jpg" 
                                className="w-full h-64 object-cover"
                                alt="Tesla Matte PPF"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white text-center font-michroma">
                                    Tesla: Matte PPF
                                </h3>
                            </div>
                        </div>

                        {/* Box 3 */}
                        <div className="bg-neutral-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-white/50 transition-all duration-300">
                            <img 
                                src="/tesla3_box.jpg" 
                                className="w-full h-64 object-cover"
                                alt="Tesla Clear PPF"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white text-center font-michroma">
                                    Tesla: Clear PPF
                                </h3>
                            </div>
                        </div>

                        {/* Box 4 */}
                        <div className="bg-neutral-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-white/50 transition-all duration-300">
                            <img 
                                src="/tesla4_box.jpg" 
                                className="w-full h-64 object-cover"
                                alt="Tesla Front End Clear PPF"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white text-center font-michroma">
                                    Tesla: Front End Clear PPF
                                </h3>
                            </div>
                        </div>
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

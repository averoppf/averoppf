import { Clock, MapPin, Phone } from 'lucide-react';
import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
import '../../App.css'
import { motion, useAnimation, useInView } from 'framer-motion';
import ValuesSection from '../../components/misc/ValuesComponent';
// import { Helmet } from 'react-helmet';

const AboutPage: React.FC = () => {
    const mapRef = useRef<any>(null)
    const mapContainerRef = useRef<any>(null)
    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoiYXZlcm9zb2x1dGlvbnMiLCJhIjoiY21icHhqaWVvMDl1cTJyb2x5dGE4bDVndyJ9.TS6OtL8zGEQbKvUuPFr80w'
        mapRef.current = new mapboxgl.Map({
            container: mapContainerRef.current,
            center: [151.12411012879127, -34.02491239230067],
            zoom: 15
        });

        new mapboxgl.Marker()
            .setLngLat([151.12411012879127, -34.02491239230067])
            .addTo(mapRef.current);

        return () => {
            mapRef.current.remove()
        }
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const valuesVariants = {
        hidden: {
            opacity: 0,
            y: 150,
        },
        visible: {
            opacity: 1,
            y: 0,
        },
    };
    const valuesRef = useRef(null);
    const valuesInView = useInView(valuesRef, { once: true });
    const valuesAnimationControls = useAnimation();

    useEffect(() => {
        if (valuesInView) {
            valuesAnimationControls.start("visible");
        }
    }, [valuesInView, valuesAnimationControls]);

    return (
        <div className="bg-black border-gray-900 border-t-1">
            {/* <Helmet>
                <title>Avero | Quality PPF & Ceramic Coating in Sydney</title>
                <link rel='canonical' href={ "https://www.averoppf.com.au" } />
                <meta name="description" content={"Protect your car with Sydney’s car care experts in PPF & ceramic coating. Get unbeatable shine, increased vehicle value & long-lasting protection. Trusted by locals across NSW."} />
            </Helmet> */}
            {/* Hero Section */}
            <section className="relative lg:h-[calc(90vh)] sm:h-full flex items-center justify-center bg-cover bg-center bg-[url('/backgroundShot.jpg')] py-[5%]">
                <div className="absolute inset-0 bg-black/60 h-full"></div>
                <div className="relative z-10 text-center max-w-6xl flex flex-col items-center mx-auto px-6 pt-[15vh]">
                    <h1
                        className="text-5xl sm:text-6xl font-bold tracking-wider flex flex-col items-center text-white font-michroma mb-[5%]">
                        About Us
                    </h1>
                    <p className='text-neutral-200 max-w-[80%] mb-[8%] text-base'>
                        At Avero PPF, our passion for cars goes beyond shine and gloss—we believe every vehicle tells a story and deserves protection that honors its unique spirit. We know the thrill of a freshly detailed ride and craft our paint protection to keep your car looking and feeling its absolute best.
                    </p>
                    <div className='flex flex-col sm:flex-row gap-4 sm:gap-10 max-w-[40%] items-center justify-center w-full'>
                        <a
                            className="text-black rounded-lg bg-white font-michroma text-[0.7rem] tracking-[0.15rem] px-6 py-3 transition-opacity hover:opacity-60 hover:cursor-pointer flex items-center justify-center"
                            href="/services/ppf"
                        >PPF</a>
                        <a
                            className="block text-black rounded-lg bg-white font-michroma text-[0.7rem] tracking-[0.15rem] px-6 py-3 transition-opacity hover:opacity-60 hover:cursor-pointer"
                            href="/services/ceramic"
                        >CERAMIC COATING</a>
                        <a
                            className="block text-black rounded-lg bg-white font-michroma text-[0.7rem] tracking-[0.15rem] px-6 py-3 transition-opacity hover:opacity-60 hover:cursor-pointer"
                            href="/services/colour-wraps"
                        >COLOURED WRAPS</a>
                        <a
                            className="block text-black rounded-lg bg-white font-michroma text-[0.7rem] tracking-[0.15rem] px-6 py-3 transition-opacity hover:opacity-60 hover:cursor-pointer"
                            href="/services/window-tinting"
                        >WINDOW TINTING</a>
                    </div>
                    
                </div>
            </section>

            {/* About Us Section */}
            <section id="about" className="py-20 bg-black border-b-1 border-gray-900">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Text Content */}
                        <div>
                            <h2 className="text-4xl font-bold mb-8 text-white font-michroma text-center">Seasoned Professionals in the Industry</h2>
                            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                                <p className='text-base text-neutral-300'>
                                    Located in Caringbah, Sydney, Avero is dedicated to raising the standard of paint protection and car care.
                                </p>
                                <p className='text-base text-neutral-300'>
                                    As passionate car enthusiasts, our team has undergone specialised training from industry leaders including 3M, Avery Dennison, and XPEL, bringing a detail-focused, precision-first approach to every vehicle we work on.

                                </p>
                                <p className='text-base text-neutral-300'>
                                    Whether it's a daily driver or a collector's piece, we treat each car with the same level of care and pride we would our own.
                                </p>
                                <p className='text-base text-neutral-300'>If you're looking for trusted professionals to protect and enhance your vehicle, we'd love to work with you.</p>
                                <p className='text-base text-neutral-300'>- Avero</p>
                            </div>
                        </div>

                        {/* Team Image */}
                        <img src="/logo-2-car-shot.avif"className='shadow-2xl rounded-4xl w-full min-w-full h-full min-h-full object-cover object-left' />
                    </div>
                </div>
            </section>

            <section className='bg-[linear-gradient(to_bottom,_#000000,_#050505,_#000000)]'>
                <motion.div
                    ref={valuesRef}
                    animate={valuesAnimationControls}
                    initial="hidden"
                    variants={valuesVariants}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="container mx-auto px-[5%] "
                >
                    <ValuesSection />
                </motion.div>
            </section>


            {/* Location Section */}
            <section id="location" className="py-20 bg-black">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12 text-white font-michroma">Our Location</h2>
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Location Details */}
                        <div className="space-y-8">
                            <div className="bg-black p-8 rounded-2xl border border-gray-800">
                                <h3 className="text-2xl font-bold mb-6 text-white font-michroma">Visit Our Facility</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <MapPin className="w-6 h-6 text-white mt-1" />
                                        <div>
                                            <p className="font-semibold text-white">Address</p>
                                            <p className="text-gray-300">F1/32-36 Box Road Caringbah NSW 2229</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Clock className="w-6 h-6 text-white mt-1" />
                                        <div>
                                            <p className="font-semibold text-white">Business Hours</p>
                                            <div className="text-gray-300 space-y-1">
                                                <p><span className='font-semibold'>Monday - Friday:</span> 8:30 AM - 5:00 PM</p>
                                                <p><span className='font-semibold'>Saturday:</span> 12:00 PM - 4:00 PM</p>
                                                <p><span className='font-semibold'>Sunday:</span> By Appointment Only</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Phone className="w-6 h-6 text-white mt-1" />
                                        <div>
                                            <p className="font-semibold text-white">Contact</p>
                                            <p className="text-gray-300">+61 415 081 546</p>
                                            <p className="text-gray-300">info@averoppf.com.au</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Facility Features */}
                            {/* <div className="bg-black p-8 rounded-2xl border border-gray-800">
                                <h3 className="text-xl font-bold mb-4 text-white">Facility Features</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex items-center gap-3">
                                        <Shield className="w-5 h-5 text-white" />
                                        <span className="text-gray-300 text-sm">24/7 Security</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Building className="w-5 h-5 text-white" />
                                        <span className="text-gray-300 text-sm">Climate Controlled</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Car className="w-5 h-5 text-white" />
                                        <span className="text-gray-300 text-sm">10+ Service Bays</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Eye className="w-5 h-5 text-white" />
                                        <span className="text-gray-300 text-sm">CCTV Monitoring</span>
                                    </div>
                                </div>
                            </div> */}
                        </div>

                        {/* Map Placeholder */}

                        <div style={{ minHeight: 400, width: "100%", borderRadius: 10 }} ref={mapContainerRef} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;

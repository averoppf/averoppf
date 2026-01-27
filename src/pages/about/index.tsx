import { Clock, MapPin, Phone, ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
import '../../App.css'
import { motion, useAnimation, useInView } from 'framer-motion';
import ValuesSection from '../../components/misc/ValuesComponent';

const AboutPage: React.FC = () => {
    const mapRef = useRef<any>(null)
    const mapContainerRef = useRef<any>(null)
    
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        '/professional1.jpg',
        '/professional2.jpg',
        '/professional3.jpg',
        '/professional4.jpg',
        '/professional5.jpg'
    ];

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
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToPreviousImage = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

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

            <section id="about" className="py-20 bg-black border-b-1 border-gray-900">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-8 text-white font-michroma text-center">Seasoned Professionals in the Industry</h2>
                            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                                <p className='text-base text-neutral-300'>
                                    Located in Caringbah, Sydney, Avero is dedicated to raising the standard of paint protection and car care.
                                </p>
                                <p className='text-base text-neutral-300'>
                                    As passionate car enthusiasts, our team has extension experience in the industry, bringing a detail-focused, precision-first approach to every vehicle we work on.

                                </p>
                                <p className='text-base text-neutral-300'>
                                    Whether it's a daily driver or a collector's piece, we treat each car with the same level of care and pride we would our own.
                                </p>
                                <p className='text-base text-neutral-300'>If you're looking for trusted professionals to protect and enhance your vehicle, we'd love to work with you.</p>
                                <p className='text-base text-neutral-300'>- Avero</p>
                            </div>
                        </div>

                        <div className="relative shadow-2xl rounded-4xl w-full min-w-full h-full min-h-full overflow-hidden">
                            {images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    className={`absolute inset-0 w-full h-full object-cover object-left transition-opacity duration-1000 ${
                                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                    }`}
                                    alt={`Professional ${index + 1}`}
                                />
                            ))}

                            <button
                                onClick={goToPreviousImage}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                                aria-label="Previous image"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={goToNextImage}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                                aria-label="Next image"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>

                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                                {images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`w-2 h-2 rounded-full transition-all ${
                                            index === currentImageIndex
                                                ? 'bg-white w-8'
                                                : 'bg-white/50 hover:bg-white/75'
                                        }`}
                                        aria-label={`Go to image ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
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

            <section id="location" className="py-20 bg-black">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12 text-white font-michroma">Our Location</h2>
                    <div className="grid lg:grid-cols-2 gap-12">
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
                        </div>

                        <div style={{ minHeight: 400, width: "100%", borderRadius: 10 }} ref={mapContainerRef} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;

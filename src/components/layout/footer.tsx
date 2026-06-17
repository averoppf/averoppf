import { ChevronDown, ChevronUp, FacebookIcon, InstagramIcon, Mail, Phone } from "lucide-react"
import { useState } from "react";
export function Footer() {
    const [isAreasOpen, setIsAreasOpen] = useState(false);
    return (
        <footer className="bg-black border-t border-gray-800 py-12">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-5 gap-8">
                    <div className="md:col-span-2">
                        <img src="/avero.png" alt="Avero PPF logo" className='h-6 mb-5' />
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            Premium vehicle protection specialists delivering high-quality paint protection and ceramic coating services in South Sydney.
                        </p>
                        <p className="text-gray-400">
                            Powerful Protection. Expert Execution.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
                        <ul className="space-y-2 text-gray-300 flex flex-col">
                            <a href="/" className="hover:text-white transition-colors">Home</a>
                            <a href="/about" className="hover:text-white transition-colors">About Us</a>
                            <a href="/projects" className="hover:text-white transition-colors">Projects</a>
                            <a href="/articles" className="hover:text-white transition-colors">Articles</a>
                            <a href="/contact" className="hover:text-white transition-colors">Contact</a>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
                        <ul className="space-y-2 text-gray-300 flex flex-col">
                            <a href="/services/ppf" className="hover:text-white transition-colors">Paint Protection Film</a>
                            <a href="/tesla-ppf" className="hover:text-white transition-colors">Tesla PPF</a>
                            <a href="/services/ceramic" className="hover:text-white transition-colors">Ceramic Coating</a>
                            <a href="/services/colour-wraps" className="hover:text-white transition-colors">Colour Wraps</a>
                            <a href="/services/window-tinting" className="hover:text-white transition-colors">Window Tinting</a>
                        </ul>
                    </div>
                    <div>
                        <button
                            onClick={() => setIsAreasOpen((prev) => !prev)}
                            className="flex items-center justify-between w-full text-lg font-semibold mb-4 text-white"
                        >
                            Areas We Serve
                            {isAreasOpen ? (
                                <ChevronUp className="w-5 h-5" />
                            ) : (
                                <ChevronDown className="w-5 h-5" />
                            )}
                        </button>
                        <ul className={`space-y-2 text-gray-300 flex flex-col ${isAreasOpen ? '' : 'hidden'}`}>
                            <a href="/services/taren-point" className="hover:text-white transition-colors">Taren Point</a>
                            <a href="/services/miranda" className="hover:text-white transition-colors">Miranda</a>
                            <a href="/services/caringbah" className="hover:text-white transition-colors">Caringbah</a>
                            <a href="/services/cronulla" className="hover:text-white transition-colors">Cronulla</a>
                            <a href="/services/sans-souci" className="hover:text-white transition-colors">Sans Souci</a>
                            <a href="/services/sylvania-waters" className="hover:text-white transition-colors">Sylvania Waters</a>
                            <a href="/services/hurstville" className="hover:text-white transition-colors">Hurstville</a>
                            <a href="/services/sutherland" className="hover:text-white transition-colors">Sutherland</a>
                            <a href="/services/gymea" className="hover:text-white transition-colors">Gymea</a>
                            <a href="/services/sydney" className="hover:text-white transition-colors">Sydney</a>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-2 text-white">Contact</h4>
                        <div className="space-y-2 text-gray-300">
                            <div className="flex items-center gap-5 flex-wrap">
                                <a href="https://www.facebook.com/61577135378565" target="_blank" rel="noopener noreferrer" aria-label="Avero on Facebook">
                                    <FacebookIcon color="white" fill="white" />
                                </a>
                                <a href="https://www.instagram.com/averoppf" target="_blank" rel="noopener noreferrer" aria-label="Avero on Instagram">
                                    <InstagramIcon color="white" />
                                </a>
                                <a href="https://www.tiktok.com/@averoppf" target="_blank" rel="noopener noreferrer" aria-label="Avero on TikTok">
                                    <img src="/tiktok.png" alt="TikTok" className='h-9' />
                                </a>
                                <a href="tel:+61415081546" aria-label="Call Avero">
                                    <Phone style={{width:'18px', height: '18px', objectFit: 'contain'}} color="white" className="cursor-pointer" />
                                </a>
                                <a href="mailto:info@averoppf.com.au" aria-label="Email Avero">
                                    <Mail style={{width:'18px', height: '18px', objectFit: 'contain'}} color="white" className="cursor-pointer" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 text-center text-gray-400 flex flex-row gap-2 items-center justify-center">
                    <p>&copy; 2026 Avero Solutions Pty Ltd. All rights reserved.</p>
                    <p>|</p>
                    <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
                </div>
            </div>
        </footer>
    )
}

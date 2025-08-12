import { ChevronDown, ChevronUp, FacebookIcon, InstagramIcon, Mail, Phone } from "lucide-react"
import { useState } from "react";
export function Footer() {
    const [isAreasOpen, setIsAreasOpen] = useState(false);
    return (
        < footer className="bg-black border-t border-gray-800 py-12" >
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8">
                    <div className="col-span-2">
                        <img src="/avero.png" className='h-6 mb-5' />
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            Premium vehicle protection specialists delivering high-quality paint protection and ceramic coating services in South Sydney.
                        </p>
                        <p className="text-gray-400">
                            Equipped to Protect. Driven by Detail.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
                        <ul className="space-y-2 text-gray-300 flex flex-col">
                            <a href="/services/ppf">Paint Protection Film</a>
                            <a href="/services/ceramic">Ceramic Coating</a>
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
                        {isAreasOpen && (
                        <ul className="space-y-2 text-gray-300 flex flex-col">
                            <a href="/services/taren-point">Taren Point</a>
                            <a href="/services/miranda">Miranda</a>
                            <a href="/services/caringbah">Caringbah</a>
                            <a href="/services/cronulla">Cronulla</a>
                            <a href="/services/sans-souci">Sans Souci</a>
                            <a href="/services/sylvania-waters">Sylvania Waters</a>
                            <a href="/services/hurstville">Hurstville</a>
                            <a href="/services/sutherland">Sutherland</a>
                            <a href="/services/gymea">Gymea</a>
                            <a href="/services/sydney">Sydney</a>
                        </ul>
                        )}
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-2 text-white">Contact</h4>
                        <div className="space-y-2 text-gray-300">
                            <div className="flex items-center gap-5">
                                <a href="https://www.facebook.com/61577135378565" target="_blank" rel="noopener noreferrer">
                                    <FacebookIcon color="white" fill="white" />
                                </a>
                                <a href="https://www.instagram.com/averoppf" target="_blank" rel="noopener noreferrer">
                                    <InstagramIcon color="white" />
                                </a>
                                <a href="https://www.tiktok.com/@averoppf" target="_blank" rel="noopener noreferrer">
                                    <img src="/tiktok.png" className='h-9' />
                                </a>
                                <a
                                    href="tel:+61415081546"
                                >
                                    <Phone style={{width:'18px', height: '18px', objectFit: 'contain'}} color="white" className="cursor-pointer" />
                                </a>
                                <a href="mailto:info@averoppf.com.au">
                                    <Mail style={{width:'18px', height: '18px', objectFit: 'contain'}} color="white" className="cursor-pointer" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 text-center text-gray-400 flex flex-row gap-2 items-center justify-center">
                    <p>&copy; 2025 Avero Solutions Pty Ltd. All rights reserved.</p>
                    <p>|</p>
                    <a href="/privacy-policy">Privacy Policy</a>
                </div>
            </div>
        </footer >
    )
}
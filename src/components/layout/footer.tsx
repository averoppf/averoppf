import { FacebookIcon, InstagramIcon, Mail, Phone } from "lucide-react"
export function Footer() {
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
                        <h4 className="text-lg font-semibold mb-2 text-white">Contact</h4>
                        <div className="space-y-2 text-gray-300">
                            <div className="flex items-center gap-5">
                                <FacebookIcon color="white" fill="white" />
                                <InstagramIcon color="white" />
                                <div>

                                    <img src="/tiktok.png" className='h-9' />
                                </div>
                                <a
                                    href="tel:+61415081546"
                                >
                                    <Phone color="white" />
                                </a>
                                <a href="mailto:info@averoppf.com">
                                    <Mail color="white" className="cursor-pointer" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2025 Avero Solutions Pty Ltd. All rights reserved.</p>
                </div>
            </div>
        </footer >
    )
}
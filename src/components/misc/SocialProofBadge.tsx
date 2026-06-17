import { useEffect, useState } from "react";
import { Star, X } from "lucide-react";

export function SocialProofBadge() {
    const [visible, setVisible] = useState(false);
    const [dismissed, setDismissed] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    if (dismissed) return null;

    return (
        <div className={`fixed bottom-[3%] left-[2%] z-50 transition-all duration-500 ease-in-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
            <div className="relative flex items-center gap-3 bg-black border border-neutral-700 rounded-full shadow-lg pl-4 pr-10 py-2">
                <a href="https://www.google.com/search?q=Avero+PPF+reviews" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:opacity-80 transition-opacity" aria-label="See Avero PPF reviews on Google">
                    <div className="flex flex-col">
                        <div className="flex items-center gap-1">
                            {[0, 1, 2, 3, 4].map((i) => (
                                <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                            ))}
                        </div>
                        <span className="text-white text-xs font-semibold mt-0.5">5.0 Star Rated on Google</span>
                    </div>
                    <span className="text-neutral-400 text-xs border-l border-neutral-700 pl-3">40 reviews</span>
                </a>
                <button onClick={() => setDismissed(true)} className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white transition-colors" aria-label="Dismiss">
                    <X className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}

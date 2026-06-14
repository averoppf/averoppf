import { Banner } from "./Banner";
import { Footer } from "./footer";
import { Header } from "./header";

export function PageLayout(props: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen overflow-hidden">
            <Header />
            <Banner />
            <div className="bg-black min-h-dvh">
                {props.children}
            </div>
            <Footer />
            
                className="fixed bottom-[3%] right-[2%] bg-neutral-500 text-white font-michroma font-bold px-4 py-2 border border-neutral-600 rounded-full shadow-lg hover:opacity-80 transform transition-transform duration-200 ease-in-out hover:-translate-y-2 z-50"
                href="/contact"
            >
                Get A Quote
            </a>
        </div>
    )
}

import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import '../../App.css'

interface Project {
    id: number;
    title: string;
    type: 'PPF' | 'Colour Wrap';
    images: string[];
    description?: string;
}

const projects: Project[] = [
    // PPF Projects
    { id: 1, title: 'BMW X4 M Competition Matte Black PPF', type: 'PPF', images: ['/car1-1.jpg', '/car1-2.jpg', '/car1-3.jpg'] },
    { id: 2, title: 'Tesla Model Y Clear Gloss PPF', type: 'PPF', images: ['/car2-1.jpg', '/car2-2.jpg', '/car2-3.jpg'] },
    { id: 3, title: 'BMW Z4 M40i Clear Gloss PPF', type: 'PPF', images: ['/car3-1.jpg', '/car3-2.jpg', '/car3-3.jpg'] },
    { id: 4, title: 'Lexus IS500 Clear Gloss PPF', type: 'PPF', images: ['/car4-1.jpg', '/car4-2.jpg', '/car4-3.jpg'] },
    { id: 5, title: 'Mercedes Benz G63 Clear Gloss PPF', type: 'PPF', images: ['/car5-1.jpg', '/car5-2.jpg', '/car5-3.jpg'] },
    { id: 6, title: 'BMW IX M60 Clear Gloss PPF', type: 'PPF', images: ['/car6-1.jpg', '/car6-2.jpg', '/car6-3.jpg'] },
    { id: 7, title: 'Mitsubishi Outlander Clear Gloss PPF', type: 'PPF', images: ['/car7-1.jpg', '/car7-2.jpg', '/car7-3.jpg'] },
    { id: 8, title: 'Mercedes Benz CLA45S AMG Clear Gloss PPF', type: 'PPF', images: ['/car8-1.jpg', '/car8-2.jpg', '/car8-3.jpg'] },
    
    // Colour Wrap Projects
    { id: 9, title: 'BMX X6 M Competition Matte Black Vinyl Wrap', type: 'Colour Wrap', images: ['/car9-1.jpg', '/car9-2.jpg', '/car9-3.jpg'] },
    { id: 10, title: 'Hyundai i30N Midnight Purple Coloured PPF', type: 'Colour Wrap', images: ['/car10-1.jpg', '/car10-2.jpg', '/car10-3.jpg'] },
    { id: 11, title: 'Porsche 911 GT3 Java Green Coloured PPF', type: 'Colour Wrap', images: ['/car11-1.jpg', '/car11-2.jpg', '/car11-3.jpg'] },
    { id: 12, title: 'Mercedes Benz GLC43 Cherry Blossom Coloured PPF', type: 'Colour Wrap', images: ['/car12-1.jpg', '/car12-2.jpg', '/car12-3.jpg'] },
    { id: 13, title: 'BMW M4 Competition Matte Black Vinyl Wrap', type: 'Colour Wrap', images: ['/car13-1.jpg', '/car13-2.jpg', '/car13-3.jpg'] },
    { id: 14, title: 'Audi RS3 Black AveroPRO HyperGloss PPF', type: 'PPF', images: ['/audirs3blck1.jpg', '/audirs3blck2.jpg', '/audirs3blck3.jpg'], description: 'This black Audi RS3 was finished in AveroPRO HyperGloss, our self-healing clear paint protection film. Covering the high-impact front end and beyond, the film shields the RS3\'s factory paint from stone chips and swirl marks while deepening its gloss. A popular choice for Audi RS3 PPF in Sydney, it keeps this performance sedan looking showroom fresh.' },
    { id: 15, title: 'Audi RS3 Grey AveroPRO HyperGloss PPF', type: 'PPF', images: ['/audirs3grey1.jpg', '/audirs3grey2.jpg', '/audirs3grey3.jpg'], description: 'This grey Audi RS3 received full AveroPRO HyperGloss clear PPF protection. The self-healing film guards the paint against road debris, light scratches and UV fade, preserving the RS3\'s sharp factory finish. Ideal Audi RS3 paint protection for owners who want lasting defence without changing the look of the car.' },
    { id: 16, title: 'Ford Ranger Raptor AveroPRO HyperGloss PPF', type: 'PPF', images: ['/fordrap1.jpg', '/fordrap2.jpg', '/fordrap3.jpg'], description: 'This Ford Ranger Raptor was protected with AveroPRO HyperGloss clear PPF, perfect for a vehicle built to tackle gravel, trails and highway driving. The film absorbs stone chips and abrasions across the most exposed panels, keeping the Raptor\'s paint intact. A smart choice for Ford Ranger Raptor PPF given how much debris these utes encounter.' },
    { id: 17, title: 'Honda Civic Type R AveroPRO HyperGloss PPF', type: 'PPF', images: ['/hondaciv1.png', '/hondaciv2.jpeg', '/hondaciv3.jpeg'], description: 'This Honda Civic Type R was finished in AveroPRO HyperGloss self-healing clear PPF. The film protects the Type R\'s iconic bodywork from stone chips, swirl marks and everyday wear while enhancing its gloss. Honda Civic Type R PPF is a favourite among enthusiasts wanting to keep their hot hatch pristine.' },
    { id: 18, title: 'Hyundai Tucson R AveroPRO HyperGloss PPF', type: 'PPF', images: ['/tucson1.jpg', '/tucson2.jpg', '/tucson3.jpg'], description: 'This Hyundai Tucson received full AveroPRO HyperGloss clear paint protection film. As a family SUV that clocks up plenty of kilometres, the Tucson benefits from PPF\'s defence against chips, scratches and contaminants. Durable, self-healing Hyundai Tucson PPF that keeps the daily driver looking new for longer.' },
    { id: 19, title: 'INEOS Grenadier AveroPRO HyperGloss PPF', type: 'PPF', images: ['/ineosg1.jpg', '/ineosg2.jpg', '/ineosg3.jpg'], description: 'This rugged INEOS Grenadier was protected with AveroPRO HyperGloss clear PPF. Built for off-road adventure, the Grenadier faces gravel, branches and trail debris, making paint protection film genuinely worthwhile. The self-healing layer keeps this 4x4\'s bodywork protected wherever it goes.' },
    { id: 20, title: 'Lexus IS200 AveroPRO HyperGloss PPF', type: 'PPF', images: ['/is2001.png', '/is2002.jpeg', '/is2003.jpeg'], description: 'This Lexus IS200 was finished in AveroPRO HyperGloss self-healing clear paint protection film. The film preserves the Lexus\'s elegant factory paint against stone chips, swirls and UV exposure while adding depth and gloss. Quality Lexus IS PPF for owners who value a flawless finish.' },
    { id: 21, title: 'Lexus IC500 AveroPRO HyperGloss PPF', type: 'PPF', images: ['/ic5001.jpg', '/ic5002.jpg', '/ic5003.jpg'], description: 'This Lexus was protected with AveroPRO HyperGloss clear PPF, our premium self-healing film. It shields the paint from road debris and daily wear while keeping the high-gloss factory finish looking immaculate. A great example of Lexus PPF done with precision.' },
    { id: 22, title: 'Mercedes GLA200 AveroPRO HyperGloss PPF', type: 'PPF', images: ['/gla2001.jpg', '/gla2002.jpg', '/gla2003.jpg'], description: 'This Mercedes-Benz GLA200 received full AveroPRO HyperGloss clear paint protection film. The self-healing film protects the GLA\'s compact SUV bodywork from stone chips, scratches and environmental contaminants. Mercedes GLA PPF that keeps the three-pointed star looking its best.' },
    { id: 23, title: 'Mercedes GLC300 AveroPRO HyperGloss PPF', type: 'PPF', images: ['/glc3001.jpg', '/glc3002.jpg', '/glc3003.jpg'], description: 'This Mercedes-Benz GLC300 was finished in AveroPRO HyperGloss self-healing clear PPF. Covering the most vulnerable panels, the film guards the GLC\'s premium paint against chips and swirl marks while enhancing gloss. Premium Mercedes GLC PPF for lasting protection and shine.' },
    { id: 24, title: 'Nissan GTR R32 AveroPRO HyperGloss PPF', type: 'PPF', images: ['/r321.jpg', '/r322.jpg', '/r323.jpg'], description: 'This iconic Nissan GTR R32 was protected with AveroPRO HyperGloss clear PPF. Preserving a classic Skyline\'s paintwork is a priority for any owner, and the self-healing film defends against chips, scratches and fading. Specialist Nissan GTR R32 PPF to protect a true legend.' },
    { id: 25, title: 'Nissan GTR R35 AveroPRO HyperGloss PPF', type: 'PPF', images: ['/r351.jpg', '/r352.jpg', '/r353.jpg'], description: 'This Nissan GTR R35 received full AveroPRO HyperGloss self-healing clear paint protection film. Godzilla\'s aggressive bodywork is shielded from stone chips and road debris while the film deepens the paint\'s gloss. Nissan GTR R35 PPF built to protect serious performance.' },
    { id: 26, title: 'Porsche 992.2 GT3 AveroPRO HyperGloss PPF', type: 'PPF', images: ['/9221.jpg', '/9222.jpg', '/9223.jpg'], description: 'This Porsche 992.2 GT3 was finished in AveroPRO HyperGloss clear PPF, the ultimate protection for a track-focused machine. The self-healing film guards the GT3\'s paint from stone chips at speed while preserving its flawless factory finish. Porsche GT3 PPF for owners who demand the very best.' },
    { id: 27, title: 'Subaru Impreza STI AveroPRO HyperGloss PPF', type: 'PPF', images: ['/imprez1.png', '/imprez2.jpeg'], description: 'This Subaru Impreza STI was protected with AveroPRO HyperGloss self-healing clear PPF. A rally-bred icon deserves proper protection, and the film shields the STI\'s paint from chips, scratches and wear. Subaru Impreza STI PPF that keeps this enthusiast favourite looking sharp.' },
    { id: 28, title: 'Subaru WRX AveroPRO HyperGloss PPF', type: 'PPF', images: ['/sub1.jpg', '/sub2.jpg', '/sub3.jpg'], description: 'This Subaru WRX received full AveroPRO HyperGloss clear paint protection film. Built for spirited driving, the WRX benefits from PPF\'s defence against stone chips and road debris across its most exposed panels. Durable Subaru WRX PPF for lasting protection and gloss.' },
    { id: 29, title: 'Tesla Model Y Grey AveroPRO HyperGloss PPF', type: 'PPF', images: ['/tgrey1.jpg', '/tgrey2.jpg', '/tgrey3.jpg'], description: 'This grey Tesla Model Y was finished in AveroPRO HyperGloss self-healing clear PPF. Tesla\'s soft factory paint is particularly prone to chips and swirls, making PPF a smart investment. Tesla Model Y PPF that protects the paint while keeping its clean factory look.' },
    { id: 30, title: 'Tesla Model Y Grey AveroPRO Matte PPF', type: 'Colour Wrap', images: ['/greym1.jpg', '/greym2.jpg', '/greym3.jpg'], description: 'This Tesla Model Y was transformed with AveroPRO Matte PPF, converting its finish to a sleek satin look while adding full paint protection. The film delivers a stealthy matte aesthetic and self-healing defence against chips and scratches in one. A standout example of Tesla Model Y matte PPF.' },
    { id: 31, title: 'Tesla Model Y Rose Gold AveroPRO Spectral PPF', type: 'Colour Wrap', images: ['/rose1.jpg', '/rose2.jpg', '/rose3.jpg'], description: 'This Tesla Model Y was finished in AveroPRO Spectral coloured PPF in a striking rose gold. Spectral combines a full colour change with genuine paint protection, so the Model Y gets a unique, head-turning finish plus self-healing defence against chips and wear. Custom Tesla Model Y coloured PPF at its finest.' },
    { id: 32, title: 'Toyota GR Landcruiser AveroPRO HyperGloss PPF', type: 'PPF', images: ['/grland1.jpg', '/grland2.jpg', '/grland3.jpg'], description: 'This Toyota Landcruiser was protected with AveroPRO HyperGloss clear PPF, ideal for a vehicle built to tackle tough terrain. The self-healing film absorbs stone chips and abrasions across the bodywork, keeping the Landcruiser\'s paint protected on and off road. Rugged Toyota Landcruiser PPF for serious adventures.' },
    { id: 33, title: 'Volkswagen T-Roc R AveroPRO HyperGloss PPF', type: 'PPF', images: ['/troc1.jpg', '/troc2.jpg', '/troc3.jpg'], description: 'This Volkswagen T-Roc R received full AveroPRO HyperGloss self-healing clear paint protection film. The film shields the compact performance SUV\'s paint from chips, swirls and contaminants while enhancing gloss. Volkswagen T-Roc R PPF that keeps this hot SUV looking factory fresh.' },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToPreviousImage = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="flex flex-col">
            <div className="relative rounded-2xl overflow-hidden mb-4 h-64 bg-gray-900">
                {project.images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                        alt={`${project.title} - Image ${index + 1}`}
                    />
                ))}

                {project.images.length > 1 && (
                    <>
                        <button
                            onClick={goToPreviousImage}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
                            aria-label="Previous image"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={goToNextImage}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
                            aria-label="Next image"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>

                        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1.5 z-10">
                            {project.images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    className={`w-1.5 h-1.5 rounded-full transition-all ${
                                        index === currentImageIndex
                                            ? 'bg-white w-6'
                                            : 'bg-white/50 hover:bg-white/75'
                                    }`}
                                    aria-label={`Go to image ${index + 1}`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>

            <p className="text-gray-400 text-sm mb-1">{project.type}</p>
            <h3 className="text-white text-xl font-bold font-michroma">{project.title}</h3>
            {project.description && (
                <button
                    onClick={() => setShowModal(true)}
                    className="mt-3 self-start text-white text-sm font-michroma tracking-[0.1rem] underline hover:opacity-70 transition-opacity"
                >
                    READ MORE
                </button>
            )}

            {showModal && project.description && (
                <div
                    className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-6"
                    onClick={() => setShowModal(false)}
                >
                    <div
                        className="bg-neutral-950 border border-gray-700 rounded-2xl max-w-lg w-full p-8 relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                            aria-label="Close"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <p className="text-gray-400 text-sm mb-2">{project.type}</p>
                        <h3 className="text-white text-2xl font-bold font-michroma mb-4 pr-8">{project.title}</h3>
                        <p className="text-gray-300 leading-relaxed">{project.description}</p>
                        
                            href="/contact"
                            className="inline-block mt-6 bg-white text-black font-michroma text-sm tracking-[0.15rem] px-6 py-3 hover:opacity-80 transition-opacity font-bold"
                        >
                            GET A QUOTE
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

const ProjectsPage: React.FC = () => {
    const [filter, setFilter] = useState<'All' | 'PPF' | 'Colour Wrap'>('All');

    useEffect(() => {
        document.title = "Our Work | PPF & Ceramic Coating Projects | Avero PPF Sydney";

        const metaDescription = document.querySelector('meta[name="description"]');
        const descText = "Browse Avero's recent paint protection film and coloured PPF projects across Sydney, from Audi RS3 and Nissan GTR to Tesla Model Y and Porsche GT3, all finished in AveroPRO film.";
        if (metaDescription) {
            metaDescription.setAttribute('content', descText);
        } else {
            const meta = document.createElement('meta');
            meta.name = 'description';
            meta.content = descText;
            document.head.appendChild(meta);
        }

        window.scrollTo(0, 0)
    }, [])

    const filteredProjects = filter === 'All' 
        ? projects 
        : projects.filter(project => project.type === filter);

    return (
        <div className="bg-black min-h-screen border-gray-900 border-t-1">
            {/* Header Section */}
            <section className="pt-32 pb-16 px-6">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl sm:text-6xl font-bold tracking-wider text-white font-michroma mb-6">
                        Projects
                    </h1>
                    <p className="text-neutral-300 text-lg mb-12">
                        Take a look at some of our recent work.
                    </p>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        <button
                            onClick={() => setFilter('All')}
                            className={`px-8 py-3 rounded-lg font-michroma text-sm tracking-wider transition-all ${
                                filter === 'All'
                                    ? 'bg-white text-black'
                                    : 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-black'
                            }`}
                        >
                            ALL
                        </button>
                        <button
                            onClick={() => setFilter('Colour Wrap')}
                            className={`px-8 py-3 rounded-lg font-michroma text-sm tracking-wider transition-all ${
                                filter === 'Colour Wrap'
                                    ? 'bg-white text-black'
                                    : 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-black'
                            }`}
                        >
                            COLOUR WRAP
                        </button>
                        <button
                            onClick={() => setFilter('PPF')}
                            className={`px-8 py-3 rounded-lg font-michroma text-sm tracking-wider transition-all ${
                                filter === 'PPF'
                                    ? 'bg-white text-black'
                                    : 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-black'
                            }`}
                        >
                            PAINT PROTECTION FILM (PPF)
                        </button>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map(project => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectsPage;

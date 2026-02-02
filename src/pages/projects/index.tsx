import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../../App.css'

interface Project {
    id: number;
    title: string;
    type: 'PPF' | 'Colour Wrap';
    images: string[];
}

const projects: Project[] = [
    // PPF Projects
    { id: 1, title: 'BMW X4 M Competition Matte Black PPF', type: 'PPF', images: ['/car1-1.jpg', '/car1-2.jpg', '/car1-3.jpg'] },
    { id: 2, title: 'Tesla Model Y Clear Gloss PPF', type: 'PPF', images: ['/car2-1.jpg', '/car2-2.jpg', '/car2-3.jpg'] },
    { id: 3, title: 'BMW Z4 M40i Clear Gloss PPF', type: 'PPF', images: ['/car3-1.jpg', '/car3-2.jpg', '/car3-3.jpg'] },
    { id: 4, title: 'Lexus IS300 Clear Gloss PPF', type: 'PPF', images: ['/car4-1.jpg', '/car4-2.jpg', '/car4-3.jpg'] },
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
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
        </div>
    );
};

const ProjectsPage: React.FC = () => {
    const [filter, setFilter] = useState<'All' | 'PPF' | 'Colour Wrap'>('All');

    useEffect(() => {
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

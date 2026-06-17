import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { AREA_TEXT_MAP } from "../data/areaData";

const SERVICE_AREAS = [
 "taren-point",
 "miranda",
 "caringbah",
 "cronulla",
 "sans-souci",
 "sylvania-waters",
 "hurstville",
 "sutherland",
 "gymea",
 "sydney",
];

const STANDARD_TEXT = {
 mainTitle: "Why Choose Avero for Paint Protection Film & Ceramic Coating?",
 paragraph1: "Avero is South Sydney's trusted specialist in Paint Protection Film (PPF) and Ceramic Coating. We work with car lovers, collectors and everyday drivers who want their vehicle protected and looking its best long term. Every application is done with precision, care and the highest quality materials.",
 subHeading1: "Paint Protection Film (PPF)",
 subParagraph1: "PPF is a transparent film that protects your vehicle's paint from stone chips, road debris, swirl marks and scratches. It acts as a second skin, keeping your paintwork looking fresh for years. All of our PPF comes with a 10-year manufacturer warranty from Avery Dennison. Our films are available in three stunning finishes: Clear High Gloss, Satin, and Smooth Matte. Each is self-healing and designed to withstand harsh Australian conditions. PPF also helps maintain the resale value of your vehicle. It protects the original factory paint, making your car more appealing to future buyers.",
 subHeading2: "Ceramic Coating",
 subParagraph2: `Ceramic Coating adds a slick, glossy layer that repels water, dust, UV rays, and environmental contaminants. It makes regular washing easier and keeps your car looking freshly detailed for longer.
 It enhances colour depth and protects against stains caused by bird droppings, tree sap, or bug splatter. Ceramic Coating also works perfectly on top of PPF for added gloss and durability.`,
 subHeading3: "Our Process",
};

const PROCESS_LIST = [
 {
 step: "Initial Vehicle Prep",
 desc: "Full wash and surface decontamination to remove dirt, grime, and iron particles.",
 },
 {
 step: "Paint Inspection",
 desc: "We check the paintwork for defects. If correction is required, we coordinate with professional detailers before application.", 
 },
 {
 step: "Precision-Cut Film",
 desc: "For PPF jobs, film is digitally plotted using vehicle-specific templates. No blades are used on your car's surface.",
 },
 {
 step: "Professional Application",
 desc: "Our trained team installs the PPF or applies the ceramic coating in a clean, controlled environment.",
 },
 {
 step: "Final Quality Check",
 desc: "We inspect all areas to ensure a seamless finish and complete protection.",
 },
 {
 step: "Customer Handover",
 desc: "After installation, your vehicle is returned in showroom condition.",
 },
 {
 step: "Post-Service Support",
 desc: "You'll have 3 weeks to return for minor touch-ups or adjustments if needed.",
 }
];

export function AreaServed(): React.ReactElement {
 const area = useParams().area;
 const areaData = area ? AREA_TEXT_MAP[area] : undefined;

 useEffect(() => {
 if (!area || !areaData) return;

 const prettyArea = area.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
 document.title = areaData.seoTitle || `Paint Protection Film ${prettyArea} | PPF & Ceramic Coating | Avero PPF`;

 const descText = areaData.seoDescription || `Paint Protection Film and ceramic coating for ${prettyArea} drivers. Premium self-healing PPF with a 10-year warranty, fitted in our South Sydney workshop. Get a quote.`;
 const metaDescription = document.querySelector('meta[name="description"]');
 if (metaDescription) {
 metaDescription.setAttribute("content", descText);
 } else {
 const meta = document.createElement("meta");
 meta.name = "description";
 meta.content = descText;
 document.head.appendChild(meta);
 }

 const existing = document.getElementById("area-jsonld");
 if (existing) existing.remove();
 const script = document.createElement("script");
 script.type = "application/ld+json";
 script.id = "area-jsonld";
 const graph: any[] = [
 {
 "@type": "Service",
 "name": `Paint Protection Film in ${prettyArea}`,
 "serviceType": "Paint Protection Film and Ceramic Coating",
 "areaServed": { "@type": "Place", "name": `${prettyArea}, New South Wales` },
 "provider": {
 "@type": "AutoBodyShop",
 "name": "Avero PPF",
 "telephone": "+61415081546",
 "email": "info@averoppf.com.au",
 "address": {
 "@type": "PostalAddress",
 "addressLocality": "Caringbah",
 "addressRegion": "NSW",
 "addressCountry": "AU"
 }
 }
 }
 ];
 if (areaData.faqs && areaData.faqs.length) {
 graph.push({
 "@type": "FAQPage",
 "mainEntity": areaData.faqs.map((f) => ({
 "@type": "Question",
 "name": f.q,
 "acceptedAnswer": { "@type": "Answer", "text": f.a }
 }))
 });
 }
 script.text = JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
 document.head.appendChild(script);

 window.scrollTo(0, 0);
 }, [area, areaData]);

 if (!area || !SERVICE_AREAS.includes(area) || !areaData) {
 return <Navigate to="/" />;
 }

 return (
 <div>
 <section className="relative lg:h-[calc(90vh)] sm:h-full flex items-center justify-center bg-cover bg-center bg-[url('/ppfHeader.jpg')] py-[5%]">
 <div className="absolute inset-0 bg-black/60 h-full"></div>
 <div className="relative z-10 text-center max-w-6xl flex flex-col items-center mx-auto px-6 pt-[15vh]">
 {/* Main Title */}
 <h1
 className="text-2xl sm:text-4xl font-michroma text-center text-white mb-6"
 >
 {areaData.mainTitle}
 </h1>

 {/* Subtitle (optional) */}
 {areaData.mainSubtitle && (
 <h2 className="text-lg sm:text-xl font-michroma text-gray-300 text-center mb-8">
 {areaData.mainSubtitle}
 </h2>
 )}
 </div>
 </section>


 <div className="bg-black text-white min-h-screen px-4 py-[20vh] sm:px-8 font-sans">

 {/* AREA TEXT (excluding last paragraph) */}
 <div className="max-w-[60vw] mx-auto space-y-6 text-gray-300 leading-relaxed">
 {areaData.localIntroHeading && (
 <h2 className="text-xl sm:text-2xl font-michroma text-white">{areaData.localIntroHeading}</h2>
 )}
 {areaData.localIntroBody && <p>{areaData.localIntroBody}</p>}
 <p>{areaData.mainLocationParagraph1}</p>
 <p>{areaData.mainLocationParagraph2}</p>
 {areaData.whyHereHeading && (
 <h2 className="text-xl sm:text-2xl font-michroma text-white pt-4">{areaData.whyHereHeading}</h2>
 )}
 {areaData.whyHereBody && <p>{areaData.whyHereBody}</p>}
 {areaData.distanceNote && (
 <p className="text-gray-400 italic border-l-2 border-neutral-600 pl-4">{areaData.distanceNote}</p>
 )}
 <p>
 Explore our full <a href="/services/ppf" className="text-white underline hover:opacity-70">Paint Protection Film</a> and <a href="/services/ceramic" className="text-white underline hover:opacity-70">Ceramic Coating</a> services, or if you drive a Tesla, see our dedicated <a href="/tesla-ppf" className="text-white underline hover:opacity-70">Tesla PPF</a> page.
 </p>
 </div>

 {/* STANDARD TEXT */}
 <div className="mt-[15vh] max-w-[80vw] mx-auto space-y-6">
 <h2 className="text-xl sm:text-2xl font-michroma text-white">
 {STANDARD_TEXT.mainTitle}
 </h2>
 <p className="text-gray-300">{STANDARD_TEXT.paragraph1}</p>

 {/* PPF Section - column on small/medium, row on desktop (lg+) */}
 <div className="mt-8 flex flex-col lg:flex-row items-center gap-6 mb-12">
 {/* Text */}
 <div className="lg:w-[62vw] w-full">
 <h3 className="text-lg sm:text-xl font-michroma text-white mt-2">
 {STANDARD_TEXT.subHeading1}
 </h3>
 <p className="text-gray-300 mt-3">{STANDARD_TEXT.subParagraph1}</p>
 </div>
 </div>

 {/* Image */}
 <div className="w-full sm:px-[8vw] flex justify-center items-center">
 <div className="w-full h-[65vh] rounded-xl overflow-hidden shadow-lg">
 <img
 src={areaData.areaImage}
 alt={`PPF and Ceramic Coating image for ${area}`}
 className={`w-full h-full ${area !== "sutherland" ? "object-cover" : "object-contain"}`}
 />
 </div>
 </div>


 {/* Ceramic Coating Section - column on small/medium, reversed row on desktop (lg+) */}
 <div className="flex flex-col lg:flex-row-reverse items-center gap-6 mb-[15vh] text-right">
 {/* Text */}
 <div className="lg:w-[62vw] w-full">
 <h3 className="text-lg sm:text-xl font-michroma text-white mt-2">
 {STANDARD_TEXT.subHeading2}
 </h3>
 <p className="text-gray-300 mt-3">{STANDARD_TEXT.subParagraph2}</p>
 </div>
 </div>

 <div className="border-b-1 border-neutral-500"></div>

 <div className="mt-[15vh]">
 <h3 className="text-3xl sm:text-xl font-michroma text-white mt-6 w-full text-center">
 {STANDARD_TEXT.subHeading3}
 </h3>
 </div>
 </div>

 {/* PROCESS LIST */}
 <div className="max-w-3xl mx-auto mt-8 space-y-4">
 {PROCESS_LIST.map((item, idx) => (
 <div
 key={idx}
 className="border border-gray-700 rounded-lg p-4 hover:border-gray-500 transition-all"
 >
 <h4 className="text-lg font-michroma text-white">{item.step}</h4>
 <p className="text-gray-400 mt-1">{item.desc}</p>
 </div>
 ))}
 </div>

 {areaData.faqs && areaData.faqs.length > 0 && (
 <div className="mt-[15vh] max-w-3xl mx-auto">
 <h2 className="text-2xl sm:text-3xl font-michroma text-white text-center mb-8">Frequently Asked Questions</h2>
 <div className="space-y-4">
 {areaData.faqs.map((f, idx) => (
 <div key={idx} className="border border-gray-700 rounded-lg p-5">
 <h3 className="text-lg font-michroma text-white mb-2">{f.q}</h3>
 <p className="text-gray-400">{f.a}</p>
 </div>
 ))}
 </div>
 </div>
 )}

 <div className="mt-[15vh] max-w-[50vw] mx-auto space-y-6 text-gray-300 leading-relaxed">
 <p>{areaData.mainLocationLastParagraph}</p>
 <div className="flex justify-center pt-6">
 <a href="/contact" className="inline-block bg-white text-black font-michroma text-sm tracking-[0.15rem] px-8 py-4 hover:opacity-80 transition-opacity font-bold">
 GET A QUOTE
 </a>
 </div>
 </div>
 </div>
 </div>
 );
}

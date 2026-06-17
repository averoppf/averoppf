import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";

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

type AreaFaq = { q: string; a: string };
type AreaData = {
 mainTitle: string;
 mainSubtitle?: string;
 mainLocationParagraph1: string;
 mainLocationParagraph2: string;
 mainLocationLastParagraph: string;
 areaImage: string;
 seoTitle?: string;
 seoDescription?: string;
 localIntroHeading?: string;
 localIntroBody?: string;
 whyHereHeading?: string;
 whyHereBody?: string;
 distanceNote?: string;
 faqs?: AreaFaq[];
};

const AREA_TEXT_MAP: Record<string, AreaData> = {
 "taren-point": {
 mainTitle: "Paint Protection Film (PPF) in Taren Point",
 mainSubtitle: "Premium PPF and Ceramic Coating Minutes from Taren Point",
 seoTitle: "Paint Protection Film Taren Point | PPF & Ceramic Coating | Avero PPF",
 seoDescription: "Paint Protection Film and ceramic coating for Taren Point drivers. Premium self-healing PPF with a 10-year warranty, fitted minutes away in our Caringbah workshop. Get a quote.",
 localIntroHeading: "PPF and Ceramic Coating for Taren Point Drivers",
 localIntroBody: "Taren Point sits right on the water at the northern edge of the Sutherland Shire, a suburb defined by its waterfront, its busy commercial and industrial precinct along Taren Point Road, and the constant flow of work vehicles, trade utes and daily commuters crossing the Captain Cook Bridge. That mix of coastal exposure and high-traffic roads is hard on paintwork: salt-laden air drifting off Botany Bay, sun beating down on exposed parking, and stone chips thrown up on the industrial roads all take a toll. Avero is based just a few minutes south in Caringbah, making us the closest dedicated Paint Protection Film specialist to Taren Point.",
 whyHereHeading: "Why Taren Point Vehicles Need Paint Protection",
 whyHereBody: "If your car lives in Taren Point, it faces a specific combination of threats. The proximity to Botany Bay means salt air that accelerates oxidation and dulls paint over time. The industrial roads around Taren Point Road and Box Road carry trucks and machinery that fling gravel and debris, the leading cause of stone chips on bonnets and bumpers. And with limited covered parking around the commercial precinct, vehicles cop hours of direct UV that fades and degrades clear coat. A quality PPF layer absorbs the impacts, while a ceramic coating adds a hydrophobic, UV-resistant barrier, the two together giving Taren Point cars genuine year-round defence.",
 distanceNote: "Taren Point to our Caringbah workshop is roughly a 5-minute drive via Taren Point Road, making drop-off and pickup easy for local residents and businesses.",
 mainLocationParagraph1: "Taren Point is known for its mix of commercial workshops, coastal drives, and tightly knit automotive communities, which makes protecting your vehicle from the elements and daily wear essential. At Avero, we are located just minutes away and offer precision-installed Paint Protection Film and Ceramic Coating services trusted by local enthusiasts and professionals alike.",
 mainLocationParagraph2: "Whether you are driving through the industrial zones or parking along the waterfront, Avero helps you maintain your vehicle's pristine finish with tailored PPF packages that suit both recreational and commercial vehicles. Our certified team delivers expert care, giving Taren Point drivers peace of mind.",
 mainLocationLastParagraph: "At Avero, every car is treated with care, whether it is your daily driver or your pride and joy. We work with vehicles of all types, commercial or recreational, and offer tailored solutions that stand the test of time. If you are in Taren Point and want to protect your vehicle, get in touch for a tailored quote.",
 areaImage: "/area1.avif",
 faqs: [
 {
 q: "How far is Avero from Taren Point?",
 a: "Our workshop is in Caringbah, around a 5-minute drive from Taren Point via Taren Point Road. It is the closest dedicated PPF and ceramic coating specialist to the area.",
 },
 {
 q: "Do you protect commercial and work vehicles from Taren Point?",
 a: "Yes. Taren Point has a large commercial and industrial precinct, and we regularly apply PPF and ceramic coating to work utes, vans and fleet vehicles as well as private and enthusiast cars.",
 },
 {
 q: "Is PPF worth it given Taren Point's coastal location?",
 a: "Absolutely. The salt air off Botany Bay and debris from the industrial roads make Taren Point harder on paint than many inland suburbs, so a protective film and coating deliver real, lasting value here.",
 },
 ],
 },
 "miranda": {
 mainTitle: "Quality Paint Protection Film (PPF) and Ceramic Coating in Miranda",
 mainLocationParagraph1: "Miranda, a vibrant hub in the Sutherland Shire, is full of drivers who care about maintaining the appearance and value of their vehicles. Whether you're regularly parked near Westfield, navigating tight car parks, or just want to keep your paintwork flawless, protecting your car from wear and tear is essential.",
 mainLocationParagraph2: "Avero, located just minutes away in Caringbah, provides professional Paint Protection Film (PPF) and Ceramic Coating services to car owners in Miranda. Our team is trained by industry leaders including 3M, XPEL and Avery Dennison, and we use advanced, blade-free installation techniques to ensure a seamless finish every time.",
 mainLocationLastParagraph: "Whether you're in Miranda or nearby suburbs, Avero offers industry-standard protection for recreational and commercial vehicles alike. We pride ourselves on attention to detail and personalised service, because we treat every car as if it were our own.",
 areaImage: "/area2.avif",
 },
 "caringbah": {
 mainTitle: "Premium Paint Protection Film (PPF) and Ceramic Coating in Caringbah",
 mainSubtitle: "Your Trusted Automotive Surface Protection Specialists in Caringbah, NSW",
 mainLocationParagraph1: "As a fast-growing hub for automotive enthusiasts and local businesses, Caringbah is home to countless daily drivers and weekend showpieces. With frequent exposure to harsh UV rays, sea air, and urban wear and tear, protecting your vehicle's exterior has never been more important.",
 mainLocationParagraph2: "Located right here in Caringbah, Avero delivers expert Paint Protection Film (PPF) and Ceramic Coating services using the highest quality materials and cutting-edge, blade-free installation techniques. Trained by global leaders like 3M, XPEL and Avery Dennison, our team is passionate about providing long-lasting protection for vehicles of all types, from commercial fleets to luxury performance cars.",
 mainLocationLastParagraph: "If you're a local resident or business in Caringbah seeking trusted automotive surface protection, Avero is your local go-to for premium PPF and ceramic coatings. Every vehicle is treated with the same care and pride we'd give our own.",
 areaImage: "/area3.avif",
 },
 "cronulla": {
 mainTitle: "The Best Paint Protection Film (PPF) and Ceramic Coating in Cronulla",
 mainSubtitle: "Protect Your Vehicle from the Coastal Elements in Cronulla",
 mainLocationParagraph1: "Cronulla's beautiful beaches and coastal roads make it a hotspot for drivers who love their cars, but the salt air, sand, and strong UV rays can take a toll on your vehicle's paintwork. That's where we come in.",
 mainLocationParagraph2: "Located just minutes from Cronulla, Avero offers expert Paint Protection Film (PPF) and Ceramic Coating services for drivers who want lasting protection without compromising on aesthetics. Whether you own a high-performance vehicle, daily driver or weekend cruiser, we use precision blade-free installation methods and industry-leading films and coatings to keep your car looking showroom fresh.",
 mainLocationLastParagraph: "If you live in Cronulla and want a professional solution to protect your car from the beachside environment, Avero's PPF and Ceramic Coating services are trusted by car owners across the Sutherland Shire.",
 areaImage: "/area4.avif",
 },
 "sans-souci": {
 mainTitle: "Premium Paint Protection Film (PPF) and Ceramic Coating in Sans Souci",
 mainLocationParagraph1: "Sans Souci's coastal lifestyle is second to none, but if you park near the water or drive frequently along busy roads, your car's paint can quickly suffer from sun exposure, salt air, and road debris. At Avero, we specialise in Paint Protection Film (PPF) and Ceramic Coating to preserve your car's factory finish and protect it for years to come.",
 mainLocationParagraph2: "Just a short drive from Sans Souci, our Caringbah-based facility uses the latest in precision-cut film technology and no-blade installation to ensure your vehicle gets the care it deserves, whether it's a daily runaround, luxury model, or commercial vehicle.",
 mainLocationLastParagraph: "If you're located in Sans Souci and looking for expert vehicle protection, Avero's team of trained technicians are ready to protect your investment with premium materials and proven techniques.",
 areaImage: "/area5.avif",
 },
 "sylvania-waters": {
 mainTitle: "Top Notch Paint Protection Film (PPF) and Ceramic Coating in Sylvania Waters",
 mainSubtitle: "Luxury-Level Vehicle Protection, Right Near Sylvania Waters",
 mainLocationParagraph1: "In a suburb known for prestige and waterside living, your vehicle deserves protection that matches its surroundings. At Avero, we offer high-end Paint Protection Film (PPF) and Ceramic Coating solutions to shield your vehicle from environmental damage, swirl marks, stone chips, and more, all from our fully equipped facility just minutes from Sylvania Waters.",
 mainLocationParagraph2: "Our expertly trained team uses cutting-edge tools, software-guided templates, and a no-blade installation method to apply PPF with precision - leaving no edge lines, gaps, or blemishes. Whether it's a high-performance coupe, an everyday SUV, or a commercial work vehicle, we treat every car with the care it deserves.",
 mainLocationLastParagraph: "For discerning car owners in Sylvania Waters, Avero delivers precision workmanship, elite materials, and a passion for automotive care. Reach out today to discuss how we can help protect your vehicle for the long term.",
 areaImage: "/area6.avif",
 },
 "hurstville": {
 mainTitle: "The Best Paint Protection Film (PPF) and Ceramic Coating in Hurstville",
 mainSubtitle: "Elite Vehicle Protection for Hurstville Locals",
 mainLocationParagraph1: "Located just a short drive from Hurstville, Avero is South Sydney's trusted destination for premium Paint Protection Film (PPF) and Ceramic Coating services. Whether you're driving a daily commuter, luxury sedan, or commercial vehicle, we specialise in preserving your vehicle's finish and boosting its long-term value.",
 mainLocationParagraph2: "With training from industry leaders like 3M, Avery Dennison, and XPEL, our team applies every film with expert precision using advanced, software-cut templates and a blade-free installation method to ensure flawless, edge-free protection. We combine industry-leading materials with a commitment to excellence to deliver finishes that look as good as they perform.",
 mainLocationLastParagraph: "From luxury rides to hardworking fleet vehicles, Hurstville drivers trust Avero to protect and elevate their investment. Get in touch to schedule a consultation or receive a custom quote tailored to your car's needs.",
 areaImage: "area7.avif",
 },
 "sutherland": {
 mainTitle: "Premium Paint Protection Film (PPF) and Ceramic Coating in Sutherland",
 mainSubtitle: "Protect Your Vehicle with Precision in Sutherland",
 mainLocationParagraph1: "For vehicle owners in Sutherland seeking high-quality Paint Protection Film (PPF) and Ceramic Coating, Avero offers professional-grade solutions trusted across South Sydney. Just minutes from the Sutherland town centre, our workshop provides premium protection for everything from daily drivers to enthusiast and commercial vehicles.",
 mainLocationParagraph2: "With advanced training from industry leaders like 3M, XPEL and Avery Dennison, our team delivers expert installation with a meticulous, blade-free method. We use precision software and high-grade materials to ensure your vehicle receives flawless coverage, every time.",
 mainLocationLastParagraph: "At Avero, we treat every car like our own, with precision, pride, and premium results. Whether you're in Sutherland or surrounding suburbs, reach out for a tailored quote or book a consultation today.",
 areaImage: "/area8.avif",
 },
 "gymea": {
 mainTitle: "Quality Paint Protection Film (PPF) and Ceramic Coating in Gymea",
 mainSubtitle: "Expert Car Protection Services Just Minutes from Gymea",
 mainLocationParagraph1: "At Avero, we provide professional Paint Protection Film (PPF) and Ceramic Coating services for vehicle owners in Gymea who want to preserve their car's finish and enhance long-term value. Located nearby in Caringbah, we offer easy access and top-tier protection trusted by daily drivers, weekend enthusiasts, and business owners alike.",
 mainLocationParagraph2: "Our team is trained by industry leaders like Avery Dennison, 3M, and XPEL, using a no-blade, precision-cut method to guarantee flawless results without the risk of damage. Whether it's a commercial fleet vehicle or a high-performance car, we deliver the protection it deserves.",
 mainLocationLastParagraph: "Whether you're protecting your new car or restoring the finish of your current vehicle, Avero is your trusted choice for expert paint protection in Gymea and surrounding suburbs.",
 areaImage: "/area9.avif",
 },
 "sydney": {
 mainTitle: "Premium Paint Protection Film (PPF) and Ceramic Coating in Sydney",
 mainSubtitle: "Elite Vehicle Protection Services 30mins from the CBD",
 mainLocationParagraph1: "Avero delivers professional-grade Paint Protection Film (PPF) and Ceramic Coating services to vehicle owners across Sydney. Whether you're driving a luxury sedan, 4WD, EV, or high-performance sports car, our studio based in Caringbah offers precision protection that meets the expectations of Sydney's car enthusiasts and professionals alike.",
 mainLocationParagraph2: "We are trained and certified by leaders such as 3M, Avery Dennison, and XPEL, and use precision-cut software with blade-free techniques to ensure a seamless, safe, and immaculate finish. From recreational vehicles to commercial fleets, Avero is your partner in long-term paint preservation and aesthetic enhancement.",
 mainLocationLastParagraph: "Sydney drivers demand quality, and Avero delivers it. Get in touch today to book your vehicle for industry-leading protection and care.",
 areaImage: "/area10.avif",
 }
};

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

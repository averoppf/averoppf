// import { Helmet } from "react-helmet";
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
  paragraph1: "Avero is South Sydney’s trusted specialist in Paint Protection Film (PPF) and Ceramic Coating. We work with car lovers, collectors and everyday drivers who want their vehicle protected and looking its best long term. Every application is done with precision, care and the highest quality materials.",
  subHeading1: "Paint Protection Film (PPF)",
  subParagraph1: "PPF is a transparent film that protects your vehicle’s paint from stone chips, road debris, swirl marks and scratches. It acts as a second skin, keeping your paintwork looking fresh for years. All of our PPF comes with a 10-year manufacturer warranty from Avery Dennison. Our films are available in three stunning finishes: Clear High Gloss, Satin, and Smooth Matte. Each is self-healing and designed to withstand harsh Australian conditions. PPF also helps maintain the resale value of your vehicle. It protects the original factory paint, making your car more appealing to future buyers.",
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
    desc: "For PPF jobs, film is digitally plotted using vehicle-specific templates. No blades are used on your car’s surface.",
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
    desc: "You’ll have 3 weeks to return for minor touch-ups or adjustments if needed.",
  }
];

const AREA_TEXT_MAP: Record<string, {
  mainTitle: string;
  mainSubtitle?: string;
  mainLocationParagraph1: string;
  mainLocationParagraph2: string;
  mainLocationLastParagraph: string;
  areaImage: string;
}> = {
  "taren-point": {
    mainTitle: "Premium Paint Protection Film (PPF) and Ceramic Coating in Taren Point",
    mainLocationParagraph1: "Taren Point is known for its mix of commercial workshops, coastal drives, and tightly knit automotive communities, which makes protecting your vehicle from the elements and daily wear essential. At Avero, we’re located just minutes away and offer precision-installed Paint Protection Film and Ceramic Coating services trusted by local enthusiasts and professionals alike.",
    mainLocationParagraph2: "Whether you're driving through the industrial zones or parking along the waterfront, Avero helps you maintain your vehicle’s pristine finish with tailored PPF packages that suit both recreational and commercial vehicles. Our certified team delivers expert care, giving Taren Point drivers peace of mind.",
    mainLocationLastParagraph: "At Avero, every car is treated with care, whether it’s your daily driver or your pride and joy. We work with vehicles of all types — commercial or recreational — and offer tailored solutions that stand the test of time.",
    areaImage: "/area1.avif",
  },
  "miranda": {
    mainTitle: "Quality Paint Protection Film (PPF) and Ceramic Coating in Miranda",
    mainLocationParagraph1: "Miranda, a vibrant hub in the Sutherland Shire, is full of drivers who care about maintaining the appearance and value of their vehicles. Whether you’re regularly parked near Westfield, navigating tight car parks, or just want to keep your paintwork flawless, protecting your car from wear and tear is essential.",
    mainLocationParagraph2: "Avero, located just minutes away in Caringbah, provides professional Paint Protection Film (PPF) and Ceramic Coating services to car owners in Miranda. Our team is trained by industry leaders including 3M, XPEL and Avery Dennison, and we use advanced, blade-free installation techniques to ensure a seamless finish every time.",
    mainLocationLastParagraph: "Whether you're in Miranda or nearby suburbs, Avero offers industry-standard protection for recreational and commercial vehicles alike. We pride ourselves on attention to detail and personalised service, because we treat every car as if it were our own.",
    areaImage: "/area2.avif",
  },
  "caringbah": {
    mainTitle: "Premium Paint Protection Film (PPF) and Ceramic Coating in Caringbah",
    mainSubtitle: "Your Trusted Automotive Surface Protection Specialists in Caringbah, NSW",
    mainLocationParagraph1: "As a fast-growing hub for automotive enthusiasts and local businesses, Caringbah is home to countless daily drivers and weekend showpieces. With frequent exposure to harsh UV rays, sea air, and urban wear and tear, protecting your vehicle’s exterior has never been more important.",
    mainLocationParagraph2: "Located right here in Caringbah, Avero delivers expert Paint Protection Film (PPF) and Ceramic Coating services using the highest quality materials and cutting-edge, blade-free installation techniques. Trained by global leaders like 3M, XPEL and Avery Dennison, our team is passionate about providing long-lasting protection for vehicles of all types, from commercial fleets to luxury performance cars.",
    mainLocationLastParagraph: "If you're a local resident or business in Caringbah seeking trusted automotive surface protection, Avero is your local go-to for premium PPF and ceramic coatings. Every vehicle is treated with the same care and pride we’d give our own.",
    areaImage: "/area3.avif",
  },
  "cronulla": {
    mainTitle: "The Best Paint Protection Film (PPF) and Ceramic Coating in Cronulla",
    mainSubtitle: "Protect Your Vehicle from the Coastal Elements in Cronulla",
    mainLocationParagraph1: "Cronulla’s beautiful beaches and coastal roads make it a hotspot for drivers who love their cars, but the salt air, sand, and strong UV rays can take a toll on your vehicle’s paintwork. That’s where we come in.",
    mainLocationParagraph2: "Located just minutes from Cronulla, Avero offers expert Paint Protection Film (PPF) and Ceramic Coating services for drivers who want lasting protection without compromising on aesthetics. Whether you own a high-performance vehicle, daily driver or weekend cruiser, we use precision blade-free installation methods and industry-leading films and coatings to keep your car looking showroom fresh.",
    mainLocationLastParagraph: "If you live in Cronulla and want a professional solution to protect your car from the beachside environment, Avero’s PPF and Ceramic Coating services are trusted by car owners across the Sutherland Shire.",
    areaImage: "/area4.avif",
  },
  "sans-souci": {
    mainTitle: "Premium Paint Protection Film (PPF) and Ceramic Coating in Sans Souci",
    mainLocationParagraph1: "Sans Souci’s coastal lifestyle is second to none, but if you park near the water or drive frequently along busy roads, your car’s paint can quickly suffer from sun exposure, salt air, and road debris. At Avero, we specialise in Paint Protection Film (PPF) and Ceramic Coating to preserve your car’s factory finish and protect it for years to come.",
    mainLocationParagraph2: "Just a short drive from Sans Souci, our Caringbah-based facility uses the latest in precision-cut film technology and no-blade installation to ensure your vehicle gets the care it deserves, whether it’s a daily runaround, luxury model, or commercial vehicle.",
    mainLocationLastParagraph: "If you're located in Sans Souci and looking for expert vehicle protection, Avero’s team of trained technicians are ready to protect your investment with premium materials and proven techniques.",
    areaImage: "/area5.avif",
  },
  "sylvania-waters": {
    mainTitle: "Top Notch Paint Protection Film (PPF) and Ceramic Coating in Sylvania Waters",
    mainSubtitle: "Luxury-Level Vehicle Protection, Right Near Sylvania Waters",
    mainLocationParagraph1: "In a suburb known for prestige and waterside living, your vehicle deserves protection that matches its surroundings. At Avero, we offer high-end Paint Protection Film (PPF) and Ceramic Coating solutions to shield your vehicle from environmental damage, swirl marks, stone chips, and more, all from our fully equipped facility just minutes from Sylvania Waters.",
    mainLocationParagraph2: "Our expertly trained team uses cutting-edge tools, software-guided templates, and a no-blade installation method to apply PPF with precision — leaving no edge lines, gaps, or blemishes. Whether it’s a high-performance coupe, an everyday SUV, or a commercial work vehicle, we treat every car with the care it deserves.",
    mainLocationLastParagraph: "For discerning car owners in Sylvania Waters, Avero delivers precision workmanship, elite materials, and a passion for automotive care. Reach out today to discuss how we can help protect your vehicle for the long term.",
    areaImage: "/area6.avif",
  },
  "hurstville": {
    mainTitle: "The Best Paint Protection Film (PPF) and Ceramic Coating in Hurstville",
    mainSubtitle: "Elite Vehicle Protection for Hurstville Locals",
    mainLocationParagraph1: "Located just a short drive from Hurstville, Avero is South Sydney’s trusted destination for premium Paint Protection Film (PPF) and Ceramic Coating services. Whether you're driving a daily commuter, luxury sedan, or commercial vehicle, we specialise in preserving your vehicle’s finish and boosting its long-term value.",
    mainLocationParagraph2: "With training from industry leaders like 3M, Avery Dennison, and XPEL, our team applies every film with expert precision using advanced, software-cut templates and a blade-free installation method to ensure flawless, edge-free protection. We combine industry-leading materials with a commitment to excellence to deliver finishes that look as good as they perform.",
    mainLocationLastParagraph: "From luxury rides to hardworking fleet vehicles, Hurstville drivers trust Avero to protect and elevate their investment. Get in touch to schedule a consultation or receive a custom quote tailored to your car’s needs.",
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
    mainLocationParagraph1: "At Avero, we provide professional Paint Protection Film (PPF) and Ceramic Coating services for vehicle owners in Gymea who want to preserve their car’s finish and enhance long-term value. Located nearby in Caringbah, we offer easy access and top-tier protection trusted by daily drivers, weekend enthusiasts, and business owners alike.",
    mainLocationParagraph2: "Our team is trained by industry leaders like Avery Dennison, 3M, and XPEL, using a no-blade, precision-cut method to guarantee flawless results without the risk of damage. Whether it’s a commercial fleet vehicle or a high-performance car, we deliver the protection it deserves.",
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

  if (!area || !SERVICE_AREAS.includes(area) || !areaData) {
    return <Navigate to="/" />;
  }

  return (
    <div>
        {/* <Helmet>
            <title>Avero | Quality PPF & Ceramic Coating in Sydney</title>
            <link rel='canonical' href={ "https://www.averoppf.com.au" } />
            <meta name="description" content={"Protect your car with Sydney’s car care experts in PPF & ceramic coating. Get unbeatable shine, increased vehicle value & long-lasting protection. Trusted by locals across NSW."} />
        </Helmet> */}
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
          <p>{areaData.mainLocationParagraph1}</p>
          <p>{areaData.mainLocationParagraph2}</p>
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

        <div className="mt-[15vh] max-w-[50vw] mx-auto space-y-6 text-gray-300 leading-relaxed">
          <p>{areaData.mainLocationLastParagraph}</p>
        </div>
      </div>
    </div>
  );
}

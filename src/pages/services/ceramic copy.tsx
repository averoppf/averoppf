import { useCallback, useEffect, useRef, useState } from "react";
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
import '../../App.css'
import { ChevronDown, ChevronUp } from "lucide-react";

interface Form {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    make: string;
    model: string;
    enquiryDetails: string;
    service: string;
}

const empty: Form = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    make: '',
    model: '',
    enquiryDetails: '',
    service: ''
}

export const ContactButton = ({ text }: { text: any }) => (
        <a href="/contact" className="inline-flex items-center px-4 py-2 bg-neutral-500 text-white text-sm font-medium rounded-md hover:opacity-80 transition-opacity duration-200 focus:outline-none hover:cursor-pointer">
            {text}
        </a>
    );

export function CeramicPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const mapRef = useRef<any>(null)
    const mapContainerRef = useRef<any>(null)
    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoiYXZlcm9zb2x1dGlvbnMiLCJhIjoiY21icHhqaWVvMDl1cTJyb2x5dGE4bDVndyJ9.TS6OtL8zGEQbKvUuPFr80w'
        mapRef.current = new mapboxgl.Map({
            container: mapContainerRef.current,
            center: [151.12411012879127, -34.02491239230067],
            zoom: 15
        });

        new mapboxgl.Marker()
            .setLngLat([151.12411012879127, -34.02491239230067])
            .addTo(mapRef.current);

        return () => {
            mapRef.current.remove()
        }
    }, [])

    const [input, setInput] = useState<Form>(empty)
    const [loading, setLoading] = useState(false)

    const handleChange = useCallback((value: string, field: string) => {
        setInput((prevState) => ({ ...prevState, [field]: value }))
    }, [])

    const isValidForm = useCallback(() => {
        let valid = true
        if (input.firstName.trim() == "") {
            valid = false
        }
        if (input.lastName.trim() == "") {
            valid = false
        }
        if (input.phone.trim() == "") {
            valid = false
        }
        if (input.email.trim() == "") {
            valid = false
        }
        if (input.make.trim() == "") {
            valid = false
        }
        if (input.model.trim() == "") {
            valid = false
        }
        if (input.enquiryDetails.trim() == "") {
            valid = false
        }
        if (input.service.trim() == "") {
            valid = false
        }
        return valid
    }, [input])

    const handleSubmit = useCallback(async () => {
        setLoading(true)
        const data = new FormData()
        data.append("type", "Get-A-Quote")
        data.append("firstName", input.firstName)
        data.append("lastName", input.lastName)
        data.append("phone", input.phone)
        data.append("email", input.email)
        data.append("make", input.make)
        data.append("model", input.model)
        data.append("enquiryDetails", input.enquiryDetails)
        data.append("service", input.service)
        const res = await fetch("https://formspree.io/f/xanjellj", {
            method: "POST",
            headers: {
                'Accept': 'application/json'
            },
            body: data
        })
        setLoading(false)
        if (res.ok) {
            alert("Successful submission")
            setInput(empty)
        } else {
            alert("An error occured")
        }
    }, [input])
    const [openItems, setOpenItems] = useState<any>({});

    const toggleItem = (index: any) => {
        setOpenItems((prev: any) => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const faqData = [
        {
            category: "Ceramic Coating FAQs",
            questions: [
                {
                    question: "How long does ceramic coating last?",
                    answer: [
                        "Ceramic coatings form a strong, long-term chemical bond with your vehicle's paintwork, offering years of protection — not weeks or months. However, the actual lifespan of the coating depends on environmental exposure and how well the vehicle is maintained.",
                        "Our coatings offer excellent chemical resistance and are not easily broken down by standard cleaning products, unlike many waxes or sealants on the market. With proper care, such as regular hand washing and avoiding abrasive brushes or automatic car washes, your coating can maintain its performance and appearance for the full duration of its rated warranty.",
                        "Neglect — including infrequent washing, use of abrasive tools, or harsh cleaning methods — can reduce the coating's effectiveness and shorten its lifespan. We recommend following our care guidelines to ensure you get the most out of your investment."
                    ]
                },
                {
                    question: "Does ceramic coating prevent scratches?",
                    answer: "Ceramic coating helps resist light scratches and swirl marks, but it won't prevent deep impacts. For physical protection, we recommend pairing with Paint Protection Film."
                },
                {
                    question: "Can ceramic coating be applied over PPF?",
                    answer: "Absolutely. In fact, we highly recommend applying ceramic coating over PPF for added slickness, gloss, and stain resistance.",
                    hasContactButton: true,
                    buttonText: "Contact us for a quote"
                },
                {
                    question: "Do I still need to wash my car?",
                    answer: "Yes — but less often. Dirt and grime don't stick easily to coated surfaces, and a gentle hand wash is usually enough to restore shine. However, we still recommend hand washing the car frequently to ensure coat effectiveness."
                }
            ]
        },
    ];

    let questionIndex = 0;

    return (
        <section id="packages" className="bg-black border-gray-900 border-t-1">
            {/* Hero Section */}
            <section className="relative pt-24 pb-10 bg-black">
                <div className="container mx-auto px-6">
                    <div className="">
                        <div className='flex flex-col justify-center items-center gap-4'>
                            <h2 className="text-4xl sm:text-7xl font-bold   text-white">Ceramic Coating in Sydney</h2>
                            {/* <p className="text-xl text-gray-300">At Avero, your vehicle is in expert hands. Our ceramic coating technicians are trained by leaders in automotive surface protection, ensuring consistent, high-standard application on every job. Using high-grade ceramic products and professional techniques, we apply the coating in a clean, controlled environment — allowing the formula to bond correctly with your paintwork or PPF. The result: a durable, ultra-slick finish that resists the elements and enhances visual depth.</p> */}
                            {/* <p className="text-xl text-gray-300">Ceramic coating is a liquid polymer that chemically bonds with your vehicle's paint, forming a transparent, long-lasting layer of protection. Once cured, it acts as a barrier against water, UV rays, oxidation, chemical contaminants, and light surface abrasions. Unlike wax, which wears off quickly, a professional ceramic coating can last for years with proper care — making your vehicle easier to clean and harder to damage.</p>
                            <p className="text-xl text-gray-300">At Avero, we use only premium-grade coatings compatible with both painted surfaces and Paint Protection Film. Whether your vehicle has raw paintwork or is already wrapped in PPF, we apply the right formulation to deliver a flawless, slick finish. Our coatings enhance gloss levels, colour richness, and surface slickness — creating a hydrophobic, stain-resistant barrier that beads water and repels dirt with ease.</p>
                            <p className="text-xl text-gray-300">Ceramic coating doesn't just keep your car looking cleaner — it locks in the condition of your vehicle's finish, helping prevent oxidation, fading, and dullness over time. By protecting against environmental damage and reducing the frequency of washes or detailing, ceramic coating helps your car retain a well-kept appearance for longer. This makes it easier to maintain resale value — without the need for repeated polishing or repainting down the track.</p> */}
                        </div>
                    </div>
                </div>
            </section>

            <div className="flex flex-col text-white gap-1 justify-center gap-10 py-16 px-4 items-center">
                <div
                    className="container mx-auto px-6 ">
                    <h2 className="text-4xl font-bold  mb-4 text-white">Ceramic Coating Service Packages</h2>
                    <p className=" text-gray-300 mb-12 text-lg">Choose the perfect package for your vehicle</p>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-black p-8 rounded-2xl border border-gray-800 hover:border-white/50 transition-all duration-300  flex flex-col justify-between">
                            <div>
                                <div className=" mb-6">
                                    <h3 className="text-2xl font-bold mb-2 text-white">Exterior Ceramic Protection</h3>
                                    <div className="text-3xl font-bold text-white mb-2">$850</div>
                                    <p className="text-gray-400 mb-2">Perfect for newly purchased vehicles or paintwork in excellent condition, this package includes a high-quality ceramic coating applied to all painted surfaces for long-lasting shine and protection.</p>
                                </div>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                        <span className="text-gray-300">Full exterior wash</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                        <span className="text-gray-300">Paint decontamination (iron fallout removal + clay bar treatment)</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                        <span className="text-gray-300">Gloss-enhancing machine polish</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                        <span className="text-gray-300">Ceramic coating applied to all painted surfaces</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                        <span className="text-gray-300">Wheel face detailing</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                        <span className="text-gray-300">Long-lasting tyre dressing</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-white/10 to-transparent p-8 rounded-2xl border-2 border-white relative group">
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-1 rounded-full text-sm font-semibold">
                                POPULAR
                            </div>
                            <div className=" mb-6">
                                <h3 className="text-2xl font-bold mb-2 text-white">Endurance Package</h3>
                                <div className="text-3xl font-bold text-white mb-2">$1000</div>
                                <p className="text-gray-400 mb-2">Ideal for those wanting increased longevity and surface resilience for their new car, this package includes a more advanced ceramic formula for enhanced durability and environmental resistance.</p>
                            </div>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-gray-300">Full exterior wash</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-gray-300">Paint decontamination (iron fallout removal + clay bar treatment)</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-gray-300">Gloss-enhancing machine polish</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-gray-300">Advanced ceramic coating using graphene-enhanced or SiC technology</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-gray-300">Wheel face detailing</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-gray-300">Long-lasting tyre dressing</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-black p-8 rounded-2xl border border-gray-800 hover:border-white/50 transition-all duration-300 group">
                            <div className=" mb-6">
                                <h3 className="text-2xl font-bold mb-2 text-white">Elite Package</h3>
                                <div className="text-3xl font-bold text-white mb-2">$1200</div>
                                <p className="text-gray-400 mb-2">
                                    Our most comprehensive ceramic protection package, covering both the exterior and high-contact interior surfaces for all-around peace of mind.</p>
                            </div>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-gray-300">Full exterior wash</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-gray-300">Paint decontamination (iron fallout removal + clay bar treatment)</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-gray-300">Gloss-enhancing machine polish</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-gray-300">Advanced ceramic coating</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-gray-300">Interior protection applied to leather, vinyl, plastics, and fabrics</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-gray-300">Headlights and exterior plastics ceramic coated</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-gray-300">Wheel face detailing</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-gray-300">Long-lasting tyre dressing</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-10/12 space-y-2">
                    <p className="font-bold text-3xl mb-6">Why Choose Ceramic Coating.</p>
                    <p className="font-bold">1. Long-Lasting Protection</p>
                    <p>Forms a semi-permanent bond with your paint or PPF, protecting it for years — not weeks or months.</p>
                    <p className="font-bold">2. Hydrophobic Effect</p>
                    <p>Water, dirt, and grime slide right off the coated surface, reducing water spots and streaks.</p>
                    <p className="font-bold">3. UV and Chemical Resistance</p>
                    <p>Shields against sun damage, oxidation, bird droppings, tree sap, and harsh detergents.</p>
                    <p className="font-bold">4. Easier Maintenance</p>
                    <p>Less washing. No waxing. Just rinse and go.</p>
                    <p className="font-bold">5. Improved Appearance</p>
                    <p>Enhances colour depth, clarity, and overall gloss — keeping your vehicle looking like new.</p>
                    <p className="font-bold">6. Synergy with PPF</p>
                    <p>When applied over Paint Protection Film, ceramic coating adds an extra layer of slickness, stain resistance, and visual enhancement — making the protected surface even easier to clean and maintain.</p>
                </div>

                <div className="w-10/12 space-y-2">
                    <p className="font-bold text-3xl mb-6 text-white">The Avero Ceramic Coating Process.</p>
                    <p className="font-bold">1. Surface Preparation</p>
                    <p>Your vehicle is thoroughly decontaminated and inspected. If needed, we coordinate paint correction with trusted specialists to remove swirl marks and imperfections, ensuring the coating bonds perfectly to a clean, smooth surface.</p>
                    <p className="font-bold">2. Coating Application</p>
                    <p>We apply the ceramic coating evenly by hand in a controlled environment, ensuring every panel receives uniform coverage. The product is left to cure and harden fully before vehicle delivery.</p>
                    <p className="font-bold">3. Final Inspection & Handover</p>
                    <p>We perform a full visual inspection to ensure streak-free coverage and optimal results. You'll receive care instructions and warranty information to help you maintain the coating for its full lifespan.</p>
                </div>

                <div className="w-10/12 space-y-2">
                    <h1 className="text-3xl font-bold mb-8 text-white">Avero Ceramic Coating FAQs</h1>

                    {faqData.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="mb-8">
                            <h2 className="text-2xl font-bold mb-6 text-white">{section.category}</h2>

                            <div className="space-y-4">
                                {section.questions.map((item, itemIndex) => {
                                    const currentIndex = questionIndex++;
                                    const isOpen: any = openItems[currentIndex];

                                    return (
                                        <div
                                            key={itemIndex}
                                            className="border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200"
                                        >
                                            <button
                                                onClick={() => toggleItem(currentIndex)}
                                                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:bg-gray-100"
                                            >
                                                <div className="flex items-center justify-between">
                                                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                                                        {item.question}
                                                    </h3>
                                                    <div className="flex-shrink-0">
                                                        {isOpen ? (
                                                            <ChevronUp className="w-5 h-5 text-gray-600" />
                                                        ) : (
                                                            <ChevronDown className="w-5 h-5 text-gray-600" />
                                                        )}
                                                    </div>
                                                </div>
                                            </button>

                                            <div
                                                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                                                    }`}
                                            >
                                                <div className="px-6 py-4 bg-white border-t border-gray-100">
                                                    <div className="text-gray-700 leading-relaxed">
                                                        {Array.isArray(item.answer) ? (
                                                            item.answer.map((paragraph, pIndex) => (
                                                                <p key={pIndex} className={pIndex > 0 ? "mt-4" : ""}>
                                                                    {paragraph}
                                                                </p>
                                                            ))
                                                        ) : (
                                                            <p>{item.answer}</p>
                                                        )}

                                                        {item.hasContactButton && (
                                                            <div className="mt-4">
                                                                <ContactButton text={item.buttonText} />
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
                <section id="location" className="py-20 w-10/12  bg-black">
                    <div className="  w-full grid lg:grid-cols-2 gap-12">
                        {/* Location Details */}
                        <div className=' flex flex-col '>
                            <h3 className="text-2xl font-bold mb-6 text-white">GET A QUOTE</h3>
                            <div className="space-y-4 text-gray-300">
                                <div className='flex flex-col sm:flex-row  gap-4'>
                                    <input value={input.firstName} onChange={(e) => handleChange(e.target.value, "firstName")} placeholder="First Name" className="bg-gray-900 text-white w-full p-3 rounded-lg" />
                                    <input value={input.lastName} onChange={(e) => handleChange(e.target.value, "lastName")} placeholder="Last Name" className="bg-gray-900 text-white w-full p-3 rounded-lg" />
                                </div>
                                <div className='flex flex-col sm:flex-row gap-4'>
                                    <input value={input.email} onChange={(e) => handleChange(e.target.value, "email")} placeholder="Email" className="bg-gray-900 text-white w-full p-3 rounded-lg" />
                                    <input value={input.phone} onChange={(e) => handleChange(e.target.value, "phone")} placeholder="Phone No." className="bg-gray-900 text-white w-full p-3 rounded-lg" />
                                </div>
                                <div className='flex flex-col sm:flex-row gap-4'>
                                    <input value={input.make} onChange={(e) => handleChange(e.target.value, "make")} placeholder="Vehicle Make" className="bg-gray-900 text-white w-full p-3 rounded-lg" />
                                    <input value={input.model} onChange={(e) => handleChange(e.target.value, "model")} placeholder="Vehicle Model" className="bg-gray-900 text-white w-full p-3 rounded-lg" />
                                </div>
                                <textarea value={input.enquiryDetails} onChange={(e) => handleChange(e.target.value, "enquiryDetails")} placeholder="Enquiry Details" className="min-h-[150px] bg-gray-900 text-white w-full p-3 rounded-lg" />

                                <select value={input.service} onChange={(e) => handleChange(e.target.value, "service")} className='bg-gray-900 text-white w-full p-3 rounded-lg'>
                                    <option disabled selected hidden value="" >Select A Service</option>
                                    <option value="ppf">Paint Protection Film (PPF) </option>
                                    <option value="ceramic">Ceramic Coating</option>
                                </select>

                                <div className={` bg-black p-3 rounded-lg  border-2 border-gray-900 ${isValidForm() ? "cursor-pointer" : "cursor-not-allowed"}`} onClick={() => {
                                    if (isValidForm()) {
                                        handleSubmit()
                                    }
                                }}>
                                    <p className="font-bold text-white">Submit</p>
                                    {loading && <p>Loading</p>}
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}

                        <div style={{ minHeight: 400, width: "100%", borderRadius: 10 }} ref={mapContainerRef} />
                    </div>
                </section>
            </div>
        </section >
    )
}
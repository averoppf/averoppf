import { Building, Loader, Mail, Phone } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react"
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
import '../../App.css'
// import { Helmet } from "react-helmet";

interface Form {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    make: string;
    model: string;
    enquiryDetails: string;
    service: string;
    year: string;
}

const empty: Form = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    make: '',
    model: '',
    enquiryDetails: '',
    service: '',
    year: "",
}
export function ContactPage() {
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
    const [submitFormSuccess, setSubmitFormSuccess] = useState(false)

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
        if (input.year.trim() == "") {
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
        data.append("year", input.year)
        const res = await fetch("https://formspree.io/f/xanjellj", {
            method: "POST",
            headers: {
                'Accept': 'application/json'
            },
            body: data
        })
        setLoading(false)
        if (res.ok) {
            // alert("Successful submission")
            setSubmitFormSuccess(true);
            setInput(empty)
        } else {
            alert("An error occured")
        }
    }, [input])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            {/* <Helmet>
                <title>Avero | Quality PPF & Ceramic Coating in Sydney</title>
                <link rel='canonical' href={ "https://www.averoppf.com.au" } />
                <meta name="description" content={"Protect your car with Sydney’s car care experts in PPF & ceramic coating. Get unbeatable shine, increased vehicle value & long-lasting protection. Trusted by locals across NSW."} />
            </Helmet> */}
            <section className="relative pt-26 pb-10 border-b-1 border-gray-900 pb-16 bg-black">
                <div className="container mx-auto px-6">
                    <div className="text-center">
                        <div className='flex flex-col justify-center items-center gap-4'>
                            <h2 className="text-4xl sm:text-7xl font-bold text-center  text-white font-michroma">Contact Us</h2>
                            <div className="flex items-center gap-3 text-white">
                                <Building />
                                <p>F1/32-36 Box Road Caringbah NSW 2229</p>
                            </div>
                            <div className="space-y-6 flex flex-col items-center justify-center  text-gray-300">
                                <div className="flex flex-col sm:flex-row items-center gap-5">
                                    <div className="flex items-center gap-3">
                                        <Phone />
                                        <p>+61 415 081 546</p>
                                    </div>
                                </div>
                                <div>
                                    <a href="mailto:info@averoppf.com" className="flex items-center gap-3">
                                        <Mail />
                                        <p>info@averoppf.com.au</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="location" className="py-20 bg-black flex justify-center">
                <div className="  w-10/12 grid lg:grid-cols-2 gap-12">
                    {/* Location Details */}
                    <div className=' flex flex-col '>
                        <h3 className="text-4xl md:text-6xl font-bold mb-6 text-white font-michroma">Get A Quote</h3>
                        {
                            !submitFormSuccess ? (
                            <div className="space-y-4 text-gray-300">
                                <div className='flex flex-col md:flex-row gap-4'>
                                    <input required value={input.firstName} onChange={(e) => handleChange(e.target.value, "firstName")} placeholder="First Name *" className="bg-gray-900 text-white w-full p-3 rounded-lg" />
                                    <input required value={input.lastName} onChange={(e) => handleChange(e.target.value, "lastName")} placeholder="Last Name *" className="bg-gray-900 text-white w-full p-3 rounded-lg" />
                                </div>
                                <div className='flex flex-col md:flex-row gap-4'>
                                    <input type='email' required value={input.email} onChange={(e) => handleChange(e.target.value, "email")} placeholder="Email *" className="bg-gray-900 text-white w-full p-3 rounded-lg" />
                                    <input type="number" required value={input.phone} onChange={(e) => handleChange(e.target.value, "phone")} placeholder="Phone No. *" className="bg-gray-900 text-white w-full p-3 rounded-lg" />
                                </div>
                                <div className='flex flex-col md:flex-row gap-4'>
                                    <input required value={input.make} onChange={(e) => handleChange(e.target.value, "make")} placeholder="Vehicle Make *" className="bg-gray-900 text-white w-full p-3 rounded-lg" />
                                    <input required value={input.model} onChange={(e) => handleChange(e.target.value, "model")} placeholder="Vehicle Model *" className="bg-gray-900 text-white w-full p-3 rounded-lg" />
                                </div>
                                <div className='flex flex-col md:flex-row gap-4'>
                                    <input required value={input.year} onChange={(e) => handleChange(e.target.value, "year")} placeholder="Vehicle Year *" className="bg-gray-900 text-white w-full p-3 rounded-lg" />
                                </div>
                                <textarea value={input.enquiryDetails} onChange={(e) => handleChange(e.target.value, "enquiryDetails")} placeholder="Enquiry Details" className="min-h-[150px] bg-gray-900 text-white w-full p-3 rounded-lg" />

                                {/* Select */}
                                <select
                                    required
                                    value={input.service}
                                    onChange={e => handleChange(e.target.value, "service")}
                                    className="bg-gray-900 text-white w-full p-3 rounded-lg"
                                    >
                                    <option value="" disabled hidden>
                                        Select A Service *
                                    </option>
                                    <option value="ppf">Paint Protection Film (PPF)</option>
                                    <option value="ceramic">Ceramic Coating</option>
                                    <option value="window-tinting">Window Tinting</option>
                                    <option value="colour-wraps">Colour Wrap</option>
                                    <option value="other">Other</option>
                                </select>

                                <div className={` bg-black p-3 rounded-lg text-center border-2 border-gray-900 ${isValidForm() ? "cursor-pointer" : "cursor-not-allowed"}`} onClick={() => {
                                    if (isValidForm()) {
                                        handleSubmit()
                                    }
                                }}>
                                    <p className="font-bold text-white">Submit</p>
                                    {loading && <Loader className='spin' />}
                                </div>
                            </div>
                            ): (
                                <div className="w-full  flex flex-col mt-8">
                                    <h3 className="text-3xl font-bold mb-4 font-michroma text-white text-left">Thank you for your enquiry!</h3>
                                    <p className="text-neutral-300">We will get back to you as soon as possible.</p>
                                </div>
                            )
                        }
                    </div>

                    {/* Map Placeholder */}

                    <div style={{ minHeight: 400, width: "100%", borderRadius: 10 }} ref={mapContainerRef} />
                </div>
            </section>
        </div>
    )
}
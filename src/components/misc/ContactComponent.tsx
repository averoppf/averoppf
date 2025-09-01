import { Building, FacebookIcon, InstagramIcon, Loader, Mail, Phone } from "lucide-react";
import { useCallback, useState } from "react";

interface Form {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    make: string;
    model: string;
    enquiryDetails?: string;
    service: string;
    filmType?: string;
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
    filmType: '',
    year: "",
}

export default function ContactComponent() {

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
      data.append("enquiryDetails", input.enquiryDetails ?? "")
      data.append("service", input.service)
      data.append("filmType", input.filmType ?? "")
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
        //   alert("Successful submission")
        setSubmitFormSuccess(true)
        setInput(empty)
      } else {
          alert("An error occured")
      }
  }, [input])
  //

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        <div className=' flex flex-col items-start md:items-center gap-10  p-4 rounded-xl'>
            <div>
                <h3 className="text-4xl md:text-6xl font-bold mb-6 text-white font-michroma">Contact Us</h3>
                <div className="space-y-4 text-gray-300 ">
                    <div className="flex items-start gap-3">
                        <Phone className="w-6 h-6 text-white mt-1" />
                        <div>
                            <p className="font-semibold">+61 415 081 546</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Mail className="w-6 h-6 text-white" />
                        <div>
                            <p className="font-semibold">info@averoppf.com.au</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Building className="w-6 h-6 text-white" />
                        <div>
                            <p className="font-semibold">F1/32-36 Box Road Caringbah NSW 2229</p>
                        </div>
                    </div>

                    <p className='text-2xl font-bold mt-10'>Follow Us</p>
                    <div className="flex items-center gap-5">
                        <a href="https://www.facebook.com/61577135378565" target="_blank" rel="noopener noreferrer">
                            <FacebookIcon color="white" fill="white" />
                        </a>
                        <a href="https://www.instagram.com/averoppf" target="_blank" rel="noopener noreferrer">
                            <InstagramIcon color="white" />
                        </a>
                        <a href="https://www.tiktok.com/@averoppf" target="_blank" rel="noopener noreferrer">
                            <img src="/tiktok.png" className='h-9' />
                        </a>
                        <a
                            href="tel:+61415081546"
                        >
                            <Phone style={{width:'18px', height: '18px', objectFit: 'contain'}} color="white" className="cursor-pointer" />
                        </a>
                        <a href="mailto:info@averoppf.com.au">
                            <Mail style={{width:'18px', height: '18px', objectFit: 'contain'}} color="white" className="cursor-pointer" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
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
                </select>

                <select
                    value={input.filmType}
                    onChange={e => handleChange(e.target.value, "filmType")}
                    className="bg-gray-900 text-white w-full p-3 rounded-lg"
                    >
                    <option value="" disabled hidden>
                        Select Film Type
                    </option>
                    <option value="smooth-matte">Smooth Matte</option>
                    <option value="high-gloss">Clear High Gloss</option>
                    <option value="satin">Satin</option>
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
    </div>
  );
}
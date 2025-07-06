import { ChevronDown, ChevronUp, FacebookIcon, Instagram, InstagramIcon, Mail, Menu, Phone, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FacebookFilled, FacebookOutlined, InstagramOutlined, TikTokOutlined } from "@ant-design/icons";

export function Header() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const pageHeight = document.documentElement.scrollHeight;
      // threshold = 5% of total page height
      const threshold = pageHeight * 0.02;
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // init:
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        showDropdown &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-colors duration-300 ease-in-out
        ${isScrolled ? "bg-black" : "bg-transparent"}
         text-white p-2
      `}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src="/avero.png" className="h-10" />
          </div>

          {/* Mobile menu toggle */}
          <div className="flex sm:hidden">
            <Menu
              size={24}
              className="cursor-pointer"
              onClick={() => setShowMenu(true)}
            />
          </div>

          {/* Sliding mobile panel */}
          {showMenu && (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-90 backdrop-blur-sm">
              <div className="flex justify-end p-6">
                <X
                  size={30}
                  className="cursor-pointer text-white"
                  onClick={() => setShowMenu(false)}
                />
              </div>
              <div className="flex flex-col gap-5 px-6">
                <a href="/" className="text-white text-2xl uppercase tracking-[0.2rem] font-semibold">Home</a>
                <a href="/about" className="text-white text-2xl uppercase tracking-[0.2rem] font-semibold">About Us</a>
                <a href="/services/ppf" className="text-white text-2xl uppercase tracking-[0.2rem] font-semibold">PPF</a>
                <a href="/services/ceramic" className="text-white text-2xl uppercase tracking-[0.2rem] font-semibold">Ceramic Coating</a>
                <a href="/contact" className="text-white text-2xl uppercase tracking-[0.2rem] font-semibold">Contact</a>
              </div>

              <div className="gap-2 flex items-center mt-10 p-6">
                <a
                    href="tel:+61415081546"
                >
                    <Phone style={{width:'24px', height: '24px', objectFit: 'contain'}} color="white" className="cursor-pointer" />
                </a>
                <a href="mailto:info@averoppf.com">
                    <Mail style={{width:'24px', height: '24px', objectFit: 'contain'}} color="white" className="cursor-pointer" />
                </a>                
              </div>
            </div>
          )}

          {/* Desktop menu */}
          <div className="hidden sm:flex space-x-8 items-center justify-between">
            <a href="/" className="hover:text-slate-400 transition-colors uppercase tracking-[0.12rem] font-semibold">Home</a>
            <a href="/about" className="hover:text-slate-400 transition-colors uppercase tracking-[0.12rem] font-semibold">About Us</a>

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setShowDropdown((v) => !v)}
                className="flex items-center gap-1 hover:text-slate-400 transition-colors"
              >
                <span className="hover:text-slate-400 transition-colors uppercase tracking-[0.12rem] font-semibold">Services</span>
                {showDropdown ? <ChevronUp /> : <ChevronDown />}
              </button>
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-60 rounded border border-gray-700 bg-black p-3 flex flex-col gap-2">
                  <a href="/services/ppf" className="hover:text-slate-400 transition-colors tracking-[0.12rem] text-slate-300">
                    Paint Protection Film (PPF)
                  </a>
                  <a href="/services/ceramic" className="hover:text-slate-400 transition-colors tracking-[0.12rem] text-slate-300">
                    Ceramic Coating
                  </a>
                </div>
              )}
            </div>

            <a href="/contact" className="hover:text-slate-400 transition-colors uppercase tracking-[0.12rem] font-semibold border-2 p-3">
              Contact
            </a>

            <div className="ml-6 gap-2 flex items-center">
              <a
                    href="tel:+61415081546"
                >
                    <Phone style={{width:'18px', height: '18px', objectFit: 'contain'}} color="white" className="cursor-pointer" />
                </a>
              <a href="mailto:info@averoppf.com">
                  <Mail style={{width:'18px', height: '18px', objectFit: 'contain'}} color="white" className="cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

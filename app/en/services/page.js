"use client";
import Link from 'next/link';
import { FaArrowRight, FaExternalLinkAlt, FaStar } from 'react-icons/fa';
import { Navbar, HeroSlider } from '../../components/Header';
import Footer from '../../components/Footer';
import { SERVICES_DATA } from './servicesData';

export default function ServicesPageEN() {
    const ServiceCard = ({ item }) => (
        <div
            dir="ltr"
            className="relative bg-white rounded-[2.5rem] p-8 shadow-xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-500 border-2 border-transparent hover:border-[#D4AF37] group flex flex-col items-start text-left w-full"
        >
            {item.isFeatured && (
                <div className="absolute top-5 left-5 text-[#D4AF37] animate-pulse">
                    <FaStar size={20} />
                </div>
            )}

            {/* آئیکن کی الائنمنٹ */}
            <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center text-4xl text-[#0b314d] mb-6 transform group-hover:-translate-y-2 group-hover:bg-[#0b314d] group-hover:text-[#D4AF37] transition-all duration-500 shadow-inner">
                {item.icon}
            </div>

            {/* ہیڈنگ بائیں طرف */}
            <h3 className="text-2xl font-bold text-[#0b314d] mb-4 group-hover:text-[#D4AF37] transition-colors text-left w-full">
                {item.title}
            </h3>

            {/* پیراگراف بائیں طرف - یہاں کوئی سمجھوتہ نہیں */}
            <p className="text-gray-600 mb-8 flex-grow leading-[1.7] text-base text-left w-full">
                {item.desc}
            </p>

            <div className="w-full space-y-4">
                <Link
                    href={item.link || '#'}
                    className="w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 text-base bg-[#0b314d] text-white hover:bg-[#D4AF37] hover:text-[#0b314d] shadow-md"
                >
                    Learn More {item.isFeatured ? <FaExternalLinkAlt size={14} /> : <FaArrowRight size={14} />}
                </Link>

                {/* سوشل آئیکنز اگر ہوں تو */}
                <div className="flex gap-4 justify-start py-1">
                    {item.socials?.map((soc, idx) => (
                        <a
                            key={idx}
                            href={soc.url}
                            target="_blank"
                            rel="noreferrer"
                            className={`${soc.color} hover:scale-125 transition-transform duration-300 text-xl`}
                        >
                            {soc.icon}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <main className="min-h-screen bg-[#fcfdfe] overflow-x-hidden font-sans" dir="ltr">
            <Navbar />
            <HeroSlider />

            {/* ہیرو سیکشن */}
            <section className="bg-[#0b314d] py-16 md:py-24 text-center relative overflow-hidden border-b-8 border-[#D4AF37]">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]" />
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-[#D4AF37] mb-4 text-center">
                        Services & Programs
                    </h1>
                    <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
                    <p className="text-lg md:text-xl font-light text-white/90 max-w-3xl mx-auto text-center">
                        Faith-based media, educational projects, pilgrimage support and cultural services delivered with heart and experience.
                    </p>
                </div>
            </section>

            {/* کارڈز گریڈ */}
            <div className="max-w-7xl mx-auto px-4 md:px-6 -mt-12 relative z-20 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES_DATA.map((service, i) => (
                        <ServiceCard key={i} item={service} />
                    ))}
                </div>

                {/* رابطہ سیکشن */}
                <div className="mt-20 bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl border border-gray-100 text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#0b314d]">
                            Join the mission of meaningful service
                        </h2>
                        <p className="text-gray-500 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
                            Share your ideas, inquire about collaboration or request design and communication support for your next project.
                        </p>
                        <Link
                            href="/en/contact"
                            className="inline-flex items-center justify-center bg-[#25D366] text-white px-10 py-3.5 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-lg"
                        >
                            Contact Us Now
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
"use client";
import { FaWhatsapp, FaPaperPlane, FaShareAlt, FaFacebookF, FaTelegramPlane, FaEnvelope, FaTiktok, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Navbar, HeroSlider } from '../../components/Header';
import Footer from '../../components/Footer';
import { contactMethods } from './contactData';

export default function ContactPageEN() {
  return (
    <main className="min-h-screen bg-[#fcfdfe] overflow-x-hidden font-sans" dir="ltr">
      <Navbar />
      <HeroSlider />

      <section className="bg-[#0b314d] py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#0b314d] to-transparent" />
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#D4AF37] mb-4">Contact</h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto rounded-full mb-6"></div>
          <p className="text-[#fff7cc] text-xl md:text-2xl font-light tracking-widest opacity-90 max-w-3xl">Reach out for collaboration, design services, pilgrimage support, or media projects.</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-20 relative z-10 -mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {contactMethods.map((method, i) => (
            <a key={i} href={method.link} target="_blank" rel="noreferrer" className="bg-white border-2 border-[#D4AF37] rounded-3xl p-8 shadow-[0_10px_20px_rgba(212,175,55,0.15)] hover:shadow-[0_20px_40px_rgba(212,175,55,0.3)] hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden flex flex-col items-center justify-center text-center">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4AF37] rounded-bl-full opacity-10 group-hover:opacity-20 transition-all duration-500"></div>
              <div className="text-[#0b314d] bg-[#f4f7f9] border border-[#D4AF37]/30 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 group-hover:bg-[#0b314d] group-hover:text-[#D4AF37] transition-all duration-500 shadow-inner">
                {method.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#0b314d] mb-3">{method.title}</h3>
              <p className="text-gray-600 font-sans text-sm md:text-base font-semibold tracking-wide text-center" dir="ltr">{method.info}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-[#0b314d] rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden border-t-8 border-b-8 border-[#D4AF37]">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-10"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-8">Send Us a Message</h2>
            <form action="https://formsubmit.co/shigri51214@gmail.com" method="POST" className="space-y-6 relative z-10">
              <input type="hidden" name="_subject" value="New Message from Website!" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input name="name" type="text" placeholder="Your Name" required className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none transition-all" />
                <input name="email" type="email" placeholder="Your Email" required className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none transition-all" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input name="subject" type="text" placeholder="Subject" required className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none transition-all" />
                <input name="phone" type="tel" placeholder="Phone (Optional)" className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none transition-all" />
              </div>

              <textarea name="message" rows="5" placeholder="Your Message" required className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none transition-all resize-none" />

              <button type="submit" className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-[#0b314d] font-bold py-4 rounded-2xl hover:shadow-[0_10px_20px_rgba(212,175,55,0.4)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 text-xl md:text-2xl">
                <FaPaperPlane className="transform -rotate-45" /> Send Message
              </button>
            </form>
          </div>

          <div className="h-full min-h-[400px] lg:min-h-[600px] bg-white rounded-[3rem] shadow-2xl border-4 border-[#D4AF37] overflow-hidden relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102148.64966675097!2d75.55396593976378!3d35.29828551469145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e463229b0a1d4b%3A0xc34a413d9db2f5da!2sSkardu%2C%20Gilgit-Baltistan%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              className="w-full h-full border-0 absolute inset-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

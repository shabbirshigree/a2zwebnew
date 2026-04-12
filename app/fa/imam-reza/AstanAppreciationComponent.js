"use client";
import { dictionaries } from '../../lib/i18n';

export default function AstanAppreciationComponent() {
  const dict = dictionaries['fa'];
  const astanText = dict.astanAppreciation || {};

  return (
    <div className="relative z-10 container mx-auto px-4 py-12">
      <div className="bg-gradient-to-br from-[#fff9e6] via-white to-[#f8f9fa] border-4 border-[#D4AF37] rounded-[2rem] p-8 md:p-12 shadow-2xl">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className={`text-2xl md:text-4xl font-extrabold text-[#0f4c75] mb-2 font-amiri text-right`}>
            {astanText.title || "تقدیرنامه آستان قدس رضوی"}
          </h2>
          <div className="w-40 h-[3px] bg-gradient-to-l from-[#D4AF37] to-transparent mx-auto mt-4"></div>
        </div>

        {/* Main Content - Image and Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center md:flex-row-reverse">
          
          {/* Image Section */}
          <div className="flex justify-center md:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-[#D4AF37] rounded-[1.5rem] blur-xl opacity-30"></div>
              <img
                src="https://res.cloudinary.com/dtqrziupt/image/upload/q_auto/f_auto/v1776000233/2230104a-ad9d-464d-b2c6-98c3de0c2913.png"
                alt="Astan Quds Razavi Appreciation Certificate"
                className="relative rounded-[1.5rem] shadow-2xl border-4 border-[#D4AF37] w-full max-w-sm object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Details Card Section */}
          <div className="md:order-1">
            <div className="bg-white border-4 border-[#D4AF37] rounded-2xl p-6 md:p-8 shadow-xl">
              {/* Subtitle */}
              <div className="flex items-center gap-3 mb-6 flex-row-reverse">
                <div className="w-1 h-12 bg-[#D4AF37] rounded-full"></div>
                <h3 className="text-xl md:text-2xl font-extrabold text-[#D4AF37] font-amiri text-right">
                  {astanText.subtitle || "تقدیر از جانب آستان قدس رضوی"}
                </h3>
              </div>

              {/* Description */}
              <div className="space-y-4 text-gray-800 leading-relaxed text-right font-amiri">
                <p className="text-sm md:text-base font-semibold text-[#0f4c75] leading-relaxed">
                  {astanText.description || ""}
                </p>
              </div>

              {/* Recognition Badge */}
              <div className="mt-8 pt-6 border-t-2 border-[#D4AF37]/30">
                <div className="flex items-center gap-3 flex-row-reverse justify-start">
                  <div className="w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center">
                    <span className="text-white font-extrabold text-lg">✓</span>
                  </div>
                  <span className="font-extrabold text-[#0f4c75] text-sm md:text-base font-amiri text-left">
                    {astanText.badge || "خادم امام رضا علیه السلام"}
                  </span>
                </div>
              </div>

              {/* Institution Info */}
              <div className="mt-6 bg-[#f8f9fa] border-2 border-[#D4AF37]/20 rounded-lg p-4">
                <p className="text-xs md:text-sm text-gray-600 font-semibold text-left">
                  <strong className="text-[#D4AF37]">{astanText.institutionLabel || "آستان قدس رضوی"}:</strong><br/>
                  {astanText.institutionDescription || "حرم مقدس حضرت امام علی رضا (ع) - مشهد، ایران"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Highlight */}
        <div className="mt-10 pt-8 border-t-4 border-[#D4AF37]/20">
          <div className="bg-[#D4AF37]/10 rounded-xl p-6 border-r-4 border-[#D4AF37]">
            <p className="text-sm md:text-base font-extrabold text-[#0f4c75] leading-relaxed text-right font-amiri">
              {astanText.highlight || "این تقدیرنامه به عنوان اعتراف به تلاش‌های مستمر در ترویج معارف اسلامی و خدمت به معاشرهٔ انسانی است."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

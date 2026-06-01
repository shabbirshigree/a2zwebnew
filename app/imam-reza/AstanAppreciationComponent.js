"use client";
import { useLocale } from '../components/LocaleProvider';
import { dictionaries } from '../lib/i18n';
import CldImage from '../components/CldImage';

export default function AstanAppreciationComponent() {
  const { locale } = useLocale();
  const dict = dictionaries[locale] || dictionaries.ur;
  const astanText = dict.astanAppreciation || {};

  const isRTL = locale === 'ur' || locale === 'fa';

  console.log('AstanAppreciationComponent rendered with locale:', locale, 'dict:', dict, 'astanText:', astanText);

  // Add error boundary
  try {
  return (
    <div className="relative z-10 container mx-auto px-4 py-12">
      <div className="bg-gradient-to-br from-[#fff9e6] via-white to-[#f8f9fa] border-4 border-[#D4AF37] rounded-[2rem] p-8 md:p-12 shadow-2xl">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className={`text-2xl md:text-4xl font-extrabold text-[#0f4c75] mb-2 font-amiri ${isRTL ? 'text-right' : 'text-left'}`}>
            {astanText.title || "تقدیرنامہ آستان قدس رضوی"}
          </h2>
          <div className="w-40 h-[3px] bg-gradient-to-r from-[#D4AF37] to-transparent mx-auto mt-4"></div>
        </div>

        {/* Main Content - Image and Card */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${isRTL ? 'md:flex-row-reverse' : ''}`}>
          
          {/* Image Section */}
          <div className={`flex justify-center ${isRTL ? 'md:order-2' : 'md:order-1'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-[#D4AF37] rounded-[1.5rem] blur-xl opacity-30"></div>
              <CldImage
                src="https://res.cloudinary.com/dtqrziupt/image/upload/v1776068815/d7363b70-ea09-4604-949c-68c6dc2e2672.png"
                alt="Astan Quds Razavi Appreciation Certificate"
                width={400}
                height={550}
                className="relative rounded-[1.5rem] shadow-2xl border-4 border-[#D4AF37] w-full max-w-sm object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Details Card Section */}
          <div className={`${isRTL ? 'md:order-1' : 'md:order-2'}`}>
            <div className="bg-white border-4 border-[#D4AF37] rounded-2xl p-6 md:p-8 shadow-xl">
              {/* Subtitle */}
              <div className={`flex items-center gap-3 mb-6 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                <div className="w-1 h-12 bg-[#D4AF37] rounded-full"></div>
                <h3 className={`text-xl md:text-2xl font-extrabold text-[#D4AF37] font-amiri ${isRTL ? 'text-right' : 'text-left'}`}>
                  {astanText.subtitle || "آستان قدس رضوی کی جانب سے اعزاز"}
                </h3>
              </div>

              {/* Description */}
              <div className={`space-y-4 text-gray-800 leading-relaxed ${isRTL ? 'text-right' : 'text-left'} ${isRTL ? 'font-amiri' : 'text-base'}`}>
                <p className="text-sm md:text-base font-semibold text-[#0f4c75] leading-relaxed">
                  {astanText.description || ""}
                </p>
              </div>

              {/* Recognition Badge */}
              <div className="mt-8 pt-6 border-t-2 border-[#D4AF37]/30">
                <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse justify-start' : 'justify-center'}`}>
                  <div className="w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center">
                    <span className="text-white font-extrabold text-lg">✓</span>
                  </div>
                  <span className={`font-extrabold text-[#0f4c75] text-sm md:text-base font-amiri ${isRTL ? 'text-left' : 'text-left'}`}>
                    {astanText.badge || "خادم امام رضا علیہ السلام"}
                  </span>
                </div>
              </div>

              {/* Institution Info */}
              <div className="mt-6 bg-[#f8f9fa] border-2 border-[#D4AF37]/20 rounded-lg p-4">
                <p className="text-xs md:text-sm text-gray-600 font-semibold text-left">
                  <strong className="text-[#D4AF37]">{astanText.institutionLabel || "آستان قدس رضوی"}:</strong><br/>
                  {astanText.institutionDescription || "شاہ خراسان امام علی رضا علیہ السلام کا مقدس حرم - مشہد، ایران"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Highlight */}
        <div className="mt-10 pt-8 border-t-4 border-[#D4AF37]/20">
          <div className="bg-[#D4AF37]/10 rounded-xl p-6 border-r-4 border-[#D4AF37]">
            <p className={`text-sm md:text-base font-extrabold text-[#0f4c75] leading-relaxed ${isRTL ? 'text-right font-amiri' : 'text-left'}`}>
              {astanText.highlight || "یہ اعزاز اسلامی تعلیمات کے فروغ اور انسانی معاشرے کی ترقی کے لیے مخلص کوششوں کی تسلیم ہے۔"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
  } catch (error) {
    console.error('Error in AstanAppreciationComponent:', error);
    return <div>Error loading Astan component</div>;
  }
}

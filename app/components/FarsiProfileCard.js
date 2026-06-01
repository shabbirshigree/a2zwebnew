import React from 'react';
import { FaEnvelope, FaGlobe } from 'react-icons/fa';
import CldImage from './CldImage';

const FarsiProfileCard = () => {
  return (
    <div style={{
      border: '3px solid #D4AF37', 
      borderRadius: '15px',
      backgroundColor: '#fff', 
      fontFamily: 'Vazirmatn, sans-serif',
      direction: 'rtl',
      boxShadow: '0px 15px 40px rgba(212,175,55,0.2)',
      margin: '20px auto',
      lineHeight: '1.7',
      position: 'relative',
      maxWidth: '600px',
      padding: '20px'
    }}>
      
      {/* Profile Image with Water Ripple Effect */}
      <div style={{ textAlign: 'center', marginBottom: '20px', position: 'relative' }}>
        <div style={{
          width: '140px',
          height: '140px',
          margin: '0 auto',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          
          {/* Ripple 1 */}
          <div className="ripple-wave"></div>
          {/* Ripple 2 */}
          <div className="ripple-wave" style={{ animationDelay: '1s' }}></div>

          {/* Actual Profile Image */}
          <div style={{
            width: '140px',
            height: '140px',
            borderRadius: '50%',
            border: '4px solid #D4AF37',
            overflow: 'hidden',
            boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
            zIndex: '10',
            position: 'relative',
            backgroundColor: '#fff'
          }}>
            <CldImage 
              src="https://res.cloudinary.com/dtqrziupt/image/upload/q_auto/f_auto/v1768281422/555555-pica_Copy_kawpaf.png" 
              alt="Haji Shabbir Ahmed Shigri" 
              width={140}
              height={140}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
        </div>
        
        {/* CSS for Ripples */}
        <style jsx>{`
          .ripple-wave {
            position: absolute;
            width: 140px;
            height: 140px;
            border: 2px solid #D4AF37;
            border-radius: 50%;
            opacity: 0;
            animation: water-ripple 4s cubic-bezier(0, 0.4, 0.6, 1) infinite;
            z-index: 1;
          }

          @keyframes water-ripple {
            0% {
              transform: scale(1);
              opacity: 0.8;
            }
            100% {
              transform: scale(1.4);
              opacity: 0;
            }
          }
        `}</style>
        
        {/* Name and Title */}
        <h1 style={{ 
          fontSize: '24px', 
          color: '#1a472a', 
          margin: '10px 0 2px 0',
          fontWeight: 'bold'
        }}>
          حاجی شبیر احمد شگری
        </h1>
        <p style={{ 
          fontSize: '14px', 
          color: '#666', 
          margin: '0',
          marginBottom: '10px',
          textAlign: 'center'
        }}>
          روزنامه‌نگار ارشد، پژوهشگر، نویسنده و تهیه‌کننده
        </p>
      </div>

      {/* Main Content - Single Line Layout */}
      <div style={{
        background: 'linear-gradient(135deg, #fafafa, #f5f5f5)',
        borderRadius: '10px',
        padding: '12px',
        marginBottom: '12px'
      }}>
        
        {/* Name */}
        <div style={{ marginBottom: '8px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '15px' }}>
            نام:
          </span>
          <span style={{ fontSize: '13px', color: '#333', marginRight: '5px' }}>
            حاجی شبیر احمد شگری
          </span>
        </div>

        {/* Identity */}
        <div style={{ marginBottom: '8px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '15px' }}>
            معرفی:
          </span>
          <span style={{ fontSize: '13px', color: '#333', marginRight: '5px' }}>
            روزنامه‌نگار ارشد، پژوهشگر، نویسنده و تهیه‌کننده
          </span>
        </div>

        {/* Honors */}
        <div style={{ marginBottom: '8px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '15px' }}>
            ۱. افتخارات:
          </span>
          <span style={{ fontSize: '13px', color: '#333', display: 'block', marginTop: '1px' }}>
            خادم آستان قدس رضوی (ع) و حرم حضرت عباس (ع).
          </span>
        </div>

        {/* Education */}
        <div style={{ marginBottom: '8px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '15px' }}>
            ۲. تحصیلات:
          </span>
          <span style={{ fontSize: '13px', color: '#333', marginRight: '5px' }}>
            فارغ‌التحصیل MBA و دارای دیپلم الکترونیک.
          </span>
        </div>

        {/* Positions */}
        <div style={{ marginBottom: '8px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '15px' }}>
            ۳. مسئولیت‌ها:
          </span>
          <span style={{ fontSize: '13px', color: '#333', display: 'block', marginTop: '1px' }}>
            بنیانگذار و رئیس انجمن دوستی ایران و پاکستان.
          </span>
        </div>

        {/* Publications */}
        <div style={{ marginBottom: '8px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '15px' }}>
            ۴. تالیفات:
          </span>
          <span style={{ fontSize: '13px', color: '#333', marginRight: '5px' }}>
            نویسنده بیش از ۷ کتاب علمی و ادبی.
          </span>
        </div>
        
        {/* Editorship */}
        <div style={{ marginBottom: '8px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '15px' }}>
            ۵. سردبیری:
          </span>
          <span style={{ fontSize: '13px', color: '#333', marginRight: '5px' }}>
            سردبیر ایران‌شناسی، نایب سردبیر روزنامه‌های حاوی و پرچار.
          </span>
        </div>

        {/* Column Writing */}
        <div style={{ marginBottom: '8px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '15px' }}>
            ۶. مقالات:
          </span>
          <span style={{ fontSize: '13px', color: '#333', marginRight: '5px' }}>
            انتشار بیش از ۳۰۰ مقاله و ستون در روزنامه‌های معتبر.
          </span>
        </div>
        
        {/* Founder */}
        <div style={{ marginBottom: '8px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '15px' }}>
            ۷. بنیانگذاری:
          </span>
          <span style={{ fontSize: '13px', color: '#333', display: 'block', marginTop: '1px' }}>
            پروژه بصری نورالقرآن و نور پروداکشنز.
          </span>
        </div>
        
        {/* Media Career */}
        <div style={{ marginBottom: '8px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '15px' }}>
            ۸. رسانه:
          </span>
          <span style={{ fontSize: '13px', color: '#333', marginRight: '5px' }}>
            گوینده ارشد رادیو، مجری تلویزیون و تهیه‌کننده.
          </span>
        </div>

        {/* Cultural Services */}
        <div style={{ marginBottom: '8px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '15px' }}>
            ۹. القاب:
          </span>
          <span style={{ fontSize: '13px', color: '#333', marginRight: '5px' }}>
            خادم الثقلین | کارشناس فرهنگی (۲۵ سال خدمت).
          </span>
        </div>

      </div>

      {/* Footer Section */}
      <div style={{
        background: 'linear-gradient(135deg, #1a472a, #2d5a3c)',
        borderRadius: '10px',
        padding: '10px',
        textAlign: 'center'
      }}>
        
        <div style={{ 
          borderTop: '1px solid rgba(255,255,255,0.3)',
          paddingTop: '10px',
          fontSize: '14px'
        }}>
          <div style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <FaEnvelope style={{ color: '#D4AF37', flexShrink: 0 }} size={18} aria-hidden />
            <a 
              href="mailto:shigri51214@gmail.com" 
              style={{ color: '#fff', textDecoration: 'none', cursor: 'pointer' }}
              onMouseOver={(e) => { e.target.style.textDecoration = 'underline'; }}
              onMouseOut={(e) => { e.target.style.textDecoration = 'none'; }}
            >
              shigri51214@gmail.com
            </a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <FaGlobe style={{ color: '#D4AF37', flexShrink: 0 }} size={18} aria-hidden />
            <a 
              href="http://www.shabbirshigri.com" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#fff', textDecoration: 'none', cursor: 'pointer' }}
              onMouseOver={(e) => { e.target.style.textDecoration = 'underline'; }}
              onMouseOut={(e) => { e.target.style.textDecoration = 'none'; }}
            >
              www.shabbirshigri.com
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default FarsiProfileCard;

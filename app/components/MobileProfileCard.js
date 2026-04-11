import React from 'react';

const MobileProfileCard = () => {
  return (
    <div style={{
      border: '3px solid #D4AF37', 
      borderRadius: '15px',
      backgroundColor: '#fff', 
      fontFamily: 'Jameel Noori Nastaleeq, serif',
      direction: 'rtl',
      boxShadow: '0px 15px 40px rgba(212,175,55,0.2)',
      margin: '20px auto',
      lineHeight: '1.7',
      position: 'relative',
      maxWidth: '600px',
      padding: '20px'
    }}>
      
      {/* Profile Image at Top */}
      <div style={{ textAlign: 'center', marginBottom: '20px', position: 'relative' }}>
        {/* Water Ripples Effect - Outside the image circle */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 1
        }}>
          {/* Multiple ripple circles */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            border: '2px solid rgba(212,175,55,0.6)',
            background: 'transparent',
            transform: 'translate(-50%, -50%)',
            animation: 'waterRipple 3s ease-out infinite'
          }}></div>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            border: '2px solid rgba(26,71,42,0.5)',
            background: 'transparent',
            transform: 'translate(-50%, -50%)',
            animation: 'waterRipple 3s ease-out infinite 0.5s'
          }}></div>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            border: '2px solid rgba(212,175,55,0.4)',
            background: 'transparent',
            transform: 'translate(-50%, -50%)',
            animation: 'waterRipple 3s ease-out infinite 1s'
          }}></div>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            border: '2px solid rgba(26,71,42,0.3)',
            background: 'transparent',
            transform: 'translate(-50%, -50%)',
            animation: 'waterRipple 3s ease-out infinite 1.5s'
          }}></div>
        </div>
        
        <div style={{
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          border: '4px solid #D4AF37',
          margin: '0 auto',
          overflow: 'hidden',
          boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
          background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)',
          padding: '3px',
          position: 'relative',
          zIndex: 2
        }}>
          <img 
            src="https://res.cloudinary.com/dtqrziupt/image/upload/q_auto/f_auto/v1768281422/555555-pica_Copy_kawpaf.png" 
            alt="Haji Shabbir Ahmed Shigri" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} 
          />
        </div>
        
        {/* CSS for Water Ripples Animation */}
        <style jsx>{`
          @keyframes waterRipple {
            0% {
              transform: translate(-50%, -50%) scale(0);
              opacity: 0.8;
            }
            50% {
              transform: translate(-50%, -50%) scale(4);
              opacity: 0.3;
            }
            100% {
              transform: translate(-50%, -50%) scale(6);
              opacity: 0;
            }
          }
        `}</style>
        
        {/* Name and Title */}
        <h1 style={{ 
          fontSize: '28px', 
          color: '#1a472a', 
          margin: '15px 0 5px 0',
          fontWeight: 'bold'
        }}>
          حاجی شبیر احمد شگری
        </h1>
        <p style={{ 
          fontSize: '16px', 
          color: '#666', 
          margin: '0',
          marginBottom: '10px',
          textAlign: 'center'
        }}>
          سینئیر صحافی، محقق، مصنف اور پروڈیوسر
        </p>
      </div>

      {/* Main Content - Single Line Layout */}
      <div style={{
        background: 'linear-gradient(135deg, #fafafa, #f5f5f5)',
        borderRadius: '10px',
        padding: '15px',
        marginBottom: '15px'
      }}>
        
        {/* Name */}
        <div style={{ marginBottom: '10px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '16px' }}>
            نام:
          </span>
          <span style={{ fontSize: '14px', color: '#333' }}>
            حاجی شبیر احمد شگری
          </span>
        </div>

        {/* Identity */}
        <div style={{ marginBottom: '10px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '16px' }}>
            تعارف:
          </span>
          <span style={{ fontSize: '14px', color: '#333' }}>
            سینئیر صحافی، محقق، مصنف اور پروڈیوسر
          </span>
        </div>

        {/* Honors */}
        <div style={{ marginBottom: '10px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '16px' }}>
            ۱. اعزازات اور مذہبی خدمات:
          </span>
          <span style={{ fontSize: '14px', color: '#333', display: 'block', marginTop: '2px' }}>
            حرم امام رضا (مشہد مقدس، ایران) اور حرم حضرت عباس (ع) کربلا کے خادم۔
          </span>
          <span style={{ fontSize: '14px', color: '#333', display: 'block', marginTop: '2px' }}>
            پاکستان میں حرم امام رضا کے پہلے باضابطہ نمائندے کے اعزاز کے حامل۔
          </span>
        </div>

        {/* Education */}
        <div style={{ marginBottom: '10px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '16px' }}>
            ۲. تعلیمی قابلیت:
          </span>
          <span style={{ fontSize: '14px', color: '#333' }}>
            گورنمنٹ کالج سکردو سے فارغ التحصیل۔ ایم بی اے (بزنس ایڈمنسٹریشن) اور الیکٹرانکس ڈپلومہ کے حامل۔
          </span>
        </div>

        {/* Positions */}
        <div style={{ marginBottom: '10px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '16px' }}>
            ۳. عہدوں اور انتظامی عہدے:
          </span>
          <span style={{ fontSize: '14px', color: '#333', display: 'block', marginTop: '2px' }}>
            بانی اور صدر: ایران پاکستان دوستی ایسوسی ایشن (ایران کے قونصلگریٹ کی منظور شدہ)۔
          </span>
          <span style={{ fontSize: '14px', color: '#333', display: 'block', marginTop: '2px' }}>
            پبلک ریلیشنز آفیسر (سابق): کلچرل سینٹر آف اسلامی ریپبلک آف ایران - لاہور۔
          </span>
        </div>

        {/* Publications */}
        <div style={{ marginBottom: '10px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '16px' }}>
            ۴. ادبی اور تحقیقی کام:
          </span>
          <span style={{ fontSize: '14px', color: '#333' }}>
            تصانیف: ۷ سے زیادہ علمی اور ادبی کتابوں کے مصنف۔
          </span>
        </div>
        
        {/* Editorship */}
        <div style={{ marginBottom: '10px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '16px' }}>
            ایڈیٹرشپ:
          </span>
          <span style={{ fontSize: '14px', color: '#333' }}>
            قومی اور بین الاقوامی سائنسی جرائد کے ایڈیٹر؛ ہاوی، اکھٹ (پنجابی) اور پرچار اخبارات کے ڈپٹی ایڈیٹر۔
          </span>
        </div>

        {/* Column Writing */}
        <div style={{ marginBottom: '10px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '16px' }}>
            کالم نگاری:
          </span>
          <span style={{ fontSize: '14px', color: '#333' }}>
            نوائے وقت، پاکستان اور مشرق اخبارات میں ۳۰۰ سے زیادہ مضامین، کالمز اور سفرنامے شائع۔
          </span>
        </div>
        
        {/* Founder */}
        <div style={{ marginBottom: '10px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '16px' }}>
            ۵. بنیاد اور منصوبے:
          </span>
          <span style={{ fontSize: '14px', color: '#333', display: 'block', marginTop: '2px' }}>
            نور القرآن ویژوال پروجیکٹ کے بانی (پہلا ویژوال قرآن پروجیکٹ)۔
          </span>
          <span style={{ fontSize: '14px', color: '#333', display: 'block', marginTop: '2px' }}>
            سی ای او نور پروڈکشنز۔ پاک-ایران زراعت اور سیاحتی کے بانی۔
          </span>
        </div>
        
        {/* Media Career */}
        <div style={{ marginBottom: '10px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '16px' }}>
            ۶. میڈیا کیریئر:
          </span>
          <span style={{ fontSize: '14px', color: '#333' }}>
            سینئر ریڈیو اناؤنسر، ٹیلی ویژن ہوسٹ اور پروڈیوسر۔
          </span>
        </div>

        {/* Cultural Services */}
        <div style={{ marginBottom: '10px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '16px' }}>
            ۷. ثقافتی اور سفارتی خدمات:
          </span>
          <span style={{ fontSize: '14px', color: '#333' }}>
            کلچرل افیسر: کلچرل سینٹر آف ایران (لاہور) میں ۲۵ سال کی سائنسی اور ثقافتی خدمات؛ ثقافتی سفارتی معاملات کا ماہر۔
          </span>
        </div>

        {/* Awards */}
        <div style={{ marginBottom: '10px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '16px' }}>
            ۸. انعامات اور اعزازات:
          </span>
          <span style={{ fontSize: '14px', color: '#333' }}>
            حرم امام رضا سے "سرٹیفکیٹ آف اپریسی ایشن" وصول کرنے والے۔ آواز غازی ایوارڈ، گولڈ میڈل اور ۵۰ سے زیادہ قومی اور بین الاقوامی انعامات کے فاتح۔
          </span>
        </div>
        
        {/* Titles */}
        <div style={{ marginBottom: '10px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '16px' }}>
            ۹. القاب:
          </span>
          <span style={{ fontSize: '14px', color: '#333' }}>
            خادم الثقلین | کلچرل ایکسپرٹ
          </span>
        </div>

      </div>

      {/* Footer Section */}
      <div style={{
        background: 'linear-gradient(135deg, #1a472a, #2d5a3c)',
        borderRadius: '10px',
        padding: '15px',
        textAlign: 'center'
      }}>
        
        <div style={{ 
          borderTop: '1px solid rgba(255,255,255,0.3)',
          paddingTop: '10px',
          fontSize: '14px'
        }}>
          <div style={{ marginBottom: '5px' }}>
            <span style={{ color: '#D4AF37', marginRight: '5px' }}>Image size fix ki gayi hai</span>
            <a 
              href="mailto:shigri51214@gmail.com" 
              style={{ color: '#fff', textDecoration: 'none', cursor: 'pointer' }}
              onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
              onMouseOut={(e) => e.target.style.textDecoration = 'none'}
            >
              ای میل: shigri51214@gmail.com
            </a>
          </div>
          <div>
            <span style={{ color: '#D4AF37', marginRight: '5px' }}>Image size fix ki gayi hai</span>
            <a 
              href="http://www.shabbirshigri.com" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#fff', textDecoration: 'none', cursor: 'pointer' }}
              onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
              onMouseOut={(e) => e.target.style.textDecoration = 'none'}
            >
              ویب سائٹ: www.shabbirshigri.com
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default MobileProfileCard;

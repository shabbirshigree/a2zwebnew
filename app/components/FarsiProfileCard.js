import React from 'react';

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
          روزنامه‌نگار ارشد، پژوهشگر، نویسنده و تهیه‌کننده
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
            معرفی:
          </span>
          <span style={{ fontSize: '14px', color: '#333' }}>
            روزنامه‌نگار ارشد، پژوهشگر، نویسنده و تهیه‌کننده
          </span>
        </div>

        {/* Honors */}
        <div style={{ marginBottom: '10px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '16px' }}>
            ۱. افتخارات و خدمات مذهبی:
          </span>
          <span style={{ fontSize: '14px', color: '#333', display: 'block', marginTop: '2px' }}>
            خادم آستان قدس رضوی (مشهد مقدس، ایران) و خادم حرم حضرت عباس (علیه السلام) کربلا.
          </span>
          <span style={{ fontSize: '14px', color: '#333', display: 'block', marginTop: '2px' }}>
            دارنده افتخار اولین نماینده رسمی آستان قدس رضوی در پاکستان.
          </span>
        </div>

        {/* Education */}
        <div style={{ marginBottom: '10px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '16px' }}>
            ۲. سوابق تحصیلی:
          </span>
          <span style={{ fontSize: '14px', color: '#333' }}>
            فارغ‌التحصیل کالج دولتی سکردو. دارای مدرک MBA (مدیریت بازرگانی) و دیپلم الکترونیک.
          </span>
        </div>

        {/* Positions */}
        <div style={{ marginBottom: '10px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '16px' }}>
            ۳. مسئولیت‌ها و عناوین اجرایی:
          </span>
          <span style={{ fontSize: '14px', color: '#333', display: 'block', marginTop: '2px' }}>
            بنیانگذار و رئیس: انجمن دوستی ایران و پاکستان (منصوب شده از سوی کنسولگری ایران).
          </span>
          <span style={{ fontSize: '14px', color: '#333', display: 'block', marginTop: '2px' }}>
            مدیر روابط عمومی (سابق): خانه فرهنگ جمهوری اسلامی ایران - لاهور.
          </span>
        </div>

        {/* Publications */}
        <div style={{ marginBottom: '10px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '16px' }}>
            ۴. فعالیت‌های تالیفی و ادبی:
          </span>
          <span style={{ fontSize: '14px', color: '#333' }}>
            تالیفات: نویسنده بیش از ۷ کتاب علمی و ادبی.
          </span>
        </div>
        
        {/* Editorship */}
        <div style={{ marginBottom: '10px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '16px' }}>
            سردبیری:
          </span>
          <span style={{ fontSize: '14px', color: '#333' }}>
            سردبیر مجلات علمی ملی و بین‌المللی؛ نایب سردبیر روزنامه‌های حاوی، اکٹھ (پنجابی) و پرچار.
          </span>
        </div>

        {/* Column Writing */}
        <div style={{ marginBottom: '10px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '16px' }}>
            مقاله نویسی:
          </span>
          <span style={{ fontSize: '14px', color: '#333' }}>
            انتشار بیش از ۳۰۰ مقاله، ستون و سفرنامه در روزنامه‌های نوای وقت، پاکستان و مشرق.
          </span>
        </div>
        
        {/* Founder */}
        <div style={{ marginBottom: '10px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '16px' }}>
            ۵. بنیانگذاری و پروژه‌ها:
          </span>
          <span style={{ fontSize: '14px', color: '#333', display: 'block', marginTop: '2px' }}>
            بنیانگذار پروژه بصری نورالقرآن (اولین پروژه ویژوال قرآن).
          </span>
          <span style={{ fontSize: '14px', color: '#333', display: 'block', marginTop: '2px' }}>
            مدیرعامل (CEO) نور پروداکشنز. بنیانگذار گردشگری زیارتی و سیاحتی پاک-ایران.
          </span>
        </div>
        
        {/* Media Career */}
        <div style={{ marginBottom: '10px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '16px' }}>
            ۶. سوابق رسانه‌ای:
          </span>
          <span style={{ fontSize: '14px', color: '#333' }}>
            گوینده ارشد رادیو، مجری تلویزیون و تهیه‌کننده.
          </span>
        </div>

        {/* Cultural Services */}
        <div style={{ marginBottom: '10px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '16px' }}>
            ۷. خدمات فرهنگی و دیپلماتیک:
          </span>
          <span style={{ fontSize: '14px', color: '#333' }}>
            کارشناس امور فرهنگی: ۲۵ سال خدمات علمی و فرهنگی در خانه فرهنگ ایران (لاهور) و کارشناس امور دیپلماتیک فرهنگی.
          </span>
        </div>

        {/* Awards */}
        <div style={{ marginBottom: '10px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '16px' }}>
            ۸. جوایز و افتخارات:
          </span>
          <span style={{ fontSize: '14px', color: '#333' }}>
            دریافت‌کننده "تقدیرنامه" از سوی آستان قدس رضوی. برنده جایزه صدای غازی، مدال طلا و بیش از ۵۰ جایزه ملی و بین‌المللی.
          </span>
        </div>
        
        {/* Titles */}
        <div style={{ marginBottom: '10px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '16px' }}>
            ۹. القاب:
          </span>
          <span style={{ fontSize: '14px', color: '#333' }}>
            خادم الثقلین | کارشناس فرهنگی (Cultural Expert)
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
              ایمیل: shigri51214@gmail.com
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
              وب‌سایت: www.shabbirshigri.com
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default FarsiProfileCard;
